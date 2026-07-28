import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Consumer Electronics',
    description: 'Smartphones, tablets, earbuds, chargers, power banks, speakers, smart home devices, and electronic accessories from certified manufacturers.',
    subcategories: ['Audio Equipment', 'Smart Home Devices', 'Phone Accessories', 'Wearable Tech'],
    imgId: 'cat-electronics',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    title: 'Home & Kitchen',
    description: 'Kitchen appliances, cookware, storage solutions, home décor, furniture, lighting, bathroom accessories, and household essentials at factory prices.',
    subcategories: ['Kitchen Appliances', 'Storage & Organization', 'Home Décor', 'Bathroom Products'],
    imgId: 'cat-home-kitchen',
    titleId: 'cat-home-kitchen-title',
    descId: 'cat-home-kitchen-desc',
  },
  {
    title: 'Apparel & Fashion',
    description: 'Men\'s, women\'s, and children\'s clothing, activewear, workwear, bags, shoes, jewelry, and fashion accessories with flexible MOQ options.',
    subcategories: ['Casual Wear', 'Activewear', 'Bags & Luggage', 'Jewelry & Accessories'],
    imgId: 'cat-apparel',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Skincare products, cosmetics, hair care tools, personal grooming items, beauty accessories, and packaging solutions for beauty brands.',
    subcategories: ['Skincare', 'Cosmetics', 'Hair Care Tools', 'Beauty Accessories'],
    imgId: 'cat-beauty',
    titleId: 'cat-beauty-title',
    descId: 'cat-beauty-desc',
  },
  {
    title: 'Toys & Children\'s Products',
    description: 'Educational toys, outdoor play equipment, children\'s furniture, baby products, and safety-certified items that meet international toy safety standards.',
    subcategories: ['Educational Toys', 'Outdoor Play', 'Baby Products', 'Board Games'],
    imgId: 'cat-toys',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
  },
  {
    title: 'Industrial & Machinery',
    description: 'CNC machines, industrial tools, manufacturing equipment, spare parts, hydraulic components, and custom-machined products for industrial buyers.',
    subcategories: ['CNC Equipment', 'Industrial Tools', 'Hydraulic Parts', 'Custom Machining'],
    imgId: 'cat-industrial',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
  },
  {
    title: 'Building & Hardware',
    description: 'Construction materials, plumbing fixtures, electrical components, hand tools, power tools, and renovation supplies at wholesale rates.',
    subcategories: ['Plumbing Fixtures', 'Electrical Components', 'Hand & Power Tools', 'Construction Materials'],
    imgId: 'cat-building',
    titleId: 'cat-building-title',
    descId: 'cat-building-desc',
  },
  {
    title: 'Promotional Products',
    description: 'Custom branded merchandise, corporate gifts, trade show giveaways, drinkware, pens, bags, and packaging with your logo and branding.',
    subcategories: ['Corporate Gifts', 'Trade Show Items', 'Custom Drinkware', 'Branded Merchandise'],
    imgId: 'cat-promotional',
    titleId: 'cat-promotional-title',
    descId: 'cat-promotional-desc',
  },
  {
    title: 'Automotive Parts',
    description: 'Aftermarket auto parts, accessories, tools, EV components, rubber seals, electrical connectors, and custom-manufactured automotive products.',
    subcategories: ['Aftermarket Parts', 'EV Components', 'Auto Accessories', 'Rubber & Seals'],
    imgId: 'cat-automotive',
    titleId: 'cat-automotive-title',
    descId: 'cat-automotive-desc',
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
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Product Categories</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">Products We Source</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We source products across a wide range of industries and categories. Whatever you need to manufacture, we can find the right suppliers in China.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden border border-gray-100 hover:border-brand-orange/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] China manufacturing supplier`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-brand-navy mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-sm text-gray-600 leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.map((sub, i) => (
                      <span key={i} className="text-xs font-medium text-brand-navy bg-brand-slate px-2.5 py-1 rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 bg-brand-slate">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-gray-600 mb-8">
            This list represents our most common categories, but we source virtually any product manufactured in China. Contact us with your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8">
            <Link to="/contact" className="flex items-center gap-2">
              Submit Your Sourcing Request <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
