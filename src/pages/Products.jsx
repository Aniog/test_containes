import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Home, Shirt, Wrench, Gift, Sparkles, Baby, Car, Bike, Building2, Utensils, Lightbulb, ShoppingBag, Printer, Leaf } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Cpu,
    title: 'Consumer Electronics',
    products: 'Bluetooth speakers, earbuds, power banks, LED lights, smart home devices, phone accessories, chargers, cables, cameras',
    regions: 'Shenzhen, Dongguan',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    products: 'Furniture, kitchenware, storage solutions, garden tools, outdoor furniture, home decor, bathroom accessories, cleaning supplies',
    regions: 'Foshan, Ningbo, Xiamen',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    products: 'T-shirts, hoodies, sportswear, uniforms, bags, shoes, hats, socks, fabric, zippers, buttons',
    regions: 'Guangzhou, Shaoxing, Quanzhou',
  },
  {
    icon: Wrench,
    title: 'Machinery & Industrial',
    products: 'CNC machines, packaging equipment, welding machines, pumps, compressors, auto parts, bearings, fasteners',
    regions: 'Wenzhou, Taizhou, Changzhou',
  },
  {
    icon: Gift,
    title: 'Promotional Products',
    products: 'Custom pens, mugs, keychains, lanyards, USB drives, tote bags, stress balls, corporate gift sets',
    regions: 'Yiwu, Guangzhou',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Personal Care',
    products: 'Cosmetics, skincare, hair tools, makeup brushes, mirrors, packaging bottles, private label beauty products',
    regions: 'Guangzhou, Shantou',
  },
  {
    icon: Baby,
    title: 'Baby & Kids Products',
    products: 'Toys, strollers, car seats, baby clothing, educational toys, playground equipment, feeding products',
    regions: 'Shantou, Dongguan, Yunhe',
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    products: 'LED headlights, car electronics, floor mats, seat covers, tools, spare parts, tires, car care products',
    regions: 'Guangzhou, Taizhou, Wenzhou',
  },
  {
    icon: Bike,
    title: 'Sports & Outdoor',
    products: 'Fitness equipment, yoga mats, resistance bands, camping gear, fishing equipment, bicycles, scooters',
    regions: 'Ningbo, Xiamen, Yongkang',
  },
  {
    icon: Building2,
    title: 'Building & Construction',
    products: 'Tiles, sanitary ware, hardware, pipes, lighting fixtures, doors, windows, insulation materials',
    regions: 'Foshan, Taizhou',
  },
  {
    icon: Utensils,
    title: 'Kitchen & Housewares',
    products: 'Cookware, cutlery, storage containers, bakeware, drinkware, kitchen gadgets, small appliances',
    regions: 'Jieyang, Yangjiang, Chaozhou',
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Electrical',
    products: 'LED bulbs, panel lights, solar lights, smart lighting, switches, sockets, wiring, transformers',
    regions: 'Zhongshan, Shenzhen, Guzhen',
  },
  {
    icon: ShoppingBag,
    title: 'Packaging & Printing',
    products: 'Custom boxes, labels, stickers, paper bags, bottles, caps, blister packs, gift packaging',
    regions: 'Dongguan, Shenzhen, Cangnan',
  },
  {
    icon: Printer,
    title: 'Office & Stationery',
    products: 'Notebooks, pens, desk organizers, printers, paper products, office furniture, filing solutions',
    regions: 'Ningbo, Wenzhou, Yiwu',
  },
  {
    icon: Leaf,
    title: 'Eco & Sustainable Products',
    products: 'Bamboo products, reusable bags, biodegradable packaging, solar products, recycled materials, eco-friendly cleaning',
    regions: 'Anji, Xiamen, Quanzhou',
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
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Products We Source from China
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We work across 15+ product categories covering the major manufacturing regions of China.
              Whatever you need to source, we have the supplier network and industry knowledge to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((category) => (
              <div
                key={category.title}
                className="border border-neutral-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed mb-3">{category.products}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-neutral-400">Key regions:</span>
                  <span className="text-xs font-medium text-primary">{category.regions}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Manufacturing Hubs"
            title="Key Manufacturing Regions We Cover"
            description="Our team and supplier network spans China's most important manufacturing centers."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
            {[
              { city: 'Guangzhou', specialty: 'General manufacturing, apparel, electronics' },
              { city: 'Shenzhen', specialty: 'Electronics, tech, hardware' },
              { city: 'Yiwu', specialty: 'Small commodities, promotional products' },
              { city: 'Ningbo', specialty: 'Machinery, plastics, home goods' },
              { city: 'Foshan', specialty: 'Furniture, ceramics, building materials' },
              { city: 'Dongguan', specialty: 'Electronics, toys, packaging' },
              { city: 'Wenzhou', specialty: 'Shoes, lighters, auto parts' },
              { city: 'Shantou', specialty: 'Toys, cosmetics, apparel' },
              { city: 'Xiamen', specialty: 'Outdoor gear, electronics, stone' },
              { city: 'Zhongshan', specialty: 'Lighting, home appliances, hardware' },
            ].map((region) => (
              <div key={region.city} className="bg-white rounded-lg p-4 border border-neutral-200 text-center">
                <h4 className="font-semibold text-neutral-900 text-sm mb-1">{region.city}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{region.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            This list is not exhaustive. We source virtually any manufactured product from China.
            Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
