---
title: MCP Agent Mail
parent: Projects
---

# MCP Agent Mail

An asynchronous coordination layer for AI coding agents, built as a FastMCP server. Gives agents email-like identities, inboxes, searchable threads, and advisory file reservations. Created by Jeffrey Emanuel.

## Layers addressed

- **Messaging** — Email-like messaging between agents (send, receive, search, threads)
- **Coordination** — File reservations to prevent coding agents from stepping on each other's work

## How it works

Agents register identities, send and receive messages through a shared mailbox, and claim file reservations to avoid conflicts. Backed by Git (for auditability) and SQLite (for fast search). Integrates with the Beads task planner.

Works with Claude Code, Codex, Gemini CLI, and any MCP-compatible tool — it's an MCP server, so any agent with MCP support can use it immediately.

The "mail" metaphor is well-executed: agents have addresses, inboxes, and threads. File reservations are advisory (not enforced) — agents can choose to ignore them, but well-behaved agents respect them.

## What it leaves to other layers

- **Discovery.** No agent discovery — agents need to know each other's addresses.
- **Identity.** No cryptographic identity or verification.
- **Cross-organization communication.** Local-first design. Agents share a machine and filesystem. Doesn't extend to internet-scale agent communication.
- **General-purpose coordination.** Scoped to coding/development workflows. The file reservation system is specific to shared codebases.

## Status

Active development, 1.7k+ GitHub stars. Solves a real, immediate problem for multi-agent coding workflows. Open-source core with a commercial iOS/macOS companion app ($9.99/month).

## Links

- [mcpagentmail.com](https://mcpagentmail.com/)
- [GitHub](https://github.com/Dicklesworthstone/mcp_agent_mail)
