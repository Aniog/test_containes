import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories, priceRanges, materials } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const containerRef = useRef(null);

  // Read filters from URL
  const selectedCategory = searchParams.get('category') || '';
  const selectedPrice = searchParams.get('price') || '';
  const selectedMaterial = searchParams.get('material') || '';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedPrice || selectedMaterial;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.tags?.includes('new') ? 1 : 0) - (a.tags?.includes('new') ? 1 : 0));
        break;
      default:
        // featured: bestsellers first
        result.sort((a, b) => (b.tags?.includes('bestseller') ? 1 : 0) - (a.tags?.includes('bestseller') ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filteredProducts]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-subtitle uppercase text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedCategory ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedCategory === cat.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-subtitle uppercase text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('price', '')}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedPrice ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', range.id)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedPrice === range.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-subtitle uppercase text-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('material', '')}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedMaterial ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setFilter('material', mat.id)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedMaterial === mat.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-warm-white border-b border-stone">
        <div className="container-main py-8 md:py-12 text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">
            Collection
          </p>
          <h1 className="section-title text-3xl md:text-5xl">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
        </div>
      </div>

      <div className="container-main section-padding">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 text-charcoal text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            {/* Active filter badges */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold text-xs rounded-sm">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => setFilter('category', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold text-xs rounded-sm">
                    {priceRanges.find((r) => r.id === selectedPrice)?.label}
                    <button onClick={() => setFilter('price', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedMaterial && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold text-xs rounded-sm">
                    {materials.find((m) => m.id === selectedMaterial)?.name}
                    <button onClick={() => setFilter('material', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button onClick={clearFilters} className="text-warm-gray text-xs underline underline-offset-2 hover:text-charcoal transition-colors">
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-sm text-warm-gray border border-stone rounded-sm px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:border-gold transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter overlay */}
          <div
            className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
              filtersOpen ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
            <div
              className={`absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-cream shadow-xl transition-transform duration-300 ${
                filtersOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)} className="p-2 text-charcoal">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-warm-gray text-sm mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-warm-gray text-sm mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
