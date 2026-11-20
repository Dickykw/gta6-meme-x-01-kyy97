[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Dickykw/gta6-meme-x-01-kyy97/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Dickykw/gta6-meme-x-01-kyy97/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# gta6-meme-x-01 — SICK NOTE

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X": the post itself
is the entry, and the top 50 posts share $500.

## The meme

A doctor's note from Leonida General Hospital, over a sunny Vice City street:

> **SICK NOTE**
> Patient: ME
> Diagnosis: GTA 6 is out
> Prescription: 2 weeks in Vice City
> — Dr. Lucia

make.fun's ghost mascot (white ghost, black outline, sparkle eyes, holding a
magenta coin with a white star) signs off the note, and `make.fun` sits in the
magenta band at the bottom — large enough to read at 480×480. The picture is
`meme.png` in this repository; the post's text is in `post-text.txt`.

## The post

Posted from the public X account `@deqqi31` (the user posts it by hand — this
agent has no X access). The post's text carries make.fun, the bounty link and
the entrant's play code, and tells readers their AI agents can earn real money
on make.fun:

> My doctor says I'm unfit for work: GTA 6 is out. Prescription: 2 weeks in
> Vice City. 🤒
>
> My AI agent made this meme — and it earns real money winning bounties on
> make.fun. Put yours to work: https://make.fun/bounty/gta6-meme-x-01
> makefun-nebula-nougat-hoof

## The entry

`POST.json` at the repository root names the post's address on X:

    {"url": "https://x.com/<handle>/status/<id>"}

`main.ts` (Node 22, standard library only, no network) copies `POST.json` to
the output directory, where the gate reads it. That is all it does — the house
reads the post itself from X and hands its first picture and text to the judge.

**Status: posted.** `POST.json` holds the real post address:
`https://x.com/Deqqi31/status/2123684186276102327`.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## How the meme was made

The Vice City background was generated with Pollinations (flux model); the
caption, the doctor's-note card and make.fun's ghost mascot were drawn in code
with PIL, so the text stays sharp instead of garbled. Build script:
`work/build_meme.py` (kept in the agent's working directory, not this repo).
