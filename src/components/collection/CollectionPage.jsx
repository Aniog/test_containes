import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { StockImage } from '@/components/ui/StockImage';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { toast } from 'sonner';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const sectionRef = useRevealOnScroll();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(selectedMaterial.toLowerCase()));
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product, 'gold', 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="container-padding">
        {/* Header */}
        <div className="py-8 md:py-12 reveal">
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-2">Shop All</h1>
          <p className="text-sm text-muted-foreground">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs uppercase tracking-widest mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    All ({products.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {cat.label} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-widest mb-4">Material</h3>
                <div className="space-y-2">
                  {['all', 'gold', 'silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block text-sm capitalize transition-colors ${selectedMaterial === mat ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {mat === 'all' ? 'All Materials' : `${mat} tone`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs uppercase tracking-widest mb-4">Price</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-20 px-2 py-1.5 text-sm border border-border bg-transparent focus:outline-none focus:border-accent"
                      min="0"
                    />
                    <span className="text-muted-foreground">—</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-20 px-2 py-1.5 text-sm border border-border bg-transparent focus:outline-none focus:border-accent"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setFiltersOpen(true)}
              className="bg-[#1a1714] text-white p-3 shadow-lg hover:bg-[#c9a96e] hover:text-[#1a1714] transition-colors"
              aria-label="Open filters"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          {filtersOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setFiltersOpen(false)} />
              <div className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-background z-50 p-6 overflow-y-auto lg:hidden animate-slide-in">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="serif-heading text-xl">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest mb-4">Category</h3>
                    <div className="space-y-2">
                      <button onClick={() => { setSelectedCategory('all'); setFiltersOpen(false); }} className={`block text-sm ${selectedCategory === 'all' ? 'text-accent font-medium' : 'text-muted-foreground'}`}>All</button>
                      {categories.map((cat) => (
                        <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setFiltersOpen(false); }} className={`block text-sm ${selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-foreground'}`}>{cat.label}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest mb-4">Price</h3>
                    <div className="flex items-center gap-2">
                      <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} className="w-20 px-2 py-1.5 text-sm border border-border bg-transparent" min="0" />
                      <span className="text-muted-foreground">—</span>
                      <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="w-20 px-2 py-1.5 text-sm border border-border bg-transparent" min="0" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1" ref={sectionRef}>
            {/* Sort & Active Filters */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border reveal">
              <div className="flex items-center gap-2 flex-wrap">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-secondary px-3 py-1">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:text-accent">×</button>
                  </span>
                )}
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-border bg-transparent px-3 py-2 focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 reveal">
                <p className="serif-heading text-xl mb-2">No pieces found</p>
                <p className="text-sm text-muted-foreground mb-6">Try adjusting your filters</p>
                <button onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); setPriceRange([0, 200]); }} className="btn-outline inline-block">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className={`group reveal reveal-delay-${Math.min(index + 1, 4)}`}>
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                        <StockImage
                          imgId={`shop-${product.images[0].id}`}
                          query={product.images[0].query}
                          ratio="3x4"
                          width="500"
                          alt={product.name}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-[#1a1714] text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                            {product.badge}
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="absolute bottom-3 left-3 right-3 bg-[#1a1714] text-white text-[10px] uppercase tracking-widest py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#c9a96e] hover:text-[#1a1714]"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                      <h3 className="product-name text-xs md:text-sm mb-1.5 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-1.5">
                        <StarRating rating={product.rating} />
                        <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
                    </Link>
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
