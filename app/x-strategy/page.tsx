import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'X Growth Strategy — TPP Marketing',
  description:
    'Full X (Twitter) growth strategy for The People Prop: content mix, reply-guy engine, giveaway loops, spaces and a 90-day roadmap.',
}

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {number}
        </span>
        <h2 className="text-lg font-bold text-card-foreground text-balance">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
      {children}
    </span>
  )
}

export default function XStrategyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <SiteNav />
      <header className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          The People Prop — thepeopleprop.live
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          X (Twitter) Growth Strategy
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The complete playbook to grow @thepeopleprop on X — modeled on how
          FundingPips and Goat Funded Trader dominate FinTwit, adapted to the
          TPP brand. X is not Instagram: text wins, speed wins, and arguments
          win.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <Section number="1" title="Why X Is Different (and Why It Matters More)">
          <p>
            Instagram is where prop firms look good.{' '}
            <strong className="text-foreground">
              X is where prop firms live or die.
            </strong>{' '}
            FinTwit (financial Twitter) is where traders publicly call out
            denied payouts, share receipts and destroy — or build — firm
            reputations overnight. FundingPips and GFT both post 5–10x per day
            on X vs 1x on Instagram.
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Text-first: a good hot take outperforms a good graphic.</li>
            <li>Speed-first: reply within minutes, not hours. The timeline forgets fast.</li>
            <li>Receipts-first: every claim will be challenged. Post proof before they ask.</li>
            <li>1–2 hashtags max — more actively kills reach on X (opposite of Instagram).</li>
          </ul>
        </Section>

        <Section number="2" title="Content Mix (what FundingPips & GFT actually post)">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong className="text-foreground">Payout receipts — 30%:</strong>{' '}
              payout screenshots, weekly recap numbers, trader spotlights with
              timestamps ({'"requested Monday 10:14, paid 6:47"'}). GFT quote-tweets
              traders celebrating their own payouts — free content, double proof.
            </li>
            <li>
              <strong className="text-foreground">Hot takes & industry callouts — 20%:</strong>{' '}
              opinions about slow payouts, consistency-rule scams, hidden terms.
              These get quote-tweeted, which is X's viral engine.
            </li>
            <li>
              <strong className="text-foreground">Threads — 15%:</strong>{' '}
              education (how to pass, red flags, psychology). Threads earn
              bookmarks and follows — the strongest growth signals on X.
            </li>
            <li>
              <strong className="text-foreground">Engagement bait — 15%:</strong>{' '}
              polls, {'"drop your flag"'}, {'"be honest"'} memes, AMA posts. Replies
              are weighted heavily by the algorithm.
            </li>
            <li>
              <strong className="text-foreground">Offers & giveaways — 10%:</strong>{' '}
              follow + repost + tag giveaways, flash codes, $9 entry.
            </li>
            <li>
              <strong className="text-foreground">Brand creatives — 10%:</strong>{' '}
              the cinematic 16:9 glass/cloud images from the library. Keep the
              grid look consistent with Instagram so the brand is instantly
              recognizable across platforms.
            </li>
          </ul>
        </Section>

        <Section number="3" title="Posting Cadence & Timing">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong className="text-foreground">Minimum 3–5 posts/day</strong>{' '}
              once warmed up (the 30-day planner is 1/day to start — layer in
              replies and quote-tweets on top from day 1).
            </li>
            <li>Prime windows: 6–8 PM IST (India evening + Europe midday + US pre-market) and 8–10 PM IST (US market hours).</li>
            <li>Threads on Tuesday–Thursday evenings; memes and polls late night (9–11 PM IST); payout receipts any time — they always work.</li>
            <li>Never delete a bad-performing post. Volume and consistency beat perfection on X.</li>
          </ul>
        </Section>

        <Section number="4" title="The Reply-Guy Engine (fastest growth at 0 followers)">
          <p>
            With 0 followers, your own posts reach nobody. Replies reach{' '}
            <strong className="text-foreground">everybody</strong>. This is the
            single most important tactic for the first 60 days:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Reply to every big FinTwit account (FundingPips, GFT, FTMO, trading influencers) within 5 minutes of them posting — early replies get the most eyeballs.</li>
            <li>Add value or wit — never {'"check out our firm"'} spam. Smart replies get profile visits; spam gets muted.</li>
            <li>When traders complain about denied payouts or slow firms, reply with empathy + your guarantee. This is warm traffic at its warmest.</li>
            <li>Quote-tweet industry drama with your take. Prop firm drama is FinTwit's favorite content.</li>
            <li>Target: 30–50 quality replies per day. This is a job. It's also how every big firm account actually grew.</li>
          </ul>
        </Section>

        <Section number="5" title="The Giveaway Loop (X edition)">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Entry mechanic: Follow + Repost + Tag 3 traders. Reposts show your giveaway to every entrant's followers — exponential reach.</li>
            <li>Prize: 3–5 funded accounts ($5K–$10K). High perceived value, low real cost.</li>
            <li>Run every 2–3 weeks. Post a 48-hour reminder (biggest entry spike) and a winners post (social proof x2).</li>
            <li>Require winners to DM you — then ask them to tweet about winning. Their followers see a real person winning a real account.</li>
            <li>Pin the giveaway while active; re-pin your best payout proof after.</li>
          </ul>
        </Section>

        <Section number="6" title="Hashtags & Cashtags">
          <p>
            X is the opposite of Instagram: 0–2 hashtags maximum. More reads as
            spam to both users and the algorithm. Rotate from this set:
          </p>
          <div className="flex flex-wrap gap-2">
            <Pill>#propfirm</Pill>
            <Pill>#fundedtrader</Pill>
            <Pill>#proptrading</Pill>
            <Pill>#forex</Pill>
            <Pill>#daytrading</Pill>
            <Pill>#giveaway (giveaways only)</Pill>
            <Pill>$EURUSD / $NAS100 (cashtags on market posts)</Pill>
          </div>
          <p>
            Hot takes and memes perform best with ZERO hashtags — they should
            read like a person talking, not a brand advertising.
          </p>
        </Section>

        <Section number="7" title="Spaces, Communities & DMs">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong className="text-foreground">X Spaces (from month 2):</strong>{' '}
              weekly {'"Payout & Prop Talk"'} space. Co-host with a micro influencer
              for shared audiences. Record and clip the best moments.
            </li>
            <li>
              <strong className="text-foreground">Communities:</strong> join the big
              forex/futures Communities and post value there — Community posts
              reach non-followers.
            </li>
            <li>
              <strong className="text-foreground">DMs:</strong> welcome-DM new
              followers with a discount code. Answer every payout question in
              public first, then move to DM — public support IS marketing.
            </li>
          </ul>
        </Section>

        <Section number="8" title="Influencers & Affiliates">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Partner with 5–10 FinTwit micro accounts (5K–50K followers) — pay with funded accounts + affiliate commission instead of cash.</li>
            <li>Unique discount code per influencer — fully trackable revenue, exactly how GFT scaled.</li>
            <li>Have influencers post their own TPP payout receipts — third-party proof converts 10x better than brand posts.</li>
            <li>Retweet every influencer payout to your timeline — their audience follows the money.</li>
          </ul>
        </Section>

        <Section number="9" title="KPIs — Measure What Converts">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li><strong className="text-foreground">Profile visits & link clicks</strong> — the real conversion signal, not follower count.</li>
            <li><strong className="text-foreground">Bookmarks per thread</strong> — strongest follow-intent signal on X. Threads should lead.</li>
            <li><strong className="text-foreground">Quote-tweets on hot takes</strong> — the virality metric. One good QT chain beats 100 likes.</li>
            <li><strong className="text-foreground">Reply-to-impression ratio</strong> — engagement bait should hit 1 reply per 100 impressions.</li>
            <li><strong className="text-foreground">Code redemptions</strong> — ties X directly to revenue. Review weekly, double down on the top 20%.</li>
          </ul>
        </Section>

        <Section number="10" title="90-Day Roadmap">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong className="text-foreground">Days 1–30 (Foundation):</strong>{' '}
              Complete profile setup, pin the launch tweet, follow the 30-day
              planner + 30 replies/day. First giveaway Day 23. Target: 500–1,500
              followers.
            </li>
            <li>
              <strong className="text-foreground">Days 31–60 (Acceleration):</strong>{' '}
              Scale to 3–5 posts/day. Restart the planner loop with fresh
              numbers. Onboard 5 FinTwit affiliates. Second giveaway. Start
              weekly Spaces. Target: 3,000–7,000 followers.
            </li>
            <li>
              <strong className="text-foreground">Days 61–90 (Conversion):</strong>{' '}
              Daily payout receipts, weekly spotlight threads, affiliate
              leaderboard public. Retarget engaged users with offer posts.
              Target: 10,000+ followers and measurable challenge sales from X.
            </li>
          </ul>
        </Section>

        <Section number="11" title="Non-Negotiable Rules">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Never argue with a trader complaining about TPP in public without receipts — resolve loudly and generously. One handled complaint is worth 10 payout posts.</li>
            <li>Every payout claim must be real and provable. FinTwit fact-checks everything, forever.</li>
            <li>Keep the visual identity locked: cloud/glass 16:9 creatives, lime accent, TPP icon, thepeopleprop.live on every image.</li>
            <li>Match the numbers across platforms — if Instagram says $2.5M paid, X must say the same. Inconsistency reads as fraud.</li>
            <li>Include risk disclaimers where required and comply with financial promotion rules in your target markets.</li>
          </ul>
        </Section>
      </div>

      <footer className="mt-14 border-t border-border pt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        thepeopleprop.live
      </footer>
    </main>
  )
}
