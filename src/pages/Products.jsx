import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, Cog, Home, Shirt, Factory, Gift, Box,
  CheckCircle, ArrowRight, Phone, Search
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';



const Products = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  


  const categories = [
    {
      name: 'Electronics & Components',
      icon: Cog,
      description: 'Consumer electronics, PCB components, LED products, computer accessories, and electronic modules.',
      products: ['Smart home devices', 'Audio equipment', 'LED lighting', 'Computer parts', 'PCB assemblies'],
      suppliers: '2,500+',
      color: 'blue'
    },
    {
      name: 'Home & Garden',
      icon: Home,
      description: 'Home decor, furniture, kitchen appliances, outdoor equipment, and garden supplies.',
      products: ['Home decor', 'Furniture', 'Kitchen appliances', 'Outdoor equipment', 'Garden tools'],
      suppliers: '1,800+',
      color: 'green'
    },
    {
      name: 'Apparel & Textiles',
      icon: Shirt,
      description: 'Clothing, accessories, fabrics, home textiles, and sporting goods.',
      products: ['Men\'s wear', 'Women\'s wear', 'Children\'s clothing', 'Sportswear', 'Home textiles'],
      suppliers: '1,200+',
      color: 'purple'
    },
    {
      name: 'Machinery & Industrial',
      icon: Factory,
      description: 'Industrial equipment, mechanical components, tools, and manufacturing machinery.',
      products: ['Industrial tools', 'Mechanical parts', 'Safety equipment', 'Packaging machinery', 'Construction materials'],
      suppliers: '950+',
      color: 'orange'
    },
    {
      name: 'Promotional Products',
      icon: Gift,
      description: 'Custom merchandise, corporate gifts, trade show items, and branded products.',
      products: ['Custom mugs', 'T-shirts & caps', 'Bags & cases', 'Stationery', 'Drinkware'],
      suppliers: '800+',
      color: 'teal'
    },
    {
      name: 'Packaging Materials',
      icon: Box,
      description: 'Packaging supplies, boxes, labels, and shipping materials for various industries.',
      products: ['Corrugated boxes', 'Paper bags', 'Labels & tags', 'Bubble wrap', 'Foam inserts'],
      suppliers: '600+',
      color: 'pink'
    }
  ];

  const additionalCategories = [
    'Beauty & Personal Care',
    'Toys & Games',
    'Sports & Outdoors',
    'Automotive Parts',
    'Medical Supplies',
    'Pet Products',
    'Office Supplies',
    'Jewelry & Accessories'
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Extensive experience across diverse product categories with established networks of verified manufacturers.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              Request a Product Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Main Product Categories
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in sourcing a wide range of products from verified Chinese manufacturers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  category.color === 'green' ? 'bg-green-100 text-green-600' :
                  category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  category.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  category.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                  'bg-pink-100 text-pink-600'
                }`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {category.suppliers} suppliers
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                <ul className="space-y-2">
                  {category.products.map((product, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              More Categories We Source
            </h2>
            <p className="text-lg text-gray-600">
              Don't see your product category? We likely source it too. Contact us for specifics.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium text-sm hover:border-blue-200 hover:text-blue-600 transition-colors"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Can't Find Your Product Category?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We have extensive networks across many industries. Tell us what you need, and we'll find the right suppliers for you.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Custom product sourcing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Complex technical specifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Small or large volume orders</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>One-time or ongoing sourcing</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Tell Us What You Need
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-2xl h-80 flex items-center justify-center">
              <img
               
               
               
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%23374151' width='800' height='450'/%3E%3Ctext x='400' y='200' font-family='system-ui' font-size='20' fill='%239ca3af' text-anchor='middle'%3ECustom Product Sourcing%3C/text%3E%3C/svg%3E"
                alt="Custom product sourcing"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Source Your Products?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free product sourcing consultation and supplier recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+8675588887777"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
