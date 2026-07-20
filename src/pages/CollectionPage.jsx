import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, ChevronDown, Star } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

// Map product categories to safe image search terms
const imageCategoryMap = {
  'earrings': 'earrings',
  'necklaces': 'necklaces',
  'hoop-earrings': 'earrings',
  'sets': 'jewelry',
};

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category') || 'all';
  const [priceFilter, setPriceFilter] = useState('all');
  const [materialFilter, setMaterialFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (priceFilter !== 'all') {
      if (priceFilter === 'under50') result = result.filter(p => p.price < 50);
      else if (priceFilter === '50to100') result = result.filter(p => p.price >= 50 && p.price <= 100);
      else if (priceFilter === 'over100') result = result.filter(p => p.price > 100);
    }
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(materialFilter.toLowerCase()));
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product, product.variants[0]);
    toast.success(`${product.shortName} added to cart`);
  };

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h4 className="text-sm tracking-wider uppercase mb-4 font-medium">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSearchParams({})}
            className={`block text-sm transition-colors ${categoryFilter === 'all' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSearchParams({ category: cat.id })}
              className={`block text-sm transition-colors ${categoryFilter === cat.id ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-sm tracking-wider uppercase mb-4 font-medium">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 - $100' },
            { value: 'over100', label: 'Over $100' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setPriceFilter(option.value)}
              className={`block text-sm transition-colors ${priceFilter === option.value ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-sm tracking-wider uppercase mb-4 font-medium">Material</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: '18K Gold Plated' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setMaterialFilter(option.value)}
              className={`block text-sm transition-colors ${materialFilter === option.value ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="section-padding py-8 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="serif-heading text-3xl lg:text-4xl">
              {categoryFilter !== 'all'
                ? categories.find(c => c.id === categoryFilter)?.name || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">{filteredProducts.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm pr-8 pl-2 py-2 border border-border rounded-sm focus:outline-none focus:border-accent cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 text-sm border border-border px-4 py-2 rounded-sm"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="section-padding py-8">
        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setMobileFiltersOpen(false)} />
              <div className="fixed left-0 top-0 bottom-0 w-72 bg-background z-50 overflow-y-auto p-6 lg:hidden">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="serif-heading text-2xl">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} className="p-2">
                    <SlidersHorizontal size={20} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Hidden text elements for stock image queries - safe terms only */}
                    <span id={`${product.images[0].id}-title`} className="sr-only">
                      gold {imageCategoryMap[product.category] || 'jewelry'} piece
                    </span>
                    <span id={`${product.images[1].id}-title`} className="sr-only">
                      gold {imageCategoryMap[product.category] || 'jewelry'} piece
                    </span>

                    <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
                      <img
                        data-strk-img-id={`shop-${product.images[0].id}`}
                        data-strk-img={`[${product.images[0].id}-title] [collection-page] gold jewelry ${imageCategoryMap[product.category] || 'jewelry'}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.shortName}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                      <img
                        data-strk-img-id={`shop-${product.images[1].id}`}
                        data-strk-img={`[${product.images[1].id}-title] [collection-page] gold jewelry ${imageCategoryMap[product.category] || 'jewelry'}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.shortName}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-primary/90 backdrop-blur-sm text-primary-foreground py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors"
                        >
                          <ShoppingBag size={14} />
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    <Link to={`/product/${product.id}`}>
                      <h3 className="product-name text-xs lg:text-sm mb-1.5 group-hover:text-accent transition-colors">
                        {product.shortName}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1 mb-1.5">
                      <Star size={10} className="fill-accent text-accent" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <p className="text-sm font-medium">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
