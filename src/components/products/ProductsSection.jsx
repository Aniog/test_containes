import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from './ProductCard';
import { Layers } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-precision double folding machine engineered for complex sheet metal bends with repeatable accuracy and minimal setup time.',
    category: 'Folding',
    imgId: 'product-double-folding-8f2a9c',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact and powerful double folder designed for efficient production workflows, delivering clean, consistent folds on every cycle.',
    category: 'Folding',
    imgId: 'product-double-folder-7b3c1d',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Versatile sheet metal folder built for workshops and factories, handling a wide range of gauges with smooth, ergonomic operation.',
    category: 'Folder',
    imgId: 'product-sheet-metal-folder-4e5f6a',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Industrial-grade sheet metal folding machine offering automated back gauges and CNC compatibility for high-volume manufacturing.',
    category: 'Machine',
    imgId: 'product-sheet-folding-machine-1a2b3c',
    titleId: 'product-sheet-folding-machine-title',
    descId: 'product-sheet-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Robust metal folder with heavy-duty construction, ideal for structural steel and aluminum applications in demanding environments.',
    category: 'Folder',
    imgId: 'product-metal-folder-9d8e7f',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Automated metal folder machine featuring servo-driven bending and real-time angle correction for unparalleled part consistency.',
    category: 'Machine',
    imgId: 'product-metal-folder-machine-2c3d4e',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Flagship metal folding machine combining speed, power, and intelligence to transform your fabrication floor productivity.',
    category: 'Machine',
    imgId: 'product-metal-folding-machine-5f6a7b',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
];

const categories = ['All', 'Folding', 'Folder', 'Machine'];

export default function ProductsSection() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/10 mb-6">
            <Layers className="w-4 h-4 text-brand" />
            <span className="text-xs md:text-sm font-semibold text-brand uppercase tracking-widest">
              Our Products
            </span>
          </div>
          <h2
            id="products-title"
            className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4"
          >
            Sheet Metal & Folding Machines
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore our complete range of precision-engineered machinery built
            to handle the toughest sheet metal fabrication challenges.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-brand text-white border-brand shadow-sm'
                  : 'bg-white text-text-primary border-slate-200 hover:border-brand hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
