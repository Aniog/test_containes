import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedMaterial, sortBy]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products
    .filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      if (selectedMaterial !== 'all' && product.material !== selectedMaterial) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <div ref={containerRef} className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-4xl md:text-5xl mb-2">Shop All</h1>
          <p className="text-[#6B6560] font-light">{filteredProducts.length} products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedCategory === 'all' ? 'text-[#B8860B]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedCategory === cat.id ? 'text-[#B8860B]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedMaterial('all')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedMaterial === 'all' ? 'text-[#B8860B]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    All Materials
                  </button>
                  <button
                    onClick={() => setSelectedMaterial('gold')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedMaterial === 'gold' ? 'text-[#B8860B]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    Gold Tone
                  </button>
                  <button
                    onClick={() => setSelectedMaterial('silver')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedMaterial === 'silver' ? 'text-[#B8860B]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    Silver Tone
                  </button>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-4">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-[#6B6560]">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Bar */}
          <div className="lg:hidden flex items-center justify-between mb-6 pb-4 border-b border-[#E8E2DA]">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#1A1A1A]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E8E2DA] px-3 py-2 bg-transparent rounded-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 bg-[#FAF8F5] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="serif-heading text-2xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-3">Category</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => { setSelectedCategory('all'); setIsFilterOpen(false); }}
                        className={`block w-full text-left text-sm py-1 ${
                          selectedCategory === 'all' ? 'text-[#B8860B]' : 'text-[#6B6560]'
                        }`}
                      >
                        All Products
                      </button>
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => { setSelectedCategory(cat.id); setIsFilterOpen(false); }}
                          className={`block w-full text-left text-sm py-1 ${
                            selectedCategory === cat.id ? 'text-[#B8860B]' : 'text-[#6B6560]'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-3">Material</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => { setSelectedMaterial('all'); setIsFilterOpen(false); }}
                        className={`block w-full text-left text-sm py-1 ${
                          selectedMaterial === 'all' ? 'text-[#B8860B]' : 'text-[#6B6560]'
                        }`}
                      >
                        All Materials
                      </button>
                      <button
                        onClick={() => { setSelectedMaterial('gold'); setIsFilterOpen(false); }}
                        className={`block w-full text-left text-sm py-1 ${
                          selectedMaterial === 'gold' ? 'text-[#B8860B]' : 'text-[#6B6560]'
                        }`}
                      >
                        Gold Tone
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown - Desktop */}
            <div className="hidden lg:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E8E2DA] px-3 py-2 bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#6B6560]">No products match your filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); setPriceRange([0, 200]); }}
                  className="btn-secondary mt-4 inline-block"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative aspect-[4/5] bg-[#E8E2DA] rounded-sm overflow-hidden mb-4">
                      <img
                        alt={product.name}
                        data-strk-img-id={`collection-${product.id}-img`}
                        data-strk-img={`[${product.id}-desc] [${product.id}-title] [shop-all-title]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className={`absolute bottom-4 left-4 right-4 bg-white/95 text-[#1A1A1A] py-3 text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                          hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="product-name text-sm mb-1">{product.name}</h3>
                    <p className="text-xs text-[#6B6560] mb-2">{product.description}</p>
                    <p className="text-sm font-medium">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
