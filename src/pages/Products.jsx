import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const categories = [
  {
    id: 'electronics-components',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, cables, LED products, and electronic assemblies.',
    examples: 'Smart home devices, audio equipment, power adapters, IoT modules, display screens',
    imgId: 'products-electronics-full-1a',
    titleId: 'products-electronics-full-title',
    descId: 'products-electronics-full-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, garden tools, home textiles, lighting, and decorative items.',
    examples: 'Outdoor furniture, cookware sets, garden hoses, curtains, table lamps',
    imgId: 'products-home-full-2b',
    titleId: 'products-home-full-title',
    descId: 'products-home-full-desc',
  },
  {
    id: 'industrial-machinery',
    title: 'Industrial & Machinery',
    desc: 'Industrial equipment, CNC parts, molds, packaging machinery, and automation components.',
    examples: 'CNC machined parts, injection molds, conveyor systems, hydraulic components',
    imgId: 'products-industrial-full-3c',
    titleId: 'products-industrial-full-title',
    descId: 'products-industrial-full-desc',
  },
  {
    id: 'textiles-apparel',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, sportswear, bags, shoes, and fashion accessories.',
    examples: 'Polyester fabrics, yoga wear, backpacks, leather goods, knit sweaters',
    imgId: 'products-textiles-full-4d',
    titleId: 'products-textiles-full-title',
    descId: 'products-textiles-full-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, lighting, interior accessories, and EV components.',
    examples: 'Brake pads, LED headlights, car covers, EV battery connectors, filters',
    imgId: 'products-auto-full-5e',
    titleId: 'products-auto-full-title',
    descId: 'products-auto-full-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, health devices, supplements, and personal care products.',
    examples: 'Face creams, hair tools, fitness trackers, vitamin supplements, makeup brushes',
    imgId: 'products-health-full-6f',
    titleId: 'products-health-full-title',
    descId: 'products-health-full-desc',
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    desc: 'Tiles, flooring, plumbing fixtures, hardware, and construction materials.',
    examples: 'Ceramic tiles, PVC pipes, door handles, glass panels, adhesives',
    imgId: 'products-building-full-7g',
    titleId: 'products-building-full-title',
    descId: 'products-building-full-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and printing services.',
    examples: 'Custom boxes, product labels, shopping bags, blister packs, foil containers',
    imgId: 'products-packaging-full-8h',
    titleId: 'products-packaging-full-title',
    descId: 'products-packaging-full-desc',
  },
  {
    id: 'sports-outdoors',
    title: 'Sports & Outdoors',
    desc: 'Sporting goods, outdoor equipment, camping gear, and fitness products.',
    examples: 'Treadmills, camping tents, fishing rods, bicycle parts, yoga mats',
    imgId: 'products-sports-full-9i',
    titleId: 'products-sports-full-title',
    descId: 'products-sports-full-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Products We Source</h1>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto leading-relaxed">
            We source across major manufacturing categories in China, connecting you with specialized suppliers for each product type.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-navy-600 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <p className="text-xs text-gray-400">
                    <span className="font-medium text-gray-500">Examples:</span> {cat.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Looking for a Specific Product?</h2>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell us what you need and we'll find the right supplier. No category is too niche for our network.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
