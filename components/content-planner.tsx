'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Copy, Clock } from 'lucide-react'
import { contentPlan, phases } from '@/lib/content-plan'

export function ContentPlanner() {
  const [activePhase, setActivePhase] = useState<string>('All')
  const [copied, setCopied] = useState<number | null>(null)

  const filtered =
    activePhase === 'All'
      ? contentPlan
      : contentPlan.filter((p) => p.phase === activePhase)

  async function copyCaption(day: number, caption: string, hashtags: string) {
    await navigator.clipboard.writeText(`${caption}\n\n${hashtags}`)
    setCopied(day)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section aria-label="Content planner" className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Filter by phase"
        className="flex flex-wrap gap-2"
      >
        {['All', ...phases.map((p) => p.name)].map((phase) => (
          <button
            key={phase}
            role="tab"
            aria-selected={activePhase === phase}
            onClick={() => setActivePhase(phase)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              activePhase === phase
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground'
            }`}
          >
            {phase === 'All' ? 'All 50 Posts' : phase.replace(' — ', ': ')}
          </button>
        ))}
      </div>

      {activePhase !== 'All' && (
        <p className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">
            {phases.find((p) => p.name === activePhase)?.days}:
          </span>{' '}
          {phases.find((p) => p.name === activePhase)?.goal}
        </p>
      )}

      <ol className="flex flex-col gap-6">
        {filtered.map((post) => (
          <li
            key={post.day}
            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:p-5"
          >
            <div className="flex shrink-0 flex-col items-start gap-3">
              <div className="relative size-36 overflow-hidden rounded-lg bg-muted sm:size-44">
                <Image
                  src={post.file || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                Day {post.day}
              </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-bold text-card-foreground text-pretty">
                  {post.title}
                </h3>
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                  {post.format}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3" aria-hidden="true" />
                  {post.bestTime}
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {post.phase}
              </p>
              <p className="whitespace-pre-line rounded-lg bg-muted p-3 text-xs leading-relaxed text-foreground">
                {post.caption}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {post.hashtags}
              </p>
              <button
                onClick={() => copyCaption(post.day, post.caption, post.hashtags)}
                className="mt-1 inline-flex items-center gap-2 self-start rounded-md border border-foreground px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {copied === post.day ? (
                  <>
                    <Check className="size-3.5" aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" aria-hidden="true" />
                    Copy caption + hashtags
                  </>
                )}
              </button>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
