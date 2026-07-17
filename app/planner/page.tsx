import type { Metadata } from 'next'
import { ContentPlanner } from '@/components/content-planner'
import { SiteNav } from '@/components/site-nav'
import { contentPlan } from '@/lib/content-plan'

export const metadata: Metadata = {
  title: 'Content Planner — TPP Marketing',
  description:
    '50-day sequenced Instagram content calendar with ready-to-post captions for The People Prop.',
}

export default function PlannerPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 md:px-8 md:py-14">
      <SiteNav />
      <header className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          The People Prop — Instagram Content Calendar
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          50-Day Posting Sequence
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          All {contentPlan.length} posts arranged in the exact order to publish
          them — 5 phases from launch hype to conversion offers. Every post
          includes a ready-to-copy caption, hashtags, format and the best time
          to post. Post one per day and follow the sequence.
        </p>
      </header>
      <ContentPlanner />
      <footer className="mt-14 border-t border-border pt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        thepeopleprop.live
      </footer>
    </main>
  )
}
