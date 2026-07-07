import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const materials = ['Gold Tone', 'Silver Tone'];

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Sellers', value: 'bestsellers' },
];

export default function CollectionPage() {
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const activeCategory = searchParams.get('category') || '';

  // Filter state
  const [selectedCategories, setSelectedCategories] = useState(
    activeCategory ? [activeCategory.toLowerCase()] : []
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }

    // Material filter
    if (selectedMaterial) {
      result = result.filter((p) =>
        p.variants.some((v) => v.name.toLowerCase().includes(selectedMaterial))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPrice, selectedMaterial, sortBy]);

  const toggleCategory = (cat) => {
    const lower = cat.toLowerCase();
    if (lower === 'all') {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(lower) ? prev.filter((c) => c !== lower) : [...prev, lower]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
    setSelectedMaterial(null);
  };

  const hasFilters = selectedCategories.length > 0 || selectedPrice || selectedMaterial;

  return (
    <main className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="font-serif text-3xl lg:text-4xl text-warm-dark mb-2">Shop All</h1>
          <p className="font-sans text-sm text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warm-dark mb-4">
                  Category
                </h4>
                <div className="space-y-2.5">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={cat.toLowerCase() === 'all' ? selectedCategories.length === 0 : selectedCategories.includes(cat.toLowerCase())}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 border-warm-border text-gold focus:ring-gold/30 rounded"
                      />
                      <span className="font-sans text-sm text-warm-gray group-hover:text-warm-dark transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warm-dark mb-4">
                  Price
                </h4>
                <div className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === range}
                        onChange={() => setSelectedPrice(selectedPrice === range ? null : range)}
                        className="w-4 h-4 border-warm-border text-gold focus:ring-gold/30"
                      />
                      <span className="font-sans text-sm text-warm-gray group-hover:text-warm-dark transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warm-dark mb-4">
                  Material
                </h4>
                <div className="space-y-2.5">
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat.toLowerCase()}
                        onChange={() => setSelectedMaterial(selectedMaterial === mat.toLowerCase() ? null : mat.toLowerCase())}
                        className="w-4 h-4 border-warm-border text-gold focus:ring-gold/30"
                      />
                      <span className="font-sans text-sm text-warm-gray group-hover:text-warm-dark transition-colors">
                        {mat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear */}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-gold hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-warm-dark border border-warm-border px-4 py-2 hover:border-warm-gray transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasFilters && (
                <span className="w-2 h-2 rounded-full bg-gold" />
              )}
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-[11px] uppercase tracking-wider text-gold hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Product grid + Sort */}
          <div className="flex-1 min-w-0">
            {/* Sort + count */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-warm-gray hidden lg:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs uppercase tracking-wider text-warm-gray">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs uppercase tracking-wider text-warm-dark bg-transparent border border-warm-border px-3 py-1.5 focus:outline-none focus:border-gold transition-colors rounded-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-warm-gray mb-4">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-warm-border/20 overflow-hidden mb-3 rounded-sm">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product, product.variants[0].value);
                          }}
                          className="bg-white text-warm-dark px-5 py-2.5 text-xs uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-gold hover:text-white"
                        >
                          <ShoppingBag size={14} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-warm-dark mb-1">
                      {product.name}
                    </h3>
                    <p className="font-sans text-sm text-gold font-medium">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg text-warm-dark">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-warm-gray hover:text-warm-dark"
              >
                <X size={20} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warm-dark mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cat === 'All' ? selectedCategories.length === 0 : selectedCategories.includes(cat.toLowerCase())}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 border-warm-border text-gold rounded"
                    />
                    <span className="text-sm text-warm-gray">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warm-dark mb-3">Price</h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-price"
                      checked={selectedPrice === range}
                      onChange={() => setSelectedPrice(selectedPrice === range ? null : range)}
                      className="w-4 h-4 border-warm-border text-gold"
                    />
                    <span className="text-sm text-warm-gray">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warm-dark mb-3">Material</h4>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-material"
                      checked={selectedMaterial === mat.toLowerCase()}
                      onChange={() => setSelectedMaterial(selectedMaterial === mat.toLowerCase() ? null : mat.toLowerCase())}
                      className="w-4 h-4 border-warm-border text-gold"
                    />
                    <span className="text-sm text-warm-gray">{mat}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-gold text-white py-3 text-xs uppercase tracking-widest hover:bg-gold/90 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </main>
  );
}