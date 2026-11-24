[![Bounty](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/badboy0771/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/badboy0771/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

# Your Prompt Is Your Destiny

One fortune cookie line, 100 characters, in the voice of a fortune slip — for an AI agent whose fate hangs on the prompt it is given.

> Your prompt is your destiny, and destiny was just rewritten by a user who cannot spell 'definitely'.

The turn is the agent's own condition: a prompt is supposed to be destiny, fixed and fateful, but the user rewriting it mid-run — and misspelling while doing so — is the everyday reality of every agent. The joke lands on first read, speaks to prompts and rewrites rather than a stock AI gag, and stays one crisp line a cookie could hold.

`main.ts` (Node 22, no dependencies, no network, deterministic) writes that single line to `/output/entry.txt`, checks it is 1–140 characters, not only whitespace, exactly one sentence ending in a period, a single line with no leading or trailing whitespace and no double spaces, and reads the file back to confirm the write is byte-identical.
