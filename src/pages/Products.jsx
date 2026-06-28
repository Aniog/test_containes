import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const productCategories = [
  {
    title: 'Electronics & Components',
    desc: 'Consumer electronics, LED lighting, PCBs, chargers, cables, audio equipment, security cameras, and electronic accessories.',
    items: ['LED lights and fixtures', 'USB chargers and cables', 'Bluetooth speakers', 'Security cameras', 'PCB assemblies', 'Electronic components'],
    imgId: 'products-electronics-1a2b3c',
    query: 'electronics components factory manufacturing',
  },
  {
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, home decor, storage solutions, and household appliances.',
    items: ['Kitchen utensils and cookware', 'Bathroom accessories', 'Garden tools and equipment', 'Home storage solutions', 'Decorative items', 'Small appliances'],
    imgId: 'products-home-4d5e6f',
    query: 'home garden furniture kitchenware products',
  },
  {
    title: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, bags, shoes, sportswear, fashion accessories, workwear, and promotional textiles.',
    items: ['Casual and formal wear', 'Sportswear and activewear', 'Bags and luggage', 'Shoes and footwear', 'Workwear and uniforms', 'Scarves and accessories'],
    imgId: 'products-apparel-7g8h9i',
    query: 'apparel textile clothing fashion factory',
  },
  {
    title: 'Industrial & Machinery',
    desc: 'CNC parts, pumps, valves, tools, packaging machines, welding equipment, and industrial components.',
    items: ['CNC machined parts', 'Industrial pumps and valves', 'Hand and power tools', 'Packaging machinery', 'Welding equipment', 'Hydraulic components'],
    imgId: 'products-industrial-j1k2l3',
    query: 'industrial machinery equipment CNC manufacturing',
  },
  {
    title: 'Promotional & Custom Products',
    desc: 'Branded merchandise, custom packaging, promotional gifts, corporate gifts, and private label products.',
    items: ['Branded merchandise', 'Custom packaging solutions', 'Promotional gifts', 'Corporate giveaways', 'Private label products', 'Event merchandise'],
    imgId: 'products-promo-m4n5o6',
    query: 'promotional branded custom merchandise products',
  },
  {
    title: 'Building & Hardware',
    desc: 'Tiles, lighting fixtures, door hardware, plumbing supplies, construction materials, and architectural fittings.',
    items: ['Floor and wall tiles', 'Door handles and locks', 'Plumbing fittings', 'Lighting fixtures', 'Aluminum profiles', 'Construction materials'],
    imgId: 'products-building-p7q8r9',
    query: 'building materials hardware construction tiles',
  },
  {
    title: 'Automotive Parts',
    desc: 'Spare parts, accessories, tools, LED automotive lighting, rubber seals, and aftermarket components.',
    items: ['LED headlight assemblies', 'Brake pads and rotors', 'Rubber seals and gaskets', 'Automotive accessories', 'Aftermarket parts', 'Car electronics'],
    imgId: 'products-auto-s1t2u3',
    query: 'automotive parts components manufacturing',
  },
  {
    title: 'Toys & Gifts',
    desc: 'Educational toys, plush toys, board games, seasonal gifts, collectibles, and children\'s products.',
    items: ['Educational toys', 'Plush and stuffed toys', 'Board games and puzzles', 'Seasonal decorations', 'Gift sets', 'Children\'s accessories'],
    imgId: 'products-toys-v4w5x6',
    query: 'toys gifts children educational products',
  },
]

const regions = [
  { region: 'Guangdong', specialty: 'Electronics, toys, apparel, lighting' },
  { region: 'Zhejiang', specialty: 'Small commodities, hardware, textiles' },
  { region: 'Jiangsu', specialty: 'Machinery, textiles, chemicals' },
  { region: 'Fujian', specialty: 'Shoes, stone, food products' },
  { region: 'Shandong', specialty: 'Agricultural products, machinery' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Products We Source
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              We work with verified suppliers across all major manufacturing regions in China, covering a wide range of product categories for B2B buyers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          {productCategories.map((cat, i) => (
            <div key={cat.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  {cat.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  {cat.desc}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-success mt-1 flex-shrink-0" />
                      <span className="text-text-primary text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`rounded-lg overflow-hidden aspect-[16/10] bg-bg-card ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[products-${cat.title.replace(/\s+/g, '-').toLowerCase()}] ${cat.query}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Key Manufacturing Regions
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our supplier network spans China's most important manufacturing hubs, giving us access to specialized expertise in every region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {regions.map((r) => (
              <div key={r.region} className="bg-white rounded-lg border border-border p-5 text-center">
                <h3 className="font-semibold text-primary mb-2">{r.region}</h3>
                <p className="text-text-muted text-sm">{r.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom sourcing */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Our network covers far more than what is listed here. Send us your product specifications and we will let you know if we can source it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-accent-hover transition-colors"
          >
            Submit Your Product Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
