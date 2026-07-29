import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart devices, and electronic accessories.',
    examples: ['Bluetooth speakers', 'USB cables', 'LED panels', 'Smart home devices', 'Power banks'],
    imgId: 'prod-page-electronics-1a2b',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Clothing, sportswear, uniforms, fabrics, home textiles, bags, and fashion accessories.',
    examples: ['T-shirts & polos', 'Workwear', 'Yoga pants', 'Bed linens', 'Canvas bags'],
    imgId: 'prod-page-textiles-3c4d',
    titleId: 'prod-page-textiles-title',
    descId: 'prod-page-textiles-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    description: 'Office furniture, home furniture, outdoor furniture, decorative items, and storage solutions.',
    examples: ['Office desks', 'Sofas', 'Garden furniture', 'Wall art', 'Storage cabinets'],
    imgId: 'prod-page-furniture-5e6f',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, CNC machines, packaging equipment, food processing, and agricultural machinery.',
    examples: ['CNC routers', 'Packaging machines', 'Printing equipment', 'Welding machines', 'Compressors'],
    imgId: 'prod-page-machinery-7g8h',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, bottles, jars, and printed materials.',
    examples: ['Custom boxes', 'Glass bottles', 'Plastic containers', 'Paper bags', 'Labels & stickers'],
    imgId: 'prod-page-packaging-9i0j',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    id: 'automotive',
    title: 'Auto Parts & Accessories',
    description: 'Car accessories, replacement parts, tools, tires, and aftermarket components.',
    examples: ['Car mats', 'LED headlights', 'Brake pads', 'Phone mounts', 'Seat covers'],
    imgId: 'prod-page-auto-1k2l',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    id: 'construction',
    title: 'Building Materials',
    description: 'Tiles, fittings, hardware, steel, glass, plumbing, and construction tools.',
    examples: ['Ceramic tiles', 'Door handles', 'Faucets', 'Steel pipes', 'Solar panels'],
    imgId: 'prod-page-construction-3m4n',
    titleId: 'prod-page-construction-title',
    descId: 'prod-page-construction-desc',
  },
  {
    id: 'consumer',
    title: 'Consumer Goods & Gifts',
    description: 'Promotional items, kitchenware, toys, stationery, pet products, and seasonal goods.',
    examples: ['Promotional pens', 'Kitchen gadgets', 'Plush toys', 'Notebooks', 'Pet accessories'],
    imgId: 'prod-page-consumer-5o6p',
    titleId: 'prod-page-consumer-title',
    descId: 'prod-page-consumer-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        title="Products We Source"
        subtitle="We source across dozens of product categories. If it is manufactured in China, we can help you find the right supplier."
      />

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-semibold text-neutral-800 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-neutral-600 mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex, idx) => (
                      <span key={idx} className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-neutral-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-neutral-800 mb-3">Don't See Your Product?</h3>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              We source virtually any product manufactured in China. Contact us with your specific requirements and we will find the right supplier.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Tell Us What You Need
            </Link>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Start Sourcing Your Products"
        subtitle="Send us your product requirements and get supplier options within days."
      />
    </>
  )
}

export default Products
