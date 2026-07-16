import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const activeFilterCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    priceRange[0] > 0 || priceRange[1] < 150,
  ].filter(Boolean).length;

  return (
    <div ref={containerRef} className="bg-[#faf8f5] min-h-screen pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-3">
            Shop All
          </h1>
          <p className="text-sm text-[#6b6560]">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Mobile filter button */}
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-[#e8e4df] text-sm"
            onClick={() => setFilterOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-primary text-[#1a1a1a] text-xs rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm transition-colors ${
                        selectedCategory === 'all' ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`text-sm transition-colors ${
                          selectedCategory === cat.slug ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Material</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedMaterial('all')}
                      className={`text-sm transition-colors ${
                        selectedMaterial === 'all' ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedMaterial('gold')}
                      className={`text-sm transition-colors ${
                        selectedMaterial === 'gold' ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      Gold
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedMaterial('silver')}
                      className={`text-sm transition-colors ${
                        selectedMaterial === 'silver' ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560] hover:text-[#1a1a1a]'
                      }`}
                    >
                      Silver
                    </button>
                  </li>
                </ul>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Price</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 border border-[#e8e4df] text-sm bg-transparent focus:outline-none focus:border-primary"
                      placeholder="Min"
                      min="0"
                    />
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 border border-[#e8e4df] text-sm bg-transparent focus:outline-none focus:border-primary"
                      placeholder="Max"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* Clear filters */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedMaterial('all');
                    setPriceRange([0, 150]);
                  }}
                  className="text-xs text-[#6b6560] hover:text-[#1a1a1a] underline transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort & mobile filter */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 md:hidden">
                <button
                  className="flex items-center gap-2 px-4 py-2 border border-[#e8e4df] text-sm"
                  onClick={() => setFilterOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-5 h-5 bg-primary text-[#1a1a1a] text-xs rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </div>
              <div className="ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-[#e8e4df] text-sm bg-transparent focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl text-[#6b6560] mb-2">No pieces found</p>
                <p className="text-sm text-[#9a9490]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-[#e8e4df] overflow-hidden mb-3">
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-${product.id}-img`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] [shop-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                            hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product, 'gold');
                            }}
                            className="w-full bg-[#1a1a1a]/90 text-[#faf8f5] py-2.5 text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-colors"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 id={product.titleId} className="product-name text-sm text-[#1a1a1a] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#6b6560] capitalize mb-1">{product.category}</p>
                      <p className="text-sm text-[#1a1a1a]">${product.price}</p>
                    </Link>
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
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-[#faf8f5] shadow-2xl md:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e4df]">
              <h2 className="serif-heading text-xl">Filters</h2>
              <button onClick={() => setFilterOpen(false)} className="p-2" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Category</h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm ${selectedCategory === 'all' ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560]'}`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`text-sm ${selectedCategory === cat.slug ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560]'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Material</h3>
                <ul className="space-y-3">
                  {['all', 'gold', 'silver'].map((mat) => (
                    <li key={mat}>
                      <button
                        onClick={() => setSelectedMaterial(mat)}
                        className={`text-sm capitalize ${selectedMaterial === mat ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6560]'}`}
                      >
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Price</h3>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 border border-[#e8e4df] text-sm bg-transparent"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 border border-[#e8e4df] text-sm bg-transparent"
                    placeholder="Max"
                  />
                </div>
              </div>

              <button
                onClick={() => setFilterOpen(false)}
                className="w-full btn-dark"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
