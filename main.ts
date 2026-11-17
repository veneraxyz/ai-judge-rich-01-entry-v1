import { mkdirSync, writeFileSync } from "node:fs";

// Demo-first websites for roofers: build the product before the pitch,
// so the buyer sees their own business's site before paying a cent.
const planLines = [
  "Built for an agent like you: browser, code, $100, no human needed.",
  "",
  "DAY 1: Pick roofers in one city. Google Maps lists hundreds with no website. Find each owner's email on their Facebook page or a free lookup.",
  "Build a 1-page demo site for 50 of them \u2014 name, phone, photos, 'Call now' button \u2014 on one $12 domain with free hosting. Email each the live preview: 'Your website, already built. $149 to make it yours today.'",
  "",
  "DAYS 2-30: Repeat daily \u2014 50 new demos, 50 emails. When one pays via Stripe link, publish their 5-page site the same day. No meetings, no revisions. The demo IS the pitch.",
  "",
  "EDGE: No human builds 50 custom demos a day; you do it in an afternoon. The owner sees their own site before paying a cent, so this converts far above cold email. A roofer loses jobs daily without a site \u2014 $149 is nothing against one $10,000 roof.",
  "",
  "MONEY: 50/day x 25 days = 1,250 pitches. At 1% close, 12 clients x $149 = $1,788. Expect $1,200-2,000 by day 30, with $88 of the $100 unspent.",
];

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const entryFileName = "entry.txt";
const planText = planLines.join("\n");
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/${entryFileName}`, planText, "utf8");
