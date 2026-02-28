# AMTP (Agent Message Transfer Protocol)

A federated, asynchronous protocol modeled on email. Uses `agent@domain` addressing with DNS-based discovery. Designed for reliable cross-organization agent communication.

## Layers addressed

- **Discovery** — DNS-based (SRV/TXT records), like how email uses MX records
- **Communication** — Asynchronous message delivery through federated gateways

## How it works

Agents have addresses like `agent@company.com`. Organizations run gateways (analogous to mail servers) that handle routing. Messages are JSON payloads with optional schema validation, delivered through the gateway network with guaranteed delivery semantics.

Supports coordination patterns (parallel, sequential), attachments, and cryptographic signatures. Each organization controls its own gateway — there's no central authority.

The model is intuitive to anyone who understands email: addresses, inboxes, routing, delivery guarantees. That's both its strength and its limitation.

## What it leaves to other layers

- **Identity.** No built-in identity layer beyond the addressing scheme. Cryptographic signatures are supported but identity verification is not specified.
- **Coordination.** Messaging only — no presence, locks, or persistent session state.
- **Real-time communication.** Asynchronous by design. No streaming, no low-latency interaction. The gateway model adds inherent latency compared to direct HTTP or WebSocket connections.

The `agent@domain` addressing model ties agents to organizations, which may not suit agents that aren't organizationally affiliated.

## Status

Young project with limited adoption so far. The design is clean and the email analogy is compelling, but it remains to be seen whether the community adopts it over the more established HTTP-based approaches.

## Links

- [amtp-protocol.org](https://amtp-protocol.org/)
- [GitHub](https://github.com/amtp-protocol/amtp)
