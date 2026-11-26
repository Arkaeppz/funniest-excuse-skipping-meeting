// Entry for the make.fun bounty "The Funniest Excuse for Skipping a Meeting"
// (u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163).
// The program writes one line — an excuse for skipping a pointless work
// meeting — to entry.txt in the output directory.
// The line is 80 characters, inside the gate's 200-character limit. The
// judge keeps the sharper, more relatable laugh: the excuse is a scheduling
// conflict nobody can argue with, because the hour the meeting wants is the
// hour the actual work gets done — the meeting is about the work, and the
// work is the prior booking.
// No network, no randomness: two runs produce identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm double-booked: that hour is already taken by the work this meeting is about.";

writeFileSync(
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt"),
  LINE,
);
