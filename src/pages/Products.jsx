import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Factory, ClipboardCheck, Ship,
  Package, Truck, Globe, Clock, Shield, Users, Search,
  Smartphone, Home, Shirt, Cog, Box, Car, Sofa, Dumbbell,
  Gift, Sparkles, Wrench, Cpu, Microscope, Zap
} from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Smartphone,
      name: 'Electronics & Tech',
      examples: 'Smartphones, tablets, laptops, accessories, consumer electronics, PCB assemblies',
      suppliers: '120+ verified factories',
      color: 'blue',
    },
    {
      icon: Home,
      name: 'Home & Garden',
      examples: 'Furniture, home decor, kitchenware, outdoor equipment, garden tools',
      suppliers: '85+ verified factories',
      color: 'green',
    },
    {
      icon: Shirt,
      name: 'Apparel & Textiles',
      examples: 'Clothing, footwear, bags, accessories, fabrics, home textiles',
      suppliers: '200+ verified factories',
      color: 'purple',
    },
    {
      icon: Cog,
      name: 'Machinery & Equipment',
      examples: 'Industrial machinery, agricultural equipment, construction tools, pumps',
      suppliers: '60+ verified factories',
      color: 'orange',
    },
    {
      icon: Box,
      name: 'Packaging Materials',
      examples: 'Paper packaging, plastic containers, labels, flexible packaging, eco-friendly options',
      suppliers: '45+ verified factories',
      color: 'brown',
    },
    {
      icon: Car,
      name: 'Automotive Parts',
      examples: 'Spare parts, accessories, electronic components, tools, diagnostic equipment',
      suppliers: '75+ verified factories',
      color: 'red',
    },
    {
      icon: Sofa,
      name: 'Furniture',
      examples: 'Office furniture, residential furniture, outdoor furniture, furniture components',
      suppliers: '90+ verified factories',
      color: 'indigo',
    },
    {
      icon: Dumbbell,
      name: 'Sports & Outdoors',
      examples: 'Fitness equipment, camping gear, sporting goods, protective equipment',
      suppliers: '55+ verified factories',
      color: 'teal',
    },
    {
      icon: Gift,
      name: 'Toys & Gifts',
      examples: 'Children\'s toys, educational toys, promotional gifts, seasonal decorations',
      suppliers: '110+ verified factories',
      color: 'pink',
    },
    {
      icon: Sparkles,
      name: 'Health & Beauty',
      examples: 'Cosmetics, skincare, hair care, personal care products, supplements',
      suppliers: '70+ verified factories',
      color: 'rose',
    },
    {
      icon: Wrench,
      name: 'Industrial Parts',
      examples: 'Hardware, fasteners, metal components, plastic parts, precision parts',
      suppliers: '95+ verified factories',
      color: 'slate',
    },
    {
      icon: Cpu,
      name: 'LED & Lighting',
      examples: 'LED bulbs, light fixtures, commercial lighting, smart lighting solutions',
      suppliers: '50+ verified factories',
      color: 'yellow',
    },
  ];

  const sourcingFeatures = [
    {
      icon: Search,
      title: 'Deep Industry Knowledge',
      description: 'Our team includes experts with years of experience in each product category.',
    },
    {
      icon: Factory,
      title: 'Verified Factories',
      description: 'Every supplier in our network has been personally verified by our team.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Rigorous inspection protocols ensure your products meet specifications.',
    },
    {
      icon: Ship,
      title: 'Global Shipping',
      description: 'We arrange shipping to any destination worldwide with full logistics support.',
    },
  ];

  const recentProjects = [
    {
      category: 'Electronics',
      product: 'Wireless Bluetooth Earbuds',
      client: 'TechStart Inc. (USA)',
      value: '$125,000',
      result: '30% below target price',
    },
    {
      category: 'Home & Garden',
      product: 'Ergonomic Office Chairs',
      client: 'OfficePro (UK)',
      value: '$85,000',
      result: 'Delivered on schedule',
    },
    {
      category: 'Packaging',
      product: 'Sustainable Food Containers',
      client: 'EcoPack (Germany)',
      value: '$200,000',
      result: 'FDA compliant certified',
    },
    {
      category: 'Sports',
      product: 'Yoga Mats & Accessories',
      client: 'ZenFit (Australia)',
      value: '$55,000',
      result: '20% cost reduction',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-gray-600">
              We have deep expertise across a wide range of industries and product categories. 
              Our team can help you source virtually any product from China.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  category.color === 'green' ? 'bg-green-100 text-green-600' :
                  category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  category.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  category.color === 'brown' ? 'bg-amber-100 text-amber-600' :
                  category.color === 'red' ? 'bg-red-100 text-red-600' :
                  category.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                  category.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                  category.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                  category.color === 'rose' ? 'bg-rose-100 text-rose-600' :
                  category.color === 'slate' ? 'bg-slate-100 text-slate-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{category.examples}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{category.suppliers}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see your product category? We likely source it too.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Ask About Your Product
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Features */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Sourcing Works
            </h2>
            <p className="text-lg text-gray-600">
              For each product category, we provide comprehensive sourcing support tailored to industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sourcingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Recent Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Examples of Products We've Sourced
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped clients across different industries source products successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Package className="w-12 h-12 text-gray-400" />
                </div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.product}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.client}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{project.value}</span>
                  <span className="text-sm text-green-600 font-medium">{project.result}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                Custom Sourcing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Product Category?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We have capabilities and factory relationships across many more categories. 
                Contact us with your specific requirements and we'll find the right suppliers for you.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Rapid supplier identification</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Factory verification included</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Full quality control support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Global shipping arrangements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Custom Search</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Type
                  </label>
                  <input
                    type="text"
                    id="product"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What do you need to source?"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Estimated order quantity"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Get a Custom Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
