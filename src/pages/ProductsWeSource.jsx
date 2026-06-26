import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Filter, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function ProductsWeSource() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    try {
      if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
        // Run with requestAnimationFrame to ensure DOM is updated after activeCategory changes
        const frameId = window.requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
      }
    } catch (e) {
      console.log('ImageHelper not available');
    }
  }, [activeCategory]);

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "home", name: "Home & Garden" },
    { id: "electronics", name: "Consumer Electronics" },
    { id: "apparel", name: "Apparel & Textiles" },
    { id: "toys", name: "Pet & Kids Toys" },
    { id: "industrial", name: "Industrial & Tools" },
  ];

  const products = [
    {
      id: "p1",
      catId: "home",
      title: "Furniture & Decor",
      desc: "Sofas, outdoor furniture, lighting fixtures, and decorative items.",
      imgQuery: "modern living room furniture interior design",
    },
    {
      id: "p2",
      catId: "home",
      title: "Kitchen & Dining",
      desc: "Cookware, cutlery, small appliances, and storage solutions.",
      imgQuery: "modern kitchen utensils cookware aesthetic",
    },
    {
      id: "p3",
      catId: "electronics",
      title: "Smart Home Devices",
      desc: "Security cameras, smart plugs, robotic vacuums, and sensors.",
      imgQuery: "smart home automation device modern",
    },
    {
      id: "p4",
      catId: "electronics",
      title: "Mobile Accessories",
      desc: "Power banks, wireless chargers, phone cases, and cables.",
      imgQuery: "smartphone wireless charger power bank tech accessories",
    },
    {
      id: "p5",
      catId: "apparel",
      title: "Activewear & Sports",
      desc: "Yoga pants, running shirts, sports bras, and athletic accessories.",
      imgQuery: "activewear running fitness apparel sports",
    },
    {
      id: "p6",
      catId: "apparel",
      title: "Bags & Luggage",
      desc: "Backpacks, handbags, travel suitcases, and cosmetic bags.",
      imgQuery: "stylish backpacks travel luggage bags",
    },
    {
      id: "p7",
      catId: "toys",
      title: "Educational Toys",
      desc: "Wooden puzzles, STEM learning kits, and building blocks.",
      imgQuery: "wooden educational toys kids blocks",
    },
    {
      id: "p8",
      catId: "toys",
      title: "Pet Accessories",
      desc: "Dog beds, cat trees, feeding bowls, and interactive toys.",
      imgQuery: "premium pet beds toys accessories dog cat",
    },
    {
      id: "p9",
      catId: "industrial",
      title: "Hand Tools",
      desc: "Wrench sets, screwdrivers, measuring tools, and toolboxes.",
      imgQuery: "professional hand tools wrench screwdriver set",
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.catId === activeCategory);

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="prod-page-title">
          Products We Source
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl" id="prod-page-desc">
          Our sourcing network spans thousands of verified factories across China's major manufacturing hubs. If it can be manufactured, we can source it.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-28">
              <div className="flex items-center text-lg font-bold text-slate-900 mb-4 pb-4 border-b">
                <Filter className="w-5 h-5 mr-2" />
                Categories
              </div>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "w-full text-left px-4 py-2 rounded-md transition-colors flex items-center justify-between",
                        activeCategory === cat.id 
                          ? "bg-primary text-white font-medium" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {cat.name}
                      {activeCategory === cat.id && <ChevronRight className="w-4 h-4" />}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-slate-900 mb-2">Can't find your product?</h4>
                <p className="text-sm text-slate-500 mb-4">We also source custom products, heavy machinery, and specialized materials.</p>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:underline">
                  Submit Custom Request <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                  <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                    <img 
                      data-strk-img-id={`prod-${product.id}`}
                      data-strk-img={`[prod-title-${product.id}] ${product.imgQuery}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2" id={`prod-title-${product.id}`}>
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4" id={`prod-desc-${product.id}`}>
                      {product.desc}
                    </p>
                    <Link to="/contact" className="text-primary text-sm font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Source this <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-500 mb-4">No specific examples in this category yet.</p>
                <Link to="/contact" className="text-primary font-bold hover:underline">
                  Contact us to source it
                </Link>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}