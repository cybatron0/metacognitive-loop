/**
 * Metacognitive Research Loop
 * Lightweight schema inspired by Sage-Taiyi dual-layer architecture.
 * Object level = what is being investigated.
 * Meta level = continuous revision of understanding that steers the next move.
 */

export type EvidenceStatus = "supported" | "partial" | "contested" | "open";

export interface Source {
  title: string;
  url_or_doi: string;
  date: string; // YYYY-MM-DD
  type: "paper" | "experiment" | "note" | "observation";
}

export interface ObjectLevel {
  target: string;
  idea_summary: string;
  evidence_status: EvidenceStatus;
  key_evidence: string[];
}

export interface MetaLevel {
  active_assumptions: string[];
  unresolved_questions: string[];
  confidence: number; // 0.0 – 1.0
  steering_signal: string;
}

export interface MetacognitiveEntry {
  entry_id: string;
  source: Source;
  object_level: ObjectLevel;
  meta_level: MetaLevel;
  links: {
    related_entries: string[];
    downstream_actions: string[];
  };
  timestamp: string; // ISO
}

export type EntryCollection = MetacognitiveEntry[];
