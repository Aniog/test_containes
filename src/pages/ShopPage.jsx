import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products, { categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['Gold', 'Silver'];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function ShopPage() {
  const { category: categorySlug } = useParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categorySlug || 'all');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sort, setSort] = useState('featured');
  const [hovered, setHovered] = useState(null);
  const { addItem } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    if (categorySlug) setSelectedCategory(categorySlug);
  }, [categorySlug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial.toLowerCase());
    }

    if (selectedPrice) {
      const range = priceRanges[selectedPrice];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

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
  }, [selectedCategory, selectedMaterial, selectedPrice, sort]);

  const activeFilters = [
    selectedCategory && selectedCategory !== 'all' ? { key: 'category', label: categories.find(c => c.slug === selectedCategory)?.name } : null,
    selectedMaterial ? { key: 'material', label: `${selectedMaterial} Tone` } : null,
    selectedPrice !== null ? { key: 'price', label: priceRanges[selectedPrice].label } : null,
  ].filter(Boolean);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice(null);
    setSelectedMaterial(null);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`text-left text-sm font-sans transition-colors ${
              selectedCategory === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-smoke hover:text-velmora-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`text-left text-sm font-sans transition-colors ${
                selectedCategory === cat.slug ? 'text-velmora-gold font-medium' : 'text-velmora-smoke hover:text-velmora-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range, idx) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice === idx ? null : idx)}
              className={`text-left text-sm font-sans transition-colors ${
                selectedPrice === idx ? 'text-velmora-gold font-medium' : 'text-velmora-smoke hover:text-velmora-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
          Finish
        </h4>
        <div className="flex flex-col gap-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
              className={`text-left text-sm font-sans transition-colors ${
                selectedMaterial === mat ? 'text-velmora-gold font-medium' : 'text-velmora-smoke hover:text-velmora-charcoal'
              }`}
            >
              {mat === 'Gold' ? '✦ Gold Tone' : '◇ Silver Tone'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-subtitle">Explore</p>
          <h1 className="section-title mt-2">
            {categorySlug ? categories.find(c => c.slug === categorySlug)?.name || 'Shop All' : 'Shop All'}
          </h1>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm font-sans text-velmora-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter & Sort
              </button>

              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {activeFilters.map((f) => (
                  <span
                    key={f.key}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-surface text-xs font-sans text-velmora-charcoal rounded-full"
                  >
                    {f.label}
                    <button onClick={() => {
                      if (f.key === 'category') setSelectedCategory('all');
                      if (f.key === 'material') setSelectedMaterial(null);
                      if (f.key === 'price') setSelectedPrice(null);
                    }}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {activeFilters.length > 0 && (
                  <button onClick={clearFilters} className="text-xs text-velmora-stone hover:text-velmora-charcoal font-sans ml-2">
                    Clear all
                  </button>
                )}
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-border px-4 py-2 pr-8 font-sans text-sm text-velmora-charcoal focus:outline-none focus:border-velmora-charcoal cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-stone pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-stone font-sans">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline mt-4">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHovered(product.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link to={`/product/${product.slug}`} className="block">
                      <div className="relative aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden mb-3">
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-${product.id}-${hovered === product.id ? '2' : '1'}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addItem(product, 'Gold');
                            }}
                            className="btn-primary text-xs py-2 px-4 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/product/${product.slug}`}>
                      <h3 id={product.titleId} className="font-serif text-sm font-semibold tracking-wider uppercase text-velmora-charcoal leading-tight">
                        {product.name}
                      </h3>
                    </Link>
                    <p id={product.descId} className="sr-only">{product.description}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                      <span className="text-xs text-velmora-smoke">{product.rating}</span>
                    </div>
                    <p className="font-sans text-sm font-medium text-velmora-charcoal mt-1">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setFilterOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-velmora-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg font-semibold text-velmora-charcoal">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-velmora-charcoal" />
              </button>
            </div>
            <FilterContent />
            <button onClick={() => { setFilterOpen(false); }} className="btn-primary w-full mt-10">
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </>
      )}
    </div>
  );
}