import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Wrench, Shirt, HardHat, Car, UtensilsCrossed, ToyBrick, Zap, Heart, Monitor, Droplets, Lightbulb, Camera, Headphones, Sofa, Hammer, Baby } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'From consumer electronics to industrial components, China is the global hub for electronic manufacturing.',
    items: ['PCBs and circuit boards', 'Sensors and modules', 'Cables and connectors', 'Consumer electronics', 'LED lighting', 'Power supplies'],
  },
  {
    icon: Wrench,
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, tools, and automation equipment from China\'s manufacturing heartlands.',
    items: ['CNC machines', 'Packaging equipment', 'Agricultural machinery', 'Construction equipment', 'Industrial tools', 'Automation systems'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, and accessories from China\'s extensive textile manufacturing network.',
    items: ['Custom clothing', 'Fabrics and materials', 'Footwear', 'Bags and accessories', 'Sportswear', 'Workwear and uniforms'],
  },
  {
    icon: HardHat,
    title: 'Building Materials',
    description: 'Construction materials, fixtures, and hardware for residential and commercial projects.',
    items: ['Steel and metal products', 'Tiles and flooring', 'Bathroom fixtures', 'Doors and windows', 'Hardware and fasteners', 'Insulation materials'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    description: 'OEM and aftermarket automotive parts from certified Chinese manufacturers.',
    items: ['Engine components', 'Body parts', 'Electrical systems', 'Interior accessories', 'Tires and wheels', 'Aftermarket upgrades'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Home & Kitchen',
    description: 'Furniture, cookware, home decor, and appliances for retail and wholesale.',
    items: ['Furniture', 'Cookware and utensils', 'Home decor', 'Kitchen appliances', 'Storage solutions', 'Garden products'],
  },
  {
    icon: ToyBrick,
    title: 'Toys & Gifts',
    description: 'Educational toys, promotional items, and gift products for all ages.',
    items: ['Educational toys', 'Plush toys', 'Board games', 'Promotional items', 'Holiday decorations', 'Craft supplies'],
  },
  {
    icon: Zap,
    title: 'New Energy Products',
    description: 'Solar panels, batteries, and electric vehicle components from leading Chinese manufacturers.',
    items: ['Solar panels', 'Lithium batteries', 'EV charging stations', 'Energy storage systems', 'Wind turbine parts', 'Smart grid components'],
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    description: 'Cosmetics, personal care products, and health supplements.',
    items: ['Skincare products', 'Makeup and cosmetics', 'Hair care products', 'Health supplements', 'Personal care tools', 'Packaging solutions'],
  },
  {
    icon: Monitor,
    title: 'IT & Office Equipment',
    description: 'Computers, peripherals, and office supplies for businesses.',
    items: ['Computer components', 'Networking equipment', 'Office furniture', 'Printers and scanners', 'Security cameras', 'POS systems'],
  },
  {
    icon: Droplets,
    title: 'Chemicals & Raw Materials',
    description: 'Industrial chemicals, plastics, and raw materials for manufacturing.',
    items: ['Plastic resins', 'Industrial chemicals', 'Rubber products', 'Metal alloys', 'Adhesives and sealants', 'Coatings and paints'],
  },
  {
    icon: Lightbulb,
    title: 'Custom & OEM Products',
    description: 'Custom manufacturing and OEM services for unique product requirements.',
    items: ['Product design support', 'Prototype development', 'Custom packaging', 'Private label manufacturing', 'Mold and tooling', 'Assembly services'],
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Products We Source</span>
            <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Sourcing Across All Major Product Categories
            </h1>
            <p id="products-hero-subtitle" className="text-lg text-slate-300 leading-relaxed mb-8">
              Whether you need industrial components or consumer goods, we have the network and expertise to find the right suppliers in China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request a Product Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-slate-200 p-6 lg:p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                  <cat.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">{cat.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure? */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We source virtually any product manufactured in China. Tell us what you need, and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
