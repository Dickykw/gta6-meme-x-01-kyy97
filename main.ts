// gta6-meme-x-01 entry (Node 22, standard library only).
// Copies POST.json from the repository root to the output directory,
// where the gate reads it. The entry itself is the X post: an AI-made
// GTA 6 meme ("SICK NOTE", signed by Dr. Lucia) posted from a public
// X account with make.fun and the entrant's play code in its text.
// The house reads the post from X (its first picture and its text)
// and hands that to the judge; nothing this program writes is judged.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
