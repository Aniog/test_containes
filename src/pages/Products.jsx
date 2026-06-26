import React, { useEffect, useRef } from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import CTA from '@/components/shared/CTA'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = 'Products We Source | Categories & Examples | SSourcing China'
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const categories = [
    {
      name: 'Electronics & Components',
      examples: ['PCB assemblies', 'Power supplies', 'Cables and connectors', 'Sensors', 'LED modules', 'Enclosures'],
      notes: 'We work with buyers who have clear specifications and testing requirements.',
    },
    {
      name: 'Home & Kitchen',
      examples: ['Cookware and bakeware', 'Small appliances', 'Storage solutions', 'Tableware', 'Cleaning tools'],
      notes: 'Common requirements include material compliance and packaging standards.',
    },
    {
      name: 'Apparel & Textiles',
      examples: ['Workwear and uniforms', 'Home textiles', 'Outdoor clothing', 'Bags and accessories'],
      notes: 'We verify fabric quality, stitching standards, and sizing consistency.',
    },
    {
      name: 'Industrial Equipment',
      examples: ['Pumps and valves', 'Motors and drives', 'Material handling', 'Welding equipment', 'Safety gear'],
      notes: 'We focus on suppliers with documented quality systems and export experience.',
    },
    {
      name: 'Automotive Parts',
      examples: ['Aftermarket accessories', 'Replacement components', 'Tools and equipment', 'Interior trim'],
      notes: 'We verify IATF or equivalent certifications where required.',
    },
    {
      name: 'Consumer Goods',
      examples: ['Personal care items', 'Pet products', 'Toys and games', 'Fitness equipment', 'Seasonal products'],
      notes: 'We help with compliance documentation for target markets.',
    },
    {
      name: 'Packaging & Materials',
      examples: ['Custom boxes and cartons', 'Protective packaging', 'Labels and tags', 'Retail displays'],
      notes: 'We coordinate material testing and print quality checks.',
    },
    {
      name: 'Lighting & Electrical',
      examples: ['LED fixtures', 'Wiring devices', 'Extension cords', 'Outdoor lighting', 'Smart controls'],
      notes: 'We verify safety certifications and performance specifications.',
    },
  ]

  const process = [
    'Share your product specifications, target price, and volume',
    'We identify suppliers with relevant production experience',
    'We verify capabilities and request initial pricing',
    'You review shortlist and select suppliers for sampling',
    'We manage samples, feedback, and order placement',
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="products-hero-bg"
          data-strk-bg="China warehouse logistics shipping containers"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-lg text-slate-600">We work across a range of product categories. Our focus is on buyers with defined requirements and realistic volume expectations.</p>
        </div>
      </section>

      <section className="section max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="product-card">
              <img
                data-strk-img-id={`product-cat-${idx}`}
                data-strk-img={`product-cat-${idx}-name China product manufacturing`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                alt={cat.name}
                className="w-full h-32 object-cover rounded mb-4"
              />
              <div id={`product-cat-${idx}-name`} className="sr-only">{cat.name}</div>
              <h3 className="font-semibold text-lg mb-3">{cat.name}</h3>
              <ul className="text-sm text-slate-600 space-y-1 mb-4">
                {cat.examples.map((ex, eIdx) => (
                  <li key={eIdx}>• {ex}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 border-t border-slate-100 pt-3">{cat.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="Our Approach to Product Categories" />
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="mb-4">We do not claim expertise in every product. We focus on categories where we have established supplier relationships and understand common quality and compliance requirements.</p>
            <p className="mb-4">For each project, we assess whether we have relevant experience and supplier access. If we cannot add value, we will say so.</p>
            <p>We work best with buyers who can provide clear specifications, target pricing, and quality standards. Vague requirements lead to poor outcomes for everyone.</p>
          </div>
        </div>
      </section>

      <section className="section max-w-4xl mx-auto px-6">
        <SectionHeading title="Getting Started With a Product Inquiry" />
        <div className="bg-white border border-slate-200 rounded-lg p-8">
          <ol className="space-y-4 text-sm">
            {process.map((step, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="font-mono text-slate-400 w-6 flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 pt-6 border-t border-slate-200">
            <a href="/contact" className="inline-flex items-center text-sm font-medium underline">Submit your product requirements →</a>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}

export default Products
