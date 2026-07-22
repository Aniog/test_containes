import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { useCart, useCartDrawer } from '@/context/CartContext';
import products from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const { category: catParam } = useParams();
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: catParam ? [catParam.charAt(0).toUpperCase() + catParam.slice(1)] : [],
    maxPrice: 120,
    materials: [],
  });

  const { addItem } = useCart();
  const { openDrawer } = useCartDrawer();

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const arr = prev[type];
      if (arr.includes(value)) {
        return { ...prev, [type]: arr.filter((v) => v !== value) };
      }
      return { ...prev, [type]: [...arr, value] };
    });
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    result = result.filter((p) => p.price <= filters.maxPrice);

    if (filters.materials.length > 0) {
      result = result.filter((p) =>
        filters.materials.some((m) => p.materials.toLowerCase().includes(m.toLowerCase()))
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
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [filters, sort]);

  const uniqueCategories = [...new Set(products.map((p) => p.category))];
  const uniqueMaterials = [...new Set(products.flatMap((p) => p.materials.split(', ').map((m) => m.split('(')[0].trim())))];

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velvet-900 mb-4">Category</h4>
        <div className="space-y-2">
          {uniqueCategories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => toggleFilter('categories', cat)}
                className="w-4 h-4 border-velvet-300 text-warm-600 focus:ring-warm-500/20"
              />
              <span className="text-sm text-velvet-700 group-hover:text-velvet-900">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velvet-900 mb-4">Max Price</h4>
        <input
          type="range"
          min={30}
          max={120}
          value={filters.maxPrice}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
          className="w-full accent-warm-600"
        />
        <div className="flex justify-between text-xs text-velvet-500 mt-1">
          <span>$30</span>
          <span>${filters.maxPrice}</span>
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velvet-900 mb-4">Material</h4>
        <div className="space-y-2">
          {uniqueMaterials.slice(0, 6).map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.materials.includes(mat)}
                onChange={() => toggleFilter('materials', mat)}
                className="w-4 h-4 border-velvet-300 text-warm-600 focus:ring-warm-500/20"
              />
              <span className="text-sm text-velvet-700 group-hover:text-velvet-900 truncate">{mat}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-velvet-100 border-b border-velvet-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <h1 className="font-serif text-4xl md:text-5xl text-velvet-900">
            {catParam ? catParam.charAt(0).toUpperCase() + catParam.slice(1) : 'Shop All'}
          </h1>
          <p className="font-sans text-sm text-velvet-600 mt-3">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              onClick={() => setFilterOpen(true)}
              className="bg-velvet-900 text-white px-6 py-3 font-sans text-xs tracking-widest uppercase shadow-lg flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${filterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-velvet-950/40" onClick={() => setFilterOpen(false)} />
            <div className={`absolute bottom-0 left-0 right-0 bg-velvet-50 p-6 pb-10 max-h-[80vh] overflow-y-auto transition-transform duration-300 ${filterOpen ? 'translate-y-0' : 'translate-y-full'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl">Filters</h3>
                <button onClick={() => setFilterOpen(false)} className="p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs text-velvet-500 tracking-widest uppercase hidden md:inline">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-velvet-200 bg-transparent text-sm px-3 py-2 font-sans focus:outline-none focus:border-velvet-400"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <span className="text-xs text-velvet-500">{filtered.length} results</span>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velvet-400">No pieces match your filters</p>
                <button
                  onClick={() => setFilters({ categories: [], maxPrice: 120, materials: [] })}
                  className="text-warm-600 text-sm tracking-widest uppercase mt-4 inline-block"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ShopCard key={product.id} product={product} addItem={addItem} openDrawer={openDrawer} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopCard({ product, addItem, openDrawer }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-2/3 h-2/3 bg-velvet-200 rounded-full transition-all duration-500 ${hovered ? 'scale-110 opacity-0' : 'opacity-100'}`} />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center bg-velvet-300 transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-2/3 h-2/3 bg-velvet-400 rounded-full scale-110" />
        </div>

        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-sans text-xs tracking-widest uppercase transition-all duration-200 ${
              added ? 'bg-velvet-900 text-white' : 'bg-white/90 backdrop-blur-sm text-velvet-900 hover:bg-warm-600 hover:text-white'
            }`}
          >
            {added ? 'Added to Bag' : 'Add to Cart'}
          </button>
        </div>

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-warm-600 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-sans">
            New
          </span>
        )}
      </div>

      <h3 className="font-serif text-sm md:text-base tracking-widest uppercase text-velvet-900">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-warm-600 fill-warm-600' : 'text-velvet-300'}`}
            />
          ))}
        </div>
        <span className="text-xs text-velvet-500">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm text-velvet-900 mt-1.5">${product.price}</p>
    </Link>
  );
}
