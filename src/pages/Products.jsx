import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'PCB assemblies, consumer electronics, IoT devices, smart home products, cables, connectors, power supplies, LED lighting, and electronic components.',
    items: 'LED lights, chargers, Bluetooth speakers, smart watches, sensors, circuit boards',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial Parts',
    desc: 'CNC machined parts, metal fabrication, sheet metal, casting, forging, pumps, valves, bearings, industrial equipment, and automation components.',
    items: 'Precision parts, aluminum extrusions, steel fabrications, hydraulic components',
  },
  {
    id: 'textiles',
    title: 'Textiles, Apparel & Accessories',
    desc: 'Garments, sportswear, uniforms, fabrics, home textiles, towels, bedding, bags, backpacks, shoes, and fashion accessories.',
    items: 'T-shirts, hoodies, yoga wear, tote bags, backpacks, bed sheets, curtains',
  },
  {
    id: 'plastics-molding',
    title: 'Plastics & Molding',
    desc: 'Injection molding, blow molding, extrusion, thermoforming, rotational molding, silicone products, and 3D-printed prototypes.',
    items: 'Plastic enclosures, bottles, containers, silicone molds, rubber parts',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, kitchenware, cookware, storage solutions, home decor, garden products, and pet supplies.',
    items: 'Chairs, tables, shelves, cookware sets, storage boxes, garden tools',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, paper boxes, gift boxes, labels, tags, printed materials, corrugated cartons, and eco-friendly packaging solutions.',
    items: 'Gift boxes, cardboard displays, labels, paper bags, custom cartons',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts & Accessories',
    desc: 'Auto spare parts, aftermarket accessories, car electronics, tools, maintenance products, and vehicle components.',
    items: 'Car mats, seat covers, LED headlights, diagnostic tools, filters',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, locks, hinges, building materials, and DIY equipment.',
    items: 'Screwdrivers, wrenches, drill bits, fasteners, hinges, locks',
  },
  {
    id: 'promotional',
    title: 'Promotional Products & Gifts',
    desc: 'Custom promotional items, corporate gifts, branded merchandise, giveaways, pens, mugs, USB drives, and trade show materials.',
    items: 'Branded pens, custom mugs, USB drives, lanyards, tote bags',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, sports gear, outdoor products, camping equipment, bicycles, water sports, and recreational products.',
    items: 'Yoga mats, dumbbells, tents, sleeping bags, fishing gear, bicycles',
  },
  {
    id: 'medical',
    title: 'Medical Devices & Supplies',
    desc: 'Medical consumables, PPE, diagnostic devices, rehabilitation equipment, hospital furniture, and healthcare products.',
    items: 'Face masks, gloves, thermometers, blood pressure monitors, hospital beds',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics packaging, beauty tools, personal care appliances, hair accessories, skincare products, and cosmetic brushes.',
    items: 'Makeup brushes, cosmetic bottles, hair dryers, nail tools, mirrors',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Products We Source
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Wide Range of Product Categories
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">
            We have extensive experience sourcing across 12+ major product categories from China's manufacturing hubs.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-100 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={`products-page-${cat.id}-a9d4e2`}
                    data-strk-img={`[product-cat-title-${cat.id}] product manufacturing China`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`product-cat-title-${cat.id}`} className="text-lg font-semibold text-navy-900 mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.split(', ').map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Do not see your product category?
          </h2>
          <p className="text-navy-500 text-lg mb-8">
            We source products across many industries. Contact us with your specific requirements and we will let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}