import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'PCBs, consumer electronics, LED lighting, sensors, connectors, and electronic assemblies from certified manufacturers.',
    examples: ['PCB assemblies', 'Consumer electronics', 'LED lighting', 'Sensors & modules', 'Cables & connectors', 'Smart home devices'],
    imgId: 'prod-elec-p1q2r3',
    titleId: 'prod-elec-title',
    descId: 'prod-elec-desc',
  },
  {
    name: 'Home & Garden Products',
    desc: 'Kitchenware, home decor, garden tools, storage solutions, and household items from quality-focused factories.',
    examples: ['Kitchen utensils', 'Home organization', 'Garden tools', 'Decor items', 'Storage solutions', 'Cleaning products'],
    imgId: 'prod-home-s4t5u6',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Garments, fabrics, sportswear, accessories, and home textiles from vetted factories with compliance certifications.',
    examples: ['Casual wear', 'Sportswear', 'Home textiles', 'Fashion accessories', 'Technical fabrics', 'Workwear'],
    imgId: 'prod-apparel-v7w8x9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Industrial equipment, machine parts, tools, and hardware from established manufacturers with proven track records.',
    examples: ['Machine components', 'Hardware & fasteners', 'Pumps & valves', 'Welding equipment', 'Industrial tools', 'Cast & forged parts'],
    imgId: 'prod-indust-y1z2a3',
    titleId: 'prod-indust-title',
    descId: 'prod-indust-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, interior accessories, and vehicle components from TS16949-certified suppliers.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Lighting systems', 'Brake components', 'Filters & maintenance'],
    imgId: 'prod-auto-b4c5d6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and promotional items from quality-controlled production facilities.',
    examples: ['Custom boxes', 'Labels & stickers', 'Flexible packaging', 'Printing materials', 'Promotional items', 'Display stands'],
    imgId: 'prod-pack-e7f8g9',
    titleId: 'prod-pack-title',
    descId: 'prod-pack-desc',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, and health devices from GMP-certified manufacturers.',
    examples: ['Skincare products', 'Cosmetics', 'Personal care', 'Health devices', 'Supplements', 'Beauty tools'],
    imgId: 'prod-health-h1i2j3',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    name: 'Building Materials',
    desc: 'Construction materials, fixtures, hardware, and building supplies from reliable manufacturers with quality certifications.',
    examples: ['Tiles & flooring', 'Sanitary ware', 'Door hardware', 'Lighting fixtures', 'Plumbing supplies', 'Building hardware'],
    imgId: 'prod-build-k4l5m6',
    titleId: 'prod-build-title',
    descId: 'prod-build-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Products We Source</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We source across a wide range of product categories. If you do not see your category listed, contact us — our network extends well beyond these examples.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {categories.map((cat, idx) => (
              <div key={cat.name} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 id={cat.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">{cat.name}</h2>
                  <p id={cat.descId} className="text-neutral-600 leading-relaxed mb-6">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl bg-neutral-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
            Our supplier network covers most manufacturing categories in China. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
