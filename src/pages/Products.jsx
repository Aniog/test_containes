import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics & Components' },
    { id: 'home-garden', name: 'Home & Garden' },
    { id: 'apparel', name: 'Apparel & Textiles' },
    { id: 'industrial', name: 'Industrial Equipment' },
    { id: 'consumer-goods', name: 'Consumer Goods' },
    { id: 'auto-parts', name: 'Auto Parts' },
    { id: 'health-beauty', name: 'Health & Beauty' },
    { id: 'toys-gifts', name: 'Toys & Gifts' },
  ];

  const products = [
    {
      id: 1,
      name: 'Consumer Electronics',
      category: 'electronics',
      description: 'Smartphones, tablets, audio equipment, wearables, and consumer electronic devices.',
      examples: ['Smartphones', 'Bluetooth speakers', 'Smart watches', 'Tablets', 'Headphones'],
    },
    {
      id: 2,
      name: 'Electronic Components',
      category: 'electronics',
      description: 'Semiconductors, resistors, capacitors, connectors, and electronic components.',
      examples: ['IC chips', 'PCB boards', 'LED displays', 'Sensors', 'Power supplies'],
    },
    {
      id: 3,
      name: 'Home Furniture',
      category: 'home-garden',
      description: 'Modern and traditional furniture for living rooms, bedrooms, dining, and offices.',
      examples: ['Sofas', 'Dining tables', 'Office chairs', 'Storage cabinets', 'Beds'],
    },
    {
      id: 4,
      name: 'Garden & Outdoor',
      category: 'home-garden',
      description: 'Outdoor furniture, garden tools, lighting, and landscaping products.',
      examples: ['Patio sets', 'Garden tools', 'Outdoor lighting', 'Planters', 'Grills'],
    },
    {
      id: 5,
      name: 'Home Decor',
      category: 'home-garden',
      description: 'Decorative items, lighting fixtures, wall art, and home accessories.',
      examples: ['Table lamps', 'Wall art', 'Mirrors', 'Rugs', 'Cushions'],
    },
    {
      id: 6,
      name: 'Apparel',
      category: 'apparel',
      description: 'Casual wear, formal wear, sportswear, and workwear for men, women, and children.',
      examples: ['T-shirts', 'Jeans', 'Jackets', 'Dresses', 'Sportswear'],
    },
    {
      id: 7,
      name: 'Textiles & Fabrics',
      category: 'apparel',
      description: 'Cotton, polyester, silk, and blended fabrics for various applications.',
      examples: ['Cotton fabric', 'Polyester', 'Denim', 'Knitwear', 'Home textiles'],
    },
    {
      id: 8,
      name: 'Industrial Machinery',
      category: 'industrial',
      description: 'Manufacturing equipment, processing machinery, and industrial tools.',
      examples: ['CNC machines', 'Packaging equipment', 'Conveyor systems', 'Industrial pumps', 'Welding equipment'],
    },
    {
      id: 9,
      name: 'Tools & Hardware',
      category: 'industrial',
      description: 'Hand tools, power tools, fasteners, and hardware components.',
      examples: ['Power drills', 'Wrenches', 'Screwdrivers', 'Bolts & nuts', 'Hinges'],
    },
    {
      id: 10,
      name: 'Consumer Goods',
      category: 'consumer-goods',
      description: 'Everyday consumer products including kitchenware, storage, and household items.',
      examples: ['Kitchenware', 'Storage containers', 'Cleaning supplies', 'Bathroom accessories', 'Stationery'],
    },
    {
      id: 11,
      name: 'Auto Parts',
      category: 'auto-parts',
      description: 'Vehicle components, spare parts, and accessories for cars, trucks, and motorcycles.',
      examples: ['Brake pads', 'Filters', 'Lighting', 'Body parts', 'Engine components'],
    },
    {
      id: 12,
      name: 'Health & Beauty',
      category: 'health-beauty',
      description: 'Skincare, cosmetics, personal care, and health products.',
      examples: ['Skincare products', 'Makeup', 'Hair care', 'Supplements', 'Personal care devices'],
    },
    {
      id: 13,
      name: 'Toys & Games',
      category: 'toys-gifts',
      description: 'Educational toys, outdoor play equipment, board games, and gift items.',
      examples: ['Building blocks', 'Educational toys', 'Outdoor play sets', 'Board games', 'Gift items'],
    },
    {
      id: 14,
      name: 'Promotional Products',
      category: 'toys-gifts',
      description: 'Custom promotional items, corporate gifts, and branded merchandise.',
      examples: ['Custom pens', 'Branded bags', 'Promotional items', 'Corporate gifts', 'Event giveaways'],
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We source a wide range of products across multiple industries. From consumer electronics to industrial equipment, we have the expertise and network to find the right suppliers for your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Browse by Category</h2>
              <div className="flex items-center text-slate-600">
                <Filter className="w-5 h-5 mr-2" />
                <span className="text-sm">Filter products</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                >
                  Inquire about this product
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We source thousands of products. If you don't see your product category listed, contact us anyway. We likely have the network to help you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
