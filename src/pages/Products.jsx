import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allProducts = [
  {
    id: 'double-folding-machine',
    titleId: 'ptitle-dfm',
    descId: 'pdesc-dfm',
    imgId: 'pimg-dfm-a1b2c3',
    category: 'Double Folder',
    title: 'Double Folding Machine',
    subtitle: 'DF-Series Pro',
    description: 'Our flagship double folding machine delivers unmatched precision for complex sheet metal profiles. Engineered for HVAC, roofing, cladding, and architectural metalwork.',
    specs: ['Max Width: 3000mm', 'Material Thickness: 0.4–2.0mm', 'Folding Speed: 120 m/min', 'CNC Control System'],
    features: ['Automatic material feed', 'Programmable fold sequences', 'Quick-change tooling', 'Safety light curtains'],
  },
  {
    id: 'double-folder',
    titleId: 'ptitle-df',
    descId: 'pdesc-df',
    imgId: 'pimg-df-d4e5f6',
    category: 'Double Folder',
    title: 'Double Folder',
    subtitle: 'DF-Compact Series',
    description: 'Compact yet powerful double folder designed for workshops and medium-scale production. Delivers professional-grade folds with minimal footprint.',
    specs: ['Max Width: 2000mm', 'Material Thickness: 0.3–1.5mm', 'Folding Speed: 90 m/min', 'Touch Screen Control'],
    features: ['Compact design', 'Easy operation', 'Low maintenance', 'Energy efficient'],
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'ptitle-smf',
    descId: 'pdesc-smf',
    imgId: 'pimg-smf-g7h8i9',
    category: 'Sheet Metal',
    title: 'Sheet Metal Folder',
    subtitle: 'SMF-Elite Series',
    description: 'Versatile sheet metal folder with programmable back gauge and multi-angle capability. Perfect for precision fabrication shops requiring consistent, repeatable results.',
    specs: ['Max Width: 2500mm', 'Material Thickness: 0.5–3.0mm', 'Back Gauge: CNC Servo', 'Angle Accuracy: ±0.1°'],
    features: ['Multi-angle folding', 'Programmable back gauge', 'Hydraulic clamping', 'Digital readout'],
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'ptitle-smfm',
    descId: 'pdesc-smfm',
    imgId: 'pimg-smfm-j1k2l3',
    category: 'Sheet Metal',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'SMFM-Industrial',
    description: 'Heavy-duty sheet metal folding machine built for continuous industrial production. Handles a wide range of materials from mild steel to stainless and aluminum.',
    specs: ['Max Width: 4000mm', 'Material Thickness: 0.5–4.0mm', 'Bending Force: 200 kN', 'Servo-Electric Drive'],
    features: ['Heavy-duty construction', 'Wide material range', 'High bending force', 'Remote diagnostics'],
  },
  {
    id: 'metal-folder',
    titleId: 'ptitle-mf',
    descId: 'pdesc-mf',
    imgId: 'pimg-mf-m4n5o6',
    category: 'Metal Folder',
    title: 'Metal Folder',
    subtitle: 'MF-Standard Series',
    description: 'Reliable metal folder for everyday fabrication tasks. Straightforward operation with robust build quality ensures years of dependable service.',
    specs: ['Max Width: 1500mm', 'Material Thickness: 0.3–1.2mm', 'Manual/CNC Options', 'Compact Footprint'],
    features: ['Simple operation', 'Durable construction', 'Low running costs', 'Versatile applications'],
  },
  {
    id: 'metal-folder-machine',
    titleId: 'ptitle-mfm',
    descId: 'pdesc-mfm',
    imgId: 'pimg-mfm-p7q8r9',
    category: 'Metal Folder',
    title: 'Metal Folder Machine',
    subtitle: 'MFM-Advanced',
    description: 'Advanced metal folder machine combining ease of use with industrial-grade performance. Features intuitive controls and rapid setup for high-mix production environments.',
    specs: ['Max Width: 2000mm', 'Material Thickness: 0.4–2.5mm', 'Rapid Setup: <5 min', 'Modular Tooling'],
    features: ['Rapid tool change', 'Intuitive HMI', 'Modular design', 'High repeatability'],
  },
  {
    id: 'metal-folding-machine',
    titleId: 'ptitle-mfmach',
    descId: 'pdesc-mfmach',
    imgId: 'pimg-mfmach-s1t2u3',
    category: 'Metal Folder',
    title: 'Metal Folding Machine',
    subtitle: 'MFM-Pro Industrial',
    description: 'Professional metal folding machine for high-volume production. Engineered for maximum uptime with predictive maintenance features and robust industrial components.',
    specs: ['Max Width: 3500mm', 'Material Thickness: 0.5–3.5mm', 'Production Rate: High', 'IoT Ready'],
    features: ['Predictive maintenance', 'IoT connectivity', 'High-volume capacity', 'Extended warranty'],
  },
];

const categories = ['All', 'Double Folder', 'Sheet Metal', 'Metal Folder'];

const Products = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div ref={containerRef} className="bg-brand-navy min-h-screen">
      {/* Page Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-navy" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Our Range</span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-4">
            Product Catalogue
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Explore our complete range of precision sheet metal folding machines, engineered for every scale of production.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-gold text-brand-navy'
                  : 'border border-brand-gold/30 text-brand-muted hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-brand-steel rounded-2xl overflow-hidden border border-brand-gold/15 hover:border-brand-gold/40 transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-steel/70 to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-gold/90 text-brand-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-1">
                  <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">{product.subtitle}</span>
                </div>
                <h2 id={product.titleId} className="font-serif text-2xl font-bold text-brand-white mb-3">
                  {product.title}
                </h2>
                <p id={product.descId} className="text-brand-muted text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Specs */}
                  <div>
                    <h4 className="text-brand-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">Specifications</h4>
                    <ul className="space-y-1.5">
                      {product.specs.map((spec) => (
                        <li key={spec} className="text-brand-muted text-xs flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Features */}
                  <div>
                    <h4 className="text-brand-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">Key Features</h4>
                    <ul className="space-y-1.5">
                      {product.features.map((feat) => (
                        <li key={feat} className="text-brand-muted text-xs flex items-center gap-2">
                          <Check className="w-3 h-3 text-brand-gold shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-brand-gold/10 flex gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 text-center bg-brand-gold text-brand-navy font-semibold text-sm py-3 rounded-full hover:bg-brand-gold-light transition-all"
                  >
                    Request Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 text-center border border-brand-gold/40 text-brand-gold font-semibold text-sm py-3 rounded-full hover:border-brand-gold hover:bg-brand-gold/10 transition-all"
                  >
                    Get Brochure
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-white mb-4">
            Can't Find What You Need?
          </h3>
          <p className="text-brand-muted mb-8">
            Our engineering team can design custom folding machine solutions tailored to your exact specifications.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all text-sm tracking-wide"
          >
            Discuss Custom Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
