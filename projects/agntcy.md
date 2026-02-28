# AGNTCY

Not a single protocol but a full infrastructure stack for what its creators call the "Internet of Agents." Launched by Cisco's Outshift in March 2025, now under the Linux Foundation with 70+ supporting companies. Formative members include Cisco, Dell, Google, Oracle, and Red Hat, with additional backing from LangChain, LlamaIndex, CrewAI, and Weaviate.

## Layers addressed

- **Discovery** — OASF (Open Agent Schema Framework) for describing agents, Agent Directory for lookup
- **Identity** — Cryptographically verifiable agent identity and access control
- **Messaging** — ACP (Agent Connect Protocol) for inter-agent messaging, SLIM (Secure Low-latency Interactive Messaging) for quantum-safe messaging via MLS

Also provides observability SDKs and deployment tooling.

## How it works

Multiple components that address different parts of the stack:

- **OASF** — a standardized way to describe agent capabilities (like OpenAPI for agents)
- **Agent Directory** — a discovery service for finding agents
- **ACP** — the communication protocol between agents
- **SLIM** — encrypted messaging using the MLS (Messaging Layer Security) protocol, with quantum-safe cipher suites

The components are designed to work alongside A2A and MCP, not replace them. AGNTCY positions itself as the infrastructure layer that connects everything else.

## What it leaves to other layers

- **Identity.** Has agent identity components but the identity layer is less mature than the messaging and discovery components.
- **Coordination.** Focuses on messaging and infrastructure rather than persistent agent relationships.

The scope is ambitious — covering discovery, messaging, security, and observability — which means many components are still in specification phase. The overlap between ACP, A2A, and SLIM can be confusing (when do you use which?).

## Status

Active development. Many components are in specification or early implementation phase. Strong backing from networking (Cisco) and AI tooling (LangChain, LlamaIndex) companies. Linux Foundation governance.

## Links

- [agntcy.org](https://agntcy.org/)
- [docs.agntcy.org](https://docs.agntcy.org/)
