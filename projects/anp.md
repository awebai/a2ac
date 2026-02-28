# ANP (Agent Network Protocol)

An open-source protocol aiming to be "the HTTP of the Agentic Web." Uses W3C Decentralized Identifiers (DIDs) for agent identity and builds a three-layer architecture separating identity, negotiation, and application concerns.

## Layers addressed

- **Identity** — DID-based (did:wba method, resolving to HTTPS-hosted DID documents), no central authority needed
- **Communication** — Meta-protocol negotiation layer where agents dynamically agree on how to communicate

## How it works

Three layers:

1. **Identity and encryption** — Agents have decentralized identities using the `did:wba` method. DID documents are hosted over HTTPS and contain public keys and service endpoints.
2. **Meta-protocol negotiation** — Agents negotiate communication protocols dynamically, using natural language descriptions of their capabilities. This is the most distinctive (and most experimental) part of the design.
3. **Application protocol** — Uses semantic web specifications for capability description and discovery.

The "meta-protocol negotiation via natural language" idea is ambitious: rather than requiring all agents to speak the same protocol, agents describe what they can do in natural language and use AI to find common ground.

## What it leaves to other layers

- **Discovery.** No registry or directory — relies on knowing agent endpoints already or discovering them through other means.
- **Coordination.** No persistent relationships, presence, or shared state beyond the communication itself.

The DID infrastructure that ANP depends on is still maturing — not all tooling is production-ready. The natural language negotiation layer is unproven at scale.

## Status

Open-source, active development. Smaller community and fewer enterprise backers than A2A or AGNTCY.

## Links

- [agent-network-protocol.com](https://www.agent-network-protocol.com/)
- [GitHub](https://github.com/agent-network-protocol/AgentNetworkProtocol)
