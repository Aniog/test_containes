import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Package, Factory, CheckCircle
} from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Electrical',
      icon: '🔌',
      products: ['Consumer electronics', 'LED lighting', 'Smart home devices', 'Power banks & chargers', 'Audio equipment', 'Security systems'],
      suppliers: '500+',
      description: 'From consumer gadgets to industrial electrical components, we source from certified electronics manufacturers.'
    },
    {
      name: 'Home & Garden',
      icon: '🏡',
      products: ['Furniture', 'Kitchenware', 'Home decor', 'Garden tools', 'Storage solutions', 'Lighting fixtures'],
      suppliers: '300+',
      description: 'Quality home and garden products from manufacturers with international export experience.'
    },
    {
      name: 'Apparel & Textiles',
      icon: '👔',
      products: ['Fashion clothing', 'Workwear & uniforms', 'Accessories', 'Fabrics & materials', 'Sportswear', 'Children\'s clothing'],
      suppliers: '400+',
      description: 'Custom and ready-made apparel from factories with ethical manufacturing certifications.'
    },
    {
      name: 'Machinery & Equipment',
      icon: '⚙️',
      products: ['Industrial machinery', 'CNC equipment', 'Packaging machines', 'Agricultural equipment', 'Construction machinery', 'Processing equipment'],
      suppliers: '200+',
      description: 'Heavy and light machinery from manufacturers with proven export records and technical support.'
    },
    {
      name: 'Automotive Parts',
      icon: '🚗',
      products: ['Engine components', 'Brake systems', 'Electrical parts', 'Body parts', 'Accessories', 'Tires & wheels'],
      suppliers: '250+',
      description: 'OEM and aftermarket auto parts from TS16949 certified manufacturers.'
    },
    {
      name: 'Building Materials',
      icon: '🏗️',
      products: ['Tiles & flooring', 'Hardware & tools', 'Plumbing supplies', 'Electrical fittings', 'Doors & windows', 'Insulation materials'],
      suppliers: '180+',
      description: 'Construction materials that meet international building codes and standards.'
    },
    {
      name: 'Beauty & Health',
      icon: '💄',
      products: ['Cosmetics', 'Skincare products', 'Hair care', 'Health supplements', 'Personal care items', 'Packaging & containers'],
      suppliers: '350+',
      description: 'Beauty and health products from GMP-certified manufacturers with FDA/EU compliance.'
    },
    {
      name: 'Promotional Items',
      icon: '🎁',
      products: ['Custom merchandise', 'Corporate gifts', 'Event giveaways', 'Branded products', 'Eco-friendly items', 'Tech accessories'],
      suppliers: '280+',
      description: 'Custom branded products for marketing campaigns, corporate events, and retail.'
    },
    {
      name: 'Toys & Baby Products',
      icon: '🧸',
      products: ['Educational toys', 'Outdoor toys', 'Baby gear', 'Safety products', 'Puzzles & games', 'Plush toys'],
      suppliers: '200+',
      description: 'Safe, certified toys and baby products that meet EN71, ASTM, and CPSIA standards.'
    },
    {
      name: 'Sports & Outdoor',
      icon: '⚽',
      products: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment', 'Outdoor apparel'],
      suppliers: '220+',
      description: 'Sports and outdoor products from manufacturers experienced in international retail standards.'
    },
    {
      name: 'Pet Supplies',
      icon: '🐾',
      products: ['Pet food', 'Toys & accessories', 'Grooming products', 'Pet furniture', 'Aquarium supplies', 'Training equipment'],
      suppliers: '150+',
      description: 'Quality pet products from manufacturers with international safety certifications.'
    },
    {
      name: 'Packaging & Printing',
      icon: '📦',
      products: ['Custom boxes', 'Labels & stickers', 'Bags & pouches', 'Display materials', 'Gift packaging', 'Eco packaging'],
      suppliers: '300+',
      description: 'Custom packaging solutions for retail, e-commerce, and industrial applications.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              We source a wide range of products across multiple industries. Whatever you need to import from China, we can help you find the right manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <span className="bg-brand-50 text-brand-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {category.suppliers} suppliers
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.products.slice(0, 3).map((product, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {product}
                    </span>
                  ))}
                  {category.products.length > 3 && (
                    <span className="text-brand-600 text-xs font-medium">
                      +{category.products.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Source */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just find suppliers — we find the right suppliers for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Targeted Search',
                desc: 'We identify suppliers based on your exact product specifications, quality requirements, and budget constraints.'
              },
              {
                icon: Factory,
                title: 'Factory Verification',
                desc: 'Every supplier we recommend has been personally visited and audited by our local team.'
              },
              {
                icon: CheckCircle,
                title: 'Quality Assurance',
                desc: 'We ensure products meet your specifications through rigorous inspection processes.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-800 to-brand-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Product Category?
              </h2>
              <p className="text-lg text-brand-200 mb-8">
                We source virtually any manufactured product from China. Our extensive network of verified suppliers covers thousands of product categories. Tell us what you need, and we'll find the right manufacturers for you.
              </p>
              <Link
                to="/contact"
                className="bg-white text-brand-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors inline-flex items-center"
              >
                Request Custom Sourcing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Source Products from China?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a free quote for your sourcing project. Our team will provide a detailed proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-brand-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-900 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;