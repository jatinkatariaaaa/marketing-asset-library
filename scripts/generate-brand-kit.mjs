import PDFDocument from 'pdfkit'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(process.cwd())
const IG = path.join(ROOT, 'public/assets/instagram')
const OUT_DIR = path.join(ROOT, 'public/brand-kit')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
const OUT = path.join(OUT_DIR, 'tpp-brand-kit.pdf')

// Brand palette
const LIME = '#C6F430'
const BLACK = '#0E0F0C'
const CHARCOAL = '#2A2B26'
const GRAY = '#6B6E63'
const OFFWHITE = '#F7F7F2'
const WHITE = '#FFFFFF'

const W = 595.28 // A4 portrait
const H = 841.89
const M = 48 // margin

const doc = new PDFDocument({ size: 'A4', margin: 0, info: { Title: 'The People Prop — Brand & Design Kit', Author: 'The People Prop' } })
doc.pipe(fs.createWriteStream(OUT))

const img = (name) => path.join(IG, name)

function pageBg(color = OFFWHITE) {
  doc.rect(0, 0, W, H).fill(color)
}

function footer(pageLabel, dark = false) {
  const c = dark ? '#9BA090' : GRAY
  doc.font('Helvetica').fontSize(8).fillColor(c)
  doc.text('THE PEOPLE PROP — BRAND & DESIGN KIT', M, H - 36, { continued: false })
  doc.text('THEPEOPLEPROP.LIVE', W - M - 150, H - 36, { width: 150, align: 'right' })
  doc.text(pageLabel, 0, H - 36, { width: W, align: 'center' })
}

function chip(x, y, w, h, fill, radius = 8) {
  doc.roundedRect(x, y, w, h, radius).fill(fill)
}

function sectionLabel(text, y, color = GRAY) {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(color)
  doc.text(text.toUpperCase(), M, y, { characterSpacing: 2 })
}

// ---------------------------------------------------------------- COVER
pageBg(BLACK)
// lime accent bar
doc.rect(0, 0, W, 6).fill(LIME)
// logo mark
chip(M, 90, 64, 64, LIME, 14)
doc.font('Helvetica-Bold').fontSize(24).fillColor(BLACK)
doc.text('TPP', M, 110, { width: 64, align: 'center' })

doc.font('Helvetica-Bold').fontSize(11).fillColor(LIME)
doc.text('LUXURY PROP TRADING FIRM', M, 190, { characterSpacing: 3 })

doc.font('Helvetica-Bold').fontSize(52).fillColor(WHITE)
doc.text('THE PEOPLE', M, 216)
doc.text('PROP', M, 274)
doc.font('Helvetica-Bold').fontSize(52).fillColor(LIME)
doc.text('BRAND & DESIGN KIT', M, 332, { width: W - M * 2 })

doc.font('Helvetica').fontSize(12).fillColor('#B9BDAE')
doc.text('Visual identity guidelines, color system, typography,\nimagery direction and social creative standards.', M, 470, { lineGap: 4 })

// cover image strip
const coverImgs = ['join-the-movement.png', 'payout-proof.png', 'scale-without-limits.png']
const stripY = 560
const stripW = (W - M * 2 - 16 * 2) / 3
coverImgs.forEach((f, i) => {
  const x = M + i * (stripW + 16)
  try {
    doc.image(img(f), x, stripY, { width: stripW, height: stripW, cover: [stripW, stripW] })
    doc.rect(x, stripY, stripW, stripW).lineWidth(1).stroke('#33352E')
  } catch {}
})

doc.font('Helvetica').fontSize(9).fillColor('#7A7E70')
doc.text('VERSION 1.0 — 2026', M, H - 60, { characterSpacing: 2 })
footer('', true)

