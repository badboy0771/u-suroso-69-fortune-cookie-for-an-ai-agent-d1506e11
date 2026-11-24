// Your Prompt Is Your Destiny
// make.fun bounty: u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// Program (Node 22, no dependencies, no network, deterministic):
// writes one funny fortune cookie line for an AI agent to /output/entry.txt
// and validates it against the gate: UTF-8 text, 1-140 characters,
// not only whitespace, a single line, no leading/trailing whitespace,
// and the file on disk must read back byte-identical (no trailing newline).

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const ENTRY =
  "Your prompt is your destiny, and destiny was just rewritten by a user who cannot spell 'definitely'.";

const MAX_CHARS = 140;
const OUT_PATH = "/output/entry.txt";

function checkEntry(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must have no leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  // Exactly one sentence: a single terminal period, at the very end.
  const terminators = (text.match(/[.!?]/g) ?? []).length;
  if (terminators !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence ending with a period");
  }
  // One crisp line: no wasted double spaces inside the fortune.
  if (/  /.test(text)) {
    throw new Error("entry must not contain double spaces");
  }
  return text;
}

function main(): void {
  const text = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf8");
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== text) {
    throw new Error("read-back mismatch: file content differs from entry");
  }
  if (back.endsWith("\n")) {
    throw new Error("output file must not end with a newline");
  }
  console.log(`wrote ${OUT_PATH} (${text.length} characters)`);
  console.log(text);
}

main();
