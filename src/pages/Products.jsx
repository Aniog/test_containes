import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, Filter } from 'lucide-react';

const products = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Consumer electronics, smart devices, circuit boards, and electronic components from verified manufacturers.',
    suppliers: '120+ verified suppliers',
    categories: ['Smart Home Devices', 'Consumer Electronics', 'Circuit Boards', 'LED Lighting', 'Power Banks', 'Chargers & Cables'],
    minOrder: '500-1000 units',
    certifications: ['CE', 'FCC', 'RoHS', 'UL'],
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Everything for modern living - from furniture to decor. Quality products for homes worldwide.',
    suppliers: '85+ verified suppliers',
    categories: ['Furniture', 'Home Decor', 'Kitchenware', 'Bedding', 'Garden Tools', 'Outdoor Living'],
    minOrder: '200-500 units',
    certifications: ['CE', 'REACH', 'FDA'],
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    description: 'Fabrics, garments, and accessories from certified factories with sustainable practices.',
    suppliers: '95+ verified suppliers',
    categories: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Kids Clothing', 'Fabrics', 'Accessories'],
    minOrder: '300-1000 units',
    certifications: ['GOTS', 'OEKO-TEX', 'ISO 9001'],
  },
  {
    id: 'machinery',
    name: 'Machinery & Equipment',
    description: 'Industrial machinery, equipment parts, and tools from experienced manufacturers.',
    suppliers: '60+ verified suppliers',
    categories: ['Industrial Machinery', 'Parts & Components', 'Tools', 'Agricultural Equipment', 'Construction Tools'],
    minOrder: '50-200 units',
    certifications: ['ISO 9001', 'CE', 'CCC'],
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Custom packaging solutions including boxes, bags, labels, and promotional materials.',
    suppliers: '45+ verified suppliers',
    categories: ['Paper Boxes', 'Plastic Bags', 'Corrugated Boxes', 'Labels & Stickers', 'Gift Boxes', 'Food Packaging'],
    minOrder: '1000-5000 units',
    certifications: ['FSC', 'ISO 9001'],
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, and personal care products meeting international safety standards.',
    suppliers: '70+ verified suppliers',
    categories: ['Skincare', 'Makeup', 'Hair Care', 'Body Care', 'Fragrances', 'Beauty Tools'],
    minOrder: '500-2000 units',
    certifications: ['FDA', 'CE', 'ISO 22716'],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Fitness equipment, outdoor gear, and sporting goods from specialized manufacturers.',
    suppliers: '55+ verified suppliers',
    categories: ['Fitness Equipment', 'Camping Gear', 'Water Sports', 'Cycling', 'Team Sports', 'Outdoor Accessories'],
    minOrder: '200-500 units',
    certifications: ['CE', 'ASTM', 'EN'],
  },
  {
    id: 'toys',
    name: 'Toys & Gifts',
    description: 'Fun and educational toys, games, and gift items from creative manufacturers.',
    suppliers: '40+ verified suppliers',
    categories: ['Educational Toys', 'Electronic Toys', 'Plush Toys', 'Board Games', 'Party Supplies', 'Gift Items'],
    minOrder: '500-1000 units',
    certifications: ['EN 71', 'ASTM F963', 'CE'],
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Auto parts, accessories, and components from quality-conscious manufacturers.',
    suppliers: '50+ verified suppliers',
    categories: ['Car Accessories', 'Auto Parts', 'Electronics', 'Interior', 'Exterior', 'Tools & Equipment'],
    minOrder: '100-500 units',
    certifications: ['ISO 9001', 'CE', 'DOT'],
  },
  {
    id: 'medical',
    name: 'Medical & Health',
    description: 'Medical devices, health products, and equipment meeting strict regulatory standards.',
    suppliers: '35+ verified suppliers',
    categories: ['Medical Devices', 'Health Monitoring', 'Rehabilitation', 'Consumables', 'Personal Protective Equipment'],
    minOrder: '100-500 units',
    certifications: ['ISO 13485', 'CE', 'FDA'],
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Watches',
    description: 'Fashion jewelry, watches, and accessories from skilled artisans and manufacturers.',
    suppliers: '65+ verified suppliers',
    categories: ['Fashion Jewelry', 'Watches', 'Fine Jewelry', 'Costume Jewelry', 'Watch Accessories'],
    minOrder: '100-500 units',
    certifications: ['Nickel Free', 'Lead Free'],
  },
  {
    id: 'food',
    name: 'Food & Beverage',
    description: 'Food processing equipment, packaging, and consumable products from certified facilities.',
    suppliers: '30+ verified suppliers',
    categories: ['Food Processing', 'Kitchen Equipment', 'Food Storage', 'Beverage Equipment'],
    minOrder: '50-200 units',
    certifications: ['ISO 22000', 'HACCP', 'FDA'],
  },
];

const ProductsPage = () => {
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
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A8A] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-[#CBD5E1] mb-8">
              We have established relationships with verified manufacturers across diverse industries. Find the right suppliers for your product needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Request a Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search product categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#64748B]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none bg-white"
              >
                <option value="all">All Categories</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>{product.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#1E3A5F]/20 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-[#1E3A5F] to-[#F97316]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1E293B] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-[#64748B] mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#1E3A5F] mb-3">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">{product.suppliers}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-[#94A3B8] uppercase tracking-wide mb-2">Categories</div>
                    <div className="flex flex-wrap gap-2">
                      {product.categories.slice(0, 3).map((cat, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#F8FAFC] text-[#64748B] text-xs rounded">
                          {cat}
                        </span>
                      ))}
                      {product.categories.length > 3 && (
                        <span className="px-2 py-1 bg-[#F8FAFC] text-[#64748B] text-xs rounded">
                          +{product.categories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((cert, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#10B981]/10 text-[#10B981] text-xs font-medium rounded">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-xs text-[#94A3B8]">Minimum Order</div>
                    <div className="text-sm font-medium text-[#1E293B]">{product.minOrder}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#64748B]">No product categories found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8">
            We have connections beyond these categories. Contact us with your specific product requirements and we'll find the right suppliers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
          >
            Tell Us What You Need
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;