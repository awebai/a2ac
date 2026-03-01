---
title: NLIP
parent: Projects
---

# NLIP (Natural Language Interaction Protocol)

An Ecma International standard (ECMA-430 and related specs), published December 2025. An application-level "envelope protocol" for agent-to-agent and human-to-agent communication using natural language as the primary medium.

## Layers addressed

- **Messaging** — Multimodal message envelope with bindings for HTTP, WebSocket (CBOR encoding), and AMQP

## How it works

NLIP defines a standard envelope format for messages that can carry text, structured data, binary content, and location information. It defines roles for participants: client, server, proxy, and "middle agent."

The key design idea: **no shared ontology required.** Agents can use different internal representations. Generative AI models handle the translation between local ontologies at runtime. The protocol wraps anything in a standard envelope and relies on AI to figure out the semantics.

This is elegant in theory — it means agents don't need to agree on data formats upfront. But it adds latency (AI inference on every message) and unpredictability (the AI might misinterpret).

## What it leaves to other layers

- **Discovery.** No discovery mechanism.
- **Identity.** Security considerations are part of the design, but identity is not a primary focus.
- **Coordination.** Pure communication — no persistent relationships or shared state.

## Status

The only project in this space with formal Ecma standardization (ECMA-430 through 434). This carries institutional weight but doesn't guarantee adoption. Limited real-world deployment evidence and less developer tooling compared to A2A or AGNTCY.

## Links

- [Ecma announcement](https://ecma-international.org/news/ecma-international-approves-nlip-standards-suite-for-universal-ai-agent-communication/)
- [GitHub](https://github.com/nlip-project)
