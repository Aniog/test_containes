import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Package } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic components.',
    examples: ['Smartphones & accessories', 'LED lighting', 'PCB assemblies', 'Cables & connectors', 'Smart home devices'],
  },
  {
    name: 'Textiles & Apparel',
    description: 'Clothing, fabrics, home textiles, footwear, and accessories from major manufacturing hubs in China.',
    examples: ['Men\'s & women\'s clothing', 'Sportswear', 'Home textiles', 'Footwear', 'Bags & accessories'],
  },
  {
    name: 'Home & Garden Products',
    description: 'Furniture, kitchenware, garden tools, home decor, and household items from verified manufacturers.',
    examples: ['Furniture', 'Kitchenware', 'Garden tools', 'Home decor', 'Storage solutions'],
  },
  {
    name: 'Machinery & Industrial Parts',
    description: 'Industrial equipment, machine parts, tools, and manufacturing components for B2B buyers.',
    examples: ['CNC machines', 'Industrial tools', 'Machine parts', 'Hydraulic components', 'Pumps & valves'],
  },
  {
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, and printed materials for product branding and shipping.',
    examples: ['Custom boxes', 'Labels & stickers', 'Shopping bags', 'Product packaging', 'Printed materials'],
  },
  {
    name: 'Toys & Gifts',
    description: 'Children\'s toys, promotional gifts, holiday decorations, and novelty items from certified factories.',
    examples: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Holiday decorations', 'Novelty items'],
  },
  {
    name: 'Automotive Parts',
    description: 'Auto parts, accessories, tools, and aftermarket components for the automotive industry.',
    examples: ['Engine parts', 'Body accessories', 'Interior components', 'Tools & equipment', 'Lighting systems'],
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, hair care, beauty tools, and personal care products from certified manufacturers.',
    examples: ['Skincare products', 'Makeup', 'Hair care', 'Beauty tools', 'Personal care items'],
  },
  {
    name: 'Sports & Outdoor Equipment',
    description: 'Fitness equipment, outdoor gear, sporting goods, and recreational products.',
    examples: ['Fitness equipment', 'Camping gear', 'Sportswear', 'Outdoor tools', 'Recreational products'],
  },
  {
    name: 'Building Materials',
    description: 'Construction materials, hardware, plumbing supplies, and building components.',
    examples: ['Tiles & flooring', 'Hardware', 'Plumbing supplies', 'Building hardware', 'Construction tools'],
  },
  {
    name: 'Food & Beverage',
    description: 'Packaged foods, beverages, food processing equipment, and food-related products.',
    examples: ['Packaged snacks', 'Tea & coffee', 'Food processing equipment', 'Beverages', 'Food packaging'],
  },
  {
    name: 'Medical Supplies',
    description: 'Medical devices, protective equipment, laboratory supplies, and healthcare products.',
    examples: ['PPE equipment', 'Medical devices', 'Laboratory supplies', 'Healthcare products', 'Diagnostic tools'],
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-4">Products We Source</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              We source a wide range of products from verified Chinese manufacturers. If you do not see your product category listed, contact us — we can source almost anything made in China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="heading-3 text-slate-900">{category.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.examples.map((example, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-700 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-slate-900 mb-4">Do Not See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We can source almost any product manufactured in China. Tell us what you need and we will find the right supplier.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Request a Custom Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
