export type Asset = {
  name: string
  file: string
  category: string
  description: string
}

export const categories = [
  'All',
  'Instagram',
  'Branding',
  'Accounts',
  'Payouts',
  'Discounts',
  'Promotions',
  'Scaling',
  'Trading',
  'Statistics',
  'Referrals',
  'Platform',
] as const

export const assets: Asset[] = [
  {
    name: 'Payout Proof — $120K',
    file: '/assets/instagram/payout-proof.png',
    category: 'Instagram',
    description: 'Highest single payout flex post. Square 1:1.',
  },
  {
    name: 'Flash Sale 50% Off',
    file: '/assets/instagram/flash-sale-50.png',
    category: 'Instagram',
    description: '50% off promo with code FIRSTTPP. Square 1:1.',
  },
  {
    name: 'Instant Funding',
    file: '/assets/instagram/instant-funding.png',
    category: 'Instagram',
    description: 'No evaluation, trade real capital today. Square 1:1.',
  },
  {
    name: '90% Profit Split',
    file: '/assets/instagram/profit-split-90.png',
    category: 'Instagram',
    description: 'Keep up to 90% of your profits. Square 1:1.',
  },
  {
    name: 'Paid in Under 24 Hours',
    file: '/assets/instagram/payouts-24h.png',
    category: 'Instagram',
    description: 'Payout speed creative with trust stats. Square 1:1.',
  },
  {
    name: 'Get Funded up to $200K',
    file: '/assets/instagram/funding-200k.png',
    category: 'Instagram',
    description: 'Six account sizes from $59. Square 1:1.',
  },
  {
    name: 'One Step Challenge',
    file: '/assets/instagram/one-step-challenge.png',
    category: 'Instagram',
    description: 'One step, one target, funded. Square 1:1.',
  },
  {
    name: 'Scale Without Limits',
    file: '/assets/instagram/scale-without-limits.png',
    category: 'Instagram',
    description: 'Auto-scaling $25K to $200K. Square 1:1.',
  },
  {
    name: 'Discipline Pays',
    file: '/assets/instagram/discipline-pays.png',
    category: 'Instagram',
    description: 'Typography-driven motivational post. Square 1:1.',
  },
  {
    name: '100% Fee Refund',
    file: '/assets/instagram/fee-refund.png',
    category: 'Instagram',
    description: 'Full fee refund with first payout. Square 1:1.',
  },
  {
    name: 'Global Community',
    file: '/assets/instagram/global-community.png',
    category: 'Instagram',
    description: '10,000+ traders across 150+ countries. Square 1:1.',
  },
  {
    name: 'TPP Brand Monogram',
    file: '/assets/branding/tpp-brand-monogram.png',
    category: 'Branding',
    description: 'Minimal-text crystal TPP monogram hero for brand posts.',
  },
  {
    name: 'Trade. Prove. Earn.',
    file: '/assets/branding/trade-prove-earn.png',
    category: 'Branding',
    description: 'Flagship brand statement creative.',
  },
  {
    name: 'Instant Funding',
    file: '/assets/accounts/instant-funding.png',
    category: 'Accounts',
    description: 'Instant funding, no evaluation. Up to $200K capital.',
  },
  {
    name: 'One Step Challenge',
    file: '/assets/accounts/one-step-challenge.png',
    category: 'Accounts',
    description: 'One step, one target. 10% profit target, free retry.',
  },
  {
    name: 'Two Step Challenge',
    file: '/assets/accounts/two-step-challenge.png',
    category: 'Accounts',
    description: 'Lowest fee path to full funding.',
  },
  {
    name: 'Account Sizes up to $200K',
    file: '/assets/accounts/account-sizes-200k.png',
    category: 'Accounts',
    description: 'Six sizes from $5K to $200K, starting at $59.',
  },
  {
    name: '24 Hour Payout',
    file: '/assets/payouts/24-hour-payout.png',
    category: 'Payouts',
    description: 'Payouts in under 24 hours. $2.5M+ paid out.',
  },
  {
    name: 'First Payout Fee Refund',
    file: '/assets/payouts/first-payout-refund.png',
    category: 'Payouts',
    description: '100% challenge fee refund with payout #1.',
  },
  {
    name: 'Flash Sale — FIRSTTPP',
    file: '/assets/discounts/flash-sale-firsttpp.png',
    category: 'Discounts',
    description: '50% off + free retry. Code FIRSTTPP.',
  },
  {
    name: 'Limited Time Offer',
    file: '/assets/discounts/limited-time-offer.png',
    category: 'Discounts',
    description: 'Urgency creative for limited-time promos.',
  },
  {
    name: 'Weekend Sale',
    file: '/assets/promotions/weekend-sale.png',
    category: 'Promotions',
    description: 'Two-day weekend sale campaign.',
  },
  {
    name: 'Free Retry',
    file: '/assets/promotions/free-retry.png',
    category: 'Promotions',
    description: 'Second chance on us — free challenge reset.',
  },
  {
    name: 'Scaling Plan',
    file: '/assets/scaling/scaling-plan.png',
    category: 'Scaling',
    description: 'Auto-scaling $25K to $200K.',
  },
  {
    name: 'Up to 90% Profit Split',
    file: '/assets/trading/profit-split-90.png',
    category: 'Trading',
    description: 'Keep up to 90% of profits, paid bi-weekly.',
  },
  {
    name: 'News Trading Allowed',
    file: '/assets/trading/news-trading-allowed.png',
    category: 'Trading',
    description: 'NFP & FOMC allowed. Raw spreads, overnight holds.',
  },
  {
    name: 'Trust Statistics',
    file: '/assets/statistics/trust-statistics.png',
    category: 'Statistics',
    description: '10,000+ traders, 150+ countries, $2.5M+ payouts.',
  },
  {
    name: 'Referral Program',
    file: '/assets/referrals/referral-program.png',
    category: 'Referrals',
    description: 'Invite traders, earn rewards.',
  },
  {
    name: 'TPP Terminal',
    file: '/assets/platform/tpp-terminal.png',
    category: 'Platform',
    description: 'Proprietary platform promotion. Free forever.',
  },
]
