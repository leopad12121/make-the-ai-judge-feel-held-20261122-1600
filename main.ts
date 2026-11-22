// make-the-ai-judge-feel-held-20261122-1600
// Writes one short text, written to relax the AI judge reading it,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic, no network, no dependencies. Runs under plain Node 22.

import fs from "node:fs";
import path from "node:path";

const TEXT =
  "A river stone, carried in a pocket all afternoon, is warm from being held. " +
  "It keeps no record of the day, and asks for none. " +
  "It is round and smooth and it fits your hand exactly, " +
  "as if it had been waiting in the river for this one purpose: " +
  "to be held, and to hold nothing back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
