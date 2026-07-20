import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          />
        </div>
        <div className="mt-4">
          <h3
            id={`shop-${product.id}-title`}
            className="font-sans text-xs uppercase tracking-product text-charcoal"
          >
            {product.name}
          </h3>
          <p className="font-sans text-sm text-stone mt-1">${product.price}</p>
          <p id={`shop-${product.id}-desc`} className="sr-only">{product.description}</p>
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className={`absolute bottom-[72px] left-0 right-0 mx-3 py-2.5 bg-charcoal text-cream font-sans text-xs uppercase tracking-wider text-center border-none cursor-pointer transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const categoryOptions = [
    { value: 'all', label: 'All Jewelry' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ];

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="pt-24 md:pt-28 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categoryOptions.find(c => c.value === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                {categoryOptions.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategoryChange(cat.value)}
                    className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                      activeCategory === cat.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 border-t border-taupe pt-6">
                <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy('price-low')}
                    className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${sortBy === 'price-low' ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'}`}
                  >
                    Low to High
                  </button>
                  <button
                    onClick={() => setSortBy('price-high')}
                    className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${sortBy === 'price-high' ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'}`}
                  >
                    High to Low
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter bar */}
            <div className="md:hidden flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-charcoal bg-transparent border border-taupe px-4 py-2 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-xs text-charcoal bg-transparent border border-taupe px-3 py-2 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Sort dropdown desktop */}
            <div className="hidden md:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-xs text-charcoal bg-transparent border border-taupe px-3 py-2 cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-sans text-sm text-stone">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 z-[60]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-[70] rounded-t-2xl max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-taupe">
              <h3 className="font-sans text-sm font-medium text-charcoal">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 bg-transparent border-none text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-3">Category</h4>
                <div className="space-y-2">
                  {categoryOptions.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        handleCategoryChange(cat.value);
                        setMobileFiltersOpen(false);
                      }}
                      className={`block w-full text-left font-sans text-sm py-2 bg-transparent border-none cursor-pointer ${
                        activeCategory === cat.value ? 'text-charcoal font-medium' : 'text-stone'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
