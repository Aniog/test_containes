import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allProducts = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    category: 'double-folding',
    description: 'High-precision double folding machine for complex sheet metal operations with automated controls and digital angle measurement.',
    specs: ['Max sheet width: 3200mm', 'Folding angle: 0-135 degrees', 'CNC controlled', 'Hydraulic system'],
  },
  {
    id: 'double-folder-pro',
    title: 'Double Folder Pro Series',
    category: 'double-folding',
    description: 'Professional-grade double folder with enhanced capacity for heavy-duty industrial applications.',
    specs: ['Max sheet width: 4000mm', 'Dual-axis control', 'Touch screen interface', 'Auto-back gauge'],
  },
  {
    id: 'sheet-metal-folder-sm',
    title: 'Sheet Metal Folder - Standard',
    category: 'sheet-metal',
    description: 'Versatile sheet metal folder suitable for various thicknesses and material types including steel, aluminum, and copper.',
    specs: ['Max thickness: 3mm', 'Manual operation', 'Portable design', 'Quick setup'],
  },
  {
    id: 'sheet-metal-folder-auto',
    title: 'Sheet Metal Folder - Automatic',
    category: 'sheet-metal',
    description: 'Fully automatic sheet metal folder with programmable folding sequences and memory storage for repeat jobs.',
    specs: ['Max thickness: 4mm', 'Programmable cycles', 'Memory storage', 'Safety guards'],
  },
  {
    id: 'metal-folding-machine-hd',
    title: 'Metal Folding Machine - Heavy Duty',
    category: 'metal-folding',
    description: 'Heavy-duty metal folding machine designed for industrial-grade metal fabrication and thick plate processing.',
    specs: ['Max thickness: 6mm', 'Reinforced frame', 'Industrial motor', 'Precision guides'],
  },
  {
    id: 'metal-folder-compact',
    title: 'Metal Folder - Compact',
    category: 'metal-folding',
    description: 'Compact metal folder ideal for small workshops and limited space environments without compromising on quality.',
    specs: ['Max thickness: 2mm', 'Space-saving design', 'Easy transport', 'Quick change tooling'],
  },
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'double-folding', label: 'Double Folding' },
  { id: 'sheet-metal', label: 'Sheet Metal' },
  { id: 'metal-folding', label: 'Metal Folding' },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Explore our comprehensive range of folding machines designed for precision, durability, and efficiency.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Filter className="w-5 h-5 text-muted" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-accent text-white'
                    : 'bg-white text-primary border border-border hover:border-accent/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <div className="aspect-video bg-slate-100 relative">
                  <img
                    alt={product.title}
                    data-strk-img-id={`product-page-${product.id}-img`}
                    data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                    {categories.find(c => c.id === product.category)?.label}
                  </span>
                  <h3 id={`product-title-${product.id}`} className="text-xl font-semibold text-primary">
                    {product.title}
                  </h3>
                  <p id={`product-desc-${product.id}`} className="mt-2 text-muted leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <ul className="mt-4 space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/products/${product.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors"
                  >
                    View Details
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

export default ProductsPage;
