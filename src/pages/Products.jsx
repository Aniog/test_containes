import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Home,
  Shirt,
  Cog,
  Package,
  Heart,
  Dumbbell,
  Wrench,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'electronics',
      icon: Smartphone,
      name: 'Electronics & Components',
      description: 'Consumer electronics, components, accessories, and smart devices from verified manufacturers.',
      items: [
        'Smartphones and tablets',
        'Consumer electronics',
        'Computer components',
        'Audio equipment',
        'Chargers and cables',
        'LED lighting',
        'Power banks',
        'Electronic modules',
      ],
      minOrder: '500-1,000 units',
    },
    {
      id: 'home-garden',
      icon: Home,
      name: 'Home & Garden',
      description: 'Everything for home improvement, decor, and outdoor living from established factories.',
      items: [
        'Home decor items',
        'Kitchenware',
        'Bathroom accessories',
        'Garden tools',
        'Outdoor furniture',
        'Storage solutions',
        'Ceramic and pottery',
        'Rugs and textiles',
      ],
      minOrder: '200-500 units',
    },
    {
      id: 'textiles-apparel',
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Garments, fabrics, and textile products with verified quality and production capacity.',
      items: [
        'Casual wear',
        'Sports apparel',
        'Outdoor clothing',
        'Fashion accessories',
        'Fabrics and materials',
        'Home textiles',
        'Bags and luggage',
        'Shoes and footwear',
      ],
      minOrder: '500-2,000 units',
    },
    {
      id: 'machinery',
      icon: Cog,
      name: 'Machinery & Equipment',
      description: 'Industrial machinery, equipment parts, and manufacturing tools for various industries.',
      items: [
        'Industrial machinery',
        'Agricultural equipment',
        'Construction tools',
        'Medical equipment parts',
        'Automation components',
        'CNC machinery',
        'Generators',
        'Pumps and valves',
      ],
      minOrder: '10-100 units',
    },
    {
      id: 'packaging',
      icon: Package,
      name: 'Packaging Materials',
      description: 'Custom and standard packaging solutions for retail, food, and industrial applications.',
      items: [
        'Paper packaging',
        'Plastic containers',
        'Metal packaging',
        'Eco-friendly options',
        'Custom printing',
        'Labels and stickers',
        'Bottles and jars',
        'Flexible packaging',
      ],
      minOrder: '1,000-5,000 units',
    },
    {
      id: 'health-beauty',
      icon: Heart,
      name: 'Health & Beauty',
      description: 'Personal care products, cosmetics, and wellness items meeting international standards.',
      items: [
        'Skincare products',
        'Hair care items',
        'Cosmetics',
        'Fragrances',
        'Health supplements',
        'Bath products',
        'Oral care',
        'Beauty tools',
      ],
      minOrder: '500-1,000 units',
    },
    {
      id: 'sports-outdoor',
      icon: Dumbbell,
      name: 'Sports & Outdoor',
      description: 'Sporting goods, outdoor equipment, and fitness products from experienced manufacturers.',
      items: [
        'Fitness equipment',
        'Camping gear',
        'Hiking accessories',
        'Water sports equipment',
        'Cycling products',
        'Team sports gear',
        'Yoga and meditation',
        'Outdoor wear',
      ],
      minOrder: '200-500 units',
    },
    {
      id: 'industrial',
      icon: Wrench,
      name: 'Industrial Parts',
      description: 'Precision parts, components, and materials for industrial and commercial applications.',
      items: [
        'Metal parts',
        'Plastic components',
        'Rubber products',
        'Fasteners',
        'Bearings',
        'Gears and shafts',
        'Seals and gaskets',
        'Custom fabrications',
      ],
      minOrder: '100-500 units',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Products We Source</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Wide Range of Product Categories
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We have established relationships with verified manufacturers across diverse industries. Whatever you need to source from China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-[#f7fafc] rounded-2xl overflow-hidden scroll-mt-24 hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center flex-shrink-0">
                      <product.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">
                        {product.name}
                      </h2>
                      <p className="text-[#4a5568]">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1e3a5f] mb-3">Common Products:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item, i) => (
                        <span
                          key={i}
                          className="bg-white text-[#4a5568] text-sm px-3 py-1.5 rounded-lg border border-[#e2e8f0]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[#e2e8f0]">
                    <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                      <span className="font-medium">Typical MOQ:</span>
                      <span className="text-[#1e3a5f] font-semibold">{product.minOrder}</span>
                    </div>
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="text-[#e67e22] hover:text-[#d35400] font-semibold text-sm flex items-center gap-1 transition-colors"
                    >
                      Request Quote
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-[#4a5568] text-lg mb-8 leading-relaxed">
              The categories above represent our most common sourcing requests, but we work with manufacturers across many other industries. If you don't see your product, just ask. There's a good chance we already have verified suppliers for what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Submit Your Requirements
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#2d5a8e] text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Learn How It Works
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-[#4a5568]">
              <CheckCircle size={16} className="text-[#27ae60]" />
              <span>No product is too unusual or complex for us to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Get a free, no-obligation quote for your sourcing needs. We'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;