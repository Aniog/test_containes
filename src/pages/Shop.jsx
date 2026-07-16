import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : []);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['earrings', 'necklaces', 'huggies', 'sets'];
  const materials = ['gold', 'silver'];

  const toggleFilter = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter(v => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  let filteredProducts = products.filter(p => {
    const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return catMatch && matMatch && priceMatch;
  });

  // Sort
  if (sortBy === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] text-accent mb-1">DISCOVER</p>
          <h1 className="font-serif text-4xl">All Jewelry</h1>
        </div>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-border px-4 py-2 text-sm bg-white"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">A - Z</option>
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <p className="filter-label mb-3">Category</p>
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-2 mb-2 cursor-pointer text-sm capitalize">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                    className="accent-accent"
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="mb-8">
              <p className="filter-label mb-3">Material</p>
              {materials.map(mat => (
                <label key={mat} className="flex items-center gap-2 mb-2 cursor-pointer text-sm capitalize">
                  <input 
                    type="checkbox" 
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleFilter(mat, selectedMaterials, setSelectedMaterials)}
                    className="accent-accent"
                  />
                  {mat}
                </label>
              ))}
            </div>

            <div>
              <p className="filter-label mb-3">Price Range</p>
              <div className="flex items-center gap-3 text-sm">
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-20 border border-border px-3 py-1.5"
                />
                <span>—</span>
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-20 border border-border px-3 py-1.5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-6">{filteredProducts.length} products</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center py-12 text-muted-foreground">No products match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
