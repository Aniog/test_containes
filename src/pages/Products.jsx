import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Package, 
  Smartphone, 
  Home, 
  Shirt, 
  Wrench, 
  ToyBrick,
  Car,
  FlaskConical
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const heroRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    const loadImages = (ref) => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
      return undefined
    }

    const cleanups = [
      loadImages(heroRef),
      loadImages(productsRef),
    ].filter(Boolean)

    return () => cleanups.forEach(cleanup => cleanup())
  }, [])

  const categories = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      name: 'Electronics & Gadgets',
      description: 'Consumer electronics, mobile accessories, smart home devices, computer peripherals, and electronic components.',
      count: '500+ Products Sourced',
      image: 'electronics-gadgets-sourcing',
    },
    {
      icon: <Home className="w-12 h-12" />,
      name: 'Home & Garden',
      description: 'Furniture, home decor, kitchenware, outdoor equipment, gardening tools, and home improvement products.',
      count: '400+ Products Sourced',
      image: 'home-garden-sourcing',
    },
    {
      icon: <Shirt className="w-12 h-12" />,
      name: 'Fashion & Accessories',
      description: 'Apparel, shoes, bags, jewelry, watches, and fashion accessories for men, women, and children.',
      count: '350+ Products Sourced',
      image: 'fashion-accessories-sourcing',
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      name: 'Industrial Equipment',
      description: 'Machinery, tools, industrial supplies, manufacturing equipment, and spare parts.',
      count: '300+ Products Sourced',
      image: 'industrial-equipment-sourcing',
    },
    {
      icon: <ToyBrick className="w-12 h-12" />,
      name: 'Toys & Gifts',
      description: 'Toys, games, promotional gifts, souvenirs, and seasonal products.',
      count: '250+ Products Sourced',
      image: 'toys-gifts-sourcing',
    },
    {
      icon: <Car className="w-12 h-12" />,
      name: 'Automotive Parts',
      description: 'Auto parts, car accessories, motorcycle parts, and vehicle electronics.',
      count: '200+ Products Sourced',
      image: 'automotive-parts-sourcing',
    },
    {
      icon: <FlaskConical className="w-12 h-12" />,
      name: 'Health & Beauty',
      description: 'Cosmetics, skincare products, health supplements, and personal care items.',
      count: '180+ Products Sourced',
      image: 'health-beauty-sourcing',
    },
    {
      icon: <Package className="w-12 h-12" />,
      name: 'Packaging & Printing',
      description: 'Product packaging, labels, brochures, catalogs, and custom printing services.',
      count: '150+ Products Sourced',
      image: 'packaging-printing-sourcing',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            data-strk-bg-id="products-hero-bg"
            data-strk-bg="[products-hero-subtitle] [products-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p id="products-hero-subtitle" className="text-xl text-blue-100 max-w-3xl mx-auto">
            Extensive experience across diverse product categories
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-blue-600 flex-shrink-0">{category.icon}</div>
                  <div className="flex-1">
                    <h3 id={`product-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">{category.count}</span>
                      <Link
                        to="/contact"
                        className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                      >
                        Source This Product
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Don't See Your Product Category?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We source a wide range of products beyond the categories listed. 
                  Contact us with your specific product requirements, and we'll help you find the right suppliers.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Custom product sourcing',
                    'OEM/ODM services',
                    'Private label manufacturing',
                    'Product customization',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-gray-200">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-strk-img-id="custom-sourcing"
                    data-strk-img="[custom-sourcing-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Custom sourcing solutions"
                  />
                  <h3 id="custom-sourcing-title" className="hidden">Custom product sourcing solutions</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free sourcing quote today. Tell us what you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
