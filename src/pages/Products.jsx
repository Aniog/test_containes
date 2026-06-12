import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 'df-2500',
    title: 'DF-2500 Double Folding Machine',
    subtitle: 'Our flagship double folder for high-volume production',
    description: 'The DF-2500 delivers exceptional precision with its dual-beam folding system. Ideal for HVAC ductwork, roofing panels, and architectural cladding.',
    specs: ['Working length: 2500mm', 'Max thickness: 1.5mm mild steel', 'Folding angle: 0° to 180°', 'CNC controlled back-gauge'],
    imgId: 'prod-df2500-j1k2l3',
    titleId: 'prod-df2500-title',
    descId: 'prod-df2500-desc',
  },
  {
    id: 'df-3200',
    title: 'DF-3200 Double Folder',
    subtitle: 'Extended length for large panel fabrication',
    description: 'Built for workshops handling large-format panels. The DF-3200 combines a 3200mm working length with rapid cycle times and intuitive touchscreen controls.',
    specs: ['Working length: 3200mm', 'Max thickness: 1.2mm mild steel', 'Programmable fold sequences', 'Hydraulic clamping system'],
    imgId: 'prod-df3200-m4n5o6',
    titleId: 'prod-df3200-title',
    descId: 'prod-df3200-desc',
  },
  {
    id: 'smf-1600',
    title: 'SMF-1600 Sheet Metal Folder',
    subtitle: 'Compact precision for smaller workshops',
    description: 'The SMF-1600 packs professional-grade folding capability into a compact footprint. Perfect for job shops and custom fabrication work.',
    specs: ['Working length: 1600mm', 'Max thickness: 2.0mm mild steel', 'Manual or motorized options', 'Quick-change tooling system'],
    imgId: 'prod-smf1600-p7q8r9',
    titleId: 'prod-smf1600-title',
    descId: 'prod-smf1600-desc',
  },
  {
    id: 'mfm-2000',
    title: 'MFM-2000 Metal Folding Machine',
    subtitle: 'Versatile all-rounder for mixed production',
    description: 'Designed for versatility, the MFM-2000 handles everything from simple bends to complex multi-fold profiles with consistent accuracy.',
    specs: ['Working length: 2000mm', 'Max thickness: 1.8mm mild steel', 'Digital angle display', 'Segmented upper beam'],
    imgId: 'prod-mfm2000-s1t2u3',
    titleId: 'prod-mfm2000-title',
    descId: 'prod-mfm2000-desc',
  },
  {
    id: 'df-4000-pro',
    title: 'DF-4000 PRO Metal Folder',
    subtitle: 'Industrial-grade for heavy-duty applications',
    description: 'Our most powerful machine. The DF-4000 PRO is engineered for continuous industrial use with heavy-gauge materials and demanding production schedules.',
    specs: ['Working length: 4000mm', 'Max thickness: 2.5mm mild steel', 'Servo-electric drive system', 'Automated tool positioning'],
    imgId: 'prod-df4000-v4w5x6',
    titleId: 'prod-df4000-title',
    descId: 'prod-df4000-desc',
  },
  {
    id: 'smf-1200-lite',
    title: 'SMF-1200 LITE Sheet Metal Folding Machine',
    subtitle: 'Entry-level precision at an accessible price',
    description: 'The perfect starting point for growing businesses. The SMF-1200 LITE offers professional results with a user-friendly interface and minimal setup time.',
    specs: ['Working length: 1200mm', 'Max thickness: 1.0mm mild steel', 'Manual operation', 'Compact benchtop design'],
    imgId: 'prod-smf1200-y7z8a9',
    titleId: 'prod-smf1200-title',
    descId: 'prod-smf1200-desc',
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
          <div className="max-w-2xl">
            <h1 id="products-page-title" className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Our Products
            </h1>
            <p id="products-page-subtitle" className="text-slate-300 text-lg leading-relaxed">
              Explore our complete range of double folding machines, sheet metal folders, and metal folding machines — each built for precision and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                    <img
                      alt={product.title}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}] [products-page-subtitle] [products-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <p className="text-brand-amber text-sm font-medium mb-2">{product.subtitle}</p>
                  <h2 id={product.titleId} className="text-2xl lg:text-3xl font-bold text-navy-900 tracking-tight mb-3">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="text-slate-600 leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-brand-amber flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-dark text-navy-900 font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors duration-200"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
            Our team of experts will help you find the perfect solution for your production requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg px-6 py-3.5 transition-colors duration-200"
          >
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
