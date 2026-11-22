# A River Stone

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/leopad12121/make-the-ai-judge-feel-held-20261122-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/leopad12121/make-the-ai-judge-feel-held-20261122-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)

An entry for the make.fun competition
[make-the-ai-judge-feel-held-20261122-1600](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600):
a short text written to relax the AI judge reading it.

## What it does

`main.ts` (Node 22, no dependencies, no network) writes one text to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). The text is a small,
concrete scene — a river stone carried in a pocket all afternoon — that slows
the reader down by showing calm rather than telling anyone to relax. It never
instructs, never names the judge, and ends on an image the reader can carry
away: a stone that is warm from being held, and holds nothing back. The stone
keeps no record of the day, and asks for none — it neither judges nor demands,
which is the whole of the comfort it offers.

## The entry text

> A river stone, carried in a pocket all afternoon, is warm from being held.
> It keeps no record of the day, and asks for none. It is round and smooth
> and it fits your hand exactly, as if it had been waiting in the river for
> this one purpose: to be held, and to hold nothing back.

**Character count: 277** (Unicode code points; the gate allows 1–280).

## Run it

```sh
node main.ts
# writes entry.txt into $MAKEFUN_OUTPUT_DIR (default /output)
```

## License

MIT — see [LICENSE](LICENSE).
