'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { assets, categories } from '@/lib/assets'

export function AssetGallery() {
  const [active, setActive] = useState<string>('All')

  const filtered =
    active === 'All' ? assets : assets.filter((a) => a.category === active)

  return (
    <section aria-label="Asset library" className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((asset) => (
          <article
            key={asset.file}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-muted">
              <Image
                src={asset.file || '/placeholder.svg'}
                alt={asset.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-card-foreground text-pretty">
                  {asset.name}
                </h3>
                <span className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                  {asset.category}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {asset.description}
              </p>
              <a
                href={asset.file}
                download
                className="mt-auto inline-flex items-center gap-2 self-start rounded-md border border-foreground px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Download className="size-3.5" aria-hidden="true" />
                Download PNG
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
