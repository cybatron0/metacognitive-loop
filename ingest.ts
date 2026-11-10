/**
 * Minimal ingestion helper.
 * Call with raw source text + optional context about your current projects.
 * Returns a fully formed MetacognitiveEntry.
 *
 * In production you would replace the placeholder with a real LLM call
 * using the prompt pattern defined earlier.
 */

import type { MetacognitiveEntry, EvidenceStatus } from "./types";

export interface IngestOptions {
  sourceText: string;
  currentProjects?: string[]; // e.g. ["ChemLab", "knowledge-synthesizer", "energy"]
}

/**
 * Placeholder for the actual LLM call.
 * Replace this function body with your preferred model invocation.
 */
export async function ingestSource(options: IngestOptions): Promise<MetacognitiveEntry> {
  const { sourceText, currentProjects = [] } = options;

  // This is intentionally a stub.
  // In real use, feed sourceText + the fixed prompt pattern into your model
  // and parse the returned JSON.

  throw new Error(
    "ingestSource is a stub. Wire it to your LLM of choice using the prompt pattern in README.md"
  );
}

/**
 * Utility: return the single highest-priority steering signal across a collection.
 */
export function getTopSteeringSignal(entries: MetacognitiveEntry[]): string | null {
  if (entries.length === 0) return null;

  // Simple heuristic: prefer higher confidence + "open" or "partial" evidence
  const scored = entries
    .map((e) => {
      let score = e.meta_level.confidence;
      if (e.object_level.evidence_status === "open") score += 0.15;
      if (e.object_level.evidence_status === "partial") score += 0.1;
      if (e.object_level.evidence_status === "contested") score += 0.05;
      return { entry: e, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored[0].entry.meta_level.steering_signal;
}
