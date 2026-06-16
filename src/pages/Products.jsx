import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'df-2500',
    title: 'DF-2500 Double Folding Machine',
    description: 'Our flagship double folding machine designed for high-volume industrial sheet metal processing. Features dual folding beams for simultaneous operations.',
    specs: ['Working width: 2500mm', 'Material thickness: 0.5–3.0mm', 'Folding angle: 0–180°', 'CNC controlled', 'Hydraulic clamping'],
    category: 'Double Folder',
    imgId: 'products-df2500-j1k2l3',
    titleId: 'products-df2500-title',
    descId: 'products-df2500-desc',
  },
  {
    id: 'df-3000',
    title: 'DF-3000 Double Folder Pro',
    description: 'Extended capacity double folder with advanced automation features. Ideal for HVAC ductwork, roofing panels, and architectural cladding.',
    specs: ['Working width: 3000mm', 'Material thickness: 0.5–2.5mm', 'Folding angle: 0–180°', 'Programmable sequences', 'Auto gauge system'],
    category: 'Double Folder',
    imgId: 'products-df3000-m4n5o6',
    titleId: 'products-df3000-title',
    descId: 'products-df3000-desc',
  },
  {
    id: 'sf-1800',
    title: 'SF-1800 Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine with quick-change tooling and programmable bend sequences. Perfect for small to medium production runs.',
    specs: ['Working width: 1800mm', 'Material thickness: 0.4–2.0mm', 'Folding angle: 0–135°', 'Quick-change tooling', 'Digital readout'],
    category: 'Sheet Metal Folder',
    imgId: 'products-sf1800-p7q8r9',
    titleId: 'products-sf1800-title',
    descId: 'products-sf1800-desc',
  },
  {
    id: 'sf-2200',
    title: 'SF-2200 Sheet Metal Folding Machine',
    description: 'Mid-range sheet metal folding machine combining precision with ease of use. Touchscreen interface with stored programs for repeat jobs.',
    specs: ['Working width: 2200mm', 'Material thickness: 0.5–2.5mm', 'Folding angle: 0–150°', 'Touchscreen HMI', '100+ stored programs'],
    category: 'Sheet Metal Folder',
    imgId: 'products-sf2200-s1t2u3',
    titleId: 'products-sf2200-title',
    descId: 'products-sf2200-desc',
  },
  {
    id: 'mf-3200',
    title: 'MF-3200 Heavy-Duty Metal Folder',
    description: 'Built for the toughest jobs. This heavy-duty metal folder handles thick gauge materials with ease, designed for continuous industrial operation.',
    specs: ['Working width: 3200mm', 'Material thickness: 1.0–4.0mm', 'Folding angle: 0–180°', 'Heavy-duty frame', 'Servo-electric drive'],
    category: 'Metal Folder',
    imgId: 'products-mf3200-v4w5x6',
    titleId: 'products-mf3200-title',
    descId: 'products-mf3200-desc',
  },
  {
    id: 'mf-compact',
    title: 'MF-Compact Metal Folding Machine',
    description: 'Space-efficient metal folding machine for workshops with limited floor space. Full functionality in a compact footprint.',
    specs: ['Working width: 1250mm', 'Material thickness: 0.4–2.0mm', 'Folding angle: 0–135°', 'Compact design', 'Manual + CNC modes'],
    category: 'Metal Folder',
    imgId: 'products-mfcompact-y7z8a9',
    titleId: 'products-mfcompact-title',
    descId: 'products-mfcompact-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our Products
          </h1>
          <p id="products-page-subtitle" className="text-slate-300 text-lg max-w-2xl">
            Discover our complete range of double folding machines, sheet metal folders, and metal folding machines engineered for precision and durability.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [products-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <span className="inline-block text-xs font-medium text-accent-600 bg-accent-500/10 rounded-full px-3 py-1 mb-3">
                    {product.category}
                  </span>
                  <h2 id={product.titleId} className="text-xl font-bold text-navy-900 mb-3">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-500 font-semibold text-sm transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
