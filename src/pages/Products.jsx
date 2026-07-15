import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Double Folder', 'Sheet Metal', 'Metal Folder'];

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    category: 'Double Folder',
    tagline: 'Dual-action precision folding',
    desc: 'Our flagship double folding machine delivers unmatched accuracy for complex sheet metal bends. Ideal for high-volume production with consistent, repeatable results.',
    specs: ['Max Sheet Width: 3000mm', 'Material Thickness: 0.5–4mm', 'Folding Angle: 0–135°', 'CNC Control System'],
    imgId: 'prod-dfm-full-s1t2u3',
    titleId: 'prod-dfm-full-title',
    descId: 'prod-dfm-full-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    category: 'Double Folder',
    tagline: 'Versatile high-volume folding',
    desc: 'The Artitect Double Folder is engineered for versatility and speed. Perfect for fabricators who need reliable performance across a wide range of sheet metal applications.',
    specs: ['Max Sheet Width: 2500mm', 'Material Thickness: 0.4–3mm', 'Programmable Stops', 'Quick-Change Tooling'],
    imgId: 'prod-df-full-v4w5x6',
    titleId: 'prod-df-full-title',
    descId: 'prod-df-full-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    category: 'Sheet Metal',
    tagline: 'Clean bends, every time',
    desc: 'Precision-built for clean, accurate bends across a wide range of material thicknesses. The Sheet Metal Folder is the workhorse of any professional fabrication shop.',
    specs: ['Max Sheet Width: 2000mm', 'Material Thickness: 0.3–2.5mm', 'Digital Angle Display', 'Foot Pedal Control'],
    imgId: 'prod-smf-full-y7z8a9',
    titleId: 'prod-smf-full-title',
    descId: 'prod-smf-full-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    category: 'Sheet Metal',
    tagline: 'Industrial-grade performance',
    desc: 'Heavy-duty sheet metal folding machine designed for demanding industrial environments. Robust construction ensures years of reliable service with minimal maintenance.',
    specs: ['Max Sheet Width: 4000mm', 'Material Thickness: 0.5–6mm', 'Hydraulic Drive', 'Safety Light Curtain'],
    imgId: 'prod-smfm-full-b1c2d3',
    titleId: 'prod-smfm-full-title',
    descId: 'prod-smfm-full-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    category: 'Metal Folder',
    tagline: 'Compact and capable',
    desc: 'A compact yet powerful metal folder ideal for smaller workshops and precision work. Easy to operate with professional-grade results on every fold.',
    specs: ['Max Sheet Width: 1500mm', 'Material Thickness: 0.3–2mm', 'Manual/Auto Modes', 'Portable Design'],
    imgId: 'prod-mf-full-e4f5g6',
    titleId: 'prod-mf-full-title',
    descId: 'prod-mf-full-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    category: 'Metal Folder',
    tagline: 'Automated precision folding',
    desc: 'The Metal Folder Machine combines automation with precision for high-throughput production. Programmable sequences reduce setup time and operator error.',
    specs: ['Max Sheet Width: 3000mm', 'Material Thickness: 0.5–4mm', 'PLC Automation', '50-Program Memory'],
    imgId: 'prod-mfm-full-h7i8j9',
    titleId: 'prod-mfm-full-title',
    descId: 'prod-mfm-full-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    category: 'Metal Folder',
    tagline: 'The complete folding solution',
    desc: 'Our most advanced metal folding machine, featuring full CNC control, automatic back gauge, and a comprehensive tooling system for maximum flexibility.',
    specs: ['Max Sheet Width: 3500mm', 'Material Thickness: 0.5–5mm', 'Full CNC Control', 'Auto Back Gauge'],
    imgId: 'prod-mfolding-full-k1l2m3',
    titleId: 'prod-mfolding-full-title',
    descId: 'prod-mfolding-full-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Our Range</span>
          </div>
          <h1 className="text-5xl font-bold text-brand-white mb-4">Product Catalogue</h1>
          <p className="text-brand-gray text-lg max-w-xl">
            Explore our complete range of sheet metal folding machines — from compact folders to full industrial systems.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section ref={containerRef} className="bg-brand-offwhite py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-brand-navy'
                    : 'bg-brand-white border border-brand-light text-brand-gray hover:border-brand-gold hover:text-brand-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <article
                key={product.id}
                className="bg-brand-white rounded-2xl overflow-hidden border border-brand-light shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-1">{product.tagline}</p>
                  <h3 id={product.titleId} className="text-xl font-bold text-brand-navy mb-3">{product.title}</h3>
                  <p id={product.descId} className="text-sm text-brand-gray leading-relaxed mb-5">{product.desc}</p>

                  {/* Specs */}
                  <ul className="space-y-1.5 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-brand-navy">
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-brand-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-steel transition-all duration-200"
                    >
                      Request Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
