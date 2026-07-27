import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    desc: 'Smart devices, audio equipment, accessories, IoT products, and wearables from Shenzhen and Dongguan.',
    items: ['Bluetooth speakers & headphones', 'Smart home devices', 'Phone accessories', 'Wearables', 'Power banks & chargers'],
    imgId: 'prod-electronics-bg-1a2b3c',
  },
  {
    id: 'home-goods',
    name: 'Home & Kitchen',
    desc: 'Cookware, storage, organization, small appliances, and home decor from manufacturers across Guangdong and Zhejiang.',
    items: ['Cookware & bakeware', 'Storage & organization', 'Small kitchen appliances', 'Home decor & textiles', 'Bathroom accessories'],
    imgId: 'prod-home-bg-4d5e6f',
  },
  {
    id: 'furniture',
    name: 'Furniture & Lighting',
    desc: 'Indoor and outdoor furniture, lighting fixtures, and custom designs from the Foshan furniture hub.',
    items: ['Living room furniture', 'Office furniture', 'Outdoor furniture', 'LED lighting', 'Custom furniture design'],
    imgId: 'prod-furniture-bg-7g8h9i',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom boxes, bags, labels, and promotional print materials from specialized factories in Yiwu and Guangdong.',
    items: ['Custom boxes & cartons', 'Paper & plastic bags', 'Labels & stickers', 'Promotional printing', 'Eco-friendly packaging'],
    imgId: 'prod-packaging-bg-0j1k2l',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    desc: 'Garments, fabrics, home textiles, bags, and accessories from factories in Zhejiang, Fujian, and Guangdong.',
    items: ['T-shirts & casual wear', 'Bags & backpacks', 'Bedding & towels', 'Sportswear', 'Custom uniforms'],
    imgId: 'prod-textiles-bg-3m4n5o',
  },
  {
    id: 'hardware',
    name: 'Hardware & Industrial',
    desc: 'Tools, fasteners, metal parts, machinery components, and automotive parts from industrial zones across China.',
    items: ['Hand tools & power tools', 'Fasteners & fittings', 'Metal fabrication', 'Mold making', 'Automotive parts'],
    imgId: 'prod-hardware-bg-6p7q8r',
  },
  {
    id: 'toys',
    name: 'Toys & Sporting Goods',
    desc: 'Educational toys, outdoor equipment, sports gear, and fitness products with full safety compliance testing.',
    items: ['Educational toys', 'Outdoor play equipment', 'Fitness products', 'Sports accessories', 'Plush toys'],
    imgId: 'prod-toys-bg-9s0t1u',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, personal care devices, and beauty accessories from certified GMP-compliant manufacturers.',
    items: ['Skincare products', 'Makeup & cosmetics', 'Personal care devices', 'Hair accessories', 'Beauty tools'],
    imgId: 'prod-beauty-bg-2v3w4x',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-brand-gray-400 max-w-2xl mx-auto">
            From electronics to furniture, we source across major manufacturing categories. If it is made in China, we can find it.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="group bg-white border border-brand-gray-200 rounded-xl overflow-hidden hover:border-brand-blue hover:shadow-lg transition-all duration-300"
              >
                <div
                  data-strk-bg-id={cat.imgId}
                  data-strk-bg={`[prod-${cat.id}-desc] [prod-${cat.id}-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                >
                  <div className="h-48 bg-brand-gray-100" />
                </div>
                <div className="p-6">
                  <h2 id={`prod-${cat.id}-title`} className="text-lg font-semibold text-brand-navy mb-2">
                    {cat.name}
                  </h2>
                  <p id={`prod-${cat.id}-desc`} className="text-sm text-brand-gray-600 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-brand-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-blue rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Do not see your product category?
          </h2>
          <p className="text-brand-gray-600 mb-8 max-w-xl mx-auto">
            Our network extends far beyond these categories. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-lightblue transition-colors"
          >
            Submit Your Product Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
