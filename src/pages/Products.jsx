import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    description: 'Headphones, speakers, chargers, smart home devices, wearables, LED lighting, and electronic accessories.',
    regions: 'Shenzhen, Dongguan',
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    description: 'Clothing, sportswear, uniforms, bags, shoes, home textiles, and fabric sourcing.',
    regions: 'Guangzhou, Shaoxing, Nantong',
    imgId: 'prod-textiles-img-d4e5f6',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    description: 'Office furniture, home furniture, lighting fixtures, decorative items, and kitchenware.',
    regions: 'Foshan, Zhongshan',
    imgId: 'prod-furniture-img-g7h8i9',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    description: 'Custom packaging, corrugated boxes, paper bags, labels, gift boxes, and display stands.',
    regions: 'Dongguan, Shenzhen, Wenzhou',
    imgId: 'prod-packaging-img-j1k2l3',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'industrial',
    name: 'Industrial & Hardware',
    description: 'Hand tools, fasteners, machinery parts, metal fabrication, and plastic injection molding.',
    regions: 'Ningbo, Yongkang, Taizhou',
    imgId: 'prod-industrial-img-m4n5o6',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, hair tools, beauty accessories, and custom packaging.',
    regions: 'Guangzhou, Yiwu',
    imgId: 'prod-beauty-img-p7q8r9',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    description: 'Plush toys, educational toys, baby strollers, car seats, and children\'s accessories.',
    regions: 'Shantou, Dongguan',
    imgId: 'prod-toys-img-s1t2u3',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    description: 'Interior accessories, LED lights, car covers, floor mats, and aftermarket parts.',
    regions: 'Guangzhou, Taizhou, Wenzhou',
    imgId: 'prod-auto-img-v4w5x6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
]

const Products = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            We source across major product categories from China's top manufacturing regions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-text-primary">{cat.name}</h3>
                  <p id={cat.descId} className="mt-2 text-text-body text-sm leading-relaxed">{cat.description}</p>
                  <p className="mt-3 text-xs text-text-muted">
                    <span className="font-medium">Key regions:</span> {cat.regions}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-surface rounded-xl border border-border p-8 text-center">
            <h2 className="text-xl font-bold text-text-primary">Don't See Your Product Category?</h2>
            <p className="mt-2 text-text-body">
              We source virtually any manufactured product from China. Contact us with your specific requirements.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Tell Us What You Need
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
