import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Smartphone, 
  Home, 
  Shirt, 
  Heart, 
  Dumbbell, 
  Gift,
  Car, 
  Package, 
  Printer,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Products = () => {
  const categories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Electronics & Gadgets',
      description: 'Consumer electronics, accessories, and tech gadgets',
      products: ['Smartphones & Accessories', 'Computer Peripherals', 'Audio Devices', 'Smart Home Devices', 'Wearable Technology'],
      expertise: 'We have extensive experience sourcing electronics from certified factories with proper testing equipment and quality control systems.'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Home & Garden',
      description: 'Home decor, furniture, kitchenware, and outdoor products',
      products: ['Furniture & Home Decor', 'Kitchen & Dining', 'Bedding & Bath', 'Garden Tools', 'Storage & Organization'],
      expertise: 'We work with factories that specialize in home products, ensuring durability, safety, and compliance with international standards.'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Fashion & Accessories',
      description: 'Clothing, shoes, bags, and fashion accessories',
      products: ['Apparel & Clothing', 'Footwear', 'Bags & Luggage', 'Jewelry & Accessories', 'Textiles & Fabrics'],
      expertise: 'Our team understands fashion trends, fabric quality, and garment construction. We ensure proper sizing, labeling, and packaging.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Beauty',
      description: 'Personal care, cosmetics, and wellness products',
      products: ['Skincare & Cosmetics', 'Personal Care Products', 'Wellness & Spa', 'Hair Care', 'Beauty Tools & Accessories'],
      expertise: 'We source from factories with proper certifications (ISO, GMP) and ensure products meet safety and regulatory requirements.'
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Sports & Outdoor',
      description: 'Fitness equipment, outdoor gear, and sports accessories',
      products: ['Fitness Equipment', 'Outdoor & Camping Gear', 'Sports Accessories', 'Yoga & Pilates', 'Team Sports Equipment'],
      expertise: 'We verify that sports and outdoor products meet safety standards and durability requirements for active use.'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Toys & Gifts',
      description: 'Toys, games, promotional items, and gift products',
      products: ['Toys & Games', 'Promotional Products', 'Gift Items', 'Party Supplies', 'Educational Toys'],
      expertise: 'We ensure toys comply with safety regulations (ASTM, EN71, etc.) and conduct appropriate safety testing.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Automotive Parts',
      description: 'Car accessories, replacement parts, and automotive tools',
      products: ['Car Accessories', 'Replacement Parts', 'Motorcycle Parts', 'Automotive Tools', 'Car Care Products'],
      expertise: 'We work with automotive suppliers that understand precision, durability, and compatibility requirements.'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Industrial Equipment',
      description: 'Machinery, tools, and industrial supplies',
      products: ['Machinery & Equipment', 'Power Tools', 'Industrial Supplies', 'Safety Equipment', 'Warehouse & Storage'],
      expertise: 'We source from manufacturers with proper certifications and ensure equipment meets industrial standards and safety requirements.'
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: 'Packaging & Printing',
      description: 'Custom packaging, labels, and printed materials',
      products: ['Custom Packaging', 'Labels & Stickers', 'Printed Materials', 'Display Boxes', 'Eco-friendly Packaging'],
      expertise: 'We help you create professional packaging that protects your products and enhances brand presentation.'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We have experience sourcing a wide range of products across multiple industries
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Sourcing Expertise</h2>
            <p className="text-lg text-gray-600">
              With over 10 years of experience, we've successfully helped clients source products 
              across diverse categories. Our team understands the specific requirements, quality 
              standards, and compliance issues for each product category.
            </p>
          </div>

          {/* Product Categories */}
          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="bg-blue-50 p-8 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>

                  <div className="p-8">
                    <h4 className="text-lg font-semibold mb-4">Products We Source:</h4>
                    <ul className="space-y-2">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-8">
                    <h4 className="text-lg font-semibold mb-4">Our Expertise:</h4>
                    <p className="text-gray-600 text-sm">{category.expertise}</p>
                    <div className="mt-6">
                      <Link 
                        to="/contact" 
                        className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                      >
                        Source This Category
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process for Products */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>How We Ensure Product Quality</h2>
            <p>Our quality assurance process for every product category</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Supplier Verification',
                description: 'We verify supplier legitimacy, production capacity, and quality management systems before recommending them.'
              },
              {
                title: 'Sample Evaluation',
                description: 'We coordinate sample production and shipping so you can evaluate product quality before ordering.'
              },
              {
                title: 'Pre-shipment Inspection',
                description: 'Our inspectors check products against your specifications before shipment to ensure quality.'
              },
              {
                title: 'Lab Testing',
                description: 'We can arrange third-party laboratory testing for products that require certification or compliance verification.'
              }
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Don't See Your Product Category?</h2>
                <p className="text-gray-600 mb-6">
                  We source a wide variety of products beyond the categories listed above. 
                  If you have a specific product in mind, contact us and we'll help you find 
                  the right supplier.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom and OEM products</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Private label manufacturing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">New product development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hard-to-find items</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Tell Us What You Need</h3>
                <p className="text-gray-600 mb-6">
                  Fill out our inquiry form with your product details, and we'll get back 
                  to you within 24 hours with initial feedback.
                </p>
                <Link to="/contact" className="btn-primary text-lg inline-block">
                  Submit Product Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Source Your Products?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether you're sourcing existing products or developing new ones, 
            we have the expertise to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg">
              Get Free Sourcing Quote
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-700 text-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
