import React from 'react'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import { productCategories } from '@/data'

export default function ProductsWeSource() {
  return (
    <main>
      <section className="bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Products we source" title="Manufactured products with clear specifications and QC needs" description="SSourcing China supports a wide range of B2B sourcing requests. The best fit is a product where supplier capability, materials, packaging, and quality criteria can be clearly compared." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <article key={category} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm">
                <img alt={category} className="h-44 w-full object-cover" data-strk-img-id={`products-page-category-${index}-f51${index}`} data-strk-img={`[products-category-${index}-title] [products-page-heading]`} data-strk-img-ratio="4x3" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                <div className="p-5">
                  <h2 id={`products-category-${index}-title`} className="text-lg font-bold text-slate-950">{category}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-700">Supplier screening, quotation comparison, samples, production checks, and shipment coordination can be matched to this category.</p>
                </div>
              </article>
            ))}
          </div>
          <p id="products-page-heading" className="sr-only" aria-hidden="true">China sourcing product categories for overseas buyers</p>
        </div>
      </section>
      <section className="bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">What to include in your product brief</h2>
          <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-700 md:grid-cols-2 lg:grid-cols-4">
            <p>Product photos, drawings, or reference links</p>
            <p>Materials, dimensions, tolerances, and packaging</p>
            <p>Target quantity, destination country, and timeline</p>
            <p>Compliance needs, testing standards, and quality concerns</p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
