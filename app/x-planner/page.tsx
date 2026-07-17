import type { Metadata } from 'next'
import { XPlanner } from '@/components/x-planner'
import { SiteNav } from '@/components/site-nav'
import { xPlan } from '@/lib/x-plan'

export const metadata: Metadata = {
  title: 'X Post Planner — TPP Marketing',
  description:
    '30-day sequenced X (Twitter) content calendar with ready-to-post tweets, threads and polls for The People Prop.',
}

export default function XPlannerPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 md:px-8 md:py-14">
      <SiteNav />
      <header className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          The People Prop — X (Twitter) Content Calendar
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          30-Day X Posting Sequence
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          All {xPlan.length} posts in the exact order to publish them — 4
          phases from arrival to conversion. Tweets, threads, polls and hot
          takes written X-native: short, punchy, max 2 hashtags. Every post is
          one click to copy and paste straight into X.
        </p>
        <div className="mt-2 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-2 text-sm font-bold text-foreground">
            Profile setup (do this first)
          </h2>
          <ul className="flex list-disc flex-col gap-1.5 pl-5 text-xs leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">Handle:</strong>{' '}
              @thepeopleprop — keep it identical to Instagram.
            </li>
            <li>
              <strong className="text-foreground">Bio:</strong>{' '}
              {'"Prop firm built by traders, for traders | $2.5M+ paid | Payouts in <24h | Up to 90% split | Challenges from $9 👇"'}
            </li>
            <li>
              <strong className="text-foreground">Link:</strong>{' '}
              thepeopleprop.live
            </li>
            <li>
              <strong className="text-foreground">Banner:</strong> use the X
              Profile Banner from the Asset Library (resize to 1500x500).
            </li>
            <li>
              <strong className="text-foreground">Pinned tweet:</strong> Day 1
              launch post — replace it with your best payout proof after week 2.
            </li>
          </ul>
        </div>
      </header>
      <XPlanner />
      <footer className="mt-14 border-t border-border pt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        thepeopleprop.live
      </footer>
    </main>
  )
}
