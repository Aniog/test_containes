import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Package,
  Cpu,
  Shirt,
  Sofa,
  Wrench,
  Lightbulb,
  Stethoscope,
  Hammer,
  Baby,
  Car,
  Smartphone,
  Gift,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const categories = [
  {
    icon: Package,
    name: 'Consumer Electronics',
    desc: 'Mobile accessories, charging cables, power banks, smart home devices, Bluetooth speakers, headphones, and wearable tech.',
    tags: ['Mobile Accessories', 'Smart Home', 'Audio', 'Wearables'],
    imgId: 'cat-consumer-electronics',
  },
  {
    icon: Cpu,
    name: 'Industrial Components',
    desc: 'Machinery parts, precision hardware, fasteners, bearings, valves, pumps, motors, and custom tooling.',
    tags: ['Machinery Parts', 'Hardware', 'Bearings', 'Valves'],
    imgId: 'cat-industrial-components',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    desc: 'Men\'s and women\'s clothing, bags, fabrics, footwear, fashion accessories, and custom uniform programs.',
    tags: ['Clothing', 'Bags', 'Fabrics', 'Footwear'],
    imgId: 'cat-apparel-textiles',
  },
  {
    icon: Sofa,
    name: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, lighting fixtures, kitchenware, home décor, rugs, and storage solutions.',
    tags: ['Indoor Furniture', 'Outdoor Furniture', 'Lighting', 'Kitchenware'],
    imgId: 'cat-furniture-home',
  },
  {
    icon: Wrench,
    name: 'Tools & Hardware',
    desc: 'Power tools, hand tools, safety equipment, building materials, plumbing supplies, and electrical hardware.',
    tags: ['Power Tools', 'Hand Tools', 'Safety Gear', 'Building Materials'],
    imgId: 'cat-tools-hardware',
  },
  {
    icon: Lightbulb,
    name: 'LED & Lighting',
    desc: 'LED bulbs, strips, panel lights, commercial lighting, architectural lighting, and custom fixture manufacturing.',
    tags: ['LED Bulbs', 'Strip Lights', 'Commercial', 'Custom Fixtures'],
    imgId: 'cat-led-lighting',
  },
  {
    icon: Stethoscope,
    name: 'Medical & PPE',
    desc: 'Disposable medical supplies, personal protective equipment, health monitoring devices, and rehabilitation products.',
    tags: ['Medical Supplies', 'PPE', 'Health Devices', 'Rehabilitation'],
    imgId: 'cat-medical-ppe',
  },
  {
    icon: Hammer,
    name: 'Construction Materials',
    desc: 'Ceramic tiles, flooring, sanitary ware, windows, doors, aluminum profiles, and building finishes.',
    tags: ['Tiles', 'Flooring', 'Sanitary Ware', 'Windows & Doors'],
    imgId: 'cat-construction',
  },
  {
    icon: Baby,
    name: 'Baby & Kids Products',
    desc: 'Toys, baby gear, children\'s furniture, educational products, and juvenile safety items with full compliance testing.',
    tags: ['Toys', 'Baby Gear', 'Kids Furniture', 'Educational'],
    imgId: 'cat-baby-kids',
  },
  {
    icon: Car,
    name: 'Automotive Parts',
    desc: 'Aftermarket auto parts, accessories, car electronics, interior products, and EV charging components.',
    tags: ['Aftermarket Parts', 'Car Electronics', 'Accessories', 'EV Components'],
    imgId: 'cat-automotive',
  },
  {
    icon: Smartphone,
    name: 'Electronics Components',
    desc: 'PCBs, semiconductors, connectors, cables, displays, batteries, and custom electronic assemblies.',
    tags: ['PCBs', 'Connectors', 'Displays', 'Batteries'],
    imgId: 'cat-electronics-components',
  },
  {
    icon: Gift,
    name: 'Promotional Products',
    desc: 'Branded merchandise, corporate gifts, custom packaging, display stands, and event materials.',
    tags: ['Branded Merch', 'Corporate Gifts', 'Packaging', 'Displays'],
    imgId: 'cat-promotional',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <span className="text-primary-light text-xs font-semibold uppercase tracking-wider">Products</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Products We Source
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Our verified supplier network spans dozens of categories. Below are the areas where we have the deepest experience and strongest factory relationships.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-lightgray rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[cat-${i}-name]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-48 object-cover"
                  id={`cat-${i}-name`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <cat.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-neutral-nearblack">{cat.name}</h3>
                  </div>
                  <p className="text-sm text-neutral-mediumgray leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs bg-primary-light text-primary font-medium px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Do Not See Your Product Category?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our network extends far beyond the categories listed above. If you have a product in mind, send us the details — we have likely sourced something similar or can quickly build the right supplier connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Request a Custom Sourcing Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mt-2 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-neutral-mediumgray">
              We ensure suppliers meet the standards required for your target market. Common certifications we verify include:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              'CE Marking',
              'FCC Certification',
              'RoHS Compliance',
              'ISO 9001',
              'BSCI Audit',
              'FDA Registration',
              'REACH Compliance',
              'UL Listing',
            ].map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-neutral-offwhite rounded-lg px-4 py-3"
              >
                <CheckCircle className="w-4 h-4 text-success shrink-0" />
                <span className="text-sm font-medium text-neutral-darkgray">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
