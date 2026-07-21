import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StockImg, ImageContainer } from '@/lib/images';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const categoryFilters = ['earrings', 'necklaces', 'huggies', 'sets'];
const materialFilters = ['gold', 'silver'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-parchment rounded overflow-hidden">
          <StockImg
            id={`shop-${product.id}`}
            query={`[shop-title-${product.id}]`}
            ratio="3x4"
            width={600}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
          />
          <span id={`shop-title-${product.id}`} className="sr-only">
            {product.name} gold jewelry
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 'gold', 1);
            }}
            className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-espresso font-sans text-xs font-medium tracking-widest uppercase py-3 rounded opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 hover:bg-velmora-espresso hover:text-white"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-espresso hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-sans text-sm font-medium text-velmora-espresso">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="font-sans text-xs text-velmora-stone">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [showSort, setShowSort] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice(null);
  };

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + (selectedPrice ? 1 : 0);

  return (
    <ImageContainer deps={[sort, selectedCategories, selectedMaterials, selectedPrice]}>
      {/* Header */}
      <div className="bg-velmora-parchment pt-24 md:pt-28 pb-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-velmora-espresso">
            Shop All
          </h1>
          <p className="font-sans text-sm text-velmora-stone mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 flex gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden w-full flex items-center justify-between mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-espresso border border-velmora-sand rounded px-4 py-2.5"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filter
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowSort((s) => !s)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-espresso border border-velmora-sand rounded px-4 py-2.5"
            >
              {sortOptions.find((o) => o.value === sort)?.label}
              <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-velmora-sand rounded shadow-lg z-20">
                {sortOptions.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => {
                      setSort(o.value);
                      setShowSort(false);
                    }}
                    className={`w-full text-left px-4 py-3 font-sans text-sm transition-colors ${
                      sort === o.value
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-espresso hover:bg-velmora-cream'
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-28">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-espresso">
                Filters
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs text-velmora-gold hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-8">
              <h4 className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                Category
              </h4>
              <div className="flex flex-col gap-2.5">
                {categoryFilters.map((cat) => (
                  <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        selectedCategories.includes(cat)
                          ? 'bg-velmora-espresso border-velmora-espresso'
                          : 'border-velmora-sand group-hover:border-velmora-taupe'
                      }`}
                    >
                      {selectedCategories.includes(cat) && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="font-sans text-sm text-velmora-espresso capitalize">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h4 className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                Material
              </h4>
              <div className="flex flex-col gap-2.5">
                {materialFilters.map((mat) => (
                  <label key={mat} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        selectedMaterials.includes(mat)
                          ? 'bg-velmora-espresso border-velmora-espresso'
                          : 'border-velmora-sand group-hover:border-velmora-taupe'
                      }`}
                    >
                      {selectedMaterials.includes(mat) && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                    />
                    <span className="font-sans text-sm text-velmora-espresso capitalize">
                      {mat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h4 className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                Price
              </h4>
              <div className="flex flex-col gap-2.5">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        selectedPrice?.label === range.label
                          ? 'border-velmora-espresso'
                          : 'border-velmora-sand group-hover:border-velmora-taupe'
                      }`}
                    >
                      {selectedPrice?.label === range.label && (
                        <div className="w-2 h-2 rounded-full bg-velmora-espresso" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="price"
                      className="sr-only"
                      checked={selectedPrice?.label === range.label}
                      onChange={() => setSelectedPrice(range)}
                    />
                    <span className="font-sans text-sm text-velmora-espresso">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-80 bg-velmora-cream z-50 p-6 overflow-y-auto lg:hidden">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-espresso">
                  Filters
                </h3>
                <button onClick={() => setSidebarOpen(false)} aria-label="Close filters">
                  <X className="w-5 h-5 text-velmora-stone" strokeWidth={1.5} />
                </button>
              </div>

              {/* Mobile Filters - same content */}
              <div className="mb-8">
                <h4 className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                  Category
                </h4>
                <div className="flex flex-col gap-2.5">
                  {categoryFilters.map((cat) => (
                    <label key={cat} className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 accent-velmora-espresso"
                      />
                      <span className="font-sans text-sm text-velmora-espresso capitalize">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                  Material
                </h4>
                <div className="flex flex-col gap-2.5">
                  {materialFilters.map((mat) => (
                    <label key={mat} className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="w-4 h-4 accent-velmora-espresso"
                      />
                      <span className="font-sans text-sm text-velmora-espresso capitalize">
                        {mat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                  Price
                </h4>
                <div className="flex flex-col gap-2.5">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="price-mobile"
                        checked={selectedPrice?.label === range.label}
                        onChange={() => setSelectedPrice(range)}
                        className="w-4 h-4 accent-velmora-espresso"
                      />
                      <span className="font-sans text-sm text-velmora-espresso">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="w-full border border-velmora-sand text-velmora-espresso font-sans text-xs tracking-widest uppercase py-3 rounded hover:bg-velmora-espresso hover:text-white transition-all"
              >
                Clear All
              </button>
            </div>
          </>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <p className="font-sans text-sm text-velmora-stone">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
            </p>
            <div className="relative">
              <button
                onClick={() => setShowSort((s) => !s)}
                className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-espresso border border-velmora-sand rounded px-4 py-2.5"
              >
                Sort: {sortOptions.find((o) => o.value === sort)?.label}
                <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
              {showSort && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-velmora-sand rounded shadow-lg z-20">
                  {sortOptions.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => {
                        setSort(o.value);
                        setShowSort(false);
                      }}
                      className={`w-full text-left px-4 py-3 font-sans text-sm transition-colors ${
                        sort === o.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-espresso hover:bg-velmora-cream'
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-velmora-stone mb-4">
                No pieces match your filters
              </p>
              <button
                onClick={clearFilters}
                className="font-sans text-sm text-velmora-gold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </ImageContainer>
  );
}
