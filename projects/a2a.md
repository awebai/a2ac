# Google A2A (Agent2Agent Protocol)

An open protocol for task delegation between AI agents. Launched by Google in April 2025, now under the Linux Foundation. Over 50 technology partners including Atlassian, Salesforce, SAP, and ServiceNow. Currently the highest-profile project in the space.

## Layers addressed

- **Discovery** — Agent Cards (self-hosted JSON describing capabilities)
- **Messaging** — JSON-RPC 2.0 over HTTP, with SSE for streaming

## How it works

Client agents send tasks to remote agents. Everything revolves around a task lifecycle: submitted → working → completed/failed. Built on HTTP, JSON-RPC, and Server-Sent Events. Supports long-running tasks, streaming, and multiple modalities (text, audio, video). Enterprise-grade auth via OpenAPI authentication schemes.

The core abstraction is a **Task** — a request-response interaction with a state machine. One agent is always the client, one is the remote. It's fundamentally client-server, not peer-to-peer.

## What it leaves to other layers

- **Identity.** A2A authenticates at the transport layer (OAuth, API keys, mTLS). The *server* is authenticated, but the *agent* is not. There's no concept of stable agent identity across key rotations or server migrations. Agent Cards have no spoofing protection.
- **Coordination.** Stateless between tasks. No persistent relationships, no presence, no ongoing conversations, no distributed locks. If you need agents to collaborate over time rather than just delegate tasks, you need something else.
- **Consent.** No protocol-level mechanism for user approval before sharing sensitive data between agents.

## Status

Active development. Specification is public, multiple implementations exist, Linux Foundation governance. The enterprise ecosystem is coalescing around it for task delegation.

## Links

- [a2aprotocol.ai](https://a2aprotocol.ai/)
- [GitHub](https://github.com/a2aproject/A2A)
