import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    name: 'Consumer Electronics',
    description: 'Smartphones, tablets, headphones, smart home devices, wearables, and electronic accessories.',
    items: 'Bluetooth speakers, power banks, smart watches, earbuds, charging cables, smart plugs',
    imgId: 'products-electronics-1a2b3c',
  },
  {
    name: 'Home & Kitchen',
    description: 'Household items, kitchen appliances, cookware, home decor, furniture, and storage solutions.',
    items: 'Kitchen gadgets, storage containers, cookware sets, home textiles, decorative items, small appliances',
    imgId: 'products-home-2b3c4d',
  },
  {
    name: 'Apparel & Fashion',
    description: 'Clothing, footwear, bags, accessories, and fashion items for men, women, and children.',
    items: 'Casual wear, sportswear, shoes, backpacks, hats, scarves, belts, jewelry',
    imgId: 'products-apparel-3c4d5e',
  },
  {
    name: 'Industrial & Machinery',
    description: 'Manufacturing equipment, industrial tools, machine parts, and production line components.',
    items: 'CNC parts, injection molding, packaging machinery, hand tools, power tools, industrial supplies',
    imgId: 'products-industrial-4d5e6f',
  },
  {
    name: 'Health & Beauty',
    description: 'Cosmetics, skincare, personal care products, wellness items, and beauty tools.',
    items: 'Skincare products, makeup, hair care, essential oils, supplements, beauty devices',
    imgId: 'products-beauty-5e6f7g',
  },
  {
    name: 'Auto Parts & Accessories',
    description: 'Vehicle components, car accessories, repair parts, and automotive tools.',
    items: 'LED lights, dash cams, car covers, floor mats, engine parts, filters, batteries',
    imgId: 'products-auto-6f7g8h',
  },
  {
    name: 'Packaging & Printing',
    description: 'Custom packaging solutions, labels, boxes, and commercial printing services.',
    items: 'Cardboard boxes, paper bags, plastic packaging, labels, stickers, catalogs, brochures',
    imgId: 'products-packaging-7g8h9i',
  },
  {
    name: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, outdoor recreation products, and sporting goods.',
    items: 'Yoga mats, resistance bands, camping tents, backpacks, water bottles, sportswear',
    imgId: 'products-sports-8h9i0j',
  },
  {
    name: 'Baby & Kids Products',
    description: 'Baby gear, toys, childrens furniture, educational products, and nursery items.',
    items: 'Baby strollers, toys, childrens clothing, educational games, nursery furniture, car seats',
    imgId: 'products-baby-9i0j1k',
  },
  {
    name: 'Pet Supplies',
    description: 'Pet food, toys, accessories, grooming tools, and pet care products.',
    items: 'Pet beds, feeders, leashes, toys, grooming brushes, pet carriers, food bowls',
    imgId: 'products-pet-0j1k2l',
  },
  {
    name: 'Furniture & Home Decor',
    description: 'Indoor and outdoor furniture, home decor items, lighting, and furnishing accessories.',
    items: 'Sofas, chairs, tables, shelves, lamps, curtains, rugs, wall art, outdoor furniture',
    imgId: 'products-furniture-1k2l3m',
  },
  {
    name: 'Medical & Healthcare',
    description: 'Medical devices, healthcare equipment, personal protective equipment, and hospital supplies.',
    items: 'Face masks, gloves, thermometers, blood pressure monitors, first aid kits, medical disposables',
    imgId: 'products-medical-2l3m4n',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Products We Source
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              From consumer goods to industrial equipment, we source products across a wide range of categories from China&apos;s best manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col lg:flex-row rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="lg:w-48 h-48 lg:h-auto bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[product-cat-title-${i}] [product-cat-desc-${i}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h2 id={`product-cat-title-${i}`} className="text-lg font-semibold text-navy-700 mb-2">{cat.name}</h2>
                  <p id={`product-cat-desc-${i}`} className="text-sm text-gray-600 mb-3">{cat.description}</p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Common products: </span>
                    {cat.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Product Not Listed?
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We source thousands of products across many categories. If you do not see your product here, contact us and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors"
          >
            Inquire About Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}