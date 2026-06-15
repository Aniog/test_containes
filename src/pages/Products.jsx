import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Package, CheckCircle } from 'lucide-react'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="products-hero-title" className="text-5xl font-bold text-gray-900 mb-6">
              Products We Source
            </h1>
            <p id="products-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience sourcing a wide range of products across various industries from verified Chinese suppliers
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Electronics & Technology",
                description: "Consumer electronics, smart devices, computer accessories, and electronic components",
                items: ["Smartphones & Tablets", "Laptops & Accessories", "Smart Home Devices", "Wearables & IoT", "Audio & Video Equipment", "Computer Peripherals"],
                image: "electronics technology products"
              },
              {
                category: "Home & Garden",
                description: "Furniture, home decor, kitchen appliances, and outdoor products",
                items: ["Furniture & Sofas", "Home Decor & Lighting", "Kitchen Appliances", "Garden Tools & Furniture", "Bedding & Linens", "Storage & Organization"],
                image: "home garden products"
              },
              {
                category: "Fashion & Textiles",
                description: "Apparel, footwear, bags, and textile products",
                items: ["Men's & Women's Apparel", "Footwear & Shoes", "Bags & Luggage", "Textiles & Fabrics", "Sportswear & Activewear", "Fashion Accessories"],
                image: "fashion textiles clothing"
              },
              {
                category: "Industrial & Commercial",
                description: "Machinery parts, industrial equipment, and commercial supplies",
                items: ["Machinery & Parts", "Industrial Equipment", "Packaging Materials", "Office Supplies", "Tools & Hardware", "Safety Equipment"],
                image: "industrial commercial equipment"
              },
              {
                category: "Health & Beauty",
                description: "Cosmetics, personal care products, and health supplements",
                items: ["Cosmetics & Makeup", "Skincare & Personal Care", "Health Supplements", "Medical Devices", "Spa & Wellness Products", "Hair Care Products"],
                image: "health beauty products"
              },
              {
                category: "Toys & Gifts",
                description: "Toys, games, promotional gifts, and pet products",
                items: ["Toys & Games", "Promotional Gifts", "Stationery & Office", "Pet Products", "Party Supplies", "Crafts & Hobbies"],
                image: "toys gifts products"
              },
              {
                category: "Automotive & Transportation",
                description: "Auto parts, accessories, and transportation equipment",
                items: ["Auto Parts & Accessories", "Car Electronics", "Motorcycle Parts", "Bicycles & Accessories", "Transportation Equipment", "Garage & Tools"],
                image: "automotive parts accessories"
              },
              {
                category: "Food & Beverage",
                description: "Food processing equipment, packaging, and beverage products",
                items: ["Food Processing Equipment", "Packaging Machinery", "Beverage Equipment", "Kitchen Equipment", "Food Packaging", "Catering Supplies"],
                image: "food beverage equipment"
              },
              {
                category: "Construction & Building",
                description: "Building materials, hardware, and construction equipment",
                items: ["Building Materials", "Hardware & Tools", "Plumbing & Electrical", "Safety & Security", "Decoration Materials", "Construction Equipment"],
                image: "construction building materials"
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  alt={product.category}
                  data-strk-img-id={`product-${index}`}
                  data-strk-img={product.image}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={`product-category-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                    {product.category}
                  </h3>
                  <p id={`product-desc-${index}`} className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    {product.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="industries-title" className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p id="industries-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experience spans across multiple industries, helping businesses of all sizes source successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { industry: "Retail & E-commerce", clients: "Online sellers, retailers, wholesalers" },
              { industry: "Manufacturing", clients: "OEMs, ODMs, brand owners" },
              { industry: "Startups & SMEs", clients: "New businesses, entrepreneurs" },
              { industry: "Enterprise", clients: "Large corporations, Fortune 500" },
              { industry: "Healthcare", clients: "Medical device companies, clinics" },
              { industry: "Education", clients: "Schools, universities, training centers" },
              { industry: "Hospitality", clients: "Hotels, restaurants, event planners" },
              { industry: "Construction", clients: "Contractors, developers, architects" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.industry}</h3>
                <p className="text-sm text-gray-600">{item.clients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="capabilities-title" className="text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Product Types</h3>
              <ul className="space-y-4">
                {[
                  "Custom OEM/ODM products",
                  "Private label products",
                  "White label products",
                  "Off-the-shelf products",
                  "Raw materials & components",
                  "Packaging & labeling",
                  "Prototypes & samples",
                  "Small to large production runs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Order Quantities</h3>
              <ul className="space-y-4">
                {[
                  "Small orders (100-500 units)",
                  "Medium orders (500-5,000 units)",
                  "Large orders (5,000+ units)",
                  "Trial orders & samples",
                  "Repeat orders & reorders",
                  "Mixed container loads",
                  "Full container loads (FCL)",
                  "Less than container loads (LCL)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We source a wide range of products beyond these categories. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Discuss Your Product Needs
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
