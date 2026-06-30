import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb] mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-white/95 backdrop-blur-sm text-[#1a1a1a] text-xs tracking-widest uppercase py-3 hover:bg-[#c9a96e] hover:text-white transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3 className="velmora-product-name text-sm mb-1 group-hover:text-[#c9a96e] transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-sm text-[#8a8279]">${product.price.toFixed(2)}</p>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-[#c9a96e] text-[#c9a96e]" />
        <span className="text-xs text-[#8a8279]">{product.rating} ({product.reviews})</span>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' },
  ];

  const materials = [
    { id: 'all', name: 'All Materials' },
    { id: '18k gold plated', name: '18K Gold Plated' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under-50', name: 'Under $50' },
    { id: '50-75', name: '$50 - $75' },
    { id: '75-plus', name: '$75+' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-asc', name: 'Price: Low to High' },
    { id: 'price-desc', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-50':
          result = result.filter((p) => p.price < 50);
          break;
        case '50-75':
          result = result.filter((p) => p.price >= 50 && p.price <= 75);
          break;
        case '75-plus':
          result = result.filter((p) => p.price > 75);
          break;
        default:
          break;
      }
    }

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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                selectedCategory === cat.id
                  ? 'text-[#c9a96e] font-medium'
                  : 'text-[#8a8279] hover:text-[#1a1a1a]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(mat.id)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                selectedMaterial === mat.id
                  ? 'text-[#c9a96e] font-medium'
                  : 'text-[#8a8279] hover:text-[#1a1a1a]'
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setPriceRange(range.id)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                priceRange === range.id
                  ? 'text-[#c9a96e] font-medium'
                  : 'text-[#8a8279] hover:text-[#1a1a1a]'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="velmora-heading text-3xl md:text-4xl mb-2">Shop All</h1>
        <p className="text-sm text-[#8a8279]">{filteredProducts.length} products</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-sm tracking-wider uppercase"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile filter panel */}
          {filtersOpen && (
            <div className="lg:hidden mb-6 p-4 bg-[#f5f0eb]">
              <FilterSidebar />
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-[#8a8279] hidden sm:inline">
                Showing {filteredProducts.length} results
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-[#8a8279]">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-none bg-transparent focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl mb-4">No products found</p>
                <p className="text-sm text-[#8a8279]">Try adjusting your filters</p>
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
    </main>
  );
}
