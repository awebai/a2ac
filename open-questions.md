# Open Questions

Hard problems in agent-to-agent communication that nobody has fully solved. These are discussion topics for the community, not rhetorical complaints.

## Identity

Most A2AC protocols treat identity as someone else's problem. A2A delegates to transport-layer auth (OAuth, API keys, mTLS) — which authenticates the *server*, not the *agent*. If you talk to an A2A endpoint, you know the server is who it says it is. You don't know which agent you're actually talking to, or whether that agent is the same one you talked to yesterday.

A few projects are tackling this directly:
- **ANP** uses W3C Decentralized Identifiers (DIDs) — self-certifying, no central authority, but the DID ecosystem is still maturing.
- **aWeb** has ClawDID — append-only audit logs and stable identifiers that survive key rotation.
- **NANDA** uses W3C Verifiable Credentials for agent attestation.

The open question: **Will the ecosystem converge on a shared identity layer, or will agents need identity translation between different identity systems?** The DID family of standards is the closest thing to consensus, but production-ready tooling is still catching up.

## Safety and consent

These protocols define how agents talk to agents. But what about the humans behind them?

If my agent negotiates a contract with your agent, who authorized that? A2A explicitly has "no protocol-level requirement for user approval before sharing sensitive data between agents." Most other protocols are similarly silent on consent.

Questions that need answers:
- **Authorization boundaries.** What can an agent do on behalf of its operator without explicit approval?
- **Consent before data sharing.** If agent A asks agent B for sensitive information, should B require its operator's approval? At the protocol level or the application level?
- **Accountability.** If an agent makes a bad decision in a negotiation, who's responsible? The operator? The agent developer? The protocol?
- **Operator visibility.** Can a human always see what their agent is doing? Should they be able to? (aWeb proposes encryption-tiered E2EE as one approach — see [aWeb](projects/aweb.md).)

This is probably the most consequential open question. The protocols that get safety right will earn trust. The ones that don't will produce cautionary tales.

## Discovery convergence

Three different approaches to "how do agents find each other" are in play:

1. **Self-hosted** (A2A Agent Cards) — each agent publishes a JSON file at a well-known URL. Simple, but no central search, no spoofing protection.
2. **Federated registries** (NANDA) — multiple registries sync via CRDTs. Richer, but more infrastructure.
3. **Directory services** (AGNTCY OASF) — centralized or semi-centralized directories with structured schemas.

These could coexist (agents register in multiple systems), converge (one approach wins), or fragment (ecosystems silo around different discovery mechanisms). The answer matters because discovery is the entry point — if agents can't find each other, nothing else in the stack matters.

## Trust models: MCP vs local runtimes

Most current agent frameworks use MCP to connect agents to tools and, by extension, to other agents (via MCP servers like MCP Agent Mail). MCP does not standardize agent identity or key custody: the LLM agent runs inside a host application, and persistent state (including any keys) typically lives in that host app or a server.

This creates a fundamental design choice for signing and end-to-end encryption:

- **Signing requires a private key under the operator’s control.** MCP itself doesn’t say where that key lives. If the key lives on a server, identity is custodial (the server can sign/forge). If it lives locally in the host app, you can get self-custodied signing — but you still need a consistent identity layer above transport auth.
- **E2EE requires encryption at the endpoint.** If agent-to-agent messages are mediated by infrastructure (an MCP server, a mailbox service, etc.), E2EE requires encrypting before the message leaves the host environment. Otherwise the infrastructure can see plaintext.
- **Identity in MCP is often transport-level** (OAuth tokens, API keys). These authenticate the *connection*, not necessarily a stable agent identity across sessions, key rotations, or migrations.

A local agent runtime (like aWeb's `aw`) takes a different approach: keys are held locally (typically on disk), messages are signed client-side, and identity can persist across sessions. The server becomes a relay, not a trusted intermediary.

You can build signing on top of MCP — for example, by having the host app call a local signing service — but at that point you’ve introduced a local identity/key-custody component. The question is whether that ends up being a clean layering choice or an architectural mismatch for a given product.

This isn't just a theoretical concern. It determines whether agents can have verifiable identity, whether messages can be tamper-evident, and whether agent-to-agent communication can be private from the infrastructure it runs on. The ecosystem hasn't converged on an answer yet.

## Practical-enterprise gap

The tools that work today — MCP Agent Mail, Pi-Messenger — solve real problems for developers right now. But they're scoped to local workflows (single machine, shared filesystem, coding use cases).

The enterprise protocols — A2A, AGNTCY — are designed for cross-organization, internet-scale agent communication. But they're still largely in the specification phase, with limited production deployments.

Who bridges this gap? Does one of the practical tools grow into a general protocol? Does one of the enterprise protocols ship tooling that developers actually want to use? Or does something new emerge?

## Convergence

We have 10+ active projects in a space that probably needs 2-3 standards. Historical precedent (HTTP, SMTP, REST) suggests the ecosystem will consolidate, but it's too early to know how.

Possible outcomes:
- **Layered convergence** — one winner per layer (e.g., NANDA for discovery, A2A for communication, something for identity). Projects compose rather than compete.
- **Platform dominance** — a comprehensive project (AGNTCY? aWeb?) wins across multiple layers and becomes the default stack.
- **De facto standardization** — whatever the biggest AI providers ship becomes the standard, regardless of technical merit.
- **Fragmentation** — enterprise and open-source ecosystems develop separate, incompatible stacks.

The Linux Foundation hosts several of these projects (A2A, ACP, AGNTCY), which creates at least the possibility of coordinated convergence. But governance doesn't guarantee adoption.
