import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Vivid Aura Jewels', price: 42, category: 'Earrings', material: 'Gold' },
  { id: 2, name: 'Majestic Flora Nectar', price: 68, category: 'Necklaces', material: 'Gold' },
  { id: 3, name: 'Golden Sphere Huggies', price: 38, category: 'Huggies', material: 'Gold' },
  { id: 4, name: 'Amber Lace Earrings', price: 54, category: 'Earrings', material: 'Gold' },
  { id: 5, name: 'Royal Heirloom Set', price: 95, category: 'Necklaces', material: 'Gold' },
  { id: 6, name: 'Silver Moon Earrings', price: 45, category: 'Earrings', material: 'Silver' },
  { id: 7, name: 'Pearl Drop Necklace', price: 72, category: 'Necklaces', material: 'Gold' },
  { id: 8, name: 'Mini Huggie Hoops', price: 32, category: 'Huggies', material: 'Gold' }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => selectedMaterial === 'All' || product.material === selectedMaterial)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 96px' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h1 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '16px' }}>Shop All</h1>
        <div style={{ width: '96px', height: '2px', backgroundColor: '#d4a574', margin: '0 auto' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
        {/* Sidebar Filters */}
        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Category</h3>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 0',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: selectedCategory === category ? '#d4a574' : '#4a4a4a',
                  fontWeight: selectedCategory === category ? '500' : 'normal'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Material</h3>
            {materials.map((material) => (
              <button
                key={material}
                onClick={() => setSelectedMaterial(material)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 0',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: selectedMaterial === material ? '#d4a574' : '#4a4a4a',
                  fontWeight: selectedMaterial === material ? '500' : 'normal'
                }}
              >
                {material}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div>
          {/* Sort Dropdown */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '8px 16px', fontSize: '14px', border: '1px solid #e5e5e5' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Products */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '32px' }}>
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ backgroundColor: '#f5f5f5', height: '350px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#999', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.name}</span>
                  </div>
                  <h3 style={{ fontFamily: 'serif', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{product.name}</h3>
                  <p style={{ color: '#1a1a1a', fontWeight: '500' }}>${product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Product Count */}
          <div style={{ marginTop: '48px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
