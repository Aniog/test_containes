import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();
  
  const categoryFilter = searchParams.get('category');
  const allProducts = getProducts();

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];
    
    // Filter
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For mock data, just reverse to simulate 'newest'
        result.reverse();
        break;
      default: // featured
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    
    return result;
  }, [allProducts, categoryFilter, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="mb-12 border-b border-brand-charcoal/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">
            {categoryFilter || 'All Jewelry'}
          </h1>
          <p className="opacity-70 font-light max-w-lg">
            Discover our complete collection of demi-fine jewelry. Designed to be layered, lived in, and loved.
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <select 
            className="bg-transparent border border-brand-charcoal/20 rounded-none px-4 py-2 text-sm uppercase tracking-widest focus:outline-none focus:border-brand-charcoal w-full md:w-auto cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest Arrivals</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-48 lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h3 className="font-serif text-lg mb-6 border-b border-brand-charcoal/10 pb-2">Category</h3>
            <ul className="space-y-4 font-light">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      if (cat === 'All') {
                        setSearchParams({});
                      } else {
                        setSearchParams({ category: cat });
                      }
                    }}
                    className={`block hover:text-brand-gold transition-colors text-sm uppercase tracking-wider ${
                      (categoryFilter === cat) || (!categoryFilter && cat === 'All')
                        ? 'text-brand-gold font-medium'
                        : 'opacity-70'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-xl opacity-70">No products found in this category.</p>
              <button 
                onClick={() => setSearchParams({})}
                className="mt-6 border-b border-brand-charcoal pb-1 uppercase tracking-widest text-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredAndSortedProducts.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className="group block">
                  <div className="relative aspect-[4/5] bg-brand-taupe/20 mb-4 overflow-hidden">
                    <img 
                      alt={product.name}
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={product.imgSearch}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product, 1, product.variants[0]);
                        }}
                        className="w-full bg-brand-sand/90 backdrop-blur-sm text-brand-charcoal py-3 text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-sand transition-colors"
                      >
                        Quick Add - ${product.price}
                      </button>
                    </div>
                  </div>
                  <h3 className="font-serif uppercase tracking-wider text-sm mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                  <p className="opacity-70 text-sm">${product.price}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
