import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-3">
        <img
          data-strk-img-id={`shop-${product.id}-img`}
          data-strk-img={`[${product.id}-name] [shop-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-${product.id}-img2`}
          data-strk-img={`[${product.id}-name] [shop-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary/90 backdrop-blur-sm text-primary-foreground py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors"
          >
            <ShoppingBag size={14} />
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <h3 className="product-name text-sm mb-1 group-hover:text-accent transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1">
        <Star size={12} className="fill-accent text-accent" />
        <span className="text-xs text-muted-foreground">{product.rating}</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  );
};

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = products
    .filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedMaterial !== 'all' && p.material !== selectedMaterial) return false;
      if (priceRange === 'under50' && p.price >= 50) return false;
      if (priceRange === '50to100' && (p.price < 50 || p.price > 100)) return false;
      if (priceRange === 'over100' && p.price <= 100) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm py-1 transition-colors ${
              selectedCategory === 'all' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm py-1 transition-colors ${
                selectedCategory === cat.id ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3">Material</h3>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm py-1 capitalize transition-colors ${
                selectedMaterial === mat ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {mat === 'all' ? 'All' : `${mat} tone`}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 - $100' },
            { value: 'over100', label: 'Over $100' },
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-sm py-1 transition-colors ${
                priceRange === range.value ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <h1 id="shop-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-2">
          Shop All
        </h1>
        <p className="text-muted-foreground text-sm">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm mb-4"
            >
              <SlidersHorizontal size={16} />
              Filters
              <ChevronDown size={14} className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>

            {filterOpen && (
              <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                <FilterContent />
              </div>
            )}
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <div className="lg:hidden" />
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-muted-foreground">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border/50 bg-transparent px-3 py-1.5 focus:outline-none focus:border-accent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
