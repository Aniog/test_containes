import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Factory, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquirySection from '@/components/home/InquirySection'

const categories = [
  {
    name: 'Electronics & Components',
    description: 'PCBs, semiconductors, consumer electronics, IoT devices, cables, and electronic components from Shenzhen and Dongguan.',
    regions: 'Shenzhen, Dongguan, Suzhou',
    products: ['PCBA & Circuit Boards', 'Consumer Electronics', 'Sensors & Modules', 'LED Lighting'],
  },
  {
    name: 'Home & Kitchenware',
    description: 'Cookware, tableware, kitchen appliances, storage solutions, and home decor from Guangdong and Zhejiang.',
    regions: 'Guangdong, Zhejiang, Fujian',
    products: ['Stainless Steel Cookware', 'Kitchen Appliances', 'Tableware & Glassware', 'Home Storage'],
  },
  {
    name: 'Industrial Equipment',
    description: 'Machinery parts, tools, hydraulic components, valves, pumps, and industrial automation equipment.',
    regions: 'Zhejiang, Jiangsu, Shandong',
    products: ['Machine Parts & Tools', 'Valves & Pumps', 'Hydraulic Components', 'Measuring Instruments'],
  },
  {
    name: 'Furniture & Decor',
    description: 'Home and office furniture, outdoor furniture, lighting fixtures, and interior decor items.',
    regions: 'Guangdong, Zhejiang, Hebei',
    products: ['Office Furniture', 'Outdoor Furniture', 'Lighting Fixtures', 'Home Decor'],
  },
  {
    name: 'Apparel & Textiles',
    description: 'Garments, fabrics, accessories, and textile products from major manufacturing clusters.',
    regions: 'Zhejiang, Jiangsu, Guangdong, Fujian',
    products: ['Ready-to-Wear Garments', 'Fabrics & Textiles', 'Bags & Accessories', 'Shoes & Footwear'],
  },
  {
    name: 'Auto Parts & Accessories',
    description: 'Automotive components, replacement parts, interior accessories, and aftermarket products.',
    regions: 'Zhejiang, Jiangsu, Hubei',
    products: ['Engine Parts', 'Interior Accessories', 'Car Electronics', 'Maintenance Tools'],
  },
  {
    name: 'Packaging Materials',
    description: 'Custom packaging, boxes, labels, bags, and wrapping materials for various industries.',
    regions: 'Guangdong, Zhejiang, Jiangsu',
    products: ['Cardboard Boxes', 'Plastic Packaging', 'Labels & Stickers', 'Gift Packaging'],
  },
  {
    name: 'Medical & Healthcare',
    description: 'Medical devices, PPE, healthcare equipment, and laboratory supplies from certified manufacturers.',
    regions: 'Guangdong, Jiangsu, Zhejiang, Shandong',
    products: ['Medical Devices', 'PPE & Safety Gear', 'Lab Equipment', 'Healthcare Supplies'],
  },
  {
    name: 'Building Materials',
    description: 'Tiles, sanitary ware, hardware, flooring, and construction materials from Foshan and surrounding areas.',
    regions: 'Foshan, Guangdong, Fujian',
    products: ['Ceramic Tiles', 'Sanitary Ware', 'Hardware & Fittings', 'Flooring Materials'],
  },
  {
    name: 'Toys & Sporting Goods',
    description: 'Children toys, outdoor recreation equipment, fitness gear, and sports accessories.',
    regions: 'Guangdong, Zhejiang, Jiangsu',
    products: ['Educational Toys', 'Outdoor Recreation', 'Fitness Equipment', 'Sports Accessories'],
  },
  {
    name: 'Personal Care & Cosmetics',
    description: 'Skincare, haircare, makeup, personal care appliances, and cosmetic packaging.',
    regions: 'Guangdong, Zhejiang, Shanghai',
    products: ['Skincare Products', 'Haircare', 'Cosmetic Packaging', 'Beauty Appliances'],
  },
  {
    name: 'Pet Products',
    description: 'Pet food, toys, accessories, grooming tools, and pet care supplies.',
    regions: 'Guangdong, Zhejiang, Jiangsu',
    products: ['Pet Toys', 'Pet Accessories', 'Grooming Tools', 'Pet Furniture'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          data-strk-bg-id="products-bg-5e6f7a"
          data-strk-bg="[products-title] [products-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-slate-900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p id="products-subtitle" className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            We source across 12 major product categories, leveraging deep supplier networks in key Chinese manufacturing regions.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((cat, index) => (
              <div
                key={cat.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="w-6 h-6 text-brand-700" />
                    <h2 className="text-2xl font-bold text-slate-900">{cat.name}</h2>
                  </div>
                  <p className="text-slate-600 mb-4">{cat.description}</p>
                  <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
                    <Factory className="w-4 h-4" />
                    <span>Key regions: <span className="font-medium text-slate-700">{cat.regions}</span></span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.products.map((product) => (
                      <li key={product} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div
                    data-strk-bg-id={`product-bg-${index}`}
                    data-strk-bg={`[product-title-${index}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="w-full aspect-[4/3] bg-slate-100 rounded-xl"
                  />
                  <span id={`product-title-${index}`} className="sr-only">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Do Not See Your Product Category?</h2>
          <p className="text-lg text-blue-100/80 mb-8">
            We have access to suppliers across hundreds of sub-categories. Contact us and we will find the right match for your needs.
          </p>
          <Link
            to="/contact"
            className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-3.5 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}