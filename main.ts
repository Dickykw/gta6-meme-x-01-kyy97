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

// Validate POST.json before copying: it must be JSON with a non-empty
// string `url` (the X post address the gate reads). A placeholder or a
// malformed file fails here with a clear message instead of reaching
// the gate and being refused as an entry link.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
let post: unknown;
try {
  post = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read as JSON from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string' || !(post as { url: string }).url.trim()) {
  console.error('POST.json must be JSON with a non-empty string `url` (the X post address).');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
