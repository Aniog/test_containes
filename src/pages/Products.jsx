import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check, ArrowRight } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'atelier-d2',
    name: 'Atelier D2',
    category: 'Double Folding Machine',
    blurb:
      'Twin folding beams, mirror-finished blades, and a quiet belt drive — the Atelier D2 is the flagship double folder for the discerning workshop.',
    longDesc:
      'A double folder developed for fabricators who handle architectural panels, cladding, and signage. The upper and lower beams act in perfect sequence so reverse bends require no flip — a rare luxury that saves hours every week.',
    image: { id: 'prod-atelier-d2-detail', titleId: 'prod-atelier-d2-title', descId: 'prod-atelier-d2-desc' },
    specs: [
      ['Working length', '2,500 mm'],
      ['Mild steel capacity', '1.6 mm'],
      ['Stainless capacity', '1.0 mm'],
      ['Aluminium capacity', '2.0 mm'],
      ['Beam type', 'Twin (upper + lower)'],
      ['Drive', 'Belt-driven, sealed gearbox'],
    ],
    highlights: [
      'Reverse-bend without sheet flip',
      'Hand-scraped cast iron beams',
      'Nylon-faced clamps for coated stock',
      'Footswitch and pedal kits included',
    ],
  },
  {
    id: 'studio-s1',
    name: 'Studio S1',
    category: 'Sheet Metal Folder',
    blurb:
      'A compact metal folder for ateliers, prototype shops, and architectural studios. Light-footed, deeply considered.',
    longDesc:
      'The Studio S1 brings the Artitect feel to smaller workshops. Set up in minutes, fold panels with a beautifully balanced manual clamp, and produce work that competes with industrial benches twice its size.',
    image: { id: 'prod-studio-s1-detail', titleId: 'prod-studio-s1-title', descId: 'prod-studio-s1-desc' },
    specs: [
      ['Working length', '1,500 mm'],
      ['Mild steel capacity', '1.2 mm'],
      ['Stainless capacity', '0.8 mm'],
      ['Aluminium capacity', '1.5 mm'],
      ['Beam type', 'Single, manual clamp'],
      ['Footprint', '1,800 × 720 mm'],
    ],
    highlights: [
      'Counter-balanced folding beam',
      'Tool-free angle stop',
      'Fits through a standard doorway',
      'Plug-and-play, no foundation required',
    ],
  },
  {
    id: 'forge-f3',
    name: 'Forge F3',
    category: 'Heavy-Duty Metal Folding Machine',
    blurb:
      'A full-scale metal folder machine for production. CNC-assisted, three-metre capacity, untiring under daily load.',
    longDesc:
      'Designed for fabrication shops running shifts, the Forge F3 is our most capable metal folding machine. A reinforced lower beam, programmable backstop, and robust hydraulic clamp make it the natural choice for HVAC, roofing, and architectural production.',
    image: { id: 'prod-forge-f3-detail', titleId: 'prod-forge-f3-title', descId: 'prod-forge-f3-desc' },
    specs: [
      ['Working length', '3,200 mm'],
      ['Mild steel capacity', '2.5 mm'],
      ['Stainless capacity', '1.5 mm'],
      ['Aluminium capacity', '3.0 mm'],
      ['Beam type', 'CNC-assisted, hydraulic clamp'],
      ['Backstop', '600 mm programmable'],
    ],
    highlights: [
      'Programmable bend sequences',
      'Digital touchscreen controls',
      'Hardened, replaceable blade segments',
      'Fully serviceable with stocked spares',
    ],
  },
]

function ProductDetail({ product, reverse }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className={'lg:col-span-7 ' + (reverse ? 'lg:order-2' : '')}>
        <div className="aspect-[4/3] bg-mist overflow-hidden">
          <img
            alt={product.name}
            data-strk-img-id={product.image.id}
            data-strk-img={`[${product.image.descId}] [${product.image.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={'lg:col-span-5 ' + (reverse ? 'lg:order-1' : '')}>
        <p className="text-xs tracking-[0.35em] uppercase text-ember mb-4">
          {product.category}
        </p>
        <h2
          id={product.image.titleId}
          className="font-display font-light text-ink text-4xl md:text-5xl leading-tight mb-6"
        >
          {product.name}
        </h2>
        <p
          id={product.image.descId}
          className="text-steel text-lg leading-relaxed mb-5"
        >
          {product.blurb}
        </p>
        <p className="text-steel leading-relaxed mb-8">{product.longDesc}</p>

        <ul className="space-y-3 mb-8">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-ink/85">
              <Check size={16} className="text-ember mt-1 flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-ink/10 pt-6 grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
          {product.specs.map(([k, v]) => (
            <div key={k} className="flex flex-col">
              <span className="text-[10px] tracking-[0.25em] uppercase text-steel">{k}</span>
              <span className="text-ink font-medium">{v}</span>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-paper text-xs tracking-widest uppercase hover:bg-ember transition-colors duration-300"
        >
          Enquire about the {product.name}
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 bg-graphite text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          data-strk-bg-id="products-hero-bg-2c8d1f"
          data-strk-bg="[products-page-title] [products-page-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 to-graphite" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-[0.35em] uppercase text-ember-soft mb-5">
            The Collection
          </p>
          <h1 id="products-page-title" className="font-display font-light text-paper text-5xl md:text-6xl leading-[1.05] mb-6 max-w-3xl">
            Three machines, <span className="italic text-ember-soft">one philosophy.</span>
          </h1>
          <p id="products-page-desc" className="text-paper/75 text-lg max-w-2xl leading-relaxed">
            From the compact Studio S1 to the production-ready Forge F3, every
            Artitect folder is hand-finished, calibrated, and built to be the
            quiet centrepiece of your workshop.
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-28 md:space-y-36">
          {PRODUCTS.map((p, i) => (
            <ProductDetail key={p.id} product={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Capabilities band */}
      <section className="bg-mist py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-ember mb-5">
            Across the range
          </p>
          <h2 className="font-display font-light text-ink text-3xl md:text-4xl leading-tight mb-12 max-w-2xl mx-auto">
            Every Artitect folder shares the same <span className="italic text-ember">disciplined detail.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ['Hand-scraped beams', 'Flatness held to 0.05 mm/m'],
              ['Hardened blades', 'Replaceable segmented edges'],
              ['Sealed bearings', 'Lifetime lubrication'],
              ['Nylon-faced clamps', 'Marks left only by you'],
            ].map(([t, d]) => (
              <div key={t}>
                <h3 className="font-display text-ink text-xl mb-2">{t}</h3>
                <p className="text-steel text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
