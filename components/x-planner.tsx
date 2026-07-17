'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Copy, Clock } from 'lucide-react'
import { xPlan, xPhases } from '@/lib/x-plan'

function charCount(tweet: string) {
  // For threads, count the first tweet only (the hook)
  const first = tweet.split('\n\n---\n\n')[0]
  return first.length
}

export function XPlanner() {
  const [activePhase, setActivePhase] = useState<string>('All')
  const [copied, setCopied] = useState<number | null>(null)

  const filtered =
    activePhase === 'All'
      ? xPlan
      : xPlan.filter((p) => p.phase === activePhase)

  async function copyTweet(day: number, tweet: string, hashtags: string) {
    const text = hashtags ? `${tweet}\n\n${hashtags}` : tweet
    await navigator.clipboard.writeText(text)
    setCopied(day)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section aria-label="X post planner" className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Filter by phase"
        className="flex flex-wrap gap-2"
      >
        {['All', ...xPhases.map((p) => p.name)].map((phase) => (
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
            {phase === 'All' ? 'All 30 Posts' : phase.replace(' — ', ': ')}
          </button>
        ))}
      </div>

      {activePhase !== 'All' && (
        <p className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">
            {xPhases.find((p) => p.name === activePhase)?.days}:
          </span>{' '}
          {xPhases.find((p) => p.name === activePhase)?.goal}
        </p>
      )}

      <ol className="flex flex-col gap-6">
        {filtered.map((post) => {
          const isThread = post.format === 'Thread'
          const parts = post.tweet.split('\n\n---\n\n')
          const count = charCount(post.tweet)
          const over = count > 280

          return (
            <li
              key={post.day}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:p-5"
            >
              <div className="flex shrink-0 flex-col items-start gap-3">
                {post.file ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted sm:w-64">
                    <Image
                      src={post.file || '/placeholder.svg'}
                      alt={post.title}
                      fill
                      sizes="256px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted sm:w-64">
                    <span className="px-4 text-center text-xs text-muted-foreground">
                      Text-only {post.format.toLowerCase()} — no image needed
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Day {post.day}
                  </span>
                  {post.file && (
                    <a
                      href={post.file}
                      download
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                    >
                      Download image
                    </a>
                  )}
                </div>
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
                  <span
                    className={`text-xs font-medium ${over ? 'text-destructive' : 'text-muted-foreground'}`}
                  >
                    {isThread
                      ? `${parts.length} tweets · hook ${count}/280`
                      : `${count}/280 chars`}
                  </span>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {post.phase}
                </p>

                {isThread ? (
                  <div className="flex flex-col gap-2">
                    {parts.map((part, i) => (
                      <p
                        key={i}
                        className="whitespace-pre-line rounded-lg bg-muted p-3 text-xs leading-relaxed text-foreground"
                      >
                        {part}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="whitespace-pre-line rounded-lg bg-muted p-3 text-xs leading-relaxed text-foreground">
                    {post.tweet}
                  </p>
                )}

                {post.hashtags && (
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {post.hashtags}
                  </p>
                )}
                <button
                  onClick={() => copyTweet(post.day, post.tweet, post.hashtags)}
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
                      {isThread ? 'Copy full thread' : 'Copy tweet'}
                    </>
                  )}
                </button>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
