import { AssetGallery } from '@/components/asset-gallery'
import { assets } from '@/lib/assets'

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 md:px-8 md:py-14">
      <header className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          The People Prop — Luxury Prop Trading Firm
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          TPP Marketing Asset Library
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {assets.length} production-ready cinematic Instagram creatives.
          Filter by category and download any asset as a PNG. Files live in{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            /public/assets
          </code>{' '}
          organized by category folder.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card p-5">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <h2 className="text-sm font-bold text-foreground">
              Brand &amp; Design Kit
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              10-page PDF — logo usage, color system, typography, imagery
              direction and the full social creative library.
            </p>
          </div>
          <a
            href="/brand-kit/tpp-brand-kit.pdf"
            download="TPP-Brand-Kit.pdf"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Download PDF
          </a>
        </div>
      </header>
      <AssetGallery />
      <footer className="mt-14 border-t border-border pt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        thepeopleprop.live
      </footer>
    </main>
  )
}
