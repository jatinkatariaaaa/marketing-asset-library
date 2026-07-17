export type PlannedPost = {
  day: number
  phase: string
  title: string
  file: string
  format: 'Feed Post' | 'Reel Cover' | 'Carousel Cover' | 'Meme'
  bestTime: string
  caption: string
  hashtags: string
}

export const phases = [
  {
    name: 'Phase 1 — Launch & Awareness',
    days: 'Days 1–7',
    goal: 'Announce TPP, build hype, establish the brand look and drive first profile visits.',
  },
  {
    name: 'Phase 2 — Trust & Payout Proof',
    days: 'Days 8–17',
    goal: 'Prove TPP pays. Payout proof is the #1 conversion driver for prop firms (FundingPips posts these almost daily).',
  },
  {
    name: 'Phase 3 — Education & Engagement',
    days: 'Days 18–27',
    goal: 'Give value, earn saves and shares, and train the algorithm with comments (AMA, myth-busting).',
  },
  {
    name: 'Phase 4 — Community & Social Proof',
    days: 'Days 28–38',
    goal: 'Spotlight traders, run giveaways with tag/share mechanics (the FundingPips growth engine) and build belonging.',
  },
  {
    name: 'Phase 5 — Offers & Scale',
    days: 'Days 39–50',
    goal: 'Convert warm audience with offers, low entry prices, splits and referral loops.',
  },
] as const

const core = '#propfirm #fundedtrader #proptrading #forextrader #daytrading'

