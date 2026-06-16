import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allProducts = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    category: 'Double Folding',
    desc: 'Advanced dual-action folding system capable of handling complex multi-stage bends with exceptional precision. Ideal for architectural sheet metal and HVAC applications.',
    specs: ['Max thickness: 3.0mm', 'Working length: 3200mm', 'Backgauge: CNC controlled'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    category: 'Double Folding',
    desc: 'Compact yet powerful double folder designed for smaller workshops. Offers two independent folding axes with quick tool change capability.',
    specs: ['Max thickness: 2.5mm', 'Working length: 2500mm', 'Backgauge: Manual + digital'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    category: 'Sheet Metal',
    desc: 'Versatile manual and hydraulic sheet metal folders built for reliability. Perfect for prototyping and low-to-medium volume production.',
    specs: ['Max thickness: 4.0mm', 'Working length: 4000mm', 'Operation: Hydraulic'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    category: 'Sheet Metal',
    desc: 'Fully automated CNC sheet metal folding machine with servo-electric drive. Programmable via intuitive touch interface with 500+ job memory.',
    specs: ['Max thickness: 3.5mm', 'Working length: 4200mm', 'Control: 15-inch touchscreen'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    category: 'Metal Folding',
    desc: 'Heavy-duty metal folder engineered for industrial use. Reinforced frame construction handles continuous operation in demanding environments.',
    specs: ['Max thickness: 6.0mm', 'Working length: 3000mm', 'Frame: Reinforced steel'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    category: 'Metal Folding',
    desc: 'Premium metal folder machine with synchronized crowning system. Ensures consistent bend angles across the full working length.',
    specs: ['Max thickness: 5.0mm', 'Working length: 3600mm', 'Crowning: Auto-compensated'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    category: 'Metal Folding',
    desc: 'High-capacity automated metal folding system for large-scale production. Integrates seamlessly with robotic loading and unloading systems.',
    specs: ['Max thickness: 8.0mm', 'Working length: 6000mm', 'Automation: Robot-ready'],
  },
];

const categories = ['All', 'Double Folding', 'Sheet Metal', 'Metal Folding'];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Our Catalog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Folding Machines
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Explore our complete range of precision-engineered folding machines. From compact folders to high-capacity automated systems, find the perfect solution for your production line.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-100 sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between md:justify-start gap-4">
            <div className="hidden md:flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-brand-dark text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-600"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <Filter className="w-4 h-4" />
              {activeCategory}
              {mobileFilterOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            <p className="text-sm text-slate-500">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          {mobileFilterOpen && (
            <div className="md:hidden mt-3 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setMobileFilterOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-brand-dark text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={`product-img-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-brand-dark text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    id={`product-title-${product.id}`}
                    className="text-lg font-bold text-brand-dark mb-2"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={`product-desc-${product.id}`}
                    className="text-slate-500 text-sm leading-relaxed mb-4"
                  >
                    {product.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-brand-gold font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Request Quote <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Our engineers are ready to analyze your requirements and recommend the optimal machine configuration for your workshop.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-dark hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
