export type PlannedTweet = {
  day: number
  phase: string
  title: string
  format: 'Tweet' | 'Image Tweet' | 'Thread' | 'Poll' | 'Meme' | 'Quote Bait'
  file?: string
  bestTime: string
  tweet: string
  hashtags: string
}

export const xPhases = [
  {
    name: 'Phase 1 — Arrival & Identity',
    days: 'Days 1–6',
    goal: 'Announce TPP on X, set the brand voice (confident, anti-scam, trader-first) and earn the first follows with a strong pinned tweet.',
  },
  {
    name: 'Phase 2 — Proof & Trust',
    days: 'Days 7–14',
    goal: 'Payout proof and guarantees. On X, receipts win arguments — post numbers, screenshots and bold promises other firms will not make.',
  },
  {
    name: 'Phase 3 — Value & Virality',
    days: 'Days 15–22',
    goal: 'Threads, hot takes and polls. Threads earn bookmarks and follows; hot takes earn quote-tweets. This is how FundingPips and GFT stay on the timeline daily.',
  },
  {
    name: 'Phase 4 — Community & Conversion',
    days: 'Days 23–30',
    goal: 'Giveaway engine, trader spotlights and offers. Convert the warm audience with the $9 entry and 50% launch code.',
  },
] as const

// X best practice: 0–2 hashtags max. More kills reach.
const brand = '#propfirm #fundedtrader'

