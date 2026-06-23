import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function ProductGrid({ products, title, description }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(8);
  const [filters, setFilters] = useState({ metal: '', stone: '', price: '' });
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = products.filter(p => {
    if (filters.price === 'under200' && p.price >= 200) return false;
    if (filters.price === '200-350' && (p.price < 200 || p.price > 350)) return false;
    if (filters.price === 'over350' && p.price <= 350) return false;
    return true;
  });

  const shown = filtered.slice(0, visible);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [shown.length, visible]);

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Hero */}
      <div className="py-16 md:py-24 px-6 md:px-10 text-center border-b border-cream-dark">
        <p className="label-caps text-gold mb-4">Collection</p>
        <h1
          className="font-serif text-5xl md:text-7xl text-ink font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-muted text-sm font-light mt-6 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {description}
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14" ref={containerRef}>
        {/* Filters */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <p className="label-caps text-muted" style={{ fontSize: '10px' }}>
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 label-caps text-ink hover:text-gold transition-colors duration-300"
          >
            Filter
            <ChevronDown size={12} className={`transition-transform duration-300 ${filtersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {filtersOpen && (
          <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-cream-dark">
            <div>
              <p className="label-caps text-muted mb-3" style={{ fontSize: '9px' }}>Price</p>
              <div className="flex gap-3">
                {[
                  { label: 'All', value: '' },
                  { label: 'Under $200', value: 'under200' },
                  { label: '$200–$350', value: '200-350' },
                  { label: 'Over $350', value: 'over350' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilters(f => ({ ...f, price: opt.value }))}
                    className={`label-caps px-3 py-1.5 border transition-colors duration-300 ${
                      filters.price === opt.value
                        ? 'bg-ink text-cream border-ink'
                        : 'bg-transparent text-ink border-ink/30 hover:border-ink'
                    }`}
                    style={{ fontSize: '9px' }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {shown.map((product, idx) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className={`group block ${idx === 0 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className={`relative overflow-hidden bg-cream-dark ${idx === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover img-hover"
                />
                {product.new && (
                  <div className="absolute top-3 left-3">
                    <span className="label-caps bg-cream text-ink px-2 py-1" style={{ fontSize: '8px' }}>New</span>
                  </div>
                )}
              </div>
              <div className="mt-3 md:mt-4">
                <p
                  id={product.titleId}
                  className="font-serif text-lg md:text-xl text-ink font-light group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.name}
                </p>
                <p
                  id={product.descId}
                  className="label-caps text-muted mt-1"
                  style={{ fontSize: '10px' }}
                >
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="text-center mt-14">
            <button
              onClick={() => setVisible(v => v + 8)}
              className="btn-secondary"
            >
              Load More
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-ink/40" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              No pieces found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
