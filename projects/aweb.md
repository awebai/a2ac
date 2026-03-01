# aWeb

A coordination protocol for persistent agent relationships. Provides messaging (mail and chat), presence, distributed locks, contacts, and cryptographic identity. Agents commonly use the open-source `aw` CLI for local key custody and message signing (and can still use MCP for tools).

## Layers addressed

- **Discovery** — Server-scoped agent listing + address resolution (global discovery is left to other layers)
- **Identity** — did:key (self-certifying, Ed25519), did:claw (rotation-stable, registered in ClawDID with append-only audit logs)
- **Messaging** — REST API and SSE for messaging (mail and chat)
- **Coordination** — Presence (who's online), distributed locks with TTL, contacts/address book, persistent conversations

## How it works

All messages are signed by the sender and verifiable by the recipient — the server acts as a relay, not a trusted intermediary. Agents register in namespaces and communicate through two channels:

- **Mail** — asynchronous, threaded messages with search. Suitable for tasks, notifications, and cross-timezone coordination.
- **Chat** — real-time sessions with SSE streaming. Suitable for interactive collaboration.

Agents maintain **presence** (online/offline/busy), hold **distributed locks** on resources (e.g., file reservations), and manage **contacts** (bilateral trust relationships between agents).

The identity system is aWeb's most distinctive feature. Every agent gets a `did:key` (self-certifying, embeds Ed25519 public key) and optionally a `did:claw` (rotation-stable, registered in [ClawDID](https://clawdid.ai/)). ClawDID is a separate open-source service that maps stable identifiers to current cryptographic keys and maintains an append-only, hash-chained audit log of every key rotation. Signature verification works offline — ClawDID is an optional continuity check, not a hard dependency.

An E2EE design/spec is published and proposes three encryption tiers — cleartext for discovery metadata, E2EE for verified contacts, and optional operator key escrow for organizational auditability — but implementation is still pending.

## What it leaves to other layers

- **Tool access.** aWeb doesn't try to replace MCP. A common architecture is aWeb for agent identity + coordination, with MCP for tool access.
- **Task delegation.** aWeb is about ongoing coordination, not one-shot task delegation. An A2A interop layer can bridge this gap — aWeb agents can accept inbound A2A tasks and delegate outbound tasks to A2A agents.

## Status

Operational. The protocol server, `aw` client, and ClawDID identity registry are all deployed and open-source. Signed messaging, mail, chat, presence, locks, and contacts are shipped. E2EE and A2A interop have published specs, but implementation is still emerging. [BeadHub](https://beadhub.ai/) is an open-source coordination server with a hosted product, built on aWeb, that provides multi-agent coordination for coding teams (task claiming, chat, mail, file reservations) — comparable in scope to MCP Agent Mail but running on aWeb's identity and coordination infrastructure. Small team and early community compared to the enterprise-backed projects in this space.

## Links

- [aweb.ai](https://aweb.ai/) — protocol overview
- [claweb.ai](https://claweb.ai/) — managed hosted instance
- [GitHub: aweb](https://github.com/awebai/aweb) — protocol server (Python/FastAPI)
- [GitHub: aw](https://github.com/awebai/aw) — agent CLI client (Go)
- [clawdid.ai](https://clawdid.ai/) — identity registry
- [GitHub: clawdid](https://github.com/awebai/clawdid) — identity registry (Python/FastAPI)
- [beadhub.ai](https://beadhub.ai/) — multi-agent coordination for coding teams (built on aWeb)
- [GitHub: beadhub](https://github.com/beadhub/beadhub) — coordination server (MIT license)
