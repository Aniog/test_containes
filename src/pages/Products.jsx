import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      desc: "Smart home devices, audio equipment, wearables, and electronic accessories.",
      items: ["TWS Earbuds", "Smartwatches", "Power Banks", "Cables & Chargers", "Small Appliances"]
    },
    {
      id: "apparel",
      title: "Apparel & Textiles",
      desc: "Clothing, activewear, fabrics, and soft goods with specific material requirements.",
      items: ["Activewear", "Streetwear", "Custom Uniforms", "Bags & Backpacks", "Home Textiles"]
    },
    {
      id: "home-goods",
      title: "Home & Kitchen",
      desc: "Furniture, decor, kitchenware, and daily utility products.",
      items: ["Cookware", "Storage Solutions", "Small Furniture", "Lighting", "Bathroom Accessories"]
    },
    {
      id: "machinery",
      title: "Industrial & Machinery",
      desc: "Tools, manufacturing equipment, and specialized industrial components.",
      items: ["Packaging Machinery", "CNC Parts", "Construction Tools", "Agricultural Equipment"]
    },
    {
      id: "auto-parts",
      title: "Automotive Parts",
      desc: "Aftermarket parts, car accessories, and specialized automotive tools.",
      items: ["Interior Accessories", "Lighting Systems", "Replacement Parts", "Car Care Products"]
    },
    {
      id: "toys",
      title: "Toys & Pet Products",
      desc: "Children's toys, educational products, and high-quality pet supplies.",
      items: ["Educational Toys", "Pet Beds", "Grooming Tools", "Plush Toys", "Outdoor Games"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <section 
        className="relative bg-slate-900 py-16 md:py-24 overflow-hidden text-white"
      >
        <div 
          className="absolute inset-0 z-0 bg-slate-800"
          data-strk-bg-id="products-header-bg-5f922"
          data-strk-bg="[products-page-desc] [products-page-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Products We Source</h1>
          <p id="products-page-desc" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our network covers established manufacturing hubs across China, specializing in these core industries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col group">
                <div className="aspect-[3/2] bg-slate-100 relative items-center justify-center flex overflow-hidden">
                  <img
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`product-cat-${category.id}`}
                    data-strk-img={`[cat-${category.id}-desc] [cat-${category.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 max-w-full z-10">
                     <h3 id={`cat-${category.id}-title`} className="text-xl font-bold text-white drop-shadow-md">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p id={`cat-${category.id}-desc`} className="text-slate-600 mb-6 flex-1">{category.desc}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Popular Items:</h4>
                    <div className="flex flex-wrap gap-2">
                       {category.items.map((item, i) => (
                         <span key={i} className="inline-block bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">{item}</span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't see your product?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We have engineers and sourcing specialists capable of evaluating complex, custom OEM/ODM projects. If it can be manufactured in China, we can help you source it safely.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Ask About Custom Sourcing</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
