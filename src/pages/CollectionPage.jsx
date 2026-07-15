import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Star, SlidersHorizontal, X } from 'lucide-react';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name', label: 'Name' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (categoryFilter !== 'All') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [categoryFilter, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' && key === 'category') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-soft-black mb-4 tracking-wide text-center">
          {categoryFilter === 'All' ? 'All Collections' : categoryFilter}
        </h1>
        <div className="w-24 h-px bg-velmora-gold mx-auto" />
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 text-sm font-sans tracking-wide text-velmora-charcoal hover:text-velmora-gold transition-colors"
        >
          <SlidersHorizontal size={16} />
          <span>Filter</span>
        </button>

        <select
          value={sortBy}
          onChange={(e) => updateFilter('sort', e.target.value)}
          className="text-sm font-sans text-velmora-charcoal border-b border-velmora-taupe pb-1 focus:outline-none focus:border-velmora-gold bg-transparent cursor-pointer"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Sidebar (Mobile Overlay) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <FilterContent
              categories={categories}
              categoryFilter={categoryFilter}
              updateFilter={updateFilter}
            />
          </div>
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterContent
            categories={categories}
            categoryFilter={categoryFilter}
            updateFilter={updateFilter}
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="font-sans text-sm text-velmora-warm-gray mb-6">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterContent({ categories, categoryFilter, updateFilter }) {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-sm tracking-wider uppercase mb-4 text-velmora-charcoal">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => updateFilter('category', category)}
              className={`block w-full text-left px-3 py-2 text-sm font-sans transition-colors ${
                categoryFilter === category
                  ? 'bg-velmora-gold/10 text-velmora-gold'
                  : 'text-velmora-warm-gray hover:text-velmora-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-sm tracking-wider uppercase mb-4 text-velmora-charcoal">
          Price Range
        </h4>
        <div className="space-y-2">
          {['Under $50', '$50 - $75', '$75 - $100', '$100+'].map(range => (
            <label key={range} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-velmora-taupe text-velmora-gold focus:ring-velmora-gold"
              />
              <span className="text-sm font-sans text-velmora-warm-gray">{range}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-sm tracking-wider uppercase mb-4 text-velmora-charcoal">
          Material
        </h4>
        <div className="space-y-2">
          {['Gold', 'Silver'].map(material => (
            <label key={material} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-velmora-taupe text-velmora-gold focus:ring-velmora-gold"
              />
              <span className="text-sm font-sans text-velmora-warm-gray">{material}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative aspect-square overflow-hidden bg-velmora-light-gray mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.bestseller && (
          <span className="absolute top-4 left-4 bg-velmora-gold text-white text-xs px-3 py-1 font-sans tracking-wider uppercase">
            Bestseller
          </span>
        )}
      </div>
      <h3 className="font-serif text-lg tracking-widest uppercase text-velmora-soft-black mb-1">
        {product.name}
      </h3>
      <p className="font-sans text-sm text-velmora-warm-gray mb-2">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-base font-medium text-velmora-soft-black">
          ${product.price}
        </span>
        <div className="flex items-center space-x-1">
          <Star size={14} className="fill-velmora-gold text-velmora-gold" />
          <span className="text-sm text-velmora-warm-gray">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}
