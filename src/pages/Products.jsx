import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Cpu, Shirt, Wrench, Sofa, Package, Lightbulb,
  Car, Droplets, Utensils, Baby, Dumbbell, Stethoscope
} from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, LED products, cables, connectors, smart devices, and electronic accessories.',
    examples: ['Bluetooth speakers', 'USB cables', 'LED lighting', 'Smart home devices', 'Power banks'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-2a4b6c',
  },
  {
    id: 'apparel',
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Clothing, uniforms, sportswear, fabrics, home textiles, bags, and fashion accessories from Guangdong and Zhejiang factories.',
    examples: ['Custom uniforms', 'Sportswear', 'Bags & backpacks', 'Home textiles', 'Fashion accessories'],
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    imgId: 'prod-apparel-img-8d3e5f',
  },
  {
    id: 'hardware',
    icon: Wrench,
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, metal parts, CNC machined components, and industrial hardware.',
    examples: ['Hand tools', 'Power tools', 'Fasteners', 'CNC parts', 'Metal stampings'],
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
    imgId: 'prod-hardware-img-1g7h9i',
  },
  {
    id: 'furniture',
    icon: Sofa,
    title: 'Furniture & Home Decor',
    desc: 'Office furniture, home furniture, outdoor furniture, decorative items, and custom woodwork from Foshan and Dongguan.',
    examples: ['Office chairs', 'Sofas', 'Outdoor furniture', 'Shelving units', 'Custom cabinetry'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-4j0k2l',
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, labels, printed materials, plastic packaging, and display stands.',
    examples: ['Custom boxes', 'Product labels', 'Display stands', 'Blister packaging', 'Paper bags'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-5m3n7o',
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Parts',
    desc: 'Auto accessories, replacement parts, rubber components, plastic moldings, and aftermarket automotive products.',
    examples: ['Car accessories', 'Rubber seals', 'Plastic moldings', 'LED car lights', 'Floor mats'],
    titleId: 'prod-automotive-title',
    descId: 'prod-automotive-desc',
    imgId: 'prod-automotive-img-8p1q4r',
  },
  {
    id: 'beauty',
    icon: Droplets,
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products, beauty tools, hair care products, and personal care accessories.',
    examples: ['Makeup brushes', 'Skincare packaging', 'Hair tools', 'Nail products', 'Beauty devices'],
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
    imgId: 'prod-beauty-img-2s5t8u',
  },
  {
    id: 'kitchen',
    icon: Utensils,
    title: 'Kitchen & Houseware',
    desc: 'Cookware, kitchen gadgets, storage solutions, cleaning products, and household items.',
    examples: ['Cookware sets', 'Kitchen gadgets', 'Storage containers', 'Cleaning tools', 'Tableware'],
    titleId: 'prod-kitchen-title',
    descId: 'prod-kitchen-desc',
    imgId: 'prod-kitchen-img-6v9w1x',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Products We Source
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Product Categories
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source across all major manufacturing categories in China. Below are some of the most common product types we handle for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-navy" />
                    </div>
                    <h2 id={cat.titleId} className="text-xl font-bold text-slate-900">{cat.title}</h2>
                  </div>
                  <p id={cat.descId} className="text-sm text-slate-600 leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-white text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-50 rounded-xl border border-slate-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Don't See Your Product Category?</h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              We source virtually any manufactured product from China. Contact us with your specific requirements and we'll let you know how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-dark transition-colors"
            >
              Inquire About Your Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
