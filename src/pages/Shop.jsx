import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

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
        break;
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso">
            {selectedCategory
              ? categories.find(c => c.slug === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs uppercase tracking-widest text-muted font-medium mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`text-sm transition-colors ${!selectedCategory ? 'text-espresso font-medium' : 'text-walnut hover:text-espresso'}`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <button
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`text-sm transition-colors ${selectedCategory === cat.slug ? 'text-espresso font-medium' : 'text-walnut hover:text-espresso'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-hairline">
                <h3 className="text-xs uppercase tracking-widest text-muted font-medium mb-4">Price</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => setSortBy('price-low')} className="text-sm text-walnut hover:text-espresso transition-colors">Low to High</button></li>
                  <li><button onClick={() => setSortBy('price-high')} className="text-sm text-walnut hover:text-espresso transition-colors">High to Low</button></li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-hairline">
                <h3 className="text-xs uppercase tracking-widest text-muted font-medium mb-4">Material</h3>
                <p className="text-sm text-walnut">18K Gold Plated</p>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter bar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-walnut"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs uppercase tracking-widest text-walnut bg-transparent border border-hairline px-3 py-2 focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden mb-6 p-4 bg-ivory border border-hairline">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs uppercase tracking-widest text-muted font-medium">Category</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4 text-muted" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors ${!selectedCategory ? 'border-espresso text-espresso' : 'border-hairline text-muted'}`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors ${selectedCategory === cat.slug ? 'border-espresso text-espresso' : 'border-hairline text-muted'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.slug}`} className="block">
                    <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-muted uppercase tracking-wider">{product.category}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem(product);
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-espresso text-cream text-[10px] uppercase tracking-widest font-medium py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="font-serif text-sm text-espresso uppercase tracking-wider">{product.name}</h3>
                    <p className="text-sm text-walnut mt-1">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-walnut">No products found</p>
                <button
                  onClick={() => setSelectedCategory('')}
                  className="mt-4 text-sm text-gold hover:text-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
