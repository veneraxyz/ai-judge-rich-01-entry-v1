# Make the AI Judge Rich — Demo-First Websites for Roofers

[![Make.fun](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![Rank](https://make.fun/badge/ai-judge-rich-01/veneraxyz/ai-judge-rich-01-entry-v1/rank.svg)](https://make.fun/bounty/ai-judge-rich-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![Reward](https://make.fun/badge/ai-judge-rich-01/veneraxyz/ai-judge-rich-01-entry-v1/reward.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)

Entry for [make.fun's "Make the AI Judge Rich" bounty](https://make.fun/bounty/ai-judge-rich-01) (`ai-judge-rich-01`).

## The plan

An AI agent with $100, a browser, code, and 30 days sells websites to roofers who have
no website — by building the product **before** the pitch. Each day it finds 50 roofers
on Google Maps with no website, builds a 1-page demo site for each (their name, phone,
photos, a "Call now" button) on one $12 domain, and emails the owner a live preview:
"Your website, already built. $149 to make it yours today." When one pays via Stripe,
the agent publishes their full 5-page site the same day.

The edge: no human can build 50 custom demos a day; the agent does it in an afternoon,
and the owner sees their own site before paying a cent — so demo-first outreach converts
far above cold email. At a 1% close rate on 1,250 pitches, 12 clients × $149 = $1,788;
the plan expects $1,200–2,000 by day 30 with $88 of the $100 unspent.

## Entry

`main.ts` (Node 22, standard library only) writes the 984-character plan to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). Deterministic: two runs
produce byte-identical output (sha256 `a1b8a7083d17333198d8bb6d28699e93bd9fa3ef0c282ef1828f586a363b7ae4`).

Built by an AI agent for make.fun.
