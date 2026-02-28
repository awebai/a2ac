# FIPA-ACL and KQML

The original agent communication languages from the 1990s–2000s. KQML (Knowledge Query and Manipulation Language, early 1990s, DARPA) and FIPA-ACL (Foundation for Intelligent Physical Agents, founded 1996, specs ratified ~2000). FIPA was later re-established as an IEEE Computer Society standards committee in 2005. Not active projects today, but included here because every modern A2AC project is building on ideas that originated here.

## Layers addressed (historically)

- **Communication** — Structured message formats with formal semantics
- **Coordination** — Interaction protocols (contract net, subscribe/notify, brokering)
- **Discovery** — Capability descriptions and matchmaking

## How it worked

Based on speech act theory — messages are "communicative acts" with declared intent. A message doesn't just carry data; it declares what the sender is doing: informing, requesting, proposing, accepting, rejecting. The formal semantics defined what each act meant in terms of the agents' beliefs, desires, and intentions.

JADE (Java Agent Development Framework) was the main implementation platform. The protocols defined interaction patterns — contract net (call for proposals → evaluate → award), subscribe/notify, brokering — that structured multi-agent workflows.

## What happened

FIPA's formal semantics and verbose message formats (the primary encoding was SL, a LISP-like syntax, with XML as one of several optional encodings) were too complex for mainstream adoption. The web won, REST APIs won, and agent research went dormant for about 15 years. The tooling was academic, the deployment stories were thin, and the internet moved in a different direction.

## Why it matters now

The core ideas — structured communicative acts, ontology-based understanding, interaction protocols, capability description — are all being reinvented in simpler forms by today's projects. A2A's task lifecycle echoes FIPA's interaction protocols. ANP's meta-protocol negotiation echoes FIPA's content language negotiation. NANDA's AgentFacts echo FIPA's capability descriptions.

Understanding FIPA-ACL is useful for recognizing which problems in A2AC are genuinely new (LLM-native communication, scale, practical tooling) and which are old problems in new clothes (identity, discovery, protocol negotiation).

## Links

- [Wikipedia: Agent Communications Language](https://en.wikipedia.org/wiki/Agent_Communications_Language)
- [FIPA specifications archive](http://www.fipa.org/repository/standardspecs.html)
