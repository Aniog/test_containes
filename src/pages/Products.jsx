import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Smartphone, 
  Home, 
  Shirt, 
  Wrench, 
  Package, 
  Armchair,
  Car,
  Dog,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    name: 'Consumer Electronics',
    desc: 'Smartphones, tablets, audio equipment, wearables, chargers, cables, and smart home devices.',
    examples: 'Bluetooth speakers, power banks, smart watches, wireless earbuds, phone cases',
    certifications: 'CE, FCC, RoHS, UL',
  },
  {
    icon: Home,
    name: 'Home & Kitchen',
    desc: 'Kitchen appliances, cookware, storage solutions, home decor, cleaning products, and tableware.',
    examples: 'Air fryers, blender sets, food containers, cutting boards, kitchen gadgets',
    certifications: 'FDA, LFGB, SGS, CE',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, accessories, footwear, bags, and technical textiles for fashion and sportswear.',
    examples: 'Activewear, casual wear, work uniforms, hats, scarves, backpacks',
    certifications: 'GOTS, OEKO-TEX, BSCI, WRAP',
  },
  {
    icon: Wrench,
    name: 'Industrial Equipment',
    desc: 'Machinery, tools, components, MRO supplies, automation equipment, and manufacturing parts.',
    examples: 'CNC parts, pumps, valves, bearings, power tools, measuring instruments',
    certifications: 'ISO 9001, CE, API',
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, displays, brochures, and commercial printing solutions.',
    examples: 'Gift boxes, corrugated cartons, poly bags, shrink wrap, stickers',
    certifications: 'FSC, ISO 14001',
  },
  {
    icon: Armchair,
    name: 'Furniture & Lighting',
    desc: 'Home furniture, office furniture, outdoor furniture, lighting fixtures, and decorative items.',
    examples: 'Office chairs, sofas, LED lamps, dining tables, shelving units',
    certifications: 'BIFMA, UL, CE',
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    desc: 'Vehicle parts, motorcycle accessories, EV components, interior accessories, and maintenance tools.',
    examples: 'Dash cams, car chargers, floor mats, LED lights, filters',
    certifications: 'IATF 16949, E-mark, DOT',
  },
  {
    icon: Dog,
    name: 'Pet Products',
    desc: 'Pet supplies, food, toys, grooming tools, bedding, and accessories for dogs, cats, and small animals.',
    examples: 'Pet beds, collars, leashes, feeders, toys, grooming brushes',
    certifications: 'FDA, EN71, ASTM',
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
      <section className="bg-brand-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Products We Source</h1>
            <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
              We source across virtually all manufacturing categories. If it is made in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <cat.icon className="w-6 h-6 text-brand-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{cat.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{cat.desc}</p>
                      <div className="mb-3">
                        <span className="text-xs font-semibold text-gray-500 uppercase">Examples: </span>
                        <span className="text-xs text-gray-500">{cat.examples}</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase">Certifications: </span>
                        <span className="text-xs text-gray-500">{cat.certifications}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure If We Source Your Product?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We cover many more categories than listed here. Contact us with your product details and we will let you know if we can help.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl">
                Ask About Your Product
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}