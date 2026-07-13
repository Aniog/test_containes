import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Package, Factory, ShoppingBag, Watch, 
  Heart, Car, ArrowRight, CheckCircle, 
  Smartphone, Home, Shirt, Plus
} from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    title: 'Consumer Electronics',
    desc: 'From smartphones and audio devices to smart home gadgets and wearables. China leads the world in electronics manufacturing.',
    items: ['Smartphones & tablets', 'Wireless audio & headphones', 'Smart home devices', 'Wearable technology', 'Computer accessories', 'Chargers & power banks'],
  },
  {
    icon: Factory,
    title: 'Industrial Equipment',
    desc: 'Industrial machinery, components, and tools manufactured to international standards for businesses worldwide.',
    items: ['Machinery & machine parts', 'Power tools & hand tools', 'Automation components', 'Safety & protective equipment', 'Measuring instruments', 'Hydraulic & pneumatic parts'],
  },
  {
    icon: Home,
    title: 'Home & Lifestyle',
    desc: 'Quality home goods, furniture, and lifestyle products that combine functionality with modern design.',
    items: ['Home appliances', 'Furniture & home decor', 'Kitchenware & tableware', 'Bedding & textiles', 'Lighting fixtures', 'Storage & organization'],
  },
  {
    icon: Shirt,
    title: 'Fashion & Accessories',
    desc: 'Apparel, accessories, and fashion goods sourced from specialized manufacturers across China\'s key production regions.',
    items: ['Ready-to-wear apparel', 'Bags & luggage', 'Footwear & sneakers', 'Jewelry & watches', 'Sportswear & activewear', 'Accessories & belts'],
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    desc: 'Personal care, beauty, and health products manufactured in GMP-certified facilities with strict quality control.',
    items: ['Skincare & cosmetics', 'Hair care products', 'Health supplements', 'Medical devices', 'Personal care appliances', 'Essential oils & aromatherapy'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    desc: 'Automotive parts and accessories sourced from specialized manufacturers serving both OEM and aftermarket channels.',
    items: ['Engine & transmission parts', 'Brake & suspension systems', 'Electrical & lighting', 'Interior accessories', 'Car care products', 'Motorcycle parts'],
  },
  {
    icon: ShoppingBag,
    title: 'Packaging & Printing',
    desc: 'Custom packaging solutions, printed materials, and display items for brands and retailers.',
    items: ['Custom boxes & cartons', 'Labels & stickers', 'Shopping bags', 'Display stands', 'Brochures & catalogs', 'Gift packaging'],
  },
  {
    icon: Package,
    title: 'Toys & Games',
    desc: 'Safe, compliant toys and games manufactured in facilities that meet international safety standards.',
    items: ['Educational toys', 'Electronic toys', 'Board games & puzzles', 'Outdoor & sports toys', 'Plush toys', 'Building & construction sets'],
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              We source across a broad range of product categories. China has the manufacturing 
              capacity for almost any product — if it can be made, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {categories.map((cat, i) => (
              <div key={cat.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-start`}>
                <div className="flex-1 w-full">
                  <div className="rounded-xl bg-surface h-64 md:h-80 flex items-center justify-center overflow-hidden">
                    <img
                      alt={cat.title}
                      data-strk-img-id={`prod-cat-${i}`}
                      data-strk-img={`[prod-cat-title-${i}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <span id={`prod-cat-title-${i}`} className="hidden">{cat.title}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <cat.icon className="w-7 h-7 text-primary-light" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{cat.title}</h2>
                  <p className="text-gray-600 mb-6">{cat.desc}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="section-padding bg-surface">
        <div className="container-main text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-primary-light" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Product Category?</h2>
            <p className="text-gray-600 mb-8">
              These are just some of the categories we cover. China's manufacturing ecosystem is vast, 
              and we have access to suppliers across virtually every industry. Contact us with your 
              requirements and we'll let you know if we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Ask About Your Product
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}