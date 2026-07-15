import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(searchParams.get('category') ? [searchParams.get('category')] : []);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    // Sort
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [selectedCategories, priceRange, sortBy, searchQuery]);

  const toggleCategory = (catId) => {
    setSelectedCategories(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div><p className="text-xs tracking-[0.15em] uppercase text-[#6B665E]">Discover</p><h1 className="serif text-5xl">The Collection</h1></div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input w-auto text-sm py-2">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">A–Z</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="mb-8">
              <p className="filter-label">Search</p>
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="input" />
            </div>

            <div className="mb-8">
              <p className="filter-label">Category</p>
              {categories.map(cat => (
                <label key={cat.id} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                  <input type="checkbox" checked={selectedCategories.includes(cat.id)} onChange={() => toggleCategory(cat.id)} className="accent-[#B89778]" />
                  {cat.label}
                </label>
              ))}
            </div>

            <div>
              <p className="filter-label">Price Range</p>
              <input type="range" min="0" max="120" step="5" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full accent-[#B89778]" />
              <div className="flex justify-between text-xs text-[#6B665E] mt-1"><span>${priceRange[0]}</span><span>${priceRange[1]}</span></div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <p className="text-sm text-[#6B665E] mb-6">{filteredProducts.length} products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE6]">
                      <img src={product.images.primary} alt={product.name} className="primary absolute inset-0 w-full h-full object-cover" />
                      <img src={product.images.secondary} alt={product.name} className="secondary absolute inset-0 w-full h-full object-cover opacity-0" />
                    </div>
                  </Link>
                  <div className="p-5 flex justify-between items-end">
                    <div>
                      <Link to={`/product/${product.id}`}><p className="product-name text-sm mb-1">{product.name}</p></Link>
                      <p className="text-sm text-[#6B665E]">${product.price}</p>
                    </div>
                    <button onClick={() => addToCart(product)} className="text-xs underline">Add</button>
                  </div>
                </div>
              ))}
            </div>
            {filteredProducts.length === 0 && <p className="text-[#6B665E]">No products match your filters.</p>}
          </div>
        </div>
      </div>
      <CartDrawer />
    </div>
  );
};

export default Shop;
