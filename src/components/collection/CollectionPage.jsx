import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.images[0].id}-text] [${product.id}-name] [collection-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <div className="product-card-overlay">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className="bg-white text-velmora-black px-6 py-2 text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-black">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-velmora-gray-dark mt-1">{product.description}</p>
        <p className="font-sans text-sm mt-2 text-velmora-black">${product.price}</p>
      </div>
    </Link>
  );
};

const CollectionPage = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  let filteredProducts = [...products];

  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  if (selectedMaterial !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.material === selectedMaterial);
  }
  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    filteredProducts = filteredProducts.filter(p => p.price >= min && (max ? p.price <= max : true));
  }

  switch (sortBy) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-velmora-warm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="collection-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-black text-center">
            The Collection
          </h1>
          <p className="font-sans text-velmora-gray-dark text-center text-sm mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-velmora-gray text-sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-6">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-black mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-velmora-gold"
                    />
                    <span className="font-sans text-sm text-velmora-gray-dark">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-velmora-gold"
                      />
                      <span className="font-sans text-sm text-velmora-gray-dark">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-black mb-3">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="accent-velmora-gold"
                    />
                    <span className="font-sans text-sm text-velmora-gray-dark">All</span>
                  </label>
                  {['gold', 'silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-velmora-gold"
                      />
                      <span className="font-sans text-sm text-velmora-gray-dark capitalize">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-black mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-999', label: 'Over $100' },
                  ].map((range) => (
                    <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range.value}
                        onChange={() => setPriceRange(range.value)}
                        className="accent-velmora-gold"
                      />
                      <span className="font-sans text-sm text-velmora-gray-dark">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-velmora-gray-dark">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-gray px-4 py-2 pr-8 font-sans text-sm text-velmora-gray-dark focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-velmora-gray-dark pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-gray-dark">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedMaterial('all');
                    setPriceRange('all');
                  }}
                  className="mt-4 text-sm text-velmora-gold underline"
                >
                  Clear all filters
                </button>
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
