import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'PCBs, consumer electronics, LED lighting, sensors, connectors, cables, and electronic assemblies. We source from Shenzhen and Dongguan, the heart of China\'s electronics manufacturing.',
    products: ['PCBs & Circuit Boards', 'Consumer Electronics', 'LED Lighting', 'Sensors & Modules', 'Cables & Connectors', 'Smart Home Devices'],
    imgId: 'prod-electronics-i1',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, home textiles, sportswear, and fashion accessories. Our supplier network covers major textile hubs in Zhejiang, Jiangsu, and Guangdong.',
    products: ['Woven & Knitted Fabrics', 'Casual & Formal Wear', 'Sportswear & Activewear', 'Home Textiles', 'Bags & Accessories', 'Custom Uniforms'],
    imgId: 'prod-textiles-j2',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, packaging machines, and automation systems. We verify technical specifications and after-sales support capabilities.',
    products: ['CNC Machines', 'Packaging Equipment', 'Automation Systems', 'Material Handling', 'Food Processing Equipment', 'Printing Machinery'],
    imgId: 'prod-machinery-k3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, garden tools, home decor, and building materials. Sourced from established manufacturers with export experience.',
    products: ['Indoor & Outdoor Furniture', 'Kitchenware & Cookware', 'Garden Tools & Equipment', 'Home Decor & Accessories', 'Building Materials', 'Bathroom Fixtures'],
    imgId: 'prod-home-l4',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM parts, aftermarket components, EV parts, and automotive electronics. We verify IATF certifications and test sample quality before production.',
    products: ['Engine Components', 'Body Parts & Panels', 'EV Components', 'Lighting & Electrical', 'Interior Accessories', 'Brake & Suspension Parts'],
    imgId: 'prod-auto-m5',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and eco-friendly packaging solutions. We ensure compliance with international food-contact and environmental standards.',
    products: ['Custom Boxes & Cartons', 'Flexible Packaging', 'Labels & Stickers', 'Eco-Friendly Solutions', 'Display Packaging', 'Printing Materials'],
    imgId: 'prod-packaging-n6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, and health supplements. We verify GMP compliance and help navigate regulatory requirements.',
    products: ['Skincare Products', 'Cosmetics & Makeup', 'Hair Care', 'Health Supplements', 'Personal Care Items', 'Beauty Tools & Devices'],
    imgId: 'prod-health-o7',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports-outdoors',
    title: 'Sports & Outdoors',
    desc: 'Fitness equipment, outdoor gear, sporting goods, and recreational products. We source from manufacturers with proven quality track records.',
    products: ['Fitness Equipment', 'Camping & Hiking Gear', 'Water Sports Equipment', 'Team Sports Gear', 'Cycling Accessories', 'Yoga & Wellness'],
    imgId: 'prod-sports-p8',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            From consumer goods to industrial equipment, we source across a wide range of product categories with verified suppliers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((cat, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={cat.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                      <img
                        alt={cat.title}
                        data-strk-img-id={cat.imgId}
                        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`${isEven ? '' : 'lg:order-1'}`}>
                    <h2 id={cat.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">{cat.title}</h2>
                    <p id={cat.descId} className="text-slate-600 leading-relaxed mb-6">{cat.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.products.map((product) => (
                        <div key={product} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                          <span className="text-slate-700 text-sm">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            We source many more product types than listed here. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
