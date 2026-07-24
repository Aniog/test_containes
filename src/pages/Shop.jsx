import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: 'Over $100', min: 100, max: Infinity }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1714]/50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 lg:w-64 bg-[#FAF8F5] z-50 lg:z-0 transform transition-transform duration-300 lg:transform-none overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 lg:p-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="font-serif text-xl text-[#2C2824]">Filters</h2>
            <button onClick={onClose} className="p-2 text-[#6B635A]">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Desktop Header */}
          <h2 className="hidden lg:block font-serif text-lg text-[#2C2824] mb-6">
            Filters
          </h2>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold tracking-wider text-[#2C2824] uppercase mb-4">
              Category
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.length === 0}
                  onChange={() => setFilters({ ...filters, categories: [] })}
                  className="w-4 h-4 accent-[#C9A962]"
                />
                <span className="text-sm text-[#6B635A]">All Categories</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(cat.id)}
                    onChange={(e) => {
                      const newCategories = e.target.checked
                        ? [...filters.categories, cat.id]
                        : filters.categories.filter(c => c !== cat.id);
                      setFilters({ ...filters, categories: newCategories });
                    }}
                    className="w-4 h-4 accent-[#C9A962]"
                  />
                  <span className="text-sm text-[#6B635A]">
                    {cat.name} ({cat.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold tracking-wider text-[#2C2824] uppercase mb-4">
              Price
            </h3>
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.priceRange?.label === range.label}
                    onChange={(e) => {
                      setFilters({
                        ...filters,
                        priceRange: e.target.checked ? range : null
                      });
                    }}
                    className="w-4 h-4 accent-[#C9A962]"
                  />
                  <span className="text-sm text-[#6B635A]">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold tracking-wider text-[#2C2824] uppercase mb-4">
              Material
            </h3>
            <div className="space-y-3">
              {['18K Gold Plated', 'Rose Gold Plated', 'Sterling Silver'].map((material) => (
                <label key={material} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.materials.includes(material)}
                    onChange={(e) => {
                      const newMaterials = e.target.checked
                        ? [...filters.materials, material]
                        : filters.materials.filter(m => m !== material);
                      setFilters({ ...filters, materials: newMaterials });
                    }}
                    className="w-4 h-4 accent-[#C9A962]"
                  />
                  <span className="text-sm text-[#6B635A]">{material}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(filters.categories.length > 0 || filters.priceRange || filters.materials.length > 0) && (
            <button
              onClick={() => setFilters({ categories: [], priceRange: null, materials: [] })}
              className="text-sm text-[#C9A962] hover:text-[#A68B4B] transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isAdding } = useCart();
  const isAddingThis = isAdding === product.id;

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-[#F5F1EB] overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Secondary Image on Hover */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[#FAF8F5] text-[#2C2824] text-sm font-sans tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            {isAddingThis ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </Link>

      <div className="text-center">
        <h3 className="product-name text-sm mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} fill="#C9A962" stroke="#C9A962" />
          <span className="text-xs text-[#6B635A]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-sans text-sm text-[#2C2824]">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    priceRange: null,
    materials: []
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Filter by price
    if (filters.priceRange) {
      result = result.filter(p =>
        p.price >= filters.priceRange.min &&
        p.price < filters.priceRange.max
      );
    }

    // Filter by material
    if (filters.materials.length > 0) {
      result = result.filter(p => filters.materials.includes(p.material));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="pt-20 min-h-screen">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-[#2C2824] mb-2">
            Shop All
          </h1>
          <p className="text-[#6B635A]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-[#6B635A]"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filters
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <span className="text-sm text-[#6B635A] hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-[#E8E2D9] px-4 py-2 pr-8 text-sm text-[#2C2824] cursor-pointer focus:outline-none focus:border-[#C9A962]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6B635A] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-[#2C2824] mb-4">
                  No products found
                </p>
                <p className="text-[#6B635A] mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => setFilters({ categories: [], priceRange: null, materials: [] })}
                  className="btn btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}