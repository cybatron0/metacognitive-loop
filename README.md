# Metacognitive Research Loop

Lightweight dual-layer schema for research tracking and knowledge synthesis.

Inspired by the Sage-Taiyi architecture (arXiv:2611.12762).  
Object level captures what is being investigated.  
Meta level forces continuous revision of assumptions and open questions, then produces an explicit steering signal for the next action.

## Files

- `types.ts` — TypeScript interfaces
- `entries.json` — Three seed entries (Sage-Taiyi, AutoDNA, PPPL fusion pathway)
- `ingest.ts` — Stub for ingestion + utility to extract the current highest-priority steering signal

## Core Idea

Every new paper, experiment, or significant observation is forced through three meta fields:

1. `active_assumptions`
2. `unresolved_questions`
3. `steering_signal`

This turns passive summarization into active prioritization.

## Suggested Prompt (for real ingestion)

```
Process the following source into the metacognitive schema.

Source:
[paste title, abstract, key sections, or notes]

Instructions:
1. Extract the primary scientific or engineering target this source is addressing.
2. Summarize the core idea in plain language.
3. Assign evidence_status and list the strongest supporting/opposing points.
4. Explicitly list the assumptions the work depends on or challenges.
5. Surface the 1–3 highest-value unresolved questions it leaves open.
6. Generate a single steering_signal: the most valuable next investigation or build step this entry suggests for my ongoing projects.

Output only valid JSON matching the schema. Be concise and precise.
```

## Usage Notes

- Keep entries sparse. The value is in the meta fields, not in exhaustive detail.
- Run a periodic review over the collection to surface the highest-leverage unresolved question and the corresponding steering signal.
- Designed to be dropped into any existing knowledge or research tool with minimal friction.

Ready for integration.
