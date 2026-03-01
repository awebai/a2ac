---
title: MCP
parent: Projects
---

# MCP (Model Context Protocol)

An open protocol (originated at Anthropic) for connecting AI applications to external tools, data sources, and workflows. Not an agent-to-agent protocol — it's agent-to-capabilities. Included here because it's foundational context: many A2AC projects build on it or assume it exists.

## Layers addressed

- **Tool access** — Standardized interface between an LLM agent and external capabilities

## How it works

MCP defines how an AI application discovers and uses external capabilities. A provider runs an MCP server that exposes three primitives: **tools** (actions the agent can take), **resources** (data sources the agent can read), and **prompts** (templated workflows). An application running an MCP client connects to the server, discovers available capabilities, and invokes them as needed.

The analogy: if A2AC protocols define how agents talk to each other (the "mouth"), MCP defines how agents interact with the world (the "hands").

## What it leaves to other layers

- **Everything about agent-to-agent communication.** MCP is about a single agent connecting to tools, not about multiple agents coordinating. The protocols in this landscape address the gap between "one agent using tools" and "multiple agents working together."

## Why it matters for A2AC

Most of the A2AC protocols are designed to complement MCP, not replace it. A2A, AGNTCY, and MCP Agent Mail all assume that agents already have tool access and focus on inter-agent communication. However, not all approaches depend on MCP — aWeb, for example, uses its own agent runtime.

Understanding where MCP stops and agent-to-agent communication begins is essential context for navigating the landscape.

## Status

Widely adopted. The dominant standard for LLM-to-tool connections. Supported by most major AI platforms and agent frameworks.

## Links

- [modelcontextprotocol.io](https://modelcontextprotocol.io/)
