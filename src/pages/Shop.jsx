import React, { useState, useEffect, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    material: '',
  });
  const [sortBy, setSortBy] = useState('featured');

  // Mock products data
  const products = [
    { id: 1, name: 'VIVID AURA JEWELS', price: 42, category: 'Earrings', material: 'Gold', desc: 'Gold ear cuff with crystal accent' },
    { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'Necklaces', material: 'Gold', desc: 'Multicolor floral crystal necklace' },
    { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'Huggies', material: 'Gold', desc: 'Chunky gold dome huggie earrings' },
    { id: 4, name: 'AMBER LACE EARRINGS', price: 54, category: 'Earrings', material: 'Gold', desc: 'Textured gold filigree drop earrings' },
    { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, category: 'Sets', material: 'Gold', desc: 'Gift-boxed earring + necklace set' }
  ];

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let result = [...products];

    // Apply filters
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters.material) {
      result = result.filter(p => p.material === filters.material);
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [products, filters, sortBy]);

  useEffect(() => {
    setFilteredProducts(processedProducts);
  }, [processedProducts]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      material: '',
    });
  };

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];
  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: '100-1000' },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            color: '#1a1a1a',
            fontWeight: 400,
            marginBottom: '1rem',
            letterSpacing: '0.02em'
          }}>
            Shop All
          </h1>
          <p style={{ color: '#6b6b6b', fontSize: '1.0625rem' }}>
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Toolbar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #e8e0d0'
        }}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#1a1a1a',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            <SlidersHorizontal size={18} />
            <span>Filter</span>
          </button>

          <p style={{ fontSize: '0.875rem', color: '#6b6b6b' }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              fontSize: '0.875rem',
              padding: '0.5rem 1rem',
              border: '1px solid #e8e0d0',
              backgroundColor: 'transparent',
              color: '#1a1a1a',
              fontFamily: "'Inter', sans-serif",
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Filter Sidebar - Mobile Overlay */}
          {isFilterOpen && (
            <div style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              backgroundColor: 'white',
              padding: '2rem',
              overflowY: 'auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem' }}>Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={24} />
                </button>
              </div>

              {/* Active Filters */}
              {(filters.category || filters.material || filters.priceRange) && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 500 }}>Active Filters</h4>
                    <button
                      onClick={clearFilters}
                      style={{ fontSize: '0.75rem', color: '#c9a96e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Clear All
                    </button>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {filters.category && (
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#f5f0e8', padding: '0.25rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        {filters.category}
                        <X
                          size={14}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleFilterChange('category', filters.category)}
                        />
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Filter Options */}
              {[
                { title: 'Category', options: categories, filterType: 'category' },
                { title: 'Material', options: materials, filterType: 'material' },
                { title: 'Price', options: priceRanges.map(r => r.label), values: priceRanges.map(r => r.value), filterType: 'priceRange' }
              ].map((section, i) => (
                <div key={i} style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>{section.title}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {section.options.map((option, j) => (
                      <label key={j} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={filters[section.filterType] === (section.values ? section.values[j] : option)}
                          onChange={() => handleFilterChange(section.filterType, section.values ? section.values[j] : option)}
                          style={{ marginRight: '0.75rem', accentColor: '#c9a96e' }}
                        />
                        <span style={{ fontSize: '0.875rem' }}>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={() => setIsFilterOpen(false)}
                style={{
                  width: '100%',
                  backgroundColor: '#c9a96e',
                  color: 'white',
                  padding: '0.875rem 2rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  marginTop: '2rem'
                }}
              >
                Apply Filters
              </button>
            </div>
          )}

          {/* Filter Sidebar - Desktop */}
          <div style={{
            display: 'none',
            md: { display: 'block' },
            width: '250px',
            flexShrink: 0
          }}>
            <div style={{ position: 'sticky', top: '6rem' }}>
              {/* Filter content - same as mobile but always visible on desktop */}
              {[
                { title: 'Category', options: categories, filterType: 'category' },
                { title: 'Material', options: materials, filterType: 'material' },
                { title: 'Price', options: priceRanges.map(r => r.label), values: priceRanges.map(r => r.value), filterType: 'priceRange' }
              ].map((section, i) => (
                <div key={i} style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>{section.title}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {section.options.map((option, j) => (
                      <label key={j} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={filters[section.filterType] === (section.values ? section.values[j] : option)}
                          onChange={() => handleFilterChange(section.filterType, section.values ? section.values[j] : option)}
                          style={{ marginRight: '0.75rem', accentColor: '#c9a96e' }}
                        />
                        <span style={{ fontSize: '0.875rem' }}>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div style={{ flex: 1 }}>
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <p style={{ fontSize: '1.25rem', color: '#6b6b6b', marginBottom: '1rem' }}>No products found</p>
                <button
                  onClick={clearFilters}
                  style={{
                    color: '#c9a96e',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
              }}>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #e8e0d0',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      backgroundColor: '#f5f0e8',
                      height: '350px',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9a9a9a',
                      fontSize: '0.875rem'
                    }}>
                      Product Image
                    </div>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#1a1a1a',
                      marginBottom: '0.5rem'
                    }}>
                      {product.name}
                    </h3>
                    <p style={{ color: '#6b6b6b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                      {product.desc}
                    </p>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.25rem',
                      color: '#c9a96e',
                      fontWeight: 600
                    }}>
                      ${product.price}
                    </p>
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
