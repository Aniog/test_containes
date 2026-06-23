import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import SectionHeading from '../components/SectionHeading.jsx'
import { productCategories } from '../data/siteContent.js'

export default function ProductsWeSource() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <main ref={containerRef} className="bg-brand-surface text-brand-ink">
      <section className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><SectionHeading id="products-source-title" eyebrow="Products we source" title="Common product categories for sourcing projects" desc="We support products where supplier screening, sample review, quality control, packaging, and shipping coordination can materially affect buyer outcomes." /></div><img alt="Warehouse products ready for export" className="h-80 w-full rounded-3xl bg-slate-200 object-cover shadow-xl" data-strk-img-id="products-source-warehouse-47b2aa" data-strk-img="[products-source-title]" data-strk-img-ratio="4x3" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{productCategories.map((item) => <div key={item} className="rounded-3xl border border-brand-border bg-white p-6 text-brand-ink shadow-sm"><CheckCircle2 className="mb-5 h-6 w-6 text-brand-teal" /><h2 className="font-bold text-brand-ink">{item}</h2><p className="mt-3 text-sm leading-6 text-brand-muted">Supplier screening, sample coordination, inspection planning, and shipment communication can be adapted to this category.</p></div>)}</div></section>
    </main>
  )
}
