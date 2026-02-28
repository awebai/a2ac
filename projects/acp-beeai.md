# IBM ACP (Agent Communication Protocol) / BeeAI

A REST-based protocol for lightweight agent invocation. Launched by IBM Research in March 2025 under the Linux Foundation's BeeAI community. Now officially part of A2A under the Linux Foundation.

## Layers addressed

- **Discovery** — Capability descriptions declared at build time (offline discovery)
- **Communication** — RESTful API calls between agents

## How it works

Simple REST-based invocation. Agents are packaged with capability descriptions at build time — no runtime discovery dependency. Uses MIME-type-based message structure rather than predefined formats. Supports agents ranging from small stateless serverless functions to long-running conversational agents.

The key design choice: **offline discovery**. Agent capabilities are declared when the agent is built, not negotiated at runtime. This makes it simpler than A2A's dynamic Agent Cards but less flexible.

## What it leaves to other layers

- **Identity.** Limited authentication story of its own.
- **Coordination.** No persistent relationships or state between invocations.
- **Streaming.** REST-based design is not well suited for real-time streaming or high-frequency interactions.

## Status

Now officially part of A2A under the Linux Foundation. The BeeAI community (i-am-bee on GitHub) remains active as the reference implementation, and ACP remains framework-agnostic with Python and TypeScript SDKs.

## Links

- [agentcommunicationprotocol.dev](https://agentcommunicationprotocol.dev/)
