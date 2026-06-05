import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'Consumer electronics, printed circuit boards, LED products, power adapters, cables, chargers, and electronic accessories.',
    subcategories: ['Consumer Electronics', 'LED Lighting', 'PCB & Components', 'Chargers & Adapters', 'Audio Equipment'],
    imgQuery: 'electronic components circuit board PCB manufacturing',
  },
  {
    title: 'Home & Kitchen',
    desc: 'Furniture, kitchenware, cookware, storage solutions, home decor, bathroom accessories, and household items.',
    subcategories: ['Kitchenware & Cookware', 'Home Decor', 'Bathroom Accessories', 'Storage & Organization', 'Garden Tools'],
    imgQuery: 'modern kitchen home products cookware furniture',
  },
  {
    title: 'Apparel & Fashion',
    desc: 'Clothing, fabrics, bags, footwear, belts, hats, scarves, and fashion accessories for men, women, and children.',
    subcategories: ['Casual Wear', 'Sportswear', 'Bags & Luggage', 'Footwear', 'Fashion Accessories'],
    imgQuery: 'textile factory apparel clothing manufacturing garments',
  },
  {
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products, hair care tools, personal grooming items, and beauty packaging solutions.',
    subcategories: ['Skincare Products', 'Cosmetics', 'Hair Care Tools', 'Beauty Packaging', 'Personal Grooming'],
    imgQuery: 'beauty cosmetics skincare products packaging manufacturing',
  },
  {
    title: 'Promotional Products',
    desc: 'Custom-branded merchandise, corporate gifts, trade show giveaways, promotional pens, drinkware, and tech accessories.',
    subcategories: ['Custom Branding', 'Corporate Gifts', 'Drinkware', 'Tech Accessories', 'Trade Show Items'],
    imgQuery: 'custom branded promotional products corporate gifts merchandise',
  },
  {
    title: 'Industrial & Machinery',
    desc: 'Metal parts, CNC machined components, injection molds, pumps, valves, fasteners, and industrial tools.',
    subcategories: ['Metal Fabrication', 'CNC Machining', 'Injection Molding', 'Fasteners & Hardware', 'Industrial Tools'],
    imgQuery: 'industrial machinery CNC metal parts precision manufacturing',
  },
  {
    title: 'Toys & Baby Products',
    desc: 'Educational toys, plush toys, outdoor play equipment, baby strollers, car seats, and children\'s accessories.',
    subcategories: ['Educational Toys', 'Plush Toys', 'Outdoor Play', 'Baby Gear', 'Children\'s Accessories'],
    imgQuery: 'toys manufacturing children products factory production',
  },
  {
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, cycling accessories, water sports equipment, and outdoor recreation products.',
    subcategories: ['Fitness Equipment', 'Camping Gear', 'Cycling Accessories', 'Water Sports', 'Yoga & Wellness'],
    imgQuery: 'sports outdoor fitness equipment camping gear manufacturing',
  },
  {
    title: 'Automotive Parts',
    desc: 'Replacement parts, accessories, LED lights, electronics, rubber components, and aftermarket auto products.',
    subcategories: ['Replacement Parts', 'LED Auto Lights', 'Car Electronics', 'Rubber Components', 'Interior Accessories'],
    imgQuery: 'automotive parts manufacturing factory assembly line',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Product Categories
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Products We Source
          </h1>
          <p className="mt-5 text-lg text-brand-200 max-w-2xl mx-auto">
            We source across a wide range of industries. Whatever product you need
            manufactured in China, we have the supplier network and expertise to
            deliver.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-white rounded-xl border border-gray-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={`prod-page-${cat.title.replace(/\s+/g, '-').toLowerCase()}-img-p2m8x`}
                    data-strk-img={`[prod-page-${cat.title.replace(/\s+/g, '-').toLowerCase()}-desc]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div id={`prod-page-${cat.title.replace(/\s+/g, '-').toLowerCase()}-desc`} className="hidden">{cat.imgQuery}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.map((sub) => (
                      <span
                        key={sub}
                        className="px-2.5 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md"
                      >
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

      {/* Don't See Your Product? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The categories above are our most common product lines. We source many
            other products as well. Contact us with your specific requirements and
            we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
