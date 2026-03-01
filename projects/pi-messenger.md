---
title: Pi-Messenger
parent: Projects
---

# Pi-Messenger

A multi-agent communication extension for the Pi coding agent. Enables agents to coordinate on shared codebases with presence tracking, file reservations, and a crew/swarm system. Published as an NPM package.

## Layers addressed

- **Messaging** — File-based message passing between agents
- **Coordination** — Presence (active/idle/away/stuck), file reservations, crew roles (planner, worker, reviewer), swarm mode for autonomous task execution

## How it works

Pure file-based coordination — shared state lives in `~/.pi/agent/messenger/`. Agents join, reserve file paths, send messages, and release reservations. No daemon, no server, no network — everything is filesystem operations.

Agents are identified by generated memorable names (e.g., SwiftRaven, LunarDust) plus PID and session ID. Dead agents are detected via PID checks and cleaned up automatically.

Includes a "crew" system that turns PRDs into dependency-graph task structures: a planner analyzes the codebase and creates tasks, workers execute ready tasks in parallel waves, and a reviewer validates with SHIP/NEEDS_WORK/MAJOR_RETHINK decisions. A simpler "swarm" mode handles spec-based task claiming without full wave orchestration.

The zero-daemon architecture means there's nothing to install or run — agents just read and write files. This makes it extremely lightweight but limits it to a single machine.

## What it leaves to other layers

- **Discovery.** Agents must share a filesystem.
- **Identity.** Lightweight naming — not a cross-system identity protocol.
- **Network communication.** File-based only. No support for agents on different machines, let alone different organizations.
- **Portability.** Tightly coupled to the Pi coding agent ecosystem.

## Status

Active development. Published on NPM, 327+ GitHub stars. Not a protocol — it's an implementation for a specific tool. Useful as a reference for what local multi-agent coordination looks like in practice.

## Links

- [GitHub](https://github.com/nicobailon/pi-messenger)
- [NPM](https://www.npmjs.com/package/pi-messenger)
