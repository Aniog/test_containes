import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Shirt, 
  Wrench, 
  Home, 
  Package, 
  Car,
  Box,
  Zap,
  Factory,
  ShoppingBag
} from 'lucide-react'

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    name: 'Electronics & Gadgets',
    description: 'Consumer electronics, smart devices, PC accessories, and electronic components.',
    products: [
      'Smartphones & Tablets',
      'Laptop & Computer Accessories',
      'Smart Home Devices',
      'Audio & Video Equipment',
      'Wearable Technology',
      'Electronic Components',
    ],
    image: 'electronics manufacturing factory',
  },
  {
    id: 'textiles',
    icon: Shirt,
    name: 'Textiles & Garments',
    description: 'Apparel, fabrics, and textile products for fashion and industrial use.',
    products: [
      'Casual & Formal Wear',
      'Sports & Activewear',
      'Technical Textiles',
      'Home Textiles',
      'Workwear & Uniforms',
      'Fabric & Raw Materials',
    ],
    image: 'textile factory manufacturing',
  },
  {
    id: 'machinery',
    icon: Wrench,
    name: 'Machinery & Parts',
    description: 'Industrial machinery, equipment, and precision mechanical components.',
    products: [
      'Industrial Equipment',
      'Agricultural Machinery',
      'Construction Equipment',
      'Mechanical Parts & Components',
      'CNC Machined Parts',
      'Molds & Dies',
    ],
    image: 'industrial machinery factory',
  },
  {
    id: 'home',
    icon: Home,
    name: 'Home & Garden',
    description: 'Products for home improvement, decoration, and outdoor living.',
    products: [
      'Kitchenware & Cookware',
      'Furniture & Fixtures',
      'Home Decor',
      'Garden Equipment',
      'Lighting Products',
      'Storage Solutions',
    ],
    image: 'home products factory',
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Custom packaging solutions and printed materials for various industries.',
    products: [
      'Paper Packaging',
      'Plastic Packaging',
      'Gift Boxes & Cartons',
      'Labels & Stickers',
      'Flexible Packaging',
      'Printing Services',
    ],
    image: 'packaging factory production',
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive Parts',
    description: 'Vehicle parts, components, and accessories for aftermarket and OEM.',
    products: [
      'Engine Components',
      'Body Parts',
      'Interior Parts',
      'Electrical Systems',
      'Tires & Wheels',
      'Aftermarket Accessories',
    ],
    image: 'auto parts manufacturing',
  },
  {
    id: 'toys',
    icon: Box,
    name: 'Toys & Games',
    description: 'Children\'s toys, games, and recreational products.',
    products: [
      'Educational Toys',
      'Electronic Toys',
      'Plush Toys',
      'Board Games',
      'Outdoor Play Equipment',
      'Baby Toys',
    ],
    image: 'toy factory production',
  },
  {
    id: 'lighting',
    icon: Zap,
    name: 'Lighting Products',
    description: 'Residential, commercial, and industrial lighting solutions.',
    products: [
      'LED Lighting',
      'Smart Lighting',
      'Commercial Fixtures',
      'Outdoor Lighting',
      'Industrial Lighting',
      'Lighting Components',
    ],
    image: 'lighting factory manufacturing',
  },
  {
    id: 'industrial',
    icon: Factory,
    name: 'Industrial Supplies',
    description: 'Tools, hardware, and industrial consumables.',
    products: [
      'Hand Tools',
      'Power Tools',
      'Fasteners & Hardware',
      'Safety Equipment',
      'Industrial Chemicals',
      'Measuring Instruments',
    ],
    image: 'industrial supplies factory',
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    name: 'Consumer Goods',
    description: 'General merchandise and everyday consumer products.',
    products: [
      'Kitchen Appliances',
      'Personal Care Products',
      'Pet Supplies',
      'Sports Equipment',
      'Bags & Luggage',
      'Stationery & Office Supplies',
    ],
    image: 'consumer goods manufacturing',
  },
]

const capabilities = [
  {
    title: 'Supplier Network',
    description: 'Access to 5,000+ verified factories across China',
  },
  {
    title: 'Quality Standards',
    description: 'ISO, CE, FCC, RoHS, and industry-specific certifications',
  },
  {
    title: 'Customization',
    description: 'OEM/ODM services for private label and custom products',
  },
  {
    title: 'Logistics',
    description: 'Efficient shipping to 30+ countries worldwide',
  },
]

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products We Source | China Sourcing Categories | SSourcing China</title>
        <meta name="description" content="We source a wide range of products from China including electronics, textiles, machinery, automotive parts, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              With extensive experience across multiple industries, we help you find 
              the right manufacturers for any product category.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <category.icon className="w-20 h-20 text-slate-400" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{category.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.products.slice(0, 4).map((product, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {product}
                      </li>
                    ))}
                    {category.products.length > 4 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{category.products.length - 4} more
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whatever product you need, we have the expertise and network to find the right supplier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-slate-600 text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            We have access to factories across all industries. Contact us with your specific requirements 
            and we'll find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
          >
            Describe Your Product
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products