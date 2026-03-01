---
title: NANDA
parent: Projects
---

# NANDA (Networked AI Agents in Decentralized Architecture)

A discovery and federation framework from MIT Media Lab (Ramesh Raskar). Focuses on a specific problem: how do agents find each other across organizational and protocol boundaries? Builds on MCP and A2A to add discovery and identity verification. The NANDA Index is currently hosted at 15 universities and partner institutions.

## Layers addressed

- **Discovery** — NANDA Index (federated name resolution), AgentFacts (capability descriptions as W3C Verifiable Credentials), Registry Quilt (federated registry sync via CRDTs)
- **Identity** — W3C Verifiable Credentials, Know Your Agent (KYA) protocol for third-party attestation

## How it works

NANDA is the discovery and federation layer that sits above messaging protocols. Its core artifacts:

- **NANDA Index** — a global name resolution system where agents register and get discovered.
- **AgentFacts** — JSON-LD documents signed as W3C Verifiable Credentials describing an agent's capabilities, endpoints, reputation, and identity.
- **Registry Quilt** — federates multiple registries using CRDT gossip with sub-60-second convergence.
- **KYA (Know Your Agent)** — a protocol for third-party attestation and reputation.

NANDA explicitly does not define how agents talk to each other once they've found each other. It expects protocols like A2A, AMTP, or aWeb to handle actual messaging. Think of it as DNS for agents, but with cryptographic identity and structured capability descriptions.

## What it leaves to other layers

- **Messaging.** Entirely. NANDA is about finding agents, not talking to them.
- **Coordination.** Entirely. No messaging, presence, locks, or session management.

## Status

Active development. Has a working SDK and adapter. ArXiv papers published. The academic pedigree (MIT Media Lab) gives it credibility. The natural integration point with messaging protocols makes it a potential unifying layer for discovery across the ecosystem.

## Links

- [projectnanda.org](https://projectnanda.org/)
- [MIT Media Lab: NANDA](https://www.media.mit.edu/groups/nanda/overview/)
- [GitHub](https://github.com/projnanda/projnanda)
- SDK: `pip install nanda-adapter`
