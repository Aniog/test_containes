import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Smartphone, Shirt, Wrench, Package, Cpu, Building2, Baby, Car, Bone as Drone, Lamp, ArrowRight } from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    title: 'Consumer Electronics',
    items: ['Smartphones & accessories', 'Audio devices & headphones', 'Wearable technology', 'Smart home devices', 'Gaming peripherals'],
  },
  {
    icon: Cpu,
    title: 'Electronic Components',
    items: ['PCBs & circuit boards', 'Semiconductors', 'Cables & connectors', 'Sensors & modules', 'Power supplies'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    items: ['Garments & fashion wear', 'Sportswear & activewear', 'Fabrics & materials', 'Footwear', 'Accessories (bags, belts, hats)'],
  },
  {
    icon: Wrench,
    title: 'Industrial Parts',
    items: ['Machinery components', 'Hardware tools', 'Automotive parts', 'Fasteners & fittings', 'Hydraulic & pneumatic parts'],
  },
  {
    icon: Package,
    title: 'Home & Kitchen',
    items: ['Kitchenware & cookware', 'Home appliances', 'Furniture', 'Storage solutions', 'Home decor'],
  },
  {
    icon: Building2,
    title: 'Packaging & Labeling',
    items: ['Custom boxes & cartons', 'Labels & stickers', 'Retail displays', 'Protective packaging', 'Gift packaging'],
  },
  {
    icon: Baby,
    title: 'Baby & Kids Products',
    items: ['Baby gear & accessories', 'Kids toys & games', 'Childrens apparel', 'Nursery furniture', 'Educational products'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    items: ['Interior accessories', 'Exterior parts', 'Car electronics', 'Maintenance tools', 'Motorcycle parts'],
  },
  {
    icon: Lamp,
    title: 'Lighting Products',
    items: ['LED lighting', 'Indoor fixtures', 'Outdoor lighting', 'Smart lighting', 'Commercial lighting'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-500 py-16 md:py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            From consumer electronics to industrial components, we source across all major manufacturing categories in China.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl border border-surface-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h2 className="text-lg font-semibold text-surface-800 mb-3">{cat.title}</h2>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-surface-500">
                      <div className="w-1 h-1 rounded-full bg-surface-300 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="bg-surface-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-800 mb-4">Not Sure if We Can Source Your Product?</h2>
          <p className="text-surface-500 mb-8">
            If it is manufactured in China, we can help. Contact us with your product details and we will let you know within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Ask About Your Product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}