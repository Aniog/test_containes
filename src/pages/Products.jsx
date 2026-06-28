import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Smartphone, Home, Shirt, Car, Gamepad, Briefcase, Utensils, Monitor } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const productCategories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Electronics & Gadgets',
      description: 'Smartphones, tablets, consumer electronics, computer accessories, and electronic components.',
      examples: ['Smartphones & Tablets', 'Computer Accessories', 'Consumer Electronics', 'Electronic Components', 'Smart Home Devices'],
      imgId: 'cat-electronics-1a2b3c',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Home & Garden',
      description: 'Furniture, home decor, kitchenware, gardening tools, and outdoor equipment.',
      examples: ['Furniture', 'Home Decor', 'Kitchenware', 'Gardening Tools', 'Outdoor Equipment'],
      imgId: 'cat-home-4d5e6f',
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Fashion & Accessories',
      description: 'Clothing, shoes, bags, jewelry, watches, and fashion accessories.',
      examples: ['Clothing', 'Shoes & Footwear', 'Bags & Luggage', 'Jewelry & Watches', 'Fashion Accessories'],
      imgId: 'cat-fashion-7g8h9i',
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Automotive & Motorcycle',
      description: 'Auto parts, motorcycle parts, car accessories, and garage equipment.',
      examples: ['Auto Parts', 'Motorcycle Parts', 'Car Accessories', 'Garage Equipment', 'Tires & Wheels'],
      imgId: 'cat-auto-1j2k3l',
    },
    {
      icon: <Toy className="w-8 h-8" />,
      title: 'Toys & Gifts',
      description: 'Toys, games, promotional gifts, crafts, and holiday decorations.',
      examples: ['Toys & Games', 'Promotional Gifts', 'Crafts & DIY', 'Holiday Decorations', 'Party Supplies'],
      imgId: 'cat-toys-4m5n6o',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Industrial & Commercial',
      description: 'Machinery, industrial equipment, office supplies, and commercial products.',
      examples: ['Machinery', 'Industrial Equipment', 'Office Supplies', 'Commercial Products', 'Safety Equipment'],
      imgId: 'cat-industrial-7p8q9r',
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Food & Beverage',
      description: 'Food processing equipment, packaging machinery, and food contact materials.',
      examples: ['Food Processing Equipment', 'Packaging Machinery', 'Food Contact Materials', 'Beverage Equipment', 'Kitchen Appliances'],
      imgId: 'cat-food-a1b2c3',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Textiles & Fabrics',
      description: 'Fabrics, textiles, yarns, and related manufacturing equipment.',
      examples: ['Fabrics & Textiles', 'Yarns & Threads', 'Textile Machinery', 'Garment Accessories', 'Technical Textiles'],
      imgId: 'cat-textiles-d4e5f6',
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Products We Source
            </h1>
            <p id="products-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience sourcing a wide range of products from China. 
              Whatever you need, we can help you find the right suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2 id={`cat-title-${index}`} className="text-2xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h2>
                    <p id={`cat-desc-${index}`} className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>

                <img
                  alt={category.title}
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[cat-desc-${index}] [cat-title-${index}] products sourcing China`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-lg mb-6"
                />

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Examples we source:</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, idx) => (
                      <span key={idx} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process for Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Source Your Products
            </h2>
            <p id="process-subtitle" className="text-xl text-gray-600">
              Our proven process ensures you get the right products at the right price
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Understand Requirements',
                description: 'We start by understanding your product specifications, quality standards, and target price.',
              },
              {
                step: '02',
                title: 'Find Suppliers',
                description: 'We identify and verify suppliers with the right capabilities and capacity.',
              },
              {
                step: '03',
                title: 'Quality Assurance',
                description: 'We conduct inspections at every stage to ensure quality standards are met.',
              },
              {
                step: '04',
                title: 'Manage Logistics',
                description: 'We coordinate shipping and handle all logistics for smooth delivery.',
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 relative">
                <div className="text-5xl font-bold text-blue-100 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Product Sourcing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Product Sourcing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Extensive Supplier Network',
                description: 'We have built relationships with thousands of verified suppliers across China.',
                imgId: 'why-suppliers-1g2h3i',
              },
              {
                title: 'Category Expertise',
                description: 'Our team has deep knowledge across multiple product categories.',
                imgId: 'why-expertise-4j5k6l',
              },
              {
                title: 'Quality Focus',
                description: 'We prioritize quality at every stage of the sourcing process.',
                imgId: 'why-quality-7m8n9o',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`${item.title} sourcing China`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Looking for Specific Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us what you need. We'll find the right suppliers and handle everything for you.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
