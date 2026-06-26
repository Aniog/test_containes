import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Home, Shirt, Cog, Package, Sparkles, Car, Heart, Dumbbell, Lightbulb, Utensils, Monitor } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic accessories.',
    examples: ['Bluetooth speakers', 'USB cables', 'LED lighting', 'Smart home devices', 'PCB assemblies'],
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, garden tools, outdoor products, and household items.',
    examples: ['Wooden furniture', 'Kitchen gadgets', 'Garden tools', 'Home decor', 'Storage solutions'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, custom garments, sportswear, and textile products.',
    examples: ['Custom t-shirts', 'Sportswear', 'Bags & backpacks', 'Fabric rolls', 'Accessories'],
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial',
    description: 'Manufacturing equipment, industrial tools, machine parts, automation components, and hardware.',
    examples: ['CNC machines', 'Power tools', 'Industrial valves', 'Bearings & gears', 'Automation parts'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, printed materials, and promotional products.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Printed catalogs', 'Promotional items'],
  },
  {
    icon: Sparkles,
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, haircare, beauty tools, and personal care products.',
    examples: ['Skincare sets', 'Makeup brushes', 'Hair accessories', 'Nail products', 'Beauty tools'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    description: 'Vehicle parts, car accessories, motorcycle components, and automotive electronics.',
    examples: ['Car mats', 'LED headlights', 'Dash cameras', 'Interior accessories', 'Exterior parts'],
  },
  {
    icon: Heart,
    title: 'Health & Medical',
    description: 'Medical devices, health monitors, fitness equipment, and wellness products.',
    examples: ['Blood pressure monitors', 'Fitness trackers', 'Massage devices', 'First aid kits', 'Health supplements'],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoor',
    description: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Yoga mats', 'Camping tents', 'Fitness equipment', 'Water bottles', 'Outdoor tools'],
  },
  {
    icon: Lightbulb,
    title: 'Toys & Gifts',
    description: 'Children\'s toys, educational products, promotional gifts, and seasonal items.',
    examples: ['Educational toys', 'Plush toys', 'Board games', 'Promotional gifts', 'Seasonal decorations'],
  },
  {
    icon: Utensils,
    title: 'Food & Beverage',
    description: 'Food processing equipment, packaging, kitchen appliances, and beverage products.',
    examples: ['Food packaging', 'Kitchen appliances', 'Tea & coffee products', 'Snack packaging', 'Beverage containers'],
  },
  {
    icon: Monitor,
    title: 'Office & Stationery',
    description: 'Office supplies, stationery, school supplies, and business equipment.',
    examples: ['Notebooks', 'Pens & pencils', 'Desk organizers', 'Filing systems', 'Office furniture'],
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
      <section className="bg-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We source a wide range of products from verified Chinese manufacturers across multiple industries. If you don't see your product category listed, contact us — we can likely help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex, j) => (
                    <span key={j} className="text-xs bg-white text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We source products across many more categories. Tell us what you need and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
