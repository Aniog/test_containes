import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Gadgets',
    shortDesc: 'Consumer electronics, mobile accessories, smart devices, and home tech.',
    details: [
      'Mobile phone accessories and chargers',
      'Smart home devices and IoT products',
      'Audio equipment and headphones',
      'Computer peripherals and cables',
      'Wearable technology',
    ],
    imgId: 'prod-detail-electronics',
    titleId: 'prod-d-title-1',
    descId: 'prod-d-desc-1',
  },
  {
    name: 'Apparel & Textiles',
    shortDesc: 'Garments, fabrics, footwear, bags, and fashion accessories from verified workshops.',
    details: [
      'Ready-to-wear clothing and uniforms',
      'Sports and activewear',
      'Bags, backpacks, and luggage',
      'Footwear and sandals',
      'Fabrics and textile materials',
    ],
    imgId: 'prod-detail-apparel',
    titleId: 'prod-d-title-2',
    descId: 'prod-d-desc-2',
  },
  {
    name: 'Home & Furniture',
    shortDesc: 'Furniture, kitchenware, home decor, lighting, and household goods.',
    details: [
      'Indoor and outdoor furniture',
      'Kitchenware and cookware',
      'Home decor and accessories',
      'Lighting fixtures and LED products',
      'Storage and organization products',
    ],
    imgId: 'prod-detail-home',
    titleId: 'prod-d-title-3',
    descId: 'prod-d-desc-3',
  },
  {
    name: 'Industrial & Hardware',
    shortDesc: 'Machinery parts, tools, metal components, and industrial equipment.',
    details: [
      'Metal fabrication and machined parts',
      'Hand tools and power tools',
      'Construction hardware and fasteners',
      'Automotive and machinery parts',
      'Safety equipment and PPE',
    ],
    imgId: 'prod-detail-industrial',
    titleId: 'prod-d-title-4',
    descId: 'prod-d-desc-4',
  },
  {
    name: 'Packaging & Printing',
    shortDesc: 'Custom packaging, labels, printed materials, and promotional products.',
    details: [
      'Retail and shipping packaging',
      'Custom boxes and cartons',
      'Labels, stickers, and tags',
      'Printed promotional materials',
      'Branded merchandise and giveaways',
    ],
    imgId: 'prod-detail-packaging',
    titleId: 'prod-d-title-5',
    descId: 'prod-d-desc-5',
  },
  {
    name: 'Health & Beauty',
    shortDesc: 'Cosmetics, personal care products, health supplements, and skincare.',
    details: [
      'Skincare and cosmetics',
      'Hair care and styling tools',
      'Personal care and hygiene products',
      'Health supplements and wellness',
      'Beauty tools and accessories',
    ],
    imgId: 'prod-detail-beauty',
    titleId: 'prod-d-title-6',
    descId: 'prod-d-desc-6',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2b4a] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            We source across virtually every major consumer and industrial product category manufactured in China. If it is made here, we can find it.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="space-y-16 md:space-y-24">
            {categories.map((cat, idx) => (
              <div
                key={cat.name}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2 overflow-hidden rounded-xl">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2
                    id={cat.titleId}
                    className="text-xl md:text-2xl font-bold text-[#1a2b4a] mb-3"
                  >
                    {cat.name}
                  </h2>
                  <p
                    id={cat.descId}
                    className="text-[#64748b] leading-relaxed mb-5"
                  >
                    {cat.shortDesc}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {cat.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#1e293b]">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#c4951a] hover:text-[#a67c14] transition-colors"
                  >
                    Request a quote for this category
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom sourcing CTA */}
      <section className="bg-[#f6f7f9] py-16 md:py-20">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2b4a] mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto mb-8">
            We source across virtually every product category manufactured in China. Describe your product and we will tell you if we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Submit a Custom Inquiry
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
