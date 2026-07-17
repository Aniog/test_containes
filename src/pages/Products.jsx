import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, ChevronRight, X } from 'lucide-react';

const categories = ['All', 'Double Folder', 'Sheet Metal', 'Metal Folder'];

const products = [
  {
    id: 'double-folding-machine',
    category: 'Double Folder',
    title: 'Double Folding Machine',
    subtitle: 'DF-Series',
    desc: 'Our flagship double folding machine delivers simultaneous dual-fold capability for complex sheet metal profiles. Ideal for high-volume production environments requiring consistent, repeatable results.',
    specs: [
      'Max material thickness: 3mm steel',
      'Folding length: up to 3000mm',
      'Fold angle: 0–135°',
      'CNC control system',
      'Cycle time: < 8 seconds',
    ],
    badge: 'Best Seller',
    imgId: 'prod-double-folding-img-a1b2c3',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
  },
  {
    id: 'double-folder',
    category: 'Double Folder',
    title: 'Double Folder',
    subtitle: 'DF-Compact Series',
    desc: 'A compact yet powerful double folder designed for workshops and mid-scale production. Combines precision engineering with ease of operation for versatile sheet metal forming.',
    specs: [
      'Max material thickness: 2mm steel',
      'Folding length: up to 2000mm',
      'Fold angle: 0–120°',
      'Digital angle display',
      'Quick-change tooling',
    ],
    badge: null,
    imgId: 'prod-double-folder-img-b2c3d4',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    category: 'Sheet Metal',
    title: 'Sheet Metal Folder',
    subtitle: 'SMF-Series',
    desc: 'Versatile sheet metal folder engineered for a wide range of materials including mild steel, stainless steel, and aluminum. Features automatic back gauge positioning for rapid setup.',
    specs: [
      'Max material thickness: 4mm mild steel',
      'Folding length: up to 4000mm',
      'Automatic back gauge',
      'Multi-axis CNC control',
      'Programmable sequences',
    ],
    badge: 'New',
    imgId: 'prod-sheet-metal-folder-img-c3d4e5',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    category: 'Sheet Metal',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'SMFM-Pro Series',
    desc: 'Professional-grade sheet metal folding machine with advanced servo-electric drive system. Delivers exceptional energy efficiency and ultra-precise fold angles for demanding applications.',
    specs: [
      'Servo-electric drive',
      'Max material thickness: 5mm',
      'Folding length: up to 6000mm',
      'Energy saving: up to 60%',
      'Remote diagnostics',
    ],
    badge: null,
    imgId: 'prod-smfm-pro-img-d4e5f6',
    titleId: 'prod-smfm-pro-title',
    descId: 'prod-smfm-pro-desc',
  },
  {
    id: 'metal-folder',
    category: 'Metal Folder',
    title: 'Metal Folder',
    subtitle: 'MF-Series',
    desc: 'Heavy-duty metal folder built for industrial-scale operations. Robust construction with hydraulic clamping ensures consistent performance across extended production runs.',
    specs: [
      'Hydraulic clamping system',
      'Max material thickness: 6mm',
      'Folding length: up to 5000mm',
      'Automatic tool change',
      'Production counter',
    ],
    badge: null,
    imgId: 'prod-metal-folder-img-e5f6g7',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    category: 'Metal Folder',
    title: 'Metal Folder Machine',
    subtitle: 'MFM-Industrial Series',
    desc: 'Our most powerful metal folder machine, designed for the most demanding industrial applications. Features a fully automated workflow with integrated material handling.',
    specs: [
      'Fully automated workflow',
      'Max material thickness: 8mm',
      'Folding length: up to 8000mm',
      'Integrated material handling',
      'Industry 4.0 ready',
    ],
    badge: 'Premium',
    imgId: 'prod-mfm-industrial-img-f6g7h8',
    titleId: 'prod-mfm-industrial-title',
    descId: 'prod-mfm-industrial-desc',
  },
  {
    id: 'metal-folding-machine',
    category: 'Metal Folder',
    title: 'Metal Folding Machine',
    subtitle: 'MFM-Precision Series',
    desc: 'Precision metal folding machine combining advanced optics-based angle measurement with real-time correction for zero-defect production in aerospace and automotive sectors.',
    specs: [
      'Optical angle measurement',
      'Real-time angle correction',
      'Max material thickness: 4mm',
      'Folding length: up to 3000mm',
      'Aerospace-grade accuracy',
    ],
    badge: null,
    imgId: 'prod-mfm-precision-img-g7h8i9',
    titleId: 'prod-mfm-precision-title',
    descId: 'prod-mfm-precision-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, selectedProduct]);

  return (
    <div ref={containerRef} className="font-inter">
      {/* Page Header */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Products
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Precision Folding Machines
            </h1>
            <p className="text-brand-silver text-lg leading-relaxed">
              Explore our complete range of double folding machines, sheet metal folders, and metal folding machines — each engineered to deliver uncompromising precision and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-brand-steel sticky top-20 z-40 border-b border-brand-silver/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-brand-navy'
                    : 'bg-brand-navy/50 text-brand-silver hover:text-white border border-brand-silver/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-brand-white rounded-2xl shadow-lg border border-brand-silver/20 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 left-4 bg-brand-navy/70 text-brand-silver text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    {product.subtitle}
                  </span>
                </div>
                <div className="p-7">
                  <h3
                    id={product.titleId}
                    className="font-playfair text-xl font-bold text-brand-navy mb-2"
                  >
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-brand-silver text-sm leading-relaxed mb-5 line-clamp-2">
                    {product.desc}
                  </p>
                  <button className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:gap-3 transition-all duration-200">
                    View Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-brand-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                alt={selectedProduct.title}
                data-strk-img-id={`modal-${selectedProduct.imgId}`}
                data-strk-img={`[modal-${selectedProduct.descId}] [modal-${selectedProduct.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-brand-white/90 rounded-full flex items-center justify-center hover:bg-brand-white transition-colors"
              >
                <X className="w-5 h-5 text-brand-navy" />
              </button>
              {selectedProduct.badge && (
                <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            <div className="p-8">
              <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
                {selectedProduct.subtitle}
              </span>
              <h2
                id={`modal-${selectedProduct.titleId}`}
                className="font-playfair text-3xl font-bold text-brand-navy mt-2 mb-4"
              >
                {selectedProduct.title}
              </h2>
              <p
                id={`modal-${selectedProduct.descId}`}
                className="text-brand-silver text-base leading-relaxed mb-8"
              >
                {selectedProduct.desc}
              </p>

              <h4 className="font-playfair text-lg font-semibold text-brand-navy mb-4">
                Key Specifications
              </h4>
              <ul className="space-y-3 mb-8">
                {selectedProduct.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-brand-navy text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-3.5 rounded-full hover:bg-brand-gold-light transition-all duration-300 group"
                  onClick={() => setSelectedProduct(null)}
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 border-2 border-brand-silver/30 text-brand-navy font-semibold px-8 py-3.5 rounded-full hover:border-brand-navy transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Need a Custom Configuration?
          </h2>
          <p className="text-brand-silver text-lg mb-10">
            Our engineering team can design a bespoke folding solution tailored to your exact production requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-10 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 group"
          >
            Talk to an Engineer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
