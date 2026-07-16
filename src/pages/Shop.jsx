import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const materialFilters = ['Gold', 'Silver Tone'];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'All';
  const [sort, setSort] = useState('featured');
  const [materialFilter, setMaterialFilter] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (materialFilter !== 'All') {
      result = result.filter((p) => p.materialFilter === materialFilter.toLowerCase().replace(' ', '-'));
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, materialFilter, priceRange, sort]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, materialFilter, sort]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-4">Category</h4>
        <ul className="space-y-2.5">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setCategory(cat)}
                className={`text-sm transition-colors ${
                  activeCategory === cat
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-stone hover:text-velmora-charcoal'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-4">Material</h4>
        <div className="space-y-2.5">
          <button
            onClick={() => setMaterialFilter('All')}
            className={`block text-sm transition-colors ${
              materialFilter === 'All' ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
            }`}
          >
            All Materials
          </button>
          {materialFilters.map((m) => (
            <button
              key={m}
              onClick={() => setMaterialFilter(m)}
              className={`block text-sm transition-colors ${
                materialFilter === m ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-4">Price Range</h4>
        <div className="flex items-center gap-2 text-sm text-velmora-stone">
          <span>${priceRange[0]}</span>
          <span>&mdash;</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );

  return (
    <main ref={containerRef} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="section-padding mb-10">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2">
          {activeCategory === 'All' ? 'Shop All' : activeCategory}
        </h1>
        <p className="text-sm text-velmora-stone">{filteredProducts.length} pieces</p>
      </div>

      <div className="section-padding">
        <div className="flex gap-10">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-sand/50">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-velmora-charcoal"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-velmora-stone hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent text-xs font-medium tracking-wider uppercase text-velmora-charcoal pr-6 py-1 outline-none cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="lg:hidden mb-8 p-6 bg-velmora-sand/30 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-medium tracking-wider uppercase">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4 text-velmora-stone" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-stone text-sm">No products match your filters.</p>
                <button
                  onClick={() => {
                    setCategory('All');
                    setMaterialFilter('All');
                    setPriceRange([0, 200]);
                  }}
                  className="btn-ghost text-xs mt-4"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.slug}`} className="block">
                      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        {hoveredId === product.id && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addItem(product, 'Gold', 1);
                            }}
                            className="absolute bottom-3 left-3 right-3 bg-velmora-charcoal/90 text-white text-[11px] font-medium tracking-wider uppercase py-2.5 text-center hover:bg-velmora-gold transition-colors"
                          >
                            Quick Add to Bag
                          </button>
                        )}
                      </div>
                    </Link>
                    <div className="flex items-center gap-1 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                        />
                      ))}
                    </div>
                    <Link to={`/product/${product.slug}`}>
                      <h3
                        id={product.titleId}
                        className="product-name text-[11px] md:text-xs mb-1 hover:text-velmora-gold transition-colors"
                      >
                        {product.name}
                      </h3>
                    </Link>
                    <p id={product.descId} className="sr-only">{product.description}</p>
                    <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section-padding pb-20" />
    </main>
  );
}