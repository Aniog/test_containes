import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    titleId: 'cat-title-electronics',
    descId: 'cat-desc-electronics',
    imgId: 'cat-img-electronics-a1b2c3',
    label: 'Electronics & Components',
    icon: '⚡',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart devices, and electronic components.',
    examples: ['LED Lights', 'Power Banks', 'Smart Home Devices', 'PCB Assemblies', 'Cables & Connectors'],
  },
  {
    id: 'furniture',
    titleId: 'cat-title-furniture',
    descId: 'cat-desc-furniture',
    imgId: 'cat-img-furniture-d4e5f6',
    label: 'Furniture & Home Goods',
    icon: '🪑',
    desc: 'Office furniture, bedroom sets, kitchen accessories, home décor, and storage solutions.',
    examples: ['Office Chairs', 'Dining Tables', 'Storage Shelves', 'Kitchenware', 'Home Décor'],
  },
  {
    id: 'apparel',
    titleId: 'cat-title-apparel',
    descId: 'cat-desc-apparel',
    imgId: 'cat-img-apparel-g7h8i9',
    label: 'Apparel & Textiles',
    icon: '👕',
    desc: 'Clothing, activewear, uniforms, bags, footwear, and fabric materials for fashion and workwear brands.',
    examples: ['T-Shirts & Hoodies', 'Activewear', 'Work Uniforms', 'Bags & Backpacks', 'Footwear'],
  },
  {
    id: 'industrial',
    titleId: 'cat-title-industrial',
    descId: 'cat-desc-industrial',
    imgId: 'cat-img-industrial-j1k2l3',
    label: 'Industrial Equipment',
    icon: '⚙️',
    desc: 'Machinery, tools, safety equipment, industrial components, and manufacturing supplies.',
    examples: ['Power Tools', 'Safety Equipment', 'Hydraulic Parts', 'Conveyor Systems', 'Welding Equipment'],
  },
  {
    id: 'toys',
    titleId: 'cat-title-toys',
    descId: 'cat-desc-toys',
    imgId: 'cat-img-toys-m4n5o6',
    label: 'Toys & Baby Products',
    icon: '🧸',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories.',
    examples: ['Educational Toys', 'Plush Toys', 'Baby Monitors', 'Strollers', 'Children\'s Furniture'],
  },
  {
    id: 'health',
    titleId: 'cat-title-health',
    descId: 'cat-desc-health',
    imgId: 'cat-img-health-p7q8r9',
    label: 'Health & Beauty',
    icon: '💊',
    desc: 'Personal care products, cosmetics, medical devices, supplements, and wellness accessories.',
    examples: ['Skincare Products', 'Hair Care', 'Medical Devices', 'Fitness Accessories', 'Supplements'],
  },
  {
    id: 'sports',
    titleId: 'cat-title-sports',
    descId: 'cat-desc-sports',
    imgId: 'cat-img-sports-s1t2u3',
    label: 'Sports & Outdoor',
    icon: '🏋️',
    desc: 'Gym equipment, outdoor gear, camping supplies, cycling accessories, and team sports products.',
    examples: ['Gym Equipment', 'Camping Gear', 'Cycling Accessories', 'Team Sports', 'Water Sports'],
  },
  {
    id: 'packaging',
    titleId: 'cat-title-packaging',
    descId: 'cat-desc-packaging',
    imgId: 'cat-img-packaging-v4w5x6',
    label: 'Packaging & Labels',
    icon: '📦',
    desc: 'Custom packaging, printed boxes, labels, bags, and branded packaging solutions for retail and e-commerce.',
    examples: ['Custom Boxes', 'Printed Labels', 'Poly Bags', 'Retail Packaging', 'Eco Packaging'],
  },
  {
    id: 'auto',
    titleId: 'cat-title-auto',
    descId: 'cat-desc-auto',
    imgId: 'cat-img-auto-y7z8a9',
    label: 'Auto Parts',
    icon: '🔧',
    desc: 'Automotive components, accessories, tools, and replacement parts for passenger and commercial vehicles.',
    examples: ['Car Accessories', 'Engine Parts', 'Lighting Systems', 'Tires & Wheels', 'Diagnostic Tools'],
  },
  {
    id: 'building',
    titleId: 'cat-title-building',
    descId: 'cat-desc-building',
    imgId: 'cat-img-building-b1c2d3',
    label: 'Building Materials',
    icon: '🏗️',
    desc: 'Construction materials, hardware, flooring, tiles, sanitary ware, and architectural products.',
    examples: ['Ceramic Tiles', 'Flooring', 'Hardware Fittings', 'Sanitary Ware', 'Steel Products'],
  },
  {
    id: 'food',
    titleId: 'cat-title-food',
    descId: 'cat-desc-food',
    imgId: 'cat-img-food-e4f5g6',
    label: 'Food & Agriculture',
    icon: '🌾',
    desc: 'Food ingredients, agricultural products, processing equipment, and food packaging solutions.',
    examples: ['Food Ingredients', 'Dried Foods', 'Agricultural Tools', 'Food Packaging', 'Processing Equipment'],
  },
  {
    id: 'pet',
    titleId: 'cat-title-pet',
    descId: 'cat-desc-pet',
    imgId: 'cat-img-pet-h7i8j9',
    label: 'Pet Products',
    icon: '🐾',
    desc: 'Pet food, accessories, grooming products, pet furniture, and veterinary supplies.',
    examples: ['Pet Food', 'Pet Toys', 'Grooming Tools', 'Pet Beds', 'Collars & Leashes'],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [search, setSearch] = useState('');

  const filtered = categories.filter(
    (c) =>
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.examples.some((e) => e.toLowerCase().includes(search.toLowerCase()))
  );

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [search]);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Products We Source from China
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            We source across a wide range of industries. If your product is manufactured in China, we can help you find the right supplier.
          </p>
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products or categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No categories found for "{search}".</p>
              <p className="text-slate-400 text-sm mt-2">Try a different search term or <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link> about your specific product.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cat) => (
                <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all group">
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      alt={cat.label}
                      data-strk-img-id={cat.imgId}
                      data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 text-2xl bg-white rounded-lg w-10 h-10 flex items-center justify-center shadow-sm">
                      {cat.icon}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 id={cat.titleId} className="font-semibold text-slate-900 text-base mb-2">{cat.label}</h3>
                    <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-3">{cat.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-600 text-lg mb-8">
            We source a wide variety of products beyond the categories listed here. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Submit a Sourcing Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
