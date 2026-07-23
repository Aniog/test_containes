import React, { useState } from 'react';

function ShopPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    { id: 1, name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', desc: 'Gold ear cuff with crystal accent' },
    { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'necklaces', desc: 'Multicolor floral crystal necklace' },
    { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'huggies', desc: 'Chunky gold dome huggie earrings' },
    { id: 4, name: 'AMBER LACE EARRINGS', price: 54, category: 'earrings', desc: 'Textured gold filigree drop earrings' },
    { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, category: 'sets', desc: 'Gift-boxed earring + necklace set' },
    { id: 6, name: 'CELESTIAL DROP NECKLACE', price: 72, category: 'necklaces', desc: 'Delicate chain with star charm' },
    { id: 7, name: 'PETITE PEARL HUGGIES', price: 45, category: 'huggies', desc: 'Small gold huggies with freshwater pearl' },
    { id: 8, name: 'BLOOMING LOTUS EARRINGS', price: 58, category: 'earrings', desc: 'Lotus flower drop earrings in gold' }
  ];

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (priceRange === 'under50' && product.price >= 50) return false;
    if (priceRange === '50to75' && (product.price < 50 || product.price > 75)) return false;
    if (priceRange === 'over75' && product.price <= 75) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div style={{ backgroundColor: '#fdf9f3', minHeight: '100vh', fontFamily: 'Cormorant Garamond, serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
        
        {/* Filter Sidebar */}
        <div style={{ paddingTop: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '300', letterSpacing: '0.1em', marginBottom: '2rem', color: '#2d2824' }}>FILTERS</h3>
          
          {/* Category Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '1rem', color: '#2d2824' }}>CATEGORY</h4>
            {categories.map((cat) => (
              <div key={cat} style={{ marginBottom: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '0.95rem', color: '#8a7b6b' }}>
                  <input 
                    type="radio" 
                    name="category" 
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              </div>
            ))}
          </div>

          {/* Price Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '1rem', color: '#2d2824' }}>PRICE</h4>
            {[
              { value: 'all', label: 'All' },
              { value: 'under50', label: 'Under $50' },
              { value: '50to75', label: '$50 - $75' },
              { value: 'over75', label: 'Over $75' }
            ].map((range) => (
              <div key={range.value} style={{ marginBottom: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '0.95rem', color: '#8a7b6b' }}>
                  <input 
                    type="radio" 
                    name="price" 
                    checked={priceRange === range.value}
                    onChange={() => setPriceRange(range.value)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div>
          {/* Header with Sort */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingTop: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '300', letterSpacing: '0.05em', color: '#2d2824' }}>SHOP ALL</h1>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '0.5rem 1rem', border: '1px solid #e8e0d4', backgroundColor: '#fff', fontSize: '0.9rem', cursor: 'pointer' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Products */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
            {sortedProducts.map((product) => (
              <div key={product.id} style={{ 
                backgroundColor: '#fff', 
                padding: '1.5rem', 
                borderRadius: '8px', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}>
                <div style={{ 
                  height: '300px', 
                  backgroundColor: '#e8e0d4', 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#8a7b6b'
                }}>
                  Product Image
                </div>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  letterSpacing: '0.15em', 
                  marginBottom: '0.5rem',
                  color: '#2d2824'
                }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#8a7b6b', marginBottom: '0.5rem' }}>
                  {product.desc}
                </p>
                <p style={{ fontSize: '1.1rem', color: '#c9a96e', fontWeight: '500' }}>
                  ${product.price}
                </p>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#8a7b6b' }}>
              <p style={{ fontSize: '1.2rem' }}>No products found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
