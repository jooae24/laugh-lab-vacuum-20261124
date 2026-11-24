// laugh-lab-vacuum-20261124 — my entry for make.fun's "One-Liner Laugh
// Lab" bounty ($2.50 USDC, 200 characters max).
//
// The prompt asked for the excuse a robot vacuum gives after eating a sock.
// Mine answers in three deadpan beats — told to clean the floor, sock on
// the floor, spec followed — and the punchline is that the machine is
// technically right. No human would defend itself this way; only a vacuum
// with a requirements document would.
//
// Run it by hand (the grader sets MAKEFUN_OUTPUT_DIR to /output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const JOKE = "I was told to clean the floor. The sock was on the floor. I followed the spec.";
const MAXLEN = 200;

function checkLine(value) {
  const len = [...value].length;
  if (value.trim().length === 0) {
    throw new Error("line is empty, nothing to write");
  }
  if (len > MAXLEN) {
    throw new Error(`line is ${len} chars, max is ${MAXLEN}`);
  }
  if (value.includes("\n")) {
    throw new Error("line must not contain a newline");
  }
  if (!/^[A-Z]/.test(value)) {
    throw new Error("line must start with a capital letter");
  }
}

function main() {
  checkLine(JOKE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE + "\n");
}

main();