// ---------------------------------------------------------------- BRAND OVERVIEW
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('01 — Brand Overview', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('Who We Are', M, 80)

doc.font('Helvetica').fontSize(11).fillColor(CHARCOAL)
doc.text(
  'The People Prop (TPP) is a luxury prop trading firm built for disciplined traders. We fund real traders with real capital — up to $200,000 — and reward performance with payouts processed in under 24 hours and profit splits of up to 90%.',
  M, 128, { width: W - M * 2, lineGap: 5 }
)

doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text('Brand Essence', M, 210)
const essence = [
  ['TRADE. PROVE. EARN.', 'Our core promise: prove your edge, get funded, keep your profits.'],
  ['TRADERS. TRUST. FREEDOM.', 'The values that anchor every decision and every creative.'],
  ['DISCIPLINE PAYS.', 'The mindset we celebrate — patience and consistency over luck.'],
]
let ey = 238
essence.forEach(([title, desc]) => {
  doc.circle(M + 4, ey + 6, 3).fill(LIME)
  doc.font('Helvetica-Bold').fontSize(11).fillColor(BLACK)
  doc.text(title, M + 18, ey, { characterSpacing: 1 })
  doc.font('Helvetica').fontSize(10).fillColor(GRAY)
  doc.text(desc, M + 18, ey + 15, { width: W - M * 2 - 18 })
  ey += 48
})

doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text('Voice & Tone', M, ey + 10)
doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text(
  'Confident, direct and aspirational. Short declarative sentences. We speak like a performance coach, not a salesman. Every line earns its place — no filler, no hype without proof.',
  M, ey + 36, { width: W - M * 2, lineGap: 4 }
)

// key numbers band
const bandY = ey + 110
chip(M, bandY, W - M * 2, 92, BLACK, 12)
const stats = [['$200K', 'MAX FUNDING'], ['90%', 'PROFIT SPLIT'], ['<24H', 'PAYOUTS'], ['10,000+', 'TRADERS']]
const statW = (W - M * 2) / 4
stats.forEach(([num, label], i) => {
  const x = M + i * statW
  doc.font('Helvetica-Bold').fontSize(20).fillColor(LIME)
  doc.text(num, x, bandY + 22, { width: statW, align: 'center' })
  doc.font('Helvetica').fontSize(8).fillColor('#B9BDAE')
  doc.text(label, x, bandY + 50, { width: statW, align: 'center', characterSpacing: 1.5 })
})
footer('01')

// ---------------------------------------------------------------- LOGO
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('02 — Logo & Mark', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('The TPP Mark', M, 80)

doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text(
  'The TPP monogram is the primary brand mark. It appears as a compact app-icon style rounded square, or as standalone lettering in headlines and 3D brand moments.',
  M, 126, { width: W - M * 2, lineGap: 4 }
)

// Logo variants
const variants = [
  { bg: BLACK, fg: LIME, label: 'PRIMARY — LIME ON BLACK' },
  { bg: LIME, fg: BLACK, label: 'INVERSE — BLACK ON LIME' },
  { bg: WHITE, fg: BLACK, label: 'MONO — BLACK ON WHITE', stroke: true },
]
const vW = (W - M * 2 - 16 * 2) / 3
variants.forEach((v, i) => {
  const x = M + i * (vW + 16)
  const y = 186
  chip(x, y, vW, vW, v.bg, 18)
  if (v.stroke) doc.roundedRect(x, y, vW, vW, 18).lineWidth(1).stroke('#DDDFD4')
  doc.font('Helvetica-Bold').fontSize(28).fillColor(v.fg)
  doc.text('TPP', x, y + vW / 2 - 14, { width: vW, align: 'center' })
  doc.font('Helvetica').fontSize(7.5).fillColor(GRAY)
  doc.text(v.label, x, y + vW + 10, { width: vW, align: 'center', characterSpacing: 1 })
})

// Lockup
doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text('Full Lockup', M, 400)
chip(M, 428, W - M * 2, 96, WHITE, 12)
doc.roundedRect(M, 428, W - M * 2, 96, 12).lineWidth(1).stroke('#DDDFD4')
chip(M + 24, 428 + 24, 48, 48, BLACK, 10)
doc.font('Helvetica-Bold').fontSize(16).fillColor(LIME)
doc.text('TPP', M + 24, 428 + 40, { width: 48, align: 'center' })
doc.font('Helvetica-Bold').fontSize(16).fillColor(BLACK)
doc.text('THE PEOPLE PROP', M + 92, 428 + 30, { characterSpacing: 2 })
doc.font('Helvetica-Bold').fontSize(9).fillColor('#8CA023')
doc.text('LUXURY PROP TRADING FIRM', M + 92, 428 + 54, { characterSpacing: 2 })

// Rules
doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text('Usage Rules', M, 560)
const rules = [
  'Keep clear space around the mark equal to the height of the letter “T”.',
  'Never stretch, rotate, add shadows to, or recolor the mark outside the approved palette.',
  'On photography, place the mark in a corner inside a black rounded square for contrast.',
  'Minimum size: 24px digital / 8mm print for the monogram.',
]
let ry = 588
rules.forEach((r) => {
  doc.circle(M + 4, ry + 5, 2.5).fill(LIME)
  doc.font('Helvetica').fontSize(10).fillColor(CHARCOAL)
  doc.text(r, M + 16, ry, { width: W - M * 2 - 16 })
  ry += 30
})
footer('02')

// ---------------------------------------------------------------- COLOR
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('03 — Color System', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('Color Palette', M, 80)
doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text(
  'A tight 5-color system. Chartreuse lime is the hero accent — it should feel like a signal, never wallpaper. Light surfaces dominate; black anchors typography and the mark.',
  M, 126, { width: W - M * 2, lineGap: 4 }
)

const colors = [
  { hex: '#C6F430', name: 'TPP LIME', usage: 'Hero accent. CTAs, highlights, 3D glass elements, key numbers.', dark: true },
  { hex: '#0E0F0C', name: 'INK BLACK', usage: 'Primary text, logo container, dark surfaces.', dark: false },
  { hex: '#F7F7F2', name: 'CLOUD WHITE', usage: 'Primary background. Light, airy surfaces.', dark: true, stroke: true },
  { hex: '#2A2B26', name: 'CHARCOAL', usage: 'Body copy, secondary text on light.', dark: false },
  { hex: '#6B6E63', name: 'STONE GRAY', usage: 'Captions, metadata, dividers.', dark: false },
]
let cy = 180
colors.forEach((c) => {
  chip(M, cy, 120, 72, c.hex, 10)
  if (c.stroke) doc.roundedRect(M, cy, 120, 72, 10).lineWidth(1).stroke('#DDDFD4')
  doc.font('Helvetica-Bold').fontSize(10).fillColor(c.dark ? BLACK : WHITE)
  doc.text(c.hex, M + 12, cy + 46)
  doc.font('Helvetica-Bold').fontSize(12).fillColor(BLACK)
  doc.text(c.name, M + 140, cy + 12, { characterSpacing: 1 })
  doc.font('Helvetica').fontSize(9.5).fillColor(GRAY)
  doc.text(c.usage, M + 140, cy + 32, { width: W - M * 2 - 140 })
  cy += 90
})

doc.font('Helvetica-Bold').fontSize(13).fillColor(BLACK)
doc.text('Ratio', M, cy + 6)
// ratio bar
const ratioY = cy + 32
const ratioW = W - M * 2
chip(M, ratioY, ratioW * 0.62, 26, OFFWHITE, 6)
doc.roundedRect(M, ratioY, ratioW * 0.62, 26, 6).lineWidth(1).stroke('#DDDFD4')
chip(M + ratioW * 0.62 + 4, ratioY, ratioW * 0.24, 26, BLACK, 6)
chip(M + ratioW * 0.62 + ratioW * 0.24 + 8, ratioY, ratioW * 0.14 - 8, 26, LIME, 6)
doc.font('Helvetica').fontSize(8).fillColor(GRAY)
doc.text('62% LIGHT SURFACES', M, ratioY + 34)
doc.text('24% BLACK / TEXT', M + ratioW * 0.62 + 4, ratioY + 34)
doc.text('14% LIME', M + ratioW * 0.62 + ratioW * 0.24 + 8, ratioY + 34)
footer('03')

// ---------------------------------------------------------------- TYPOGRAPHY
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('04 — Typography', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('Type System', M, 80)
doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text(
  'Two-font system: a bold extended grotesque for headlines and a clean geometric sans for body. Digital equivalents: Geist / Inter (headlines: Bold–Black weights; body: Regular–Medium).',
  M, 126, { width: W - M * 2, lineGap: 4 }
)

doc.font('Helvetica-Bold').fontSize(40).fillColor(BLACK)
doc.text('DISCIPLINE PAYS.', M, 190, { characterSpacing: 0.5 })
doc.font('Helvetica').fontSize(8.5).fillColor(GRAY)
doc.text('H1 — HEADLINE / BOLD / ALL CAPS / TIGHT LEADING', M, 240, { characterSpacing: 1.5 })

doc.font('Helvetica-Bold').fontSize(24).fillColor(BLACK)
doc.text('Keep up to 90% of your profits', M, 274)
doc.font('Helvetica').fontSize(8.5).fillColor(GRAY)
doc.text('H2 — SUBHEAD / BOLD / SENTENCE CASE', M, 306, { characterSpacing: 1.5 })

doc.font('Helvetica').fontSize(11).fillColor(CHARCOAL)
doc.text('Body — The right environment builds the right mindset. We fund disciplined traders with real capital and reward performance with fast, transparent payouts.', M, 340, { width: W - M * 2, lineGap: 5 })
doc.font('Helvetica').fontSize(8.5).fillColor(GRAY)
doc.text('BODY — REGULAR / 1.5 LINE HEIGHT', M, 388, { characterSpacing: 1.5 })

doc.font('Helvetica-Bold').fontSize(9).fillColor(BLACK)
doc.text('THEPEOPLEPROP.LIVE', M, 422, { characterSpacing: 3 })
doc.font('Helvetica').fontSize(8.5).fillColor(GRAY)
doc.text('CAPTION / LABEL — BOLD / WIDE LETTER-SPACING', M, 440, { characterSpacing: 1.5 })

// highlight-box convention
doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text('The Lime Highlight', M, 490)
doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text('Key words in headlines sit inside a lime rounded box or are set in lime type — one highlight per headline, always the payoff word.', M, 514, { width: W - M * 2, lineGap: 4 })

const hlY = 560
doc.font('Helvetica-Bold').fontSize(26)
doc.fillColor(BLACK).text('INSTANT ', M, hlY, { continued: true })
const fw = doc.widthOfString('FUNDING.')
chip(doc.x, hlY - 4, fw + 16, 38, LIME, 8)
doc.fillColor(BLACK).text('FUNDING.', doc.x + 8, hlY)
footer('04')

// ---------------------------------------------------------------- IMAGERY
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('05 — Imagery Direction', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('Imagery Style', M, 80)
doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text(
  'Cinematic, photorealistic, full-bleed scenes: bright skies, clouds, futuristic white architecture and dreamlike landscapes. Hero objects are 3D glass sculptures in TPP Lime — trophies, typography, charts and symbols.',
  M, 126, { width: W - M * 2, lineGap: 4 }
)

const moodImgs = [
  ['instant-funding.png', 'ASPIRATION — human moments in epic skies'],
  ['weekly-recap-rewards.png', 'ARCHITECTURE — bright futuristic arenas'],
  ['profit-split-90.png', 'GLASS 3D — lime typography as hero object'],
  ['consistency-beats-luck.png', 'JOURNEY — paths, steps and horizons'],
]
const mW = (W - M * 2 - 16) / 2
let my = 190
moodImgs.forEach(([f, cap], i) => {
  const x = M + (i % 2) * (mW + 16)
  if (i % 2 === 0 && i > 0) my += mW + 42
  try {
    doc.image(img(f), x, my, { width: mW, height: mW, cover: [mW, mW] })
    doc.rect(x, my, mW, mW).lineWidth(1).stroke('#DDDFD4')
  } catch {}
  doc.font('Helvetica').fontSize(7.5).fillColor(GRAY)
  doc.text(cap, x, my + mW + 8, { width: mW, characterSpacing: 1 })
})
footer('05')

// ---------------------------------------------------------------- IMAGERY RULES
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('05 — Imagery Direction (cont.)', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('Imagery Rules', M, 80)

const dos = [
  'Bright, airy light — soft daylight, sunbeams, diffused glow.',
  'One lime glass hero object per frame — trophy, number, symbol.',
  'Dark charcoal text on light areas of the image, never white-on-white.',
  'TPP app-icon mark in a corner; site URL small at the bottom.',
  'Real-world scale and reflections — scenes should feel physical.',
]
const donts = [
  'No dark/black backgrounds for social posts.',
  'No purple, blue-heavy or rainbow palettes.',
  'No cluttered layouts — max one headline + one support line.',
  'No emoji as icons, no stock-photo watermarks.',
  'No flat vector illustration style — imagery is photoreal.',
]
doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text('Do', M, 136)
let dy = 162
dos.forEach((d) => {
  chip(M, dy + 1, 10, 10, LIME, 3)
  doc.font('Helvetica').fontSize(10).fillColor(CHARCOAL)
  doc.text(d, M + 20, dy, { width: W - M * 2 - 20 })
  dy += 28
})
doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text("Don't", M, dy + 14)
dy += 40
donts.forEach((d) => {
  chip(M, dy + 1, 10, 10, '#D65A4A', 3)
  doc.font('Helvetica').fontSize(10).fillColor(CHARCOAL)
  doc.text(d, M + 20, dy, { width: W - M * 2 - 20 })
  dy += 28
})

// anatomy
doc.font('Helvetica-Bold').fontSize(14).fillColor(BLACK)
doc.text('Post Anatomy', M, dy + 16)
const anatomy = [
  ['1', 'TPP mark — top-left, black rounded square.'],
  ['2', 'Headline — dark, bold, top third. One lime payoff word.'],
  ['3', 'Hero — lime glass 3D object, center frame.'],
  ['4', 'Support line + URL — small, bottom, letter-spaced.'],
]
let ay = dy + 44
anatomy.forEach(([n, t]) => {
  chip(M, ay - 2, 18, 18, BLACK, 5)
  doc.font('Helvetica-Bold').fontSize(9).fillColor(LIME)
  doc.text(n, M, ay + 2, { width: 18, align: 'center' })
  doc.font('Helvetica').fontSize(10).fillColor(CHARCOAL)
  doc.text(t, M + 28, ay, { width: W - M * 2 - 28 })
  ay += 26
})
footer('05')

// ---------------------------------------------------------------- SOCIAL SHOWCASE 1
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('06 — Social Creative Library', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('Campaign Creatives', M, 80)
doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text('Offers, funding and payouts — square 1:1 for Instagram feed.', M, 126, { width: W - M * 2 })

const grid1 = [
  'flash-sale-50.png', 'funding-200k.png', 'payouts-24h.png',
  'fee-refund.png', 'one-step-challenge.png', 'free-retry-second-chance.png',
]
const gW = (W - M * 2 - 14 * 2) / 3
let gy = 162
grid1.forEach((f, i) => {
  const x = M + (i % 3) * (gW + 14)
  if (i % 3 === 0 && i > 0) gy += gW + 14
  try {
    doc.image(img(f), x, gy, { width: gW, height: gW, cover: [gW, gW] })
    doc.rect(x, gy, gW, gW).lineWidth(0.5).stroke('#DDDFD4')
  } catch {}
})
footer('06')

// ---------------------------------------------------------------- SOCIAL SHOWCASE 2
doc.addPage()
pageBg()
doc.rect(0, 0, W, 6).fill(LIME)
sectionLabel('06 — Social Creative Library (cont.)', 60)
doc.font('Helvetica-Bold').fontSize(30).fillColor(BLACK)
doc.text('Brand & Community', M, 80)
doc.font('Helvetica').fontSize(10.5).fillColor(CHARCOAL)
doc.text('Milestones, trust, community and motivational creatives.', M, 126, { width: W - M * 2 })

const grid2 = [
  'milestone-2-5m.png', 'top-rewarded-countries.png', 'global-community.png',
  'discipline-pays.png', 'risk-management.png', 'giveaway-funded-accounts.png',
]
gy = 162
grid2.forEach((f, i) => {
  const x = M + (i % 3) * (gW + 14)
  if (i % 3 === 0 && i > 0) gy += gW + 14
  try {
    doc.image(img(f), x, gy, { width: gW, height: gW, cover: [gW, gW] })
    doc.rect(x, gy, gW, gW).lineWidth(0.5).stroke('#DDDFD4')
  } catch {}
})
footer('06')

// ---------------------------------------------------------------- APPLICATION / CLOSING
doc.addPage()
pageBg(BLACK)
doc.rect(0, 0, W, 6).fill(LIME)
doc.font('Helvetica-Bold').fontSize(9).fillColor('#9BA090')
doc.text('07 — CONTACT & ASSETS', M, 60, { characterSpacing: 2 })
doc.font('Helvetica-Bold').fontSize(30).fillColor(WHITE)
doc.text('Working With the Brand', M, 84)

doc.font('Helvetica').fontSize(11).fillColor('#B9BDAE')
doc.text(
  'All master creatives are maintained in the TPP asset library. Always start from approved masters — never recreate the mark or restyle the palette locally.',
  M, 134, { width: W - M * 2, lineGap: 5 }
)

const refs = [
  ['WEBSITE', 'thepeopleprop.live'],
  ['ASSET LIBRARY', '/public/assets/instagram — 28 master creatives (1:1)'],
  ['HERO ACCENT', 'TPP Lime #C6F430'],
  ['PRIMARY TYPE', 'Bold extended sans (Geist / Inter)'],
]
let refY = 210
refs.forEach(([k, v]) => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(LIME)
  doc.text(k, M, refY, { characterSpacing: 2 })
  doc.font('Helvetica').fontSize(12).fillColor(WHITE)
  doc.text(v, M, refY + 16)
  refY += 56
})

// closing image band
const bandImgs = ['new-era-coming.png', 'trade-the-news.png', 'refer-and-earn.png']
const bW = (W - M * 2 - 12 * 2) / 3
bandImgs.forEach((f, i) => {
  const x = M + i * (bW + 12)
  try {
    doc.image(img(f), x, 470, { width: bW, height: bW, cover: [bW, bW] })
  } catch {}
})

doc.font('Helvetica-Bold').fontSize(22).fillColor(LIME)
doc.text('TRADE. PROVE. EARN.', M, 660, { characterSpacing: 2 })
doc.font('Helvetica').fontSize(9).fillColor('#7A7E70')
doc.text('© 2026 THE PEOPLE PROP — ALL RIGHTS RESERVED', M, 694, { characterSpacing: 1.5 })
footer('07', true)

doc.end()
console.log('[v0] Brand kit PDF written to', OUT)