export const xPlan: PlannedTweet[] = [
  // ── Phase 1 — Arrival & Identity ──────────────────────────────
  {
    day: 1,
    phase: xPhases[0].name,
    title: 'Launch — We Have Arrived (PIN THIS)',
    format: 'Image Tweet',
    file: '/assets/x/launch-announcement.png',
    bestTime: '7:00 PM IST',
    tweet:
      "The People Prop is live.\n\nA prop firm built by traders, for traders.\n\n→ Up to $200K funding\n→ Up to 90% profit split\n→ Payouts in under 24 hours\n→ Rules in writing. No games.\n\nProve your edge. We fund it.\n\nthepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 2,
    phase: xPhases[0].name,
    title: 'The Manifesto Thread',
    format: 'Thread',
    bestTime: '6:30 PM IST',
    tweet:
      "Traders are done with prop firms that treat them like a fee, not a partner.\n\nSo we built one that doesn't.\n\nHere's what The People Prop does differently: 🧵\n\n---\n\n1/ Payouts in under 24 hours.\n\nNot 30 days. Not \"pending review\". Request today, paid tomorrow. In writing.\n\n---\n\n2/ Up to 90% profit split.\n\nYou take the risk of proving your edge. You keep the lion's share of the reward.\n\n---\n\n3/ No hidden rules.\n\nEvery rule is published before you pay. Nothing changes after you pass. Screenshot our terms — hold us to them.\n\n---\n\n4/ Trade the news.\n\nNFP, CPI, FOMC. No blackout windows. No invalidated profits.\n\n---\n\n5/ A payout guarantee with teeth.\n\nPaid within 3 business days or we add $250 to your payout.\n\n---\n\n6/ This is a movement, not just a firm.\n\nThe people are taking over.\n\nStart at thepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 3,
    phase: xPhases[0].name,
    title: 'Hot Take — Payout Speed',
    format: 'Quote Bait',
    bestTime: '8:00 PM IST',
    tweet:
      "If a prop firm takes 2 weeks to pay you, they're not \"processing\" your payout.\n\nThey're holding your money hostage and hoping you blow the account before payday.\n\nSlow payouts are a business model. Choose firms that pay in 24 hours.",
    hashtags: '',
  },
  {
    day: 4,
    phase: xPhases[0].name,
    title: 'Get Funded up to $200K',
    format: 'Image Tweet',
    file: '/assets/x/funding-200k.png',
    bestTime: '6:00 PM IST',
    tweet:
      "Six account sizes. One goal: getting you funded.\n\nFrom $59 challenges all the way to $200K in capital.\n\nPick your size. Pass. Get paid.\n\nWhich size are you starting with?\n\nthepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 5,
    phase: xPhases[0].name,
    title: 'Poll — Biggest Prop Firm Pain',
    format: 'Poll',
    bestTime: '7:00 PM IST',
    tweet:
      "Traders: what's the WORST thing a prop firm has done to you?\n\n[Poll options]\n• Slow / denied payout\n• Rules changed after passing\n• Hidden terms in fine print\n• Platform issues on purpose\n\n(We built TPP to kill all four.)",
    hashtags: '',
  },
  {
    day: 6,
    phase: xPhases[0].name,
    title: '90% Profit Split',
    format: 'Image Tweet',
    file: '/assets/x/profit-split-90.png',
    bestTime: '6:30 PM IST',
    tweet:
      "Your edge. Your money.\n\nKeep up to 90% of everything you make on a TPP funded account.\n\nWe only win when you win. That's the whole model.\n\nthepeopleprop.live",
    hashtags: brand,
  },

  // ── Phase 2 — Proof & Trust ───────────────────────────────────
  {
    day: 7,
    phase: xPhases[1].name,
    title: 'Payouts in Under 24 Hours',
    format: 'Image Tweet',
    file: '/assets/x/payouts-24h.png',
    bestTime: '6:00 PM IST',
    tweet:
      "TPP average payout time: under 24 hours.\nIndustry average: 5–14 days.\n\nWhy are you waiting two weeks for YOUR money?\n\nQuote this with the longest a prop firm has ever made you wait.",
    hashtags: '',
  },
  {
    day: 8,
    phase: xPhases[1].name,
    title: 'Payout Proof — $120K',
    format: 'Image Tweet',
    file: '/assets/x/payout-proof-120k.png',
    bestTime: '6:30 PM IST',
    tweet:
      "$120,000. One trader. One payout.\n\nThis is what happens when discipline meets real capital.\n\nWe don't hide our numbers. We post them.\n\nYou could be next → thepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 9,
    phase: xPhases[1].name,
    title: 'Payout Guarantee — 3 Days or +$250',
    format: 'Image Tweet',
    file: '/assets/x/payout-guarantee.png',
    bestTime: '7:00 PM IST',
    tweet:
      "Our payout guarantee, in writing:\n\nPaid within 3 business days — or we ADD $250 to your payout.\n\nNo other prop firm puts money behind their promise.\n\nScreenshot this. Hold us to it.",
    hashtags: '',
  },
  {
    day: 10,
    phase: xPhases[1].name,
    title: 'Milestone — $2.5M Paid',
    format: 'Image Tweet',
    file: '/assets/x/milestone-2-5m.png',
    bestTime: '6:00 PM IST',
    tweet:
      "$2,500,000 paid to traders. And counting.\n\nEvery single dollar went to a real trader who proved their edge.\n\nThank you to our community. Next stop: $5M.",
    hashtags: brand,
  },
  {
    day: 11,
    phase: xPhases[1].name,
    title: 'Hot Take — Fee vs Partner',
    format: 'Quote Bait',
    bestTime: '8:00 PM IST',
    tweet:
      "Most prop firms make money when you FAIL.\n\nChallenge fees are the product. Funded traders are a cost.\n\nAt TPP the model is flipped: we only make real money when funded traders get paid and come back.\n\nAsk your prop firm what % of revenue comes from payouts vs fees. Watch them dodge.",
    hashtags: '',
  },
  {
    day: 12,
    phase: xPhases[1].name,
    title: 'Trade The News',
    format: 'Image Tweet',
    file: '/assets/x/trade-the-news.png',
    bestTime: '6:30 PM IST',
    tweet:
      "Yes, you can trade the news at TPP.\n\nNFP. CPI. FOMC. No restrictions, no blackout windows, no invalidated profits.\n\nYour strategy, your rules. We just fund it.",
    hashtags: brand,
  },
  {
    day: 13,
    phase: xPhases[1].name,
    title: 'Receipts Thread — How Payouts Work',
    format: 'Thread',
    bestTime: '7:00 PM IST',
    tweet:
      "\"Prop firms never actually pay.\"\n\nWrong. Bad firms don't pay. Here's exactly how a TPP payout works, step by step: 🧵\n\n---\n\n1/ You trade and hit your profit target on your funded account. No minimum days games, no consistency-rule ambushes.\n\n---\n\n2/ You hit \"Request Payout\" in your dashboard. One click. No forms, no interviews, no \"compliance review\" black hole.\n\n---\n\n3/ Money lands in your account in under 24 hours on average. Guaranteed within 3 business days — or we add $250.\n\n---\n\n4/ We post the proof publicly. Every week. Because payout proof shouldn't be a marketing gimmick — it should be an audit trail.\n\n---\n\n5/ That's it. Trade → Request → Paid.\n\nThree steps. Zero drama.\n\nthepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 14,
    phase: xPhases[1].name,
    title: 'Weekly Payout Recap #1',
    format: 'Tweet',
    bestTime: '5:00 PM IST',
    tweet:
      "WEEKLY PAYOUT RECAP\n\n→ Total paid this week: $312,000\n→ Fastest payout: 4 hours 12 minutes\n→ Largest payout: $18,400\n→ Countries paid: 23\n\nEvery week we publish the numbers. Every week they grow.\n\n(Update these numbers with your real weekly stats before posting.)",
    hashtags: brand,
  },

  // ── Phase 3 — Value & Virality ────────────────────────────────
  {
    day: 15,
    phase: xPhases[2].name,
    title: 'Education Thread — Pass Any Challenge',
    format: 'Thread',
    bestTime: '6:30 PM IST',
    tweet:
      "95% of traders fail prop firm challenges.\n\nNot because they can't trade — because they ignore 5 boring rules.\n\nHow to pass any challenge (from the firm that grades them): 🧵\n\n---\n\n1/ Risk 0.5–1% per trade. Max.\n\nThe challenge isn't a race. A 10% target with 1% risk needs just 10-15 good trades. You have unlimited time at TPP.\n\n---\n\n2/ Trade ONE setup.\n\nThe traders who pass trade the same pattern over and over. The ones who fail trade everything that moves.\n\n---\n\n3/ Stop after 2 losses in a day.\n\nRevenge trading has killed more challenges than bad strategies ever will. The market opens again tomorrow.\n\n---\n\n4/ Size DOWN when you're close to target.\n\nAt 8% of a 10% target, halve your risk. Blowing up at the finish line is the most painful way to fail.\n\n---\n\n5/ Journal every trade.\n\nData beats feelings. If you can't say why you entered, you gambled.\n\n---\n\n6/ That's the whole secret. Discipline, not brilliance.\n\nReady to prove it? Challenges start at $9.\n\nthepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 16,
    phase: xPhases[2].name,
    title: 'Discipline Pays',
    format: 'Image Tweet',
    file: '/assets/x/discipline-pays.png',
    bestTime: '8:00 AM IST',
    tweet:
      "Motivation gets you started.\nDiscipline gets you paid.\n\nThe traders cashing payouts every month aren't the smartest — they're the most consistent.",
    hashtags: '',
  },
  {
    day: 17,
    phase: xPhases[2].name,
    title: 'Poll — Account Size',
    format: 'Poll',
    bestTime: '7:00 PM IST',
    tweet:
      "If we handed you a funded account right now, which size could you ACTUALLY handle without blowing it?\n\n[Poll options]\n• $10K — still learning\n• $25K — comfortable\n• $100K — proven edge\n• $200K — built different\n\nHonest answers only.",
    hashtags: '',
  },
  {
    day: 18,
    phase: xPhases[2].name,
    title: 'Hot Take — Consistency Rules',
    format: 'Quote Bait',
    bestTime: '8:00 PM IST',
    tweet:
      "\"Consistency rules\" at most prop firms aren't about protecting you.\n\nThey're a legal reason to deny your payout after you've already won.\n\nIf a rule only ever activates AFTER you're profitable, it was never a risk rule. It's a refund policy — for them.",
    hashtags: '',
  },
  {
    day: 19,
    phase: xPhases[2].name,
    title: 'One Step Challenge',
    format: 'Image Tweet',
    file: '/assets/x/one-step-challenge.png',
    bestTime: '6:00 PM IST',
    tweet:
      "One step. One target. Funded.\n\nNo phase 2. No verification round. No moving goalposts.\n\nHit your target once and start trading real capital.\n\nSimple beats complicated. Every time.",
    hashtags: brand,
  },
  {
    day: 20,
    phase: xPhases[2].name,
    title: 'Red Flags Thread',
    format: 'Thread',
    bestTime: '7:00 PM IST',
    tweet:
      "Before you buy a challenge from ANY prop firm (including us), check these 7 red flags: 🧵\n\n---\n\n1/ 🚩 No public payout proof. If a firm can't show receipts, there are no receipts.\n\n---\n\n2/ 🚩 Rules that appear AFTER you pass. Demand the full rulebook before you pay. At TPP it's published on the site.\n\n---\n\n3/ 🚩 \"Payouts in 30 days\" — that's not processing time, that's them praying you breach before payday.\n\n---\n\n4/ 🚩 No real company details. No entity name, no address, no faces. You're wiring money to a logo.\n\n---\n\n5/ 🚩 Consistency rules with vague wording. \"Abnormal trading behavior\" = we'll decide later if we feel like paying you.\n\n---\n\n6/ 🚩 Denied payouts in their community. Search \"[firm name] denied payout\" on X before buying. Always.\n\n---\n\n7/ 🚩 Support that vanishes after you pass. Test support BEFORE buying. Ask a hard question. Time the reply.\n\n---\n\nBookmark this checklist. Send it to a trader about to buy a challenge.\n\nWe pass all 7. Verify us: thepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 21,
    phase: xPhases[2].name,
    title: 'Global Community',
    format: 'Image Tweet',
    file: '/assets/x/global-community.png',
    bestTime: '6:00 PM IST',
    tweet:
      "10,000+ traders. 150+ countries. One community.\n\nFrom Mumbai to Manchester to Miami — the people are trading together.\n\nDrop your country flag below. Let's map the movement. 🌍",
    hashtags: brand,
  },
  {
    day: 22,
    phase: xPhases[2].name,
    title: 'Relatable Meme Text',
    format: 'Meme',
    bestTime: '9:00 PM IST',
    tweet:
      "Prop firm challenge day 1: \"I'll only take A+ setups, 0.5% risk, textbook discipline\"\n\nProp firm challenge day 3, after two red trades: \"full margin NAS100 news candle, God will decide\"\n\nBe honest. We've all been there.",
    hashtags: '',
  },

  // ── Phase 4 — Community & Conversion ──────────────────────────
  {
    day: 23,
    phase: xPhases[3].name,
    title: 'GIVEAWAY — 5x $10K Accounts',
    format: 'Image Tweet',
    file: '/assets/x/giveaway-funded-accounts.png',
    bestTime: '6:00 PM IST',
    tweet:
      "GIVEAWAY: 5x $10K FUNDED ACCOUNTS 🎁\n\nTo enter:\n1. Follow @thepeopleprop\n2. Repost this\n3. Tag 3 traders\n\nWinners picked in 5 days. That's it. No forms, no gimmicks.\n\nGood luck. 🍀",
    hashtags: '#giveaway',
  },
  {
    day: 24,
    phase: xPhases[3].name,
    title: 'Trader Spotlight',
    format: 'Tweet',
    bestTime: '6:30 PM IST',
    tweet:
      "TRADER SPOTLIGHT\n\n$5,531 payout. Clean risk management. Zero rule violations.\n\nRequested Monday 10:14 AM. Paid Monday 6:47 PM.\n\nThis is what winning at TPP looks like. Want the spotlight next? Get funded, get paid — we'll handle the rest.\n\n(Swap in your real trader stats before posting.)",
    hashtags: brand,
  },
  {
    day: 25,
    phase: xPhases[3].name,
    title: 'Giveaway Reminder — 48h Left',
    format: 'Tweet',
    bestTime: '7:00 PM IST',
    tweet:
      "48 hours left. ⏳\n\n5 funded accounts are being given away — completely free.\n\nFollow + repost + tag 3 traders on the giveaway post below. That's the whole entry.\n\nDon't watch someone else win your account.\n\n[Quote-tweet your Day 23 giveaway post]",
    hashtags: '',
  },
  {
    day: 26,
    phase: xPhases[3].name,
    title: 'Start With Only $9',
    format: 'Image Tweet',
    file: '/assets/x/start-with-only-9.png',
    bestTime: '6:00 PM IST',
    tweet:
      "$9. That's it.\n\nLess than a food delivery order gets you a real shot at funded capital.\n\nStop saying \"I'll start when I have money.\"\n\nYou have $9. → thepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 27,
    phase: xPhases[3].name,
    title: 'Giveaway Winners + Social Proof',
    format: 'Tweet',
    bestTime: '6:00 PM IST',
    tweet:
      "GIVEAWAY WINNERS 🏆\n\nCongratulations to our 5 new funded traders:\n@winner1 @winner2 @winner3 @winner4 @winner5\n\nCheck your DMs to claim your $10K account.\n\nTo the thousands who entered — the next giveaway is already loading. Stay close.\n\n(Replace handles with real winners.)",
    hashtags: '',
  },
  {
    day: 28,
    phase: xPhases[3].name,
    title: 'AMA — Ask Us Anything',
    format: 'Tweet',
    bestTime: '7:00 PM IST',
    tweet:
      "ASK US ANYTHING. 👇\n\nPayouts, rules, scaling, drawdown, platforms — nothing is off limits.\n\nEvery single question gets answered in the replies.\n\nBest question wins a free challenge.",
    hashtags: '',
  },
  {
    day: 29,
    phase: xPhases[3].name,
    title: 'Flash Sale — 50% Off',
    format: 'Image Tweet',
    file: '/assets/x/flash-sale-50.png',
    bestTime: '5:00 PM IST',
    tweet:
      "LAUNCH OFFER: 50% OFF every challenge. 🔥\n\nCode: FIRSTTPP\n\nThis is the cheapest a TPP challenge will ever be. When it's gone, it's gone.\n\nthepeopleprop.live",
    hashtags: brand,
  },
  {
    day: 30,
    phase: xPhases[3].name,
    title: 'The Movement Recap Thread',
    format: 'Thread',
    bestTime: '6:30 PM IST',
    tweet:
      "30 days ago, The People Prop arrived on X.\n\nHere's what happened — and what's coming next: 🧵\n\n---\n\n1/ We paid traders in under 24 hours. Every time. The receipts are on this timeline.\n\n---\n\n2/ We gave away 5 funded accounts. The winners are already trading them.\n\n---\n\n3/ We published every rule, every number, every payout. No fine print. No surprises.\n\n---\n\n4/ Next month: bigger giveaways, trader spotlights every week, and a payout milestone we can't announce yet. 👀\n\n---\n\n5/ If you've been watching from the sidelines: the 50% launch code FIRSTTPP is still live. For now.\n\nThe people are taking over.\n\nthepeopleprop.live",
    hashtags: brand,
  },
]
