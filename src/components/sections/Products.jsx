import React from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

const PRODUCTS = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    short: 'AM-D Series',
    summary:
      'Our flagship double folding machine — two synchronized bending beams fold both edges of a panel in a single pass.',
    bullets: [
      'Two-sided folding in one clamping cycle',
      'Up to 3200 mm bend length, 12 mm mild steel',
      'CNC angle library, 0.05° repeatability',
    ],
    imgId: 'prod-double-folding-machine-1a2b',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
    tag: 'Most popular',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    short: 'AM-DF Series',
    summary:
      'A compact double folder for shops that need fast U- and Z-channel forming without the footprint of a press brake.',
    bullets: [
      'Pneumatic clamping, servo-driven beam',
      'Ideal for HVAC, enclosures, signage',
      'Tool-free setup in under 60 seconds',
    ],
    imgId: 'prod-double-folder-2b3c',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
    tag: 'Shop favorite',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    short: 'AM-S Series',
    summary:
      'A versatile sheet metal folder that swaps between manual, semi-automatic, and fully automated modes on the same frame.',
    bullets: [
      'Three operator modes in one machine',
      '4 to 8 mm capacity, 2500 mm length',
      'Whisper-quiet hydraulic clamping',
    ],
    imgId: 'prod-sheet-metal-folder-3c4d',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
    tag: 'Versatile',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    short: 'AM-SF Series',
    summary:
      'A heavy-duty sheet metal folding machine engineered for long-run production of cabinets, panels, and architectural cladding.',
    bullets: [
      'Industrial cycle rating: 1.2M bends/year',
      'Up to 4000 mm length, 10 mm stainless',
      'Inline measurement + auto-correction',
    ],
    imgId: 'prod-sheet-metal-folding-machine-4d5e',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
    tag: 'Production line',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    short: 'AM-M Series',
    summary:
      'The metal folder that introduced our workshop to the industry — refined through three decades of fabricator feedback.',
    bullets: [
      'Cast iron frame, hand-scraped bed',
      'Hand-cranked or motorized backgauge',
      'Available in 1500 / 2000 / 2500 mm',
    ],
    imgId: 'prod-metal-folder-5e6f',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
    tag: 'Heritage',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    short: 'AM-MF Series',
    summary:
      'A modern metal folder machine with a digital angle library and one-touch recall for repeat production runs.',
    bullets: [
      'Touchscreen HMI with recipe memory',
      'Stores 200+ bend sequences',
      'Network-ready for Industry 4.0 cells',
    ],
    imgId: 'prod-metal-folder-machine-6f7a',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
    tag: 'Connected',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    short: 'AM-X Series',
    summary:
      'Our most precise metal folding machine — a robotic-bend cell that hits angle targets in a single attempt, every attempt.',
    bullets: [
      'Robotic material handling + folding',
      'Closed-loop angle measurement',
      'Lights-out capable with auto-eject',
    ],
    imgId: 'prod-metal-folding-machine-7a8b',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
    tag: 'Flagship',
  },
]

const ProductCard = ({ product, index }) => {
  const isFeature = index === 0
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:shadow-lift ${
        isFeature ? 'lg:col-span-3' : ''
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio={isFeature ? '16x9' : '3x2'}
          data-strk-img-width={isFeature ? '1200' : '600'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge tone="onDark">{product.tag}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/90 px-3 py-1 text-[11px] font-medium tracking-eyebrow uppercase text-ink-soft backdrop-blur">
            {product.short}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3
          id={product.titleId}
          className="font-display text-xl md:text-2xl text-ink leading-tight"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="mt-3 text-[15px] leading-relaxed text-muted text-balance"
        >
          {product.summary}
        </p>

        <ul className="mt-5 flex flex-col gap-2.5">
          {product.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm text-ink-soft"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-line/80 flex items-center justify-between">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-strong transition-colors"
          >
            Request datasheet
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <span className="text-[11px] uppercase tracking-eyebrow text-muted">
            {String(index + 1).padStart(2, '0')} / {PRODUCTS.length}
          </span>
        </div>
      </div>
    </article>
  )
}

const Products = () => {
  return (
    <section id="products" className="bg-bg py-20 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">The Lineup</p>
            <h2
              id="products-section-title"
              className="mt-4 font-display text-3xl md:text-5xl text-ink leading-[1.1] tracking-tight text-balance"
            >
              Seven machines. One obsession with the bend.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] md:text-base text-muted leading-relaxed">
              Every ARTITECT machine — from our entry-level metal folder to
              the robotic metal folding machine cell — is built on the same
              cast iron bed, finished in the same Pennsylvania workshop, and
              tuned by the same hands.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
