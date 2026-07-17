import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Instagram Growth Strategy — TPP Marketing',
  description:
    'Full Instagram growth strategy for The People Prop: content pillars, posting cadence, giveaway engine, and 90-day roadmap.',
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

export default function StrategyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <SiteNav />
      <header className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          The People Prop — thepeopleprop.live
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          Instagram Growth Strategy
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The complete playbook to grow @thepeopleprop from zero to a
          converting audience — modeled on what works for FundingPips, Goat
          Funded Trader and top prop firms, adapted to the TPP brand.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <Section number="1" title="Positioning: The Anti-Scam Prop Firm">
          <p>
            Every big prop firm sells funding. TPP sells{' '}
            <strong className="text-foreground">trust</strong>. The market is
            full of traders burned by denied payouts and hidden rules — your
            entire feed should scream the opposite: fast payouts, rules in
            writing, proof in public.
          </p>
          <p>
            <strong className="text-foreground">Bio formula:</strong>{' '}
            {'"Prop firm built by traders, for traders | $2.5M+ paid out | Payouts in <24h | Up to 90% split"'}{' '}
            + link to thepeopleprop.live. Use a link-in-bio tool later to split
            traffic between challenges, giveaways and Discord.
          </p>
        </Section>

        <Section number="2" title="Content Pillars (weekly mix)">
          <p>
            What FundingPips and GFT actually post, translated into a weekly
            recipe. Post 1x per day using the 50-day planner sequence:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong className="text-foreground">Payout proof — 30%:</strong>{' '}
              certificates, trader spotlights, weekly recaps, milestones. The
              #1 converter. FundingPips posts these almost daily.
            </li>
            <li>
              <strong className="text-foreground">Offers & product — 25%:</strong>{' '}
              flash sales, BOGO, $9 entry, profit splits, account features.
            </li>
            <li>
              <strong className="text-foreground">Education — 20%:</strong>{' '}
              risk management, psychology, myth vs fact, how payouts work.
              These earn saves — the strongest algorithm signal.
            </li>
            <li>
              <strong className="text-foreground">Community & engagement — 15%:</strong>{' '}
              giveaways, AMAs, leaderboards, country flags in comments.
            </li>
            <li>
              <strong className="text-foreground">Memes & culture — 10%:</strong>{' '}
              red-card posts, relatable trader humor. These earn shares.
            </li>
          </ul>
        </Section>

        <Section number="3" title="Format Strategy: Reels, Carousels, Stories">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong className="text-foreground">Reels (3–4/week) = reach.</strong>{' '}
              Turn payout proofs into 10–15s reels: certificate reveal +
              trending audio + text overlay {'"He requested Monday, paid Tuesday"'}.
              Screen-record the payout dashboard for authenticity.
            </li>
            <li>
              <strong className="text-foreground">Carousels (2–3/week) = saves.</strong>{' '}
              Educational posts (psychology rules, red flags, payout steps)
              as 5–8 slide carousels. Last slide is always a CTA to the site.
            </li>
            <li>
              <strong className="text-foreground">Stories (daily) = trust.</strong>{' '}
              Repost every trader payout, run polls ({'"Which account size next?"'}),
              question boxes, countdowns to offers. Save the best into
              Highlights: Payouts, Rules, Offers, FAQ, Winners.
            </li>
            <li>
              <strong className="text-foreground">Feed posts = brand.</strong>{' '}
              The cinematic cloud/glass creatives in your library keep the
              grid premium and instantly recognizable.
            </li>
          </ul>
        </Section>

        <Section number="4" title="The Giveaway Engine (FundingPips playbook)">
          <p>
            Giveaways are the single fastest follower engine in the prop
            space. Run one every 2–3 weeks:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Prize: 3–5 funded accounts ($5K–$10K) — high perceived value, low real cost.</li>
            <li>Entry: Follow + Like + Tag 3 traders + Share to story for bonus entry.</li>
            <li>Duration: 5–7 days. Announce winners in Stories and a winners post (social proof x2).</li>
            <li>Require winners to claim via your Discord — converts followers into community members.</li>
            <li>Post a reminder ("24 hours left") the day before it closes — biggest entry spike.</li>
          </ul>
        </Section>

        <Section number="5" title="Engagement & Algorithm Tactics">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Reply to every comment within 60 minutes for the first 24 hours of a post.</li>
            <li>End every caption with a question or micro-CTA (comment, tag, save).</li>
            <li>Comment from the TPP account on big trading pages (FundingPips, GFT, trading influencers) — smart, non-spammy replies get profile visits.</li>
            <li>DM every new follower a welcome message with a discount code (manual at first, tools later).</li>
            <li>Pin your 3 best posts: biggest payout proof, active giveaway, current offer.</li>
            <li>Post at 6–8 PM IST weekdays (catches India evening + Europe midday + US morning).</li>
          </ul>
        </Section>

        <Section number="6" title="Hashtags & Discoverability">
          <p>Use 10–15 hashtags: mix of large, medium and niche. Core set:</p>
          <div className="flex flex-wrap gap-2">
            <Pill>#propfirm</Pill>
            <Pill>#fundedtrader</Pill>
            <Pill>#proptrading</Pill>
            <Pill>#forextrader</Pill>
            <Pill>#daytrading</Pill>
            <Pill>#fundedaccount</Pill>
            <Pill>#payoutproof</Pill>
            <Pill>#tradingcommunity</Pill>
            <Pill>#forexindia</Pill>
            <Pill>#futurestrading</Pill>
          </div>
          <p>
            Rotate 3–5 post-specific tags per post (already included in the
            planner captions). Add location tags on trader spotlight posts to
            reach regional audiences.
          </p>
        </Section>

        <Section number="7" title="Influencers & Partnerships">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Partner with 5–10 micro trading influencers (10K–100K followers) — pay with funded accounts + affiliate commission instead of cash.</li>
            <li>Give each a unique discount code (trackable) — this is exactly how GFT scaled.</li>
            <li>Feature influencer payouts as spotlight posts — they reshare, you get their audience.</li>
            <li>Run collab posts (Instagram Collabs) so content appears on both feeds.</li>
          </ul>
        </Section>

        <Section number="8" title="KPIs — Measure What Converts">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li><strong className="text-foreground">Profile visits & link clicks</strong> — the real conversion signal, not follower count.</li>
            <li><strong className="text-foreground">Saves & shares per post</strong> — strongest algorithm signals; educational and meme posts should lead.</li>
            <li><strong className="text-foreground">Reach per reel</strong> — target 3–5x follower count within 60 days.</li>
            <li><strong className="text-foreground">Discount code redemptions</strong> — ties Instagram directly to revenue.</li>
            <li>Review weekly. Double down on the top 20% of posts; make reels out of them.</li>
          </ul>
        </Section>

        <Section number="9" title="90-Day Roadmap">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong className="text-foreground">Days 1–30 (Foundation):</strong>{' '}
              Follow the 50-day planner Phases 1–3. Daily posts + daily
              stories. Set up Highlights. First giveaway on Day 34. Target:
              1,000–2,500 followers.
            </li>
            <li>
              <strong className="text-foreground">Days 31–60 (Acceleration):</strong>{' '}
              Planner Phases 4–5. Add 3 reels/week from payout proofs. Onboard
              first 5 micro-influencers. Second giveaway. Target: 5,000–10,000
              followers.
            </li>
            <li>
              <strong className="text-foreground">Days 61–90 (Conversion):</strong>{' '}
              Restart the content loop with fresh payout numbers. Launch
              affiliate program publicly. Weekly live AMAs. Retargeting ads on
              best organic posts. Target: 15,000+ followers and measurable
              challenge sales from IG.
            </li>
          </ul>
        </Section>

        <Section number="10" title="Non-Negotiable Rules">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Never miss a posting day in the first 50 days — consistency trains both the algorithm and the audience.</li>
            <li>Every payout claim must be real and provable. One fake payout post can kill a prop firm brand permanently.</li>
            <li>Keep the visual identity locked: cloud/glass scenes, lime accent, TPP icon, thepeopleprop.live watermark on every creative.</li>
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
