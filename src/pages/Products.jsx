import { useEffect, useRef } from 'react'
import SEO from '@/components/layout/SEO'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBA, cables, chargers, batteries, smart devices, and electronic components.',
    examples: ['Smartphones & accessories', 'PCB assemblies', 'Power banks', 'IoT devices'],
    imgId: 'products-electronics-ssourcing-1a2b',
  },
  {
    title: 'Machinery & Industrial Parts',
    description: 'Tools, hardware, mechanical components, industrial equipment, and spare parts.',
    examples: ['Metal parts & fasteners', 'Hydraulic components', 'Industrial tools', 'Automation equipment'],
    imgId: 'products-machinery-ssourcing-3c4d',
  },
  {
    title: 'Home & Kitchen Goods',
    description: 'Furniture, kitchenware, home decor, household items, and lifestyle products.',
    examples: ['Kitchen gadgets', 'Storage organizers', 'Small furniture', 'Home textiles'],
    imgId: 'products-home-ssourcing-5e6f',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Clothing, bags, fabrics, footwear, and fashion accessories for brands and retailers.',
    examples: ['Casual wear', 'Bags & luggage', 'Fabrics', 'Headwear & accessories'],
    imgId: 'products-apparel-ssourcing-7g8h',
  },
  {
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, retail boxes, gift boxes, and printed materials.',
    examples: ['Retail packaging', 'Labels & stickers', 'Gift boxes', 'Paper bags'],
    imgId: 'products-packaging-ssourcing-9i0j',
  },
  {
    title: 'Consumer & Promotional Goods',
    description: 'Promotional products, toys, gifts, sports items, and everyday consumer goods.',
    examples: ['Promotional gifts', 'Toys & games', 'Sports accessories', 'Drinkware'],
    imgId: 'products-consumer-ssourcing-1k2l',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <SEO
        title="Products We Source | China Sourcing Categories | SSourcing China"
        description="SSourcing China sources electronics, machinery, textiles, packaging, home goods, and more from verified suppliers in China."
      />
      <div ref={containerRef}>
        <section className="bg-slate-900 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label text-brand-400">Products We Source</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Product categories we support
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We source across a wide range of industries. Contact us if your product category is not listed — we likely can still help.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-page">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <div key={category.title} className="card overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      alt={category.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={category.imgId}
                      data-strk-img={`[products-hero-title] [products-hero-subtitle] [category-title-${category.title}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-8">
                    <h2 id={`category-title-${category.title}`} className="text-2xl font-bold mb-3">{category.title}</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example) => (
                        <span key={example} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
