import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Cpu, Shirt, Wrench, Sofa, Package, Lightbulb,
  Car, Stethoscope, UtensilsCrossed, Baby, Dumbbell,
  PaintBucket, ArrowRight
} from 'lucide-react';

const categories = [
  {
    id: 'prod-electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    items: ['Consumer electronics', 'PCB assemblies', 'LED products', 'Cables & connectors', 'Smart home devices', 'Audio equipment'],
    imgId: 'prod-electronics-img-4a8c2e',
  },
  {
    id: 'prod-apparel',
    icon: Shirt,
    title: 'Apparel & Textiles',
    items: ['Workwear & uniforms', 'Sportswear', 'Fashion clothing', 'Fabrics & yarns', 'Home textiles', 'Bags & accessories'],
    imgId: 'prod-apparel-img-7b3d9f',
  },
  {
    id: 'prod-hardware',
    icon: Wrench,
    title: 'Hardware & Tools',
    items: ['Hand tools', 'Power tools', 'Fasteners', 'Locks & security', 'Plumbing fittings', 'Industrial hardware'],
    imgId: 'prod-hardware-img-2c6e1a',
  },
  {
    id: 'prod-furniture',
    icon: Sofa,
    title: 'Furniture & Home Decor',
    items: ['Office furniture', 'Home furniture', 'Outdoor furniture', 'Decorative items', 'Storage solutions', 'Kitchenware'],
    imgId: 'prod-furniture-img-9d4f7b',
  },
  {
    id: 'prod-packaging',
    icon: Package,
    title: 'Packaging & Printing',
    items: ['Custom packaging', 'Labels & stickers', 'Corrugated boxes', 'Plastic containers', 'Gift boxes', 'Display stands'],
    imgId: 'prod-packaging-img-5e2a8c',
  },
  {
    id: 'prod-lighting',
    icon: Lightbulb,
    title: 'Lighting & Electrical',
    items: ['LED lighting', 'Solar products', 'Switches & sockets', 'Wiring accessories', 'Industrial lighting', 'Decorative lighting'],
    imgId: 'prod-lighting-img-1f7d3b',
  },
  {
    id: 'prod-auto',
    icon: Car,
    title: 'Auto Parts & Accessories',
    items: ['Car accessories', 'Replacement parts', 'Tires & wheels', 'Car electronics', 'Motorcycle parts', 'EV components'],
    imgId: 'prod-auto-img-8a4c6e',
  },
  {
    id: 'prod-medical',
    icon: Stethoscope,
    title: 'Medical & Health',
    items: ['Medical devices', 'PPE & safety', 'Health supplements', 'Rehabilitation equipment', 'Lab supplies', 'Dental products'],
    imgId: 'prod-medical-img-3b9e2f',
  },
  {
    id: 'prod-food',
    icon: UtensilsCrossed,
    title: 'Food & Beverage Equipment',
    items: ['Commercial kitchen equipment', 'Food processing machines', 'Beverage dispensers', 'Bakery equipment', 'Refrigeration', 'Food packaging'],
    imgId: 'prod-food-img-6c1a7d',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            We source across dozens of product categories. If it's manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.id}-title] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <cat.icon className="w-5 h-5 text-navy" />
                    <h3 id={`${cat.id}-title`} className="text-lg font-semibold text-slate-900">{cat.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            We source products across virtually all manufacturing sectors in China. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange text-white px-7 py-3.5 rounded-lg font-semibold no-underline hover:bg-orange-dark transition-colors"
          >
            Tell Us What You Need <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
