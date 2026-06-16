import { useEffect, useRef } from 'react';
import { ArrowRight, Ruler, Layers, Zap, Shield, Settings, Wrench } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Maximum Versatility',
    description: 'Our flagship double folding machine delivers precise, consistent bends on both sides of the sheet metal in a single pass. Ideal for high-volume production environments.',
    specs: [
      { icon: Ruler, label: 'Max Length', value: '4000mm' },
      { icon: Layers, label: 'Max Thickness', value: '6mm Steel' },
      { icon: Zap, label: 'Speed', value: '120 strokes/min' },
    ],
    imageQuery: 'double folding machine industrial sheet metal',
    imgId: 'product-double-folder-c3d2e1',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Precision Bending',
    description: 'Professional-grade sheet metal folder designed for workshops and fabrication shops. Delivers clean, accurate folds with minimal operator effort and maximum repeatability.',
    specs: [
      { icon: Ruler, label: 'Max Length', value: '3200mm' },
      { icon: Layers, label: 'Max Thickness', value: '4mm Steel' },
      { icon: Settings, label: 'Bend Angle', value: '0-135°' },
    ],
    imageQuery: 'sheet metal folder machine workshop',
    imgId: 'product-sheet-folder-a1b2c3',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-Duty Performance',
    description: 'Built for the toughest industrial applications, this metal folding machine handles thick materials and complex geometries with ease. CNC-controlled precision at every angle.',
    specs: [
      { icon: Ruler, label: 'Max Length', value: '6000mm' },
      { icon: Layers, label: 'Max Thickness', value: '10mm Steel' },
      { icon: Shield, label: 'Frame', value: 'Welded Steel' },
    ],
    imageQuery: 'industrial metal folding machine CNC heavy duty',
    imgId: 'product-metal-folder-x9y8z7',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
];

const ProductCard = ({ product, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
      {/* Image */}
      <div className={`relative group ${isReversed ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-2xl bg-surface-200">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
        </div>
        {/* Decorative accent */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl" />
      </div>

      {/* Content */}
      <div className={isReversed ? 'lg:order-1' : ''}>
        <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-3">
          {product.tagline}
        </span>
        <h3
          id={product.titleId}
          className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-slate-600 leading-relaxed mb-8"
        >
          {product.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {product.specs.map((spec) => (
            <div key={spec.label} className="text-center p-3 bg-surface-100 rounded-xl">
              <spec.icon className="w-5 h-5 text-brand-gold mx-auto mb-2" />
              <div className="text-xs text-slate-500 mb-1">{spec.label}</div>
              <div className="text-sm font-bold text-brand-navy">{spec.value}</div>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary"
        >
          Request Details
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="products" ref={containerRef} className="section-padding bg-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-6">
            Engineered for{' '}
            <span className="text-brand-gold">Excellence</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From compact workshop folders to heavy-duty industrial machines,
            every ARTITECT product is built with precision engineering and
            uncompromising quality standards.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Additional Product Names Banner */}
        <div className="mt-24 p-8 bg-surface-100 rounded-2xl">
          <div className="text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-3">
              Complete Metal Folding Range
            </h3>
            <p className="text-slate-500 mb-6">
              We also specialize in custom configurations for every application
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Double Folder',
                'Metal Folder Machine',
                'Metal Folder',
                'Sheet Metal Folding Machine',
                'Double Folding Machine',
              ].map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy border border-surface-200 shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
