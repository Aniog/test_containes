import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CTAButton from '@/components/shared/CTAButton'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    items: ['Bluetooth speakers & headphones', 'Phone accessories & chargers', 'Smart home devices', 'LED lighting', 'Wearable tech', 'Power banks'],
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    items: ['Custom clothing & uniforms', 'Sportswear & activewear', 'Bags & luggage', 'Shoes & footwear', 'Home textiles', 'Promotional apparel'],
    imgId: 'prod-textiles-img-b2c3d4',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    items: ['Furniture & decor', 'Kitchenware & cookware', 'Bathroom accessories', 'Garden tools & equipment', 'Storage & organization', 'Lighting fixtures'],
    imgId: 'prod-home-img-c3d4e5',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    items: ['Hand & power tools', 'Fasteners & fittings', 'Machinery parts', 'Safety equipment', 'Electrical components', 'Building materials'],
    imgId: 'prod-industrial-img-d4e5f6',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    items: ['Custom boxes & cartons', 'Flexible packaging', 'Labels & stickers', 'Shopping bags', 'Display stands', 'Promotional materials'],
    imgId: 'prod-packaging-img-e5f6g7',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    items: ['Skincare products', 'Cosmetics & makeup', 'Hair care tools', 'Nail products', 'Packaging & bottles', 'Private label formulation'],
    imgId: 'prod-beauty-img-f6g7h8',
  },
  {
    id: 'automotive',
    title: 'Automotive & Parts',
    items: ['Car accessories', 'Replacement parts', 'Tools & equipment', 'Interior accessories', 'Lighting & electrical', 'Tires & wheels'],
    imgId: 'prod-auto-img-g7h8i9',
  },
  {
    id: 'toys',
    title: 'Toys & Recreation',
    items: ['Educational toys', 'Outdoor play equipment', 'Board games & puzzles', 'RC vehicles & drones', 'Sports equipment', 'Pet products'],
    imgId: 'prod-toys-img-h8i9j0',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We source across dozens of product categories from China's top manufacturing regions. If it's made in China, we can find it for you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3x2] relative">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-${cat.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`prod-${cat.id}-title`} className="text-xl font-semibold text-navy-900 mb-3">{cat.title}</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We source virtually any manufactured product from China. Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
