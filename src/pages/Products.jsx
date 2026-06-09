import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      desc: 'from smart home devices to mobile accessories and wearables.',
      items: ['Smartphones & Accessories', 'Audio & Speakers', 'Smart Home Gadgets', 'PC & Laptop Peripherals']
    },
    {
      id: 'home-garden',
      title: 'Home & Garden',
      desc: 'furniture, decor, kitchenware, and outdoor tools.',
      items: ['Furniture & Lighting', 'Kitchenware & Dining', 'Home Decor', 'Outdoor & Gardening Tools']
    },
    {
      id: 'clothing-textiles',
      title: 'Apparel & Textiles',
      desc: 'garments, fabrics, and custom fashion accessories.',
      items: ['Men & Women Apparel', 'Sportswear', 'Fabrics & Raw Materials', 'Shoes & Bags']
    },
    {
      id: 'toys-hobbies',
      title: 'Toys & Hobbies',
      desc: 'educational toys, remote control gadgets, and board games.',
      items: ['Educational Toys', 'RC Vehicles', 'Action Figures', 'Board Games & Puzzles']
    },
    {
      id: 'industrial',
      title: 'Industrial & Machining',
      desc: 'heavy machinery, parts, packaging, and raw materials.',
      items: ['CNC Machining Parts', 'Packaging Materials', 'Hardware & Tools', 'Construction Materials']
    },
    {
      id: 'beauty-personal',
      title: 'Beauty & Personal Care',
      desc: 'skincare tools, cosmetics packaging, and health devices.',
      items: ['Skincare Tools', 'Cosmetics Packaging', 'Hair Care Devices', 'Massage & Relaxation']
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          data-strk-bg-id="products-hero-bg-4x9p"
          data-strk-bg="[products-hero-desc] [products-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p id="products-hero-desc" className="text-xl text-slate-300">
            With direct access to thousands of verified manufacturers across China's major industrial hubs, we can source almost any product.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.id} className="border-0 shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    data-strk-img-id={`prod-cat-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <CardHeader>
                  <CardTitle id={`cat-title-${cat.id}`} className="text-xl">{cat.title}</CardTitle>
                  <CardDescription id={`cat-desc-${cat.id}`} className="text-slate-600">
                    Sourcing {cat.desc}
                  </CardDescription>
                </CardHeader>
                <div className="px-6 pb-6 mt-auto">
                  <ul className="space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your category?</h3>
            <p className="text-slate-600 mb-6">
              Our sourcing potential is limitless. If it's manufactured in China, we can likely find the best supplier for it. Reach out to discuss your specific requirements.
            </p>
            <Button asChild>
              <Link to="/contact">Ask Us About Your Product</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;