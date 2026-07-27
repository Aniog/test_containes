import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Package, 
  Cpu, 
  Shirt, 
  Sofa, 
  Wrench, 
  Heart, 
  Car, 
  Baby, 
  Box,
  CheckCircle
} from 'lucide-react';

const ProductsPage = () => {
  const categories = [
    {
      id: 'electronics',
      icon: Cpu,
      name: 'Electronics',
      description: 'Consumer electronics, components, and gadgets',
      products: [
        'Smartphones and tablets',
        'Computer accessories',
        'Audio and video equipment',
        'LED lighting',
        'Electronic components',
        'Smart home devices',
        'Wearable technology',
        'Power banks and chargers'
      ]
    },
    {
      id: 'textiles',
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Garments, fabrics, and fashion accessories',
      products: [
        'Casual and formal wear',
        'Sports and outdoor clothing',
        'Fabrics and textiles',
        'Shoes and sandals',
        'Bags and backpacks',
        'Hats and accessories',
        'Scarves and shawls',
        'Custom manufacturing'
      ]
    },
    {
      id: 'furniture',
      icon: Sofa,
      name: 'Furniture',
      description: 'Home, office, and outdoor furniture',
      products: [
        'Living room furniture',
        'Bedroom furniture',
        'Office desks and chairs',
        'Outdoor furniture',
        'Kitchen cabinets',
        'Children furniture',
        'Hotel furniture',
        'Custom furniture'
      ]
    },
    {
      id: 'machinery',
      icon: Wrench,
      name: 'Machinery & Parts',
      description: 'Industrial equipment and components',
      products: [
        'Industrial machinery',
        'Mechanical parts',
        'Tools and hardware',
        'Agricultural equipment',
        'Construction materials',
        'Pump and valve systems',
        'Electrical components',
        'Custom fabrication'
      ]
    },
    {
      id: 'health-beauty',
      icon: Heart,
      name: 'Health & Beauty',
      description: 'Cosmetics, personal care, and wellness products',
      products: [
        'Skincare products',
        'Makeup and cosmetics',
        'Hair care products',
        'Body care items',
        'Health supplements',
        'Medical devices',
        'Fitness equipment',
        'Spa products'
      ]
    },
    {
      id: 'automotive',
      icon: Car,
      name: 'Automotive',
      description: 'Vehicle parts and accessories',
      products: [
        'Auto parts',
        'Car accessories',
        'Motorcycle parts',
        'Electronics for vehicles',
        'Interior accessories',
        'Exterior modifications',
        'Tools and equipment',
        'Battery and electrical'
      ]
    },
    {
      id: 'toys',
      icon: Baby,
      name: 'Toys & Games',
      description: 'Children\'s toys and recreational products',
      products: [
        'Educational toys',
        'Electronic toys',
        'Plush toys',
        'Board games',
        'Outdoor play equipment',
        'Baby toys',
        'Puzzles and crafts',
        'RC toys and drones'
      ]
    },
    {
      id: 'packaging',
      icon: Box,
      name: 'Packaging',
      description: 'Custom packaging and printing solutions',
      products: [
        'Paper boxes',
        'Plastic packaging',
        'Gift boxes',
        'Labels and stickers',
        'Bags and pouches',
        'Bottles and containers',
        'Corrugated boxes',
        'Custom printing'
      ]
    }
  ];

  const capabilities = [
    'OEM (Original Equipment Manufacturing)',
    'ODM (Original Design Manufacturing)',
    'Private label production',
    'Custom specifications',
    'Sample development',
    'Mass production',
    'Quality assurance',
    'Global shipping'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We have expertise across a wide range of product categories. 
              Find the right suppliers for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                  <p className="text-slate-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.products.slice(0, 4).map((product, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {product}
                      </li>
                    ))}
                    {category.products.length > 4 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{category.products.length - 4} more items
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Manufacturing Capabilities
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We work with factories capable of handling various manufacturing arrangements 
                to meet your specific needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Verified Factories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-slate-600">Product Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-slate-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            We have access to thousands of suppliers across various categories. 
            Contact us with your specific requirements and we'll find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;