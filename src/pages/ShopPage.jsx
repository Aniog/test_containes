import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wider uppercase mb-4">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h1>
          <div className="hairline-divider w-24 mx-auto mb-6" />
          <p className="text-velmora-charcoal/60 text-sm tracking-wide">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="mb-8">
              <h3 className="font-serif text-sm uppercase tracking-wider mb-4 text-velmora-gold">
                Category
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSearchParams(cat === 'All' ? {} : { category: cat });
                    }}
                    className={`block text-left text-sm py-1 transition-colors ${
                      selectedCategory === cat
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-charcoal/60 hover:text-velmora-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 border border-velmora-gold/30 text-sm uppercase tracking-wider"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-velmora-gold/30 text-sm bg-transparent ml-auto"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.slug}`} className="block">
                    <div className="relative overflow-hidden bg-velmora-beige aspect-square mb-4">
                      <div className="absolute inset-0 jewelry-placeholder">
                        <span className="text-velmora-gold/30 text-6xl">♢</span>
                      </div>
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-gold text-white px-6 py-2 text-xs uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        Quick Add
                      </button>
                    </div>
                    <h3 className="product-name text-sm mb-2 text-velmora-black">
                      {product.name}
                    </h3>
                    <p className="font-serif text-lg text-velmora-black">
                      ${product.price}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
