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
          {assets.length} production-ready creatives in the light marble luxury
          style. Filter by category and download any asset as a PNG. Files live
          in{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            /public/assets
          </code>{' '}
          organized by category folder.
        </p>
      </header>
      <AssetGallery />
      <footer className="mt-14 border-t border-border pt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        thepeopleprop.live
      </footer>
    </main>
  )
}
