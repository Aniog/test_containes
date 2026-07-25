import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
  { value: 'rating', label: 'Top Rated' },
];

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-70', label: '$40 – $70' },
  { value: '70-100', label: '$70 – $100' },
  { value: '100-999', label: '$100+' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [imageHover, setImageHover] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setImageHover(true)}
      onMouseLeave={() => setImageHover(false)}
    >
      <Link to={`/products/${product.id}`} className="block aspect-[3/4] bg-ivory rounded-sm overflow-hidden relative">
        <img
          src={imageHover && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/10 transition-colors duration-500" />
      </Link>
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <button
          onClick={() => addItem(product.id)}
          className="w-full py-2.5 bg-cream/95 backdrop-blur-sm text-ink-900 text-xs font-sans font-medium tracking-wider uppercase 
                     hover:bg-cream transition-all duration-300 shadow-lg"
        >
          Quick Add
        </button>
      </div>
      <div className="mt-3 px-1">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-product-name group-hover:text-gold-600 transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-[11px] text-ink-500">{product.rating}</span>
        </div>
        <p className="text-price mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const { category } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category === 'all' ? 'all' : category || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory || 
        (selectedCategory === 'huggies' && p.id === 'golden-sphere-huggies'));
    }

    // Price filter
    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const handleCategoryChange = (val) => {
    setSelectedCategory(val);
    if (window.innerWidth < 768) setMobileFiltersOpen(false);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-ink-700 mb-4">
          Category
        </h4>
        <ul className="space-y-2.5">
          <li>
            <button
              className={`text-sm font-sans transition-colors ${
                selectedCategory === 'all' ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-900'
              }`}
              onClick={() => handleCategoryChange('all')}
            >
              All
            </button>
          </li>
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                className={`text-sm font-sans transition-colors ${
                  selectedCategory === cat.id ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-900'
                }`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-ink-700 mb-4">
          Price
        </h4>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((range) => (
            <li key={range.value}>
              <button
                className={`text-sm font-sans transition-colors ${
                  selectedPrice === range.value ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-900'
                }`}
                onClick={() => setSelectedPrice(range.value)}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-ink-700 mb-4">
          Material
        </h4>
        <ul className="space-y-2.5">
          {['all', 'gold', 'silver'].map((mat) => (
            <li key={mat}>
              <button
                className={`text-sm font-sans capitalize transition-colors ${
                  selectedMaterial === mat ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-900'
                }`}
                onClick={() => setSelectedMaterial(mat)}
              >
                {mat === 'all' ? 'All' : mat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-ink-900 tracking-wide capitalize">
            {category || 'All Jewelry'}
          </h1>
          <p className="mt-2 text-sm text-ink-500 font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-ink-100">
              <button
                className="md:hidden flex items-center gap-2 text-xs font-sans font-medium tracking-wider uppercase text-ink-700 hover:text-ink-900 transition-colors"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-1 text-xs font-sans font-medium tracking-wider uppercase text-ink-700 cursor-pointer focus:outline-none"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-400 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-ink-400 font-sans text-sm">No products match your filters.</p>
                <button
                  className="mt-4 text-xs font-sans font-medium tracking-wider uppercase text-ink-900 underline hover:text-gold-600 transition-colors"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice('all');
                    setSelectedMaterial('all');
                  }}
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

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink-950/30 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 bg-cream shadow-xl animate-slide-down overflow-y-auto">
            <div className="flex items-center justify-between px-4 h-16 border-b border-ink-100">
              <span className="text-xs font-sans font-medium tracking-wider uppercase text-ink-700">Filters</span>
              <button
                className="p-2 text-ink-500 hover:text-ink-900"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}