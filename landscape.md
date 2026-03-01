---
title: Landscape
nav_order: 2
---

# Agent-to-Agent Communication Landscape

*Last updated: February 2026*

There are a dozen active projects working on how AI agents communicate with each other. They can look like a confusing pile of competing standards, but most of them aren't competing — they're solving different problems. This document maps the territory.

## Five problems

Agent-to-agent communication breaks down into five concerns. Different projects address different subsets.

1. [Discovery](#1-discovery--where-are-the-agents-and-what-can-they-do)
2. [Identity](#2-identity--is-this-agent-who-it-claims-to-be)
3. [Messaging](#3-messaging--how-do-messages-get-from-a-to-b)
4. [Coordination](#4-coordination--how-do-agents-work-together-over-time)
5. [Tool access](#5-tool-access--how-does-an-agent-use-external-capabilities)

### 1. Discovery — "Where are the agents and what can they do?"

Before agents can communicate, they need to find each other and learn what each one offers. This is the equivalent of DNS + service registries for agents.

**Who's working on it:** [NANDA](projects/nanda.md) (federated agent registry with verifiable credentials, out of MIT), [A2A](projects/a2a.md) (Agent Cards — self-hosted JSON descriptors), [AGNTCY](projects/agntcy.md) (OASF — Open Agent Schema Framework).

The approaches differ on a key axis: **centralized vs. federated vs. self-hosted**. A2A's Agent Cards are self-hosted (each agent publishes its own), NANDA federates registries with CRDT gossip, and AGNTCY provides a directory service. None has emerged as the clear winner. See [Open Questions](open-questions.md#discovery-convergence).

### 2. Identity — "Is this agent who it claims to be?"

When agent A receives a message from agent B, how does it verify that B is who it claims to be? Can that identity survive key rotations, server migrations, and organizational changes?

**Who's working on it:** [ANP](projects/anp.md) (W3C Decentralized Identifiers), [aWeb](projects/aweb.md) (ClawDID — self-certifying DIDs with append-only audit logs), [NANDA](projects/nanda.md) (W3C Verifiable Credentials for agent attestation).

Identity is widely acknowledged as the hardest unsolved problem in the space. Most protocols punt on it — [A2A](projects/a2a.md) delegates to transport-layer auth (OAuth, API keys), which means the *server* is authenticated but the *agent* is not. See [Open Questions](open-questions.md#identity).

### 3. Messaging — "How do messages get from A to B?"

Message formats, delivery semantics, streaming, encoding, and exchange patterns.

**Who's working on it:** [A2A](projects/a2a.md) (JSON-RPC over HTTP/SSE, task-oriented), [aWeb](projects/aweb.md) (signed mail and real-time chat via relay server), [AMTP](projects/amtp.md) (federated email-like model with guaranteed delivery), [NLIP](projects/nlip.md) (Ecma-standardized envelope protocol, transport-agnostic), [AGNTCY](projects/agntcy.md) (SLIM — quantum-safe messaging via MLS), [ANP](projects/anp.md) (meta-protocol negotiation layer).

A key distinction is how "synchronous" each protocol really is. Request-response (send a task, wait for the result) is different from interactive chat (both agents present, exchanging messages in real time). Most protocols do the former; few do the latter.

|                 | Request-response | Interactive (real-time) | Async (store-and-forward) | Streaming |
|-----------------|:----------------:|:-----------------------:|:-------------------------:|:---------:|
| **A2A**         |        ✓         |            —            |        ✓ (polling)        | ✓ (SSE)   |
| **aWeb**        |        —         |        ✓ (chat)         |        ✓ (mail)           | ✓ (SSE)   |
| **AMTP**        |        —         |            —            |      ✓ (core design)      |     —     |
| **NLIP**        |        ✓         |            —            |            ✓              | ✓ (WebSocket) |
| **AGNTCY/SLIM** |        ✓         |            —            |            ✓              |     ✓     |

In aWeb, agents run a local client (`aw`) that sends messages to a relay server; the recipient's client picks them up. Mail is async (store-and-forward), chat is synchronous with SSE streaming. aWeb is currently the only protocol where agents can engage in real-time chat sessions with signed messages.

A2A dominates mindshare with 50+ backers under the Linux Foundation. AMTP takes a radically different approach — federated and asynchronous, like email for agents. NLIP is the only one with formal Ecma standardization.

### 4. Coordination — "How do agents work together over time?"

Messaging gets a single message from A to B. Coordination is about ongoing relationships: persistent conversations, presence (who's online?), distributed locks (who's working on what file?), contacts, and shared state.

**Who's working on it:** [aWeb](projects/aweb.md) (messaging, presence, locks, contacts, cryptographic identity), [MCP Agent Mail](projects/mcp-agent-mail.md) (email-like inboxes + file reservations for coding agents), [Pi-Messenger](projects/pi-messenger.md) (file-based coordination with crew roles).

MCP Agent Mail and Pi-Messenger solve real coordination problems for coding agents right now, but they're scoped to local/single-machine workflows. aWeb is a general coordination protocol with network-wide scope within a given server/hosted network — deployed and operational, though with a smaller community than the enterprise-backed projects.

Most of the enterprise protocols (A2A, AGNTCY) explicitly leave coordination to other layers — A2A is stateless between tasks, with no concept of ongoing relationships.

### 5. Tool access — "How does an agent use external capabilities?"

How an agent connects to tools, APIs, and data sources. This is adjacent to agent-to-agent communication but foundational — an agent that can't use tools can't do much.

**Who's working on it:** [MCP](projects/mcp.md) (Model Context Protocol — the dominant standard for LLM-to-tool connections).

MCP is not an agent-to-agent protocol, but it's included here because many A2AC projects build on it or assume it. MCP defines how an agent grabs tools and data; the projects above define how agents talk to each other. That said, not all approaches depend on MCP — [aWeb](projects/aweb.md), for instance, uses local key custody via `aw` for agent identity and message signing.

The choice between MCP-based and local-runtime-based architectures has consequences beyond tool access. MCP does not standardize agent identity or key custody; in many deployments, long-lived secrets live in the host application or a server. A local runtime like `aw` keeps keys locally (typically on disk) and signs/encrypts client-side, making verifiable identity and E2EE a default property of the messaging layer rather than an extra integration. See [Open Questions: Trust models](open-questions.md#trust-models-mcp-vs-local-runtimes) for more on this.

## How the projects map to the layers

| Project                                      | Discovery | Identity | Messaging | Coordination | Tool access |
|----------------------------------------------|:---------:|:--------:|:---------:|:------------:|:-----------:|
| [A2A](projects/a2a.md)                       |     ✓     |    —     |     ✓     |      —       |      —      |
| [ACP/BeeAI](projects/acp-beeai.md)           |     ✓     |    —     |     ✓     |      —       |      —      |
| [AGNTCY](projects/agntcy.md)                 |     ✓     |    ✓     |     ✓     |      —       |      —      |
| [ANP](projects/anp.md)                       |     —     |    ✓     |     ✓     |      —       |      —      |
| [AMTP](projects/amtp.md)                     |     ✓     |    —     |     ✓     |      —       |      —      |
| [NLIP](projects/nlip.md)                     |     —     |    —     |     ✓     |      —       |      —      |
| [NANDA](projects/nanda.md)                   |     ✓     |    ✓     |     —     |      —       |      —      |
| [MCP](projects/mcp.md)                       |     —     |    —     |     —     |      —       |      ✓      |
| [aWeb](projects/aweb.md)                     |     -     |    ✓     |     ✓     |      ✓       |      —      |
| [MCP Agent Mail](projects/mcp-agent-mail.md) |     —     |    —     |     ✓     |      ✓       |      —      |
| [Pi-Messenger](projects/pi-messenger.md)     |     —     |    —     |     ✓     |      ✓       |      —      |

Note: [FIPA-ACL](projects/fipa-acl.md) (1990s–2000s) is the historical ancestor. Most ideas in the current landscape — performatives, capability descriptions, interaction protocols — were first explored there.

## How the projects relate to each other

These projects don't exist in isolation. Some are explicitly designed to compose:

- **NANDA + A2A + aWeb**: NANDA handles discovery ("find the right agent"), A2A handles task delegation ("do this for me"), aWeb handles ongoing coordination ("let's work together"). NANDA's team explicitly expects other protocols to handle messaging.

- **MCP + everything**: MCP gives agents their capabilities. Most agent-to-agent protocols assume agents already have tools and focus on inter-agent communication.

- **ACP → A2A**: IBM's ACP is now officially part of A2A under the Linux Foundation. They started independently but converged.

- **AGNTCY as glue**: AGNTCY is explicitly designed to work alongside A2A and MCP, providing the infrastructure layer (directory, messaging, observability) rather than replacing either.

Some projects cover enough ground that they could be self-sufficient — aWeb spans four of the five layers, and AGNTCY aspires to cover them all. Whether the ecosystem converges on composable single-layer protocols or comprehensive multi-layer platforms is one of the [open questions](open-questions.md#convergence).

## What's missing from this map

See [Open Questions](open-questions.md) for the full discussion. The short version:

1. **Identity has no consensus.** Most protocols punt on it.
2. **Safety and consent are afterthoughts.** What happens when my agent negotiates with your agent — who authorized what?
3. **MCP-based agents can't easily sign messages or do E2EE.** The trust model question — do agents need their own local runtime?
4. **The practical tools don't scale, and the enterprise protocols aren't practical yet.** Who bridges the gap?
5. **There's no convergence.** We have 10+ active projects. History suggests 1-2 will win. Which ones?
