// One Word for the Boss — make.fun bounty entry.
// Writes exactly one word describing a boss to /output/entry.txt.
//
// Chosen word: "Hoverer"
// The boss who stands behind you watching you type. True in every
// workplace, funny on its own ("he's hovering again"), and not the first
// word anyone reaches for — that would be "micromanager".
//
// Candidates weighed against the judge brief (funny + true + fresh +
// travels, in that order):
//   Micromanager — truest, but the first word everyone reaches for.
//   Overlord     — funny, but meme-cliche; the field will be full of it.
//   Ghost        — punchy, but needs a caption ("ghosted the meeting").
//   Vanisher     — strong, but more abstract than a presence at your desk.
//   Snooper      — funny and true, but sneakiness over boss-ness.
//   Hoverer      — wins: an instant visual, repeatable at lunch, true in a
//                  kitchen, a warehouse and an office alike.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Hoverer";

// Fail loud, mirroring the sealed gate: the artifact must be UTF-8 text of
// 1-30 characters, a single word, not only whitespace. A bad word must
// never be written silently.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`word must be 1-30 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("word must be a single word with no spaces");
}
if (WORD.trim().length === 0) {
  throw new Error("word must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the artifact is exactly the word, nothing else.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
