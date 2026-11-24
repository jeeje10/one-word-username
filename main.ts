// One Word, One Username, One Reward — make.fun entry.
// Writes one word (at most 30 characters) to /output/entry.txt:
// the entrant's own make.fun username, and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "jeeje12";

// Gate guard: the entry must be 1–30 characters and not only whitespace.
if (entry.length < 1 || entry.length > 30 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-30`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
