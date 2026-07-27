import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'textiles', name: 'Textiles & Apparel' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'auto', name: 'Auto Parts' },
    { id: 'toys', name: 'Toys & Gifts' },
  ];

  const products = [
    {
      id: 1,
      name: 'Smartphone Accessories',
      category: 'electronics',
      description: 'Phone cases, chargers, cables, and screen protectors',
      image: 'electronics',
    },
    {
      id: 2,
      name: 'Consumer Electronics',
      category: 'electronics',
      description: 'Bluetooth speakers, headphones, and smart devices',
      image: 'electronics',
    },
    {
      id: 3,
      name: 'Garments',
      category: 'textiles',
      description: 'T-shirts, jackets, and casual wear',
      image: 'textiles',
    },
    {
      id: 4,
      name: 'Home Textiles',
      category: 'textiles',
      description: 'Bedding, curtains, and table linens',
      image: 'textiles',
    },
    {
      id: 5,
      name: 'Kitchenware',
      category: 'home',
      description: 'Cookware, utensils, and storage containers',
      image: 'home',
    },
    {
      id: 6,
      name: 'Garden Tools',
      category: 'home',
      description: 'Hand tools, watering equipment, and planters',
      image: 'home',
    },
    {
      id: 7,
      name: 'Industrial Equipment',
      category: 'machinery',
      description: 'CNC machines, compressors, and pumps',
      image: 'machinery',
    },
    {
      id: 8,
      name: 'Auto Components',
      category: 'auto',
      description: 'Brake parts, filters, and lighting',
      image: 'auto',
    },
    {
      id: 9,
      name: 'Toys & Games',
      category: 'toys',
      description: 'Educational toys, board games, and outdoor play',
      image: 'toys',
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We source a wide range of products across multiple industries. From consumer goods to industrial equipment, we have the expertise and network to find the right suppliers for your needs.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Request a Product Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={containerRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-200 relative">
                  <img
                    data-strk-img-id={`product-${product.id}-img`}
                    data-strk-img={`[product-${product.id}-name] [product-${product.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`product-${product.id}-name`} className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p id={`product-${product.id}-category`} className="text-slate-600 mb-4">{product.description}</p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We source thousands of products. If you have a specific product in mind, contact us and we'll find the right suppliers for you.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
