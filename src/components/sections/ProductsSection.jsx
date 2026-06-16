import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowUpRight } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const PRODUCTS = [
  {
    code: 'AM-DF 320',
    name: 'Double Folding Machine',
    tagline: 'Dual-beam precision folder for high-mix workshops.',
    specs: [
      ['Max length', '3 200 mm'],
      ['Thickness', '0.4 – 3.2 mm'],
      ['Power', 'Servo 7.5 kW'],
      ['Cycle', '4.5 s / bend'],
    ],
    bestFor: 'HVAC ductwork, enclosures, signage',
    descId: 'product-am-df-320-desc',
    titleId: 'product-am-df-320-title',
    imgId: 'product-am-df-320-7c2a91',
  },
  {
    code: 'AM-DF 250',
    name: 'Double Folder',
    tagline: 'Compact dual folder engineered for tight floorspaces.',
    specs: [
      ['Max length', '2 500 mm'],
      ['Thickness', '0.4 – 2.5 mm'],
      ['Power', 'Servo 5.5 kW'],
      ['Cycle', '3.8 s / bend'],
    ],
    bestFor: 'Job shops, custom fabrication',
    descId: 'product-am-df-250-desc',
    titleId: 'product-am-df-250-title',
    imgId: 'product-am-df-250-3f8b22',
  },
  {
    code: 'AM-SF 400',
    name: 'Sheet Metal Folder',
    tagline: 'Heavy-duty sheet metal folder for production lines.',
    specs: [
      ['Max length', '4 000 mm'],
      ['Thickness', '0.5 – 4.0 mm'],
      ['Power', 'Servo 11 kW'],
      ['Cycle', '6 s / bend'],
    ],
    bestFor: 'Cabinetry, panels, industrial enclosures',
    descId: 'product-am-sf-400-desc',
    titleId: 'product-am-sf-400-title',
    imgId: 'product-am-sf-400-9a14cd',
  },
  {
    code: 'AM-SF 320 PRO',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Pro-grade folding with adaptive crowning system.',
    specs: [
      ['Max length', '3 200 mm'],
      ['Thickness', '0.5 – 3.5 mm'],
      ['Power', 'Servo 9 kW'],
      ['Cycle', '5 s / bend'],
    ],
    bestFor: 'Precision cabinets, aerospace panels',
    descId: 'product-am-sf-320pro-desc',
    titleId: 'product-am-sf-320pro-title',
    imgId: 'product-am-sf-320pro-5b87f1',
  },
  {
    code: 'AM-MF 250',
    name: 'Metal Folder',
    tagline: 'Versatile metal folder for stainless and aluminium.',
    specs: [
      ['Max length', '2 500 mm'],
      ['Thickness', '0.5 – 3.0 mm'],
      ['Power', 'Servo 6.5 kW'],
      ['Cycle', '4 s / bend'],
    ],
    bestFor: 'Architectural cladding, kitchen fabrication',
    descId: 'product-am-mf-250-desc',
    titleId: 'product-am-mf-250-title',
    imgId: 'product-am-mf-250-1c63aa',
  },
  {
    code: 'AM-MF 320',
    name: 'Metal Folder Machine',
    tagline: 'Industrial metal folder machine with robotic infeed.',
    specs: [
      ['Max length', '3 200 mm'],
      ['Thickness', '0.5 – 4.0 mm'],
      ['Power', 'Servo 11 kW'],
      ['Cycle', '5.5 s / bend'],
    ],
    bestFor: 'Automated production cells',
    descId: 'product-am-mf-320-desc',
    titleId: 'product-am-mf-320-title',
    imgId: 'product-am-mf-320-4d9e6b',
  },
  {
    code: 'AM-XF 400',
    name: 'Metal Folding Machine',
    tagline: 'Flagship metal folding machine for heavy fabrication.',
    specs: [
      ['Max length', '4 000 mm'],
      ['Thickness', '0.8 – 6.0 mm'],
      ['Power', 'Servo 15 kW'],
      ['Cycle', '7 s / bend'],
    ],
    bestFor: 'Structural steel, heavy industrial',
    descId: 'product-am-xf-400-desc',
    titleId: 'product-am-xf-400-title',
    imgId: 'product-am-xf-400-8f2a73',
  },
]

