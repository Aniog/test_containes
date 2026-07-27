import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CTABanner from '@/components/shared/CTABanner'

const categories = [
  { id: 'electronics', title: 'Consumer Electronics', desc: 'Headphones, Bluetooth speakers, chargers, power banks, smart home devices, LED lighting, cables & adapters', imgId: 'prod-page-elec-1a2b3c', titleId: 'prod-page-elec-title', descId: 'prod-page-elec-desc' },
  { id: 'textiles', title: 'Textiles & Apparel', desc: 'Clothing, sportswear, uniforms, fabrics, bags, shoes, fashion accessories, promotional wear', imgId: 'prod-page-text-4d5e6f', titleId: 'prod-page-text-title', descId: 'prod-page-text-desc' },
  { id: 'home-garden', title: 'Home & Garden', desc: 'Furniture, kitchenware, bathroom accessories, home decor, garden tools, outdoor furniture', imgId: 'prod-page-home-7g8h9i', titleId: 'prod-page-home-title', descId: 'prod-page-home-desc' },
  { id: 'industrial', title: 'Industrial & Machinery', desc: 'Hand tools, power tools, auto parts, hardware, industrial equipment, safety gear', imgId: 'prod-page-ind-2j3k4l', titleId: 'prod-page-ind-title', descId: 'prod-page-ind-desc' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, bags, promotional materials, display stands', imgId: 'prod-page-pack-5m6n7o', titleId: 'prod-page-pack-title', descId: 'prod-page-pack-desc' },
  { id: 'beauty', title: 'Beauty & Personal Care', desc: 'Cosmetics, skincare, hair care, beauty tools, packaging, private label products', imgId: 'prod-page-beauty-8p9q0r', titleId: 'prod-page-beauty-title', descId: 'prod-page-beauty-desc' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Educational toys, plush toys, baby gear, children\'s furniture, outdoor play equipment', imgId: 'prod-page-toys-3s4t5u', titleId: 'prod-page-toys-title', descId: 'prod-page-toys-desc' },
  { id: 'sports', title: 'Sports & Outdoor', desc: 'Fitness equipment, camping gear, cycling accessories, water sports, yoga products', imgId: 'prod-page-sports-6v7w8x', titleId: 'prod-page-sports-title', descId: 'prod-page-sports-desc' },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Products We Source</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We source across dozens of product categories from China's leading manufacturing hubs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden bg-surface">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-base font-semibold text-text-primary mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-sm text-text-secondary leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-surface rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Don't See Your Product Category?</h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-6">
              We source virtually any manufactured product from China. If it's made in a factory, we can find it for you. Contact us with your specific requirements.
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline">
              Tell Us What You Need
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

export default Products
