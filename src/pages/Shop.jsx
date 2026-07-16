import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();

  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedPrice !== 'All') {
      const [min, max] = selectedPrice.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }
    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.material === selectedMaterial);
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
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const priceRanges = ['All', '30-50', '50-70', '70-100', '100-120'];
  const materials = ['All', '18K Gold Plated'];

  const FilterSection = ({ title, options, selected, onChange }) => (
    <div className="mb-6">
      <h3 className="text-xs tracking-extra-wide uppercase font-sans font-medium text-brand-warm-black mb-3">
        {title}
      </h3>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
              selected === option
                ? 'text-brand-gold font-medium'
                : 'text-brand-warm-gray hover:text-brand-warm-black'
            }`}
          >
            {option === 'All' ? 'All' : option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-warm-black tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm-border">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-xs tracking-extra-wide uppercase font-sans text-brand-warm-black"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm text-brand-warm-gray font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-extra-wide uppercase font-sans text-brand-warm-black pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar filters */}
          <aside className="hidden md:block w-48 lg:w-56 flex-shrink-0">
            <FilterSection
              title="Category"
              options={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
            <div className="h-px bg-brand-warm-border mb-6" />
            <FilterSection
              title="Price"
              options={priceRanges}
              selected={selectedPrice}
              onChange={setSelectedPrice}
            />
            <div className="h-px bg-brand-warm-border mb-6" />
            <FilterSection
              title="Material"
              options={materials}
              selected={selectedMaterial}
              onChange={setSelectedMaterial}
            />
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-brand-cream md:hidden">
              <div className="flex items-center justify-between px-4 py-4 border-b border-brand-warm-border">
                <h2 className="text-xs tracking-extra-wide uppercase font-sans font-medium">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-5 h-5 text-brand-warm-black" />
                </button>
              </div>
              <div className="px-4 py-6">
                <FilterSection
                  title="Category"
                  options={categories}
                  selected={selectedCategory}
                  onChange={setSelectedCategory}
                />
                <FilterSection
                  title="Price"
                  options={priceRanges}
                  selected={selectedPrice}
                  onChange={setSelectedPrice}
                />
                <FilterSection
                  title="Material"
                  options={materials}
                  selected={selectedMaterial}
                  onChange={setSelectedMaterial}
                />
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-6 bg-brand-gold text-white text-xs tracking-ultra-wide uppercase font-sans py-3"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-warm-gray">No pieces found</p>
                <p className="text-sm text-brand-warm-gray-light font-sans mt-2">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory">
                        <img
                          data-strk-img-id={`shop-${product.id}-1`}
                          data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}] gold jewelry`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-brand-warm-black/90 text-white py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span className="text-[11px] tracking-extra-wide uppercase font-sans">
                            Quick Add
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={`shop-name-${product.id}`}
                          className="product-name text-sm font-medium text-brand-warm-black"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p
                        id={`shop-desc-${product.id}`}
                        className="text-xs text-brand-warm-gray font-sans mt-0.5"
                      >
                        {product.description}
                      </p>
                      <p className="text-sm font-sans font-medium text-brand-warm-black mt-1">
                        ${product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => addItem(product)}
                      className="md:hidden mt-2 w-full border border-brand-gold text-brand-gold text-[11px] tracking-extra-wide uppercase font-sans py-2 hover:bg-brand-gold hover:text-white transition-colors"
                    >
                      Add to Bag
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
