import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    items: ['LED lighting', 'Bluetooth speakers', 'Phone accessories', 'Smart home devices', 'Power banks', 'PCB assemblies'],
    regions: 'Shenzhen, Dongguan',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    items: ['Custom clothing', 'Workwear & uniforms', 'Bags & luggage', 'Home textiles', 'Sportswear', 'Promotional apparel'],
    regions: 'Guangzhou, Dongguan, Ningbo',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home',
    items: ['Office furniture', 'Home decor', 'Kitchenware', 'Bathroom fixtures', 'Outdoor furniture', 'Storage solutions'],
    regions: 'Foshan, Shunde, Zhongshan',
  },
  {
    id: 'machinery',
    title: 'Machinery & Parts',
    items: ['CNC machined parts', 'Injection molds', 'Industrial equipment', 'Auto components', 'Castings & forgings', 'Hydraulic systems'],
    regions: 'Ningbo, Wenzhou, Taizhou',
  },
  {
    id: 'packaging',
    title: 'Packaging & Print',
    items: ['Custom boxes', 'Labels & stickers', 'Shopping bags', 'POS displays', 'Blister packaging', 'Gift packaging'],
    regions: 'Shenzhen, Dongguan, Wenzhou',
  },
  {
    id: 'beauty',
    title: 'Beauty & Health',
    items: ['Skincare products', 'Cosmetics', 'Supplements', 'Medical devices', 'Personal care', 'Salon equipment'],
    regions: 'Guangzhou, Shanghai',
  },
  {
    id: 'toys',
    title: 'Toys & Sports',
    items: ['Plush toys', 'Educational toys', 'Fitness equipment', 'Outdoor gear', 'Pet products', 'Inflatable products'],
    regions: 'Shantou, Yiwu, Ningbo',
  },
  {
    id: 'building',
    title: 'Building Materials',
    items: ['Ceramic tiles', 'Hardware & tools', 'Plumbing fixtures', 'Solar panels', 'Steel structures', 'Glass products'],
    regions: 'Foshan, Taizhou, Jiangmen',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="products-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Products We Source
            </h1>
            <p id="products-page-subtitle" className="text-white/70 text-lg leading-relaxed">
              We source across all major product categories from China's top manufacturing regions. If it's made in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] relative">
                  <img
                    data-strk-img-id={`prod-page-${cat.id}-img-m1n2`}
                    data-strk-img={`[prod-page-${cat.id}-title] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={`prod-page-${cat.id}-title`} className="text-xl font-bold text-neutral-800 mb-2">{cat.title}</h2>
                  <p className="text-xs text-accent font-medium mb-3">Manufacturing regions: {cat.regions}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, idx) => (
                      <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full">
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

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Don't See Your Product?</h2>
          <p className="text-neutral-600 text-lg mb-8">We source virtually any manufactured product from China. Tell us what you need and we'll find the right supplier.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