export const contentPlan: PlannedPost[] = [
  // ── Phase 1 — Launch & Awareness ──────────────────────────────
  {
    day: 1,
    phase: phases[0].name,
    title: 'New Era Coming — Teaser',
    file: '/assets/instagram/new-era-coming.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Something is coming.\n\nA prop firm built by traders, for traders. No hidden rules. No payout games.\n\nThe people are taking over. 48 hours.\n\nTurn on post notifications so you don't miss it.",
    hashtags: `${core} #comingsoon #tradingcommunity`,
  },
  {
    day: 2,
    phase: phases[0].name,
    title: 'Brand Hero — Start Your Journey',
    file: '/assets/instagram/free-trial-brand.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Introducing The People Prop.\n\nJust you and the charts. Prove your edge, and we fund it.\n\n→ Up to $200K in funding\n→ Up to 90% profit split\n→ Payouts in under 24 hours\n\nYour journey starts at thepeopleprop.live — link in bio.",
    hashtags: `${core} #launch #fundedaccount`,
  },
  {
    day: 3,
    phase: phases[0].name,
    title: 'Join The Movement',
    file: '/assets/instagram/join-the-movement.png',
    format: 'Feed Post',
    bestTime: '7:00 PM IST',
    caption:
      "This isn't just another prop firm. It's a movement.\n\nTraders around the world are done with firms that treat them like a fee, not a partner.\n\nTPP exists for one reason: to back real traders with real capital.\n\nComment \"IN\" if you're joining the movement.",
    hashtags: `${core} #tradingcommunity #jointhemovement`,
  },
  {
    day: 4,
    phase: phases[0].name,
    title: 'Capital for the Fearless',
    file: '/assets/instagram/capital-for-the-fearless.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "Capital for the fearless.\n\nYou bring the discipline. We bring the funding.\n\nNo more risking your savings to prove you can trade. Trade our capital, keep up to 90% of the profits.\n\nLearn more — link in bio.",
    hashtags: `${core} #tradingcapital #riskmanagement`,
  },
  {
    day: 5,
    phase: phases[0].name,
    title: 'Get Funded up to $200K',
    file: '/assets/instagram/funding-200k.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Six account sizes. One goal: getting you funded.\n\nFrom $59 all the way to $200K in trading capital.\n\nPick your size, pass your challenge, get paid.\n\nWhich account size are you starting with? Comment below.",
    hashtags: `${core} #fundedaccount #200k`,
  },
  {
    day: 6,
    phase: phases[0].name,
    title: "What's Inside a Funded Account",
    file: '/assets/instagram/whats-inside-account.png',
    format: 'Carousel Cover',
    bestTime: '7:00 PM IST',
    caption:
      "What you THINK a $200K funded account is vs what it ACTUALLY is.\n\nSwipe to see the full breakdown: buying power, drawdown, split, payout schedule — everything, no fine print.\n\nSave this for when you're ready.",
    hashtags: `${core} #fundedaccount #transparency`,
  },
  {
    day: 7,
    phase: phases[0].name,
    title: 'Flash Sale 50% Off',
    file: '/assets/instagram/flash-sale-50.png',
    format: 'Feed Post',
    bestTime: '5:00 PM IST',
    caption:
      "LAUNCH WEEK ONLY: 50% OFF every challenge.\n\nUse code FIRSTTPP at checkout.\n\nThis is the cheapest a TPP challenge will ever be. When it's gone, it's gone.\n\nLink in bio — thepeopleprop.live",
    hashtags: `${core} #flashsale #discount`,
  },

  // ── Phase 2 — Trust & Payout Proof ───────────────────────────
  {
    day: 8,
    phase: phases[1].name,
    title: 'Paid in Under 24 Hours',
    file: '/assets/instagram/payouts-24h.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Paid in under 24 hours. Not 30 days. Not \"pending review\". 24 hours.\n\nReal traders. Real payouts. $2.5M+ paid worldwide.\n\nThe fastest payout you've ever received from a prop firm — how long did it take? Comment below.",
    hashtags: `${core} #payout #fastpayouts`,
  },
  {
    day: 9,
    phase: phases[1].name,
    title: 'Payout Proof — $120K',
    file: '/assets/instagram/payout-proof.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "$120,000. One trader. One payout.\n\nThis is what happens when discipline meets real capital.\n\nProof of payment on-chain and on record — we don't hide our numbers.\n\nYou could be next. Link in bio.",
    hashtags: `${core} #payoutproof #fundedtraderpayout`,
  },
  {
    day: 10,
    phase: phases[1].name,
    title: 'Milestone — $2.5M Paid',
    file: '/assets/instagram/milestone-2-5m.png',
    format: 'Feed Post',
    bestTime: '7:00 PM IST',
    caption:
      "$2,500,000 paid to traders. And counting.\n\nEvery single dollar went to a real trader who proved their edge.\n\nThank you to our community — this milestone belongs to you.\n\nNext stop: $5M.",
    hashtags: `${core} #milestone #payouts`,
  },
  {
    day: 11,
    phase: phases[1].name,
    title: 'Payout Guarantee — 3 Days',
    file: '/assets/instagram/payout-guarantee-3days.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Our payout guarantee, in writing:\n\nPaid within 3 business days — or we add an extra $250 to your payout.\n\nNo other fine print. That's how confident we are in our process.\n\nScreenshot this. Hold us to it.",
    hashtags: `${core} #payoutguarantee #trust`,
  },
  {
    day: 12,
    phase: phases[1].name,
    title: 'Funded Certificate',
    file: '/assets/instagram/funded-certificate.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "The moment it becomes real.\n\nEvery funded TPP trader receives an official certificate — because passing a challenge deserves recognition.\n\nTag someone who's getting one of these in 2026.",
    hashtags: `${core} #fundedcertificate #fundedtrader`,
  },
  {
    day: 13,
    phase: phases[1].name,
    title: 'Trader Payout Story',
    file: '/assets/instagram/trader-payout-story.png',
    format: 'Feed Post',
    bestTime: '7:00 PM IST',
    caption:
      "Behind every payout is a story.\n\nLate nights. Blown accounts. Lessons learned. And finally — a payout certificate with their name on it.\n\nYour story is still being written. Make the next chapter a funded one.",
    hashtags: `${core} #traderstory #payout`,
  },
  {
    day: 14,
    phase: phases[1].name,
    title: 'Lifetime Total Payouts — $36M+',
    file: '/assets/instagram/lifetime-total-payouts.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Numbers don't lie.\n\n$36M+ in lifetime rewards across 150+ countries.\n\nFrom India to Brazil to the UK — traders everywhere are getting paid.\n\nWhere are you trading from? Drop your flag in the comments.",
    hashtags: `${core} #globalpayouts #tradingworldwide`,
  },
  {
    day: 15,
    phase: phases[1].name,
    title: 'Payout Guarantee — Trade, Pass, Get Rewarded',
    file: '/assets/instagram/payout-guarantee-total.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "Trade. Pass. Get rewarded.\n\nThe formula hasn't changed since day one. $7.2M+ in guaranteed payouts processed.\n\nRequest your payout with one click — no forms, no interviews, no excuses.",
    hashtags: `${core} #payouts #getfunded`,
  },
  {
    day: 16,
    phase: phases[1].name,
    title: 'Reward Split — 2 Payouts',
    file: '/assets/instagram/reward-split-two-payouts.png',
    format: 'Feed Post',
    bestTime: '7:00 PM IST',
    caption:
      "Two payouts. One month. Same trader.\n\nConsistency isn't a buzzword here — it's a paycheck.\n\nCongratulations to another TPP trader stacking rewards back to back.\n\nDouble tap to congratulate them.",
    hashtags: `${core} #payoutproof #consistency`,
  },
  {
    day: 17,
    phase: phases[1].name,
    title: 'Fastest Payouts — Lightning',
    file: '/assets/instagram/fastest-payouts.png',
    format: 'Reel Cover',
    bestTime: '8:00 PM IST',
    caption:
      "Lightning fast. Literally.\n\nAverage TPP payout time: under 24 hours.\nIndustry average: 5–14 days.\n\nWhy wait two weeks for YOUR money?\n\nShare this with a trader still waiting on a payout.",
    hashtags: `${core} #fastpayouts #payoutspeed`,
  },

  // ── Phase 3 — Education & Engagement ─────────────────────────
  {
    day: 18,
    phase: phases[2].name,
    title: 'How Payouts Work — 3 Steps',
    file: '/assets/instagram/how-payouts-work.png',
    format: 'Carousel Cover',
    bestTime: '6:00 PM IST',
    caption:
      "How payouts actually work at TPP:\n\n1. Trade and hit your profit\n2. Request payout from your dashboard\n3. Money in your account within 24 hours\n\nThree steps. Zero drama.\n\nSave this post for your first payout day.",
    hashtags: `${core} #howto #payoutprocess`,
  },
  {
    day: 19,
    phase: phases[2].name,
    title: 'One Step Challenge',
    file: '/assets/instagram/one-step-challenge.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "One step. One target. Funded.\n\nNo phase 2. No verification round. No moving goalposts.\n\nHit your target once and start trading real capital.\n\nSimple beats complicated. Every time.",
    hashtags: `${core} #onestepchallenge #getfunded`,
  },
  {
    day: 20,
    phase: phases[2].name,
    title: 'Red Flags vs Green Flags',
    file: '/assets/instagram/red-flags-green-flags.png',
    format: 'Carousel Cover',
    bestTime: '7:00 PM IST',
    caption:
      "Prop firm RED FLAGS vs GREEN FLAGS.\n\nRed flags: hidden rules, slow payouts, denied withdrawals, rules that change after you pass.\n\nGreen flags: clear rules upfront, 24h payouts, up to 90% split, guarantees in writing.\n\nSave this checklist before you buy your next challenge — from anyone.",
    hashtags: `${core} #redflags #tradingtips`,
  },
  {
    day: 21,
    phase: phases[2].name,
    title: 'Risk Management — Protect',
    file: '/assets/instagram/risk-management.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Your edge means nothing without protection.\n\nRisk management rule #1: survive first, profit second.\n\nRisk 1% per trade and you can be wrong 10 times in a row and still be in the game.\n\nWhat's your max risk per trade? Comment below.",
    hashtags: `${core} #riskmanagement #tradingeducation`,
  },
  {
    day: 22,
    phase: phases[2].name,
    title: 'Myth vs Fact',
    file: '/assets/instagram/myth-vs-fact.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "MYTH: \"Prop firms never actually pay traders.\"\n\nFACT: TPP has paid $2.5M+ to real traders, with proof posted publicly.\n\nBad firms created the myth. We exist to kill it.\n\nWhat other prop firm myths should we bust next? Comment below.",
    hashtags: `${core} #mythvsfact #tradingfacts`,
  },
  {
    day: 23,
    phase: phases[2].name,
    title: 'Discipline Pays',
    file: '/assets/instagram/discipline-pays.png',
    format: 'Feed Post',
    bestTime: '8:00 AM IST',
    caption:
      "Motivation gets you started.\nDiscipline gets you paid.\n\nThe traders cashing payouts every month aren't the smartest — they're the most consistent.\n\nShow up. Follow the plan. Repeat.",
    hashtags: `${core} #discipline #tradingmindset`,
  },
  {
    day: 24,
    phase: phases[2].name,
    title: '3 Rules of Trading Psychology',
    file: '/assets/instagram/trading-psychology-rules.png',
    format: 'Carousel Cover',
    bestTime: '7:00 PM IST',
    caption:
      "3 psychology rules every funded trader lives by:\n\n1. Risk only what's planned — never revenge size\n2. Journal every trade — data beats feelings\n3. Walk away after 2 losses — the market opens again tomorrow\n\nWhich rule do you break most often? Be honest.",
    hashtags: `${core} #tradingpsychology #mindset`,
  },
  {
    day: 25,
    phase: phases[2].name,
    title: 'Trade The News',
    file: '/assets/instagram/trade-the-news.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Yes, you can trade the news at TPP.\n\nNFP, CPI, FOMC — no restrictions, no \"news blackout windows\", no invalidated profits.\n\nYour strategy, your rules. We just fund it.",
    hashtags: `${core} #newstrading #nfp`,
  },
  {
    day: 26,
    phase: phases[2].name,
    title: 'Consistency Beats Luck',
    file: '/assets/instagram/consistency-beats-luck.png',
    format: 'Feed Post',
    bestTime: '8:00 AM IST',
    caption:
      "One lucky trade can make your week.\nConsistency makes your career.\n\nThe path to funded isn't a jackpot — it's a walk you take every single day.\n\nKeep walking.",
    hashtags: `${core} #consistency #tradingjourney`,
  },
  {
    day: 27,
    phase: phases[2].name,
    title: 'Ask Us Anything',
    file: '/assets/instagram/ask-us-anything.png',
    format: 'Feed Post',
    bestTime: '7:00 PM IST',
    caption:
      "ASK US ANYTHING.\n\nPayouts, rules, scaling, drawdown, platforms — nothing is off limits.\n\nDrop your question below and our team will answer every single one in the comments.\n\nThe best question gets a free challenge.",
    hashtags: `${core} #ama #askusanything`,
  },

  // ── Phase 4 — Community & Social Proof ───────────────────────
  {
    day: 28,
    phase: phases[3].name,
    title: 'Global Community',
    file: '/assets/instagram/global-community.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "10,000+ traders. 150+ countries. One community.\n\nFrom Mumbai to Manchester to Miami — the people are trading together.\n\nDrop your country flag below and find traders near you.",
    hashtags: `${core} #tradingcommunity #globaltraders`,
  },
  {
    day: 29,
    phase: phases[3].name,
    title: 'Trader Spotlight — $5,531',
    file: '/assets/instagram/trader-spotlight-payout.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "TRADER SPOTLIGHT.\n\n$5,531 payout. Clean risk management. Zero rule violations.\n\nThis is what winning looks like at TPP.\n\nWant to be featured next? Get funded and get paid — we'll handle the spotlight.",
    hashtags: `${core} #traderspotlight #payoutproof`,
  },
  {
    day: 30,
    phase: phases[3].name,
    title: 'Top 3 Rewarded Traders',
    file: '/assets/instagram/top-rewarded-traders.png',
    format: 'Feed Post',
    bestTime: '7:00 PM IST',
    caption:
      "This week's top 3 rewarded traders.\n\nLeaderboard resets Monday. New week, new chance to see YOUR name here.\n\nCongratulate this week's winners in the comments.",
    hashtags: `${core} #leaderboard #toptraders`,
  },
  {
    day: 31,
    phase: phases[3].name,
    title: 'You Could Be Next',
    file: '/assets/instagram/you-could-be-next.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Every payout we post, someone comments \"one day that'll be me.\"\n\nHere's the truth: the only difference between you and them is a started challenge.\n\nYou could be next. Link in bio.",
    hashtags: `${core} #youcouldbenext #getfunded`,
  },
  {
    day: 32,
    phase: phases[3].name,
    title: 'Weekly Recap — $312K Rewards',
    file: '/assets/instagram/weekly-recap-rewards.png',
    format: 'Feed Post',
    bestTime: '5:00 PM IST',
    caption:
      "WEEKLY RECAP: $312,000 paid to traders in 7 days.\n\nEvery week we publish the numbers. Every week they grow.\n\nFollow so you never miss a recap — and so we never get to hide one.",
    hashtags: `${core} #weeklyrecap #payouts`,
  },
  {
    day: 33,
    phase: phases[3].name,
    title: 'Top Rewarded Countries',
    file: '/assets/instagram/top-rewarded-countries.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "Which countries are getting paid the most?\n\nThis month's top rewarded countries are in. Is yours on the list?\n\nIf not — change that. Link in bio.",
    hashtags: `${core} #globaltraders #payoutmap`,
  },
  {
    day: 34,
    phase: phases[3].name,
    title: 'Giveaway — Tag 3 Traders',
    file: '/assets/instagram/giveaway-tag-3-friends.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "GIVEAWAY: 5x $10K FUNDED ACCOUNTS.\n\nTo enter:\n1. Follow @thepeopleprop\n2. Like this post\n3. Tag 3 traders in the comments\n4. Share this post to your story (bonus entry)\n\nWinners announced Friday in our stories. Good luck.",
    hashtags: `${core} #giveaway #fundedaccountgiveaway`,
  },
  {
    day: 35,
    phase: phases[3].name,
    title: 'Giveaway — Funded Accounts',
    file: '/assets/instagram/giveaway-funded-accounts.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Still time to enter.\n\n5 funded accounts are being given away this week — completely free.\n\nAll entry steps are on yesterday's post. 24 hours left.\n\nDon't watch someone else win your account.",
    hashtags: `${core} #giveaway #lastchance`,
  },
  {
    day: 36,
    phase: phases[3].name,
    title: 'Red Card — Slow Payouts',
    file: '/assets/instagram/red-card-slow-payouts.png',
    format: 'Meme',
    bestTime: '8:00 PM IST',
    caption:
      "Red card for slow payouts.\n\nIf your prop firm takes 2 weeks to pay you, they're not \"processing\" — they're stalling.\n\nTag a trader who needs to see this.",
    hashtags: `${core} #tradingmemes #redcard`,
  },
  {
    day: 37,
    phase: phases[3].name,
    title: 'Your Road to Funded',
    file: '/assets/instagram/journey-to-funded.png',
    format: 'Carousel Cover',
    bestTime: '7:00 PM IST',
    caption:
      "Your road to funded, mapped out:\n\n$59 start → Pass your challenge → Get funded → First payout\n\nIt starts smaller than you think.\n\nSave this roadmap and send it to a friend starting their journey.",
    hashtags: `${core} #roadmap #tradingjourney`,
  },
  {
    day: 38,
    phase: phases[3].name,
    title: 'Free Retry — Second Chance',
    file: '/assets/instagram/free-retry-second-chance.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "Failed your challenge on a technicality? We get it.\n\nTPP gives you a FREE retry — because one bad day shouldn't end your journey.\n\nSecond chances aren't weakness. They're how real traders are made.",
    hashtags: `${core} #freeretry #secondchance`,
  },

  // ── Phase 5 — Offers & Scale ─────────────────────────────────
  {
    day: 39,
    phase: phases[4].name,
    title: 'Start With Only $9',
    file: '/assets/instagram/start-with-only-9.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "$9. That's it.\n\nLess than a food delivery order gets you a real shot at funded capital.\n\nStop saying \"I'll start when I have money.\" You have $9.\n\nLink in bio.",
    hashtags: `${core} #startsmall #9dollars`,
  },
  {
    day: 40,
    phase: phases[4].name,
    title: '$1 Access',
    file: '/assets/instagram/one-dollar-access.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "You've been matched: $1 ACCESS.\n\nFor a limited time, eligible traders can start their TPP journey for one single dollar.\n\nCheck your eligibility — link in bio. This won't last.",
    hashtags: `${core} #onedollar #limitedoffer`,
  },
  {
    day: 41,
    phase: phases[4].name,
    title: 'BOGO — Buy 1 Get 1 Free',
    file: '/assets/instagram/bogo-offer.png',
    format: 'Feed Post',
    bestTime: '5:00 PM IST',
    caption:
      "BUY 1 GET 1 FREE.\n\nBuy any challenge, get a second one free. Two shots at funded for the price of one.\n\nUse your backup wisely — or gift it to a trading partner.\n\nOffer ends Sunday midnight.",
    hashtags: `${core} #bogo #challengeoffer`,
  },
  {
    day: 42,
    phase: phases[4].name,
    title: '90% Profit Split',
    file: '/assets/instagram/profit-split-90.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "You do the work. You keep the money.\n\nUp to 90% profit split at TPP — among the highest in the industry.\n\nOn a $10K profit, that's $9,000 in YOUR pocket.\n\nWhy settle for less?",
    hashtags: `${core} #profitsplit #90percent`,
  },
  {
    day: 43,
    phase: phases[4].name,
    title: '100% Fee Refund',
    file: '/assets/instagram/fee-refund.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "Your challenge fee? You get it back.\n\n100% fee refund with your first payout.\n\nWhich means passing at TPP effectively costs you nothing.\n\nRisk-free isn't a marketing word here. It's math.",
    hashtags: `${core} #feerefund #riskfree`,
  },
  {
    day: 44,
    phase: phases[4].name,
    title: 'No Risk Rules. No Nonsense.',
    file: '/assets/instagram/no-nonsense-rules.png',
    format: 'Feed Post',
    bestTime: '7:00 PM IST',
    caption:
      "No risk rules. No margin rules. No nonsense.\n\n→ 12% max loss\n→ Up to 90% split\n→ No minimum trading days\n\nGet $100K at just $499 with the launch offer. The mountain is waiting.",
    hashtags: `${core} #norules #flexchallenge`,
  },
  {
    day: 45,
    phase: phases[4].name,
    title: 'Max Allocation — $400K',
    file: '/assets/instagram/max-allocation-400k.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Max allocation just DOUBLED: $400K.\n\nStack accounts, scale your size, and manage more capital than most junior hedge fund traders.\n\nDiscount codes in the image. You know what to do.",
    hashtags: `${core} #maxallocation #400k`,
  },
  {
    day: 46,
    phase: phases[4].name,
    title: 'Scale Without Limits',
    file: '/assets/instagram/scale-without-limits.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "Start at $25K. Scale to $200K. Automatically.\n\nHit your targets and we increase your capital — no re-applications, no interviews, no begging.\n\nYour ceiling is your performance. Nothing else.",
    hashtags: `${core} #scalingplan #growyouraccount`,
  },
  {
    day: 47,
    phase: phases[4].name,
    title: 'Instant Funding',
    file: '/assets/instagram/instant-funding.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Skip the challenge. Trade real capital TODAY.\n\nInstant funding for traders who don't want to wait.\n\nNo evaluation. No waiting period. Just you, the charts, and real money.\n\nLink in bio.",
    hashtags: `${core} #instantfunding #norestrictions`,
  },
  {
    day: 48,
    phase: phases[4].name,
    title: 'Raw Spreads 0.0 Pips',
    file: '/assets/instagram/raw-spreads.png',
    format: 'Feed Post',
    bestTime: '6:30 PM IST',
    caption:
      "0.0 pip raw spreads.\n\nScalpers, this one's for you. Every pip you earn is a pip you keep.\n\nTight spreads, deep liquidity, zero games with your fills.",
    hashtags: `${core} #rawspreads #scalping`,
  },
  {
    day: 49,
    phase: phases[4].name,
    title: 'TPP Terminal Platform',
    file: '/assets/instagram/tpp-terminal.png',
    format: 'Reel Cover',
    bestTime: '8:00 PM IST',
    caption:
      "Meet the TPP Terminal.\n\nCharting, execution, journaling and payouts — all in one place.\n\nBuilt for traders who are tired of juggling five different apps.\n\nFull walkthrough in our reels.",
    hashtags: `${core} #tradingplatform #tppterminal`,
  },
  {
    day: 50,
    phase: phases[4].name,
    title: 'Refer and Earn',
    file: '/assets/instagram/refer-and-earn.png',
    format: 'Feed Post',
    bestTime: '6:00 PM IST',
    caption:
      "Get paid to grow the movement.\n\nRefer a trader, earn a commission on every challenge they buy. They save, you earn, everyone wins.\n\nYour referral link is waiting in your dashboard.\n\nTag the trader you're recruiting.",
    hashtags: `${core} #referandearn #affiliate`,
  },
]
