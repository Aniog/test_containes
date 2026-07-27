import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

const categories = [
  { id: 'electronics', title: 'Electronics & Components', titleId: 'prod-page-electronics-title', descId: 'prod-page-electronics-desc', imgId: 'prod-page-electronics-img-a1b2', desc: 'Consumer electronics, PCB assemblies, LED lighting, cables, connectors, smart home devices, and electronic accessories.', examples: ['LED panels', 'USB cables', 'Bluetooth speakers', 'Power banks', 'Smart plugs'] },
  { id: 'textiles', title: 'Textiles & Apparel', titleId: 'prod-page-textiles-title', descId: 'prod-page-textiles-desc', imgId: 'prod-page-textiles-img-c3d4', desc: 'Clothing, fabrics, home textiles, sportswear, uniforms, and fashion accessories from Guangzhou and Zhejiang factories.', examples: ['T-shirts', 'Workwear', 'Bed linens', 'Yoga pants', 'Bags'] },
  { id: 'furniture', title: 'Furniture & Home Goods', titleId: 'prod-page-furniture-title', descId: 'prod-page-furniture-desc', imgId: 'prod-page-furniture-img-e5f6', desc: 'Office furniture, home decor, kitchenware, bathroom fixtures, storage solutions, and outdoor furniture.', examples: ['Office chairs', 'Shelving units', 'Ceramic vases', 'Kitchen tools', 'Garden furniture'] },
  { id: 'machinery', title: 'Machinery & Industrial Parts', titleId: 'prod-page-machinery-title', descId: 'prod-page-machinery-desc', imgId: 'prod-page-machinery-img-g7h8', desc: 'Industrial machinery, CNC machined parts, auto parts, metal fabrication, molds, and tooling.', examples: ['CNC parts', 'Injection molds', 'Hydraulic cylinders', 'Conveyor systems', 'Auto accessories'] },
  { id: 'packaging', title: 'Packaging & Printing', titleId: 'prod-page-packaging-title', descId: 'prod-page-packaging-desc', imgId: 'prod-page-packaging-img-i9j0', desc: 'Custom packaging, corrugated boxes, labels, shopping bags, promotional materials, and display stands.', examples: ['Gift boxes', 'Product labels', 'Paper bags', 'POP displays', 'Blister packs'] },
  { id: 'health', title: 'Health & Beauty', titleId: 'prod-page-health-title', descId: 'prod-page-health-desc', imgId: 'prod-page-health-img-k1l2', desc: 'Cosmetics, skincare, supplements, personal care products, medical devices, and beauty tools.', examples: ['Face masks', 'Serums', 'Makeup brushes', 'Supplements', 'Massage tools'] },
  { id: 'toys', title: 'Toys & Baby Products', titleId: 'prod-page-toys-title', descId: 'prod-page-toys-desc', imgId: 'prod-page-toys-img-m3n4', desc: 'Children toys, educational products, baby gear, plush toys, and outdoor play equipment.', examples: ['Building blocks', 'Plush toys', 'Strollers', 'Puzzles', 'Ride-on toys'] },
  { id: 'construction', title: 'Building & Construction', titleId: 'prod-page-construction-title', descId: 'prod-page-construction-desc', imgId: 'prod-page-construction-img-o5p6', desc: 'Building materials, hardware, plumbing fixtures, tiles, doors, windows, and construction tools.', examples: ['Ceramic tiles', 'Door handles', 'Faucets', 'LED downlights', 'Steel fittings'] },
  { id: 'sports', title: 'Sports & Outdoor', titleId: 'prod-page-sports-title', descId: 'prod-page-sports-desc', imgId: 'prod-page-sports-img-q7r8', desc: 'Fitness equipment, camping gear, bicycles, water sports, and outdoor recreation products.', examples: ['Dumbbells', 'Tents', 'Yoga mats', 'Fishing rods', 'E-bikes'] },
]

const Products = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-3xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p id="products-page-subtitle" className="text-gray-300 text-lg max-w-2xl mx-auto">
            We source across dozens of product categories from China's major manufacturing regions. If it is made in China, we can help you find it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-brand-light rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-brand-dark mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-sm text-brand-muted mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex, idx) => (
                      <span key={idx} className="text-xs bg-white border border-brand-border px-2 py-0.5 rounded text-brand-muted">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Don't See Your Product?</h2>
          <p className="text-brand-muted mb-8 text-lg">We source custom and niche products too. Tell us what you need and we will find it.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-600 transition"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
