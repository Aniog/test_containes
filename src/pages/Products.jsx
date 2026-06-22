import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Smart home devices, audio, wearables, computer peripherals, and mobile accessories.",
    points: ["Bluetooth Speakers & Earbuds", "Smartwatches & Fitness Trackers", "Power Banks & Chargers", "Smart Home Sensors"]
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, small appliances, home decor, cleaning supplies, and storage solutions.",
    points: ["Coffee Makers & Blenders", "Cutlery & Utensils", "Storage Containers", "Decorative Lighting"]
  },
  {
    id: "outdoor-garden",
    title: "Outdoor & Garden",
    desc: "Camping gear, patio furniture, gardening tools, and outdoor lighting.",
    points: ["Tents & Sleeping Bags", "Patio Umbrellas & Seating", "Solar Pathway Lights", "Planters & Pots"]
  },
  {
    id: "toys-baby",
    title: "Toys & Baby Products",
    desc: "Educational toys, plush items, baby care, and nursery accessories. strict compliance with safety certs.",
    points: ["STEM Learning Toys", "Baby Monitors", "Strollers & Carriers", "Eco-friendly wooden toys"]
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    desc: "Ready-to-wear clothing, activewear, fabrics, bedding, and fashion accessories.",
    points: ["Yoga Wear", "Winter Jackets", "Bed Sheet Sets", "Handbags & Backpacks"]
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Building materials, hand tools, small machinery, and packaging materials.",
    points: ["Power Tools", "PPE & Safety Gear", "Custom Packaging Boxes", "Fasteners & Bearings"]
  }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" id="products-page-title">Products We Source</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 max-w-2xl mx-auto" id="products-page-desc">
            Thanks to China's comprehensive industrial supply chain, we can source almost any consumer or light industrial product. Here are our main categories of expertise.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] w-full bg-slate-100 relative">
                <img
                    data-strk-img-id={`prod-main-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}] [cat-desc-${cat.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                 <h2 className="text-2xl font-bold text-slate-900 mb-3" id={`cat-title-${cat.id}`}>{cat.title}</h2>
                 <p className="text-slate-600 mb-6 flex-grow" id={`cat-desc-${cat.id}`}>{cat.desc}</p>
                 <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Examples:</h3>
                    <ul className="space-y-2">
                      {cat.points.map((pt, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 text-blue-500">•</span> {pt}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-slate-100 py-16 text-center border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't see your product?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">We likely still source it. Send us your product specifications and we will let you know immediately if we can help.</p>
        <Link to="/contact" className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500">Contact Us with Your Specs</Link>
      </div>
    </div>
  );
};

export default Products;