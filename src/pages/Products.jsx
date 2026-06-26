import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, chargers, power banks, smart home devices, and accessories.',
    capabilities: ['PCB assembly', 'Plastic molding', 'Cable extrusion', 'Packaging design'],
    imgId: 'cat-electronics-a1',
    titleId: 'cat-title-electronics',
    descId: 'cat-desc-electronics',
  },
  {
    name: 'Machinery & Industrial',
    desc: 'Manufacturing equipment, CNC machines, tools, hardware, fasteners, and industrial spare parts.',
    capabilities: ['Metal machining', 'Welding and fabrication', 'Surface finishing', 'Custom tooling'],
    imgId: 'cat-machinery-b2',
    titleId: 'cat-title-machinery',
    descId: 'cat-desc-machinery',
  },
  {
    name: 'Home & Furniture',
    desc: 'Indoor and outdoor furniture, kitchenware, lighting fixtures, home decor, and household goods.',
    capabilities: ['Woodworking', 'Metal frames', 'Upholstery', ' Powder coating'],
    imgId: 'cat-home-c3',
    titleId: 'cat-title-home',
    descId: 'cat-desc-home',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, bags, backpacks, fabrics, footwear, and fashion accessories for brands and retailers.',
    capabilities: ['Cut and sew', 'Printing and embroidery', 'Material sourcing', 'Label and hangtag production'],
    imgId: 'cat-apparel-d4',
    titleId: 'cat-title-apparel',
    descId: 'cat-desc-apparel',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom boxes, rigid boxes, labels, stickers, bags, and promotional printed materials.',
    capabilities: ['Offset and digital printing', 'Die cutting', 'Lamination and foil', 'Structural design'],
    imgId: 'cat-packaging-e5',
    titleId: 'cat-title-packaging',
    descId: 'cat-desc-packaging',
  },
  {
    name: 'Automotive Parts',
    desc: 'Aftermarket auto parts, accessories, EV components, and custom vehicle modifications.',
    capabilities: ['Die casting', 'Plastic injection', 'Rubber molding', 'Assembly and testing'],
    imgId: 'cat-automotive-f6',
    titleId: 'cat-title-automotive',
    descId: 'cat-desc-automotive',
  },
  {
    name: 'Beauty & Personal Care',
    desc: 'Skincare, cosmetics, hair care products, and personal grooming tools with compliance support.',
    capabilities: ['Formula development', 'Bottle and jar sourcing', 'Label compliance', 'GMPC factory audits'],
    imgId: 'cat-beauty-g7',
    titleId: 'cat-title-beauty',
    descId: 'cat-desc-beauty',
  },
  {
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, bicycles, water sports products, and outdoor accessories.',
    capabilities: ['Aluminum extrusion', 'Carbon fiber', 'Sewing and assembly', 'Safety testing'],
    imgId: 'cat-sports-h8',
    titleId: 'cat-title-sports',
    descId: 'cat-desc-sports',
  },
  {
    name: 'Medical & Healthcare',
    desc: 'Medical consumables, rehabilitation devices, health monitors, and PPE with regulatory guidance.',
    capabilities: ['ISO 13485 factory sourcing', 'Sterilization coordination', 'FDA/CE documentation', 'Biocompatibility testing'],
    imgId: 'cat-medical-i9',
    titleId: 'cat-title-medical',
    descId: 'cat-desc-medical',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Products We Source</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              We source across dozens of categories. If a product is manufactured in China, we can help you find a reliable supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all flex flex-col">
                <div className="aspect-[16/10] bg-surface-alt relative overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 id={cat.titleId} className="text-lg font-bold text-navy mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.capabilities.map((cap) => (
                      <span key={cap} className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal/10 text-teal-dark">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Do Not See Your Category?</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Our network covers thousands of factories across China. Even if your product is niche or specialized, we can still help. Send us your requirements and we will assess feasibility at no cost.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Free feasibility assessment',
                    'No obligation to proceed',
                    'Response within 24 hours',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white hover:bg-teal-dark transition-colors"
                >
                  Request a Free Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div
                className="aspect-video rounded-xl bg-navy-light border border-white/10"
                data-strk-bg-id="products-custom-bg"
                data-strk-bg="[products-custom-title]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
              >
                <span id="products-custom-title" className="sr-only">
                  Custom product sourcing from China
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
