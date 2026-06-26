import SectionHeader from '@/components/SectionHeader'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'PCBs, cables, adapters, chargers, consumer electronics, and industrial electronic components. We source from ISO-certified facilities with full traceability.',
    examples: ['PCB assemblies', 'USB cables & adapters', 'LED lighting modules', 'Battery packs', 'IoT sensors'],
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Garments, fabrics, bags, shoes, and accessories. We specialize in sustainable materials and factories with social compliance certifications.',
    examples: ['Cotton & organic garments', 'Technical fabrics', 'Leather bags & wallets', 'Athletic footwear', 'Workwear & uniforms'],
  },
  {
    id: 'machinery',
    name: 'Machinery & Hardware',
    desc: 'Metal parts, CNC components, tools, molds, and industrial equipment. We work with precision manufacturers for tight-tolerance requirements.',
    examples: ['CNC machined parts', 'Injection molds', 'Hand & power tools', 'Hydraulic components', 'Industrial fasteners'],
  },
  {
    id: 'home',
    name: 'Home & Furniture',
    desc: 'Indoor and outdoor furniture, lighting, kitchenware, and home decor. We source from factories with FSC and BSCI certifications.',
    examples: ['Solid wood furniture', 'LED lighting fixtures', 'Ceramic tableware', 'Storage & organization', 'Outdoor patio sets'],
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, and printed materials. Ideal for branding, e-commerce, and retail-ready packaging.',
    examples: ['Corrugated shipping boxes', 'Rigid gift boxes', 'Custom labels & stickers', 'Flexible pouches', 'Retail displays'],
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, haircare, and grooming products. We source GMP-certified factories with experience in FDA and EU compliance.',
    examples: ['Private-label skincare', 'Haircare formulations', 'Makeup brushes & tools', 'Men\'s grooming kits', 'Oral care products'],
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <div className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="Industries"
            title="Products We Source"
            subtitle="We source across a wide range of product categories. If it can be manufactured in China, we can help you find the right supplier."
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    data-strk-img-id={`products-page-${cat.id}`}
                    data-strk-img={`[products-${cat.id}-desc] [products-${cat.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <h3 id={`products-${cat.id}-title`} className="text-2xl font-bold text-text-primary mb-3">
                  {cat.name}
                </h3>
                <p id={`products-${cat.id}-desc`} className="text-sm text-text-secondary leading-relaxed mb-5">
                  {cat.desc}
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Common Products</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="px-3 py-1 rounded-full bg-bg-alt text-xs font-medium text-text-secondary border border-border"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  Request a quote for {cat.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Do not see your product category?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Our network covers many more industries. Reach out and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-hover transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
