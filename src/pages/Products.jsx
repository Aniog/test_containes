import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Cpu, Shirt, Home as HomeIcon, Wrench, Package, Lightbulb, Car, Utensils, Heart, Dumbbell, Baby, Palette } from 'lucide-react'
import CTAButton from '../components/shared/CTAButton'
import SectionHeading from '../components/shared/SectionHeading'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    items: ['Consumer electronics', 'PCB assemblies', 'LED displays', 'Cables & connectors', 'Smart home devices', 'Audio equipment'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    items: ['Casual & sportswear', 'Workwear & uniforms', 'Fabrics & yarns', 'Bags & accessories', 'Footwear', 'Private label clothing'],
  },
  {
    icon: HomeIcon,
    title: 'Home & Garden',
    items: ['Furniture', 'Kitchenware', 'Bathroom fixtures', 'Garden tools', 'Decorative items', 'Storage solutions'],
  },
  {
    icon: Wrench,
    title: 'Industrial & Hardware',
    items: ['Hand & power tools', 'Fasteners', 'Valves & fittings', 'Metal fabrication', 'Machinery parts', 'Safety equipment'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    items: ['Custom boxes & bags', 'Labels & stickers', 'Plastic containers', 'Glass bottles', 'Blister packaging', 'Eco-friendly options'],
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Electrical',
    items: ['LED lighting', 'Solar panels', 'Switches & sockets', 'Wiring accessories', 'Commercial lighting', 'Smart lighting'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    items: ['Interior accessories', 'Exterior parts', 'Filters & belts', 'Car electronics', 'Tires & wheels', 'Maintenance tools'],
  },
  {
    icon: Utensils,
    title: 'Food & Beverage Equipment',
    items: ['Commercial kitchen', 'Food processing', 'Packaging machines', 'Refrigeration', 'Vending machines', 'Bar equipment'],
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    items: ['Cosmetics & skincare', 'Medical devices', 'Supplements packaging', 'Salon equipment', 'Personal care', 'OEM formulation'],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoors',
    items: ['Fitness equipment', 'Camping gear', 'Water sports', 'Cycling accessories', 'Team sports', 'Outdoor furniture'],
  },
  {
    icon: Baby,
    title: 'Baby & Kids',
    items: ['Toys & games', 'Baby furniture', 'Strollers', 'Children\'s clothing', 'Educational products', 'Safety products'],
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    items: ['Art supplies', 'Craft materials', 'Stationery', 'Gift items', 'Party supplies', 'Custom promotional'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-[#0f2a4a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-slate-300">
              We source across 50+ product categories from China's top manufacturing regions. If it's made in China, we can find it for you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#1e4d7b] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0f2a4a] rounded-lg flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">{cat.title}</h2>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1 h-1 bg-slate-400 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We source virtually any manufactured product from China. Send us your requirements and we'll confirm availability within 24 hours.
          </p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
