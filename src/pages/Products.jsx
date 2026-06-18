import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Package, Cpu, Shirt, Sofa, Wrench, 
  Box, Gift, Dumbbell, Sparkles, Factory, Search
} from 'lucide-react';

const products = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    icon: Cpu,
    description: 'Consumer electronics, smart devices, and electronic components from verified manufacturers.',
    categories: ['Smartphones & Tablets', 'Laptops & Computers', 'Audio Equipment', 'Smart Home Devices', 'Wearable Technology', 'Electronic Components'],
    suppliers: '2,500+',
    minOrder: '$5,000',
    image: 'electronics'
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    icon: Shirt,
    description: 'Garments, fabrics, and fashion accessories from experienced textile manufacturers.',
    categories: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Kids Clothing', 'Fabrics & Materials', 'Accessories'],
    suppliers: '3,200+',
    minOrder: '$3,000',
    image: 'textiles'
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Goods',
    icon: Sofa,
    description: 'Modern furniture and home decor from specialized manufacturers.',
    categories: ['Living Room Furniture', 'Bedroom Furniture', 'Office Furniture', 'Outdoor Furniture', 'Home Decor', 'Lighting'],
    suppliers: '1,800+',
    minOrder: '$10,000',
    image: 'furniture'
  },
  {
    id: 'machinery',
    name: 'Machinery & Parts',
    icon: Wrench,
    description: 'Industrial machinery, equipment, and precision parts.',
    categories: ['Industrial Machinery', 'Agricultural Equipment', 'Construction Machinery', 'Auto Parts', 'Mechanical Parts', 'Tools'],
    suppliers: '1,200+',
    minOrder: '$15,000',
    image: 'machinery'
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    icon: Box,
    description: 'Custom packaging solutions and printed materials.',
    categories: ['Paper Packaging', 'Plastic Packaging', 'Gift Boxes', 'Labels & Stickers', 'Printing Services', 'Custom Displays'],
    suppliers: '900+',
    minOrder: '$2,000',
    image: 'packaging'
  },
  {
    id: 'toys',
    name: 'Toys & Gifts',
    icon: Gift,
    description: 'Toys, games, and promotional gifts from creative manufacturers.',
    categories: ['Educational Toys', 'Electronic Toys', 'Plush Toys', 'Board Games', 'Promotional Gifts', 'Seasonal Items'],
    suppliers: '1,500+',
    minOrder: '$2,500',
    image: 'toys'
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    icon: Dumbbell,
    description: 'Sports equipment and outdoor gear from specialized producers.',
    categories: ['Fitness Equipment', 'Camping Gear', 'Water Sports', 'Cycling Products', 'Outdoor Clothing', 'Sports Accessories'],
    suppliers: '1,100+',
    minOrder: '$5,000',
    image: 'sports'
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    icon: Sparkles,
    description: 'Cosmetics, skincare, and personal care products.',
    categories: ['Skincare Products', 'Makeup & Cosmetics', 'Hair Care', 'Body Care', 'Fragrances', 'Beauty Tools'],
    suppliers: '1,400+',
    minOrder: '$3,000',
    image: 'beauty'
  },
  {
    id: 'industrial',
    name: 'Industrial Supplies',
    icon: Factory,
    description: 'Industrial components and supplies for various sectors.',
    categories: ['Safety Equipment', 'Hardware & Fasteners', 'Electrical Components', 'Plumbing Supplies', 'Industrial Tools', 'Raw Materials'],
    suppliers: '800+',
    minOrder: '$10,000',
    image: 'industrial'
  }
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
            <p className="text-xl text-gray-200">
              We have verified suppliers across a wide range of industries. 
              Find the right manufacturer for your product needs.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Products
              </button>
              {products.map(product => (
                <button
                  key={product.id}
                  onClick={() => setSelectedCategory(product.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === product.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {product.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card group overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <product.icon className="w-20 h-20 text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-500">Verified Suppliers</p>
                      <p className="font-semibold text-primary">{product.suppliers}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Min. Order</p>
                      <p className="font-semibold text-primary">{product.minOrder}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.categories.slice(0, 3).map((cat, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {cat}
                        </span>
                      ))}
                      {product.categories.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{product.categories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    to={`/contact?product=${product.id}`}
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Can't Find Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We have access to thousands of suppliers beyond what's listed here. 
              Contact us with your specific requirements and we'll find the right manufacturer for you.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Tell Us What You Need <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation. We'll help you find the perfect supplier 
            for your needs.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}