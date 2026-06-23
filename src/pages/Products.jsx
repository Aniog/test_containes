import { Factory } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { productCategories } from '../data/siteContent.js'

export default function Products() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Products we source</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">Supplier sourcing across practical B2B categories</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">We focus on products where supplier capability, specifications, samples, packaging, inspection, and export coordination matter.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Common categories" title="Send us your product brief for review" description="If your category is not listed, we can still assess whether it fits our sourcing network and process." centered />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <article key={category} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <Factory className="h-8 w-8 text-blue-700" />
                <h2 className="mt-5 text-lg font-bold text-slate-950">{category}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
