import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Layers, Zap, Settings } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-4a8c2e',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous up-and-down bending with exceptional accuracy. Ideal for high-volume production environments requiring consistent, repeatable folds.',
    specs: ['Up to 4000mm working length', 'Dual-beam folding system', 'CNC controlled angles', '±0.1° accuracy'],
    icon: Layers,
    featured: true,
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-7b3d1f',
    name: 'Double Folder',
    tagline: 'Versatile sheet metal forming',
    description:
      'The Artitect Double Folder combines robust construction with intuitive controls. Engineered for workshops and fabrication shops that need reliable, precise folding day after day.',
    specs: ['Manual & CNC options', 'Quick-change tooling', 'Compact footprint', 'Heavy-gauge capacity'],
    icon: Settings,
    featured: false,
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-2c9e5a',
    name: 'Sheet Metal Folder',
    tagline: 'Professional-grade metal forming',
    description:
      'Designed for precision sheet metal fabrication, our metal folder handles a wide range of materials and thicknesses. Built for HVAC, roofing, and architectural metalwork applications.',
    specs: ['Multi-material compatible', 'Adjustable back gauge', 'Digital angle readout', 'Safety interlocks'],
    icon: Zap,
    featured: false,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-6d4f8b',
    name: 'Metal Folding Machine',
    tagline: 'Industrial-scale production',
    description:
      'Our heavy-duty metal folding machine is built for industrial-scale production. With advanced servo-electric drive and programmable sequences, it maximizes throughput without sacrificing quality.',
    specs: ['Servo-electric drive', 'Programmable sequences', 'Remote diagnostics', 'CE certified'],
    icon: Settings,
    featured: false,
  },
];

function ProductCard({ product, index }) {
  const Icon = product.icon;
  return (
    <div
      className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
        product.featured ? 'ring-2 ring-[#1E6FA5]' : ''
      }`}
    >
      {product.featured && (
        <div className="bg-[#1E6FA5] text-white text-xs font-heading font-semibold tracking-widest uppercase text-center py-2">
          Most Popular
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-[#C8922A] text-xs font-heading font-semibold uppercase tracking-widest">
            {product.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F4F6F9] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon className="w-5 h-5 text-[#1E6FA5]" />
          </div>
          <div>
            <h3 id={product.titleId} className="font-heading font-bold text-[#0D1B2A] text-lg leading-tight">
              {product.name}
            </h3>
          </div>
        </div>

        <p id={product.descId} className="text-[#4A5568] text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Specs */}
        <ul className="grid grid-cols-2 gap-2 mt-auto">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-xs text-[#4A5568]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A] flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="mt-2 flex items-center gap-2 text-[#1E6FA5] hover:text-[#3A9BD5] font-semibold text-sm font-heading group/link transition-colors"
        >
          Request Info
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C8922A]" />
            <span className="text-[#C8922A] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
              Our Product Range
            </span>
            <div className="h-px w-10 bg-[#C8922A]" />
          </div>
          <h2
            id="products-section-title"
            className="font-heading font-bold text-[#0D1B2A] text-3xl md:text-4xl mb-4"
          >
            Precision Folding Machines
          </h2>
          <p className="text-[#4A5568] text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to full industrial double folding systems — every Artitect machine is engineered to deliver flawless results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#4A5568] mb-4">Need a custom configuration or have specific requirements?</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-[#0D1B2A] hover:bg-[#1E6FA5] text-white px-8 py-4 rounded font-heading font-semibold text-sm tracking-wide transition-all duration-200 group"
          >
            Talk to Our Engineers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
