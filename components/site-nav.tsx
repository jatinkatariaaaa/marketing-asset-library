'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Asset Library' },
  { href: '/planner', label: 'Content Planner' },
  { href: '/strategy', label: 'Growth Strategy' },
]

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main navigation" className="mb-8 flex flex-wrap gap-2">
      {links.map((link) => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground'
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