const ProductsSection = () => {
  const containerRef = useRef(null)
  const [active, setActive] = useState(PRODUCTS[0].code)
  const activeProduct = useMemo(
    () => PRODUCTS.find((p) => p.code === active),
    [active]
  )

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="bg-cream py-24 md:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow>Our Machines</Eyebrow>
          <h2 id="products-title" className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Seven machines.<br />
            <span className="italic text-copper-deep">One standard of precision.</span>
          </h2>
          <p id="products-subtitle" className="mt-6 text-base md:text-lg text-slate max-w-prose">
            From the compact AM-DF 250 to the heavy-duty AM-XF 400, every ARTITECT machine
            shares the same cast-iron backbone, the same servo electronics, and the same
            uncompromising tolerance envelope. Choose by length and thickness — we'll match
            the right machine to your workshop.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <ul className="divide-y divide-line border-t border-b border-line">
              {PRODUCTS.map((product) => {
                const isActive = product.code === active
                return (
                  <li key={product.code}>
                    <button
                      type="button"
                      onClick={() => setActive(product.code)}
                      className={cn(
                        'group w-full text-left flex items-start gap-5 py-5 transition-colors',
                        isActive ? 'bg-bone pl-4 pr-5' : 'px-5 hover:bg-bone/60'
                      )}
                      aria-pressed={isActive}
                    >
                      <span
                        className={cn(
                          'mt-1 font-mono text-xs tracking-widest shrink-0 transition-colors',
                          isActive ? 'text-copper' : 'text-slate-soft'
                        )}
                      >
                        {product.code}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span
                          className={cn(
                            'block font-display text-lg md:text-xl transition-colors',
                            isActive ? 'text-ink' : 'text-slate'
                          )}
                        >
                          {product.name}
                        </span>
                        <span className="block text-sm text-slate-soft mt-1 leading-snug">
                          {product.tagline}
                        </span>
                      </span>
                      <ArrowUpRight
                        className={cn(
                          'h-4 w-4 mt-1 shrink-0 transition-all',
                          isActive ? 'text-copper translate-x-0.5 -translate-y-0.5' : 'text-slate-soft/50'
                        )}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ProductDetail product={activeProduct} />
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductDetail = ({ product }) => {
  const detailRef = useReveal()
  return (
    <article
      ref={detailRef}
      key={product.code}
      className="reveal bg-paper border border-line shadow-card"
    >
      <div className="relative aspect-[16/10] bg-bone overflow-hidden">
        <img
          alt={`${product.name} — ${product.tagline}`}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
          data-strk-img-ratio="16x10"
          data-strk-img-width="1100"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink/90 text-cream px-3 py-1.5 text-xs font-mono tracking-widest">
          {product.code}
        </div>
      </div>

      <div className="p-8 md:p-10">
        <h3 id={product.titleId} className="font-display text-2xl md:text-3xl">
          {product.name}
        </h3>
        <p id={product.descId} className="mt-3 text-slate text-base md:text-[17px] leading-relaxed">
          {product.tagline}
        </p>

        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line">
          {product.specs.map(([label, value]) => (
            <div key={label} className="bg-paper p-4">
              <dt className="text-[11px] uppercase tracking-eyebrow text-slate-soft">{label}</dt>
              <dd className="mt-1.5 font-mono text-ink text-sm md:text-base tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-slate">
            <span className="text-slate-soft">Best for: </span>
            <span className="font-medium text-ink">{product.bestFor}</span>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-5 py-3 text-xs font-medium tracking-widest uppercase hover:bg-ink-soft transition-colors"
          >
            Request Spec Sheet
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProductsSection
