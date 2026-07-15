import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  return React.createElement('div', { className: 'pt-20 pb-20' },
    React.createElement('div', { className: 'max-w-[1400px] mx-auto px-6' },
      React.createElement('div', { className: 'pt-8 pb-10' },
        React.createElement('div', { className: 'uppercase tracking-[0.2em] text-sm text-[#8B7355]' }, 'Discover'),
        React.createElement('h1', { className: 'font-serif text-5xl mt-2' }, 'The Collection')
      ),
      React.createElement('div', { className: 'flex flex-col lg:flex-row gap-10' },
        React.createElement('aside', { className: 'lg:w-64 flex-shrink-0' },
          React.createElement('div', { className: 'sticky top-24 space-y-8' },
            React.createElement('div', null,
              React.createElement('div', { className: 'uppercase tracking-[0.1em] text-xs mb-4' }, 'Category'),
              React.createElement('div', { className: 'space-y-2' },
                categories.map(cat => React.createElement('label', { key: cat, className: 'flex items-center gap-2 cursor-pointer text-sm' },
                  React.createElement('input', { type: 'checkbox', checked: selectedCategories.includes(cat), onChange: () => toggleCategory(cat), className: 'accent-[#8B7355]' }),
                  cat
                ))
              )
            ),
            React.createElement('div', null,
              React.createElement('div', { className: 'uppercase tracking-[0.1em] text-xs mb-4' }, 'Material'),
              React.createElement('div', { className: 'space-y-2' },
                materials.map(mat => React.createElement('label', { key: mat, className: 'flex items-center gap-2 cursor-pointer text-sm' },
                  React.createElement('input', { type: 'checkbox', checked: selectedMaterials.includes(mat), onChange: () => toggleMaterial(mat), className: 'accent-[#8B7355]' }),
                  mat
                ))
              )
            ),
            React.createElement('div', null,
              React.createElement('div', { className: 'uppercase tracking-[0.1em] text-xs mb-4' }, 'Price Range'),
              React.createElement('div', { className: 'text-sm text-[#6B6560]' }, '$' + priceRange[0] + ' — $' + priceRange[1]),
              React.createElement('input', { type: 'range', min: '0', max: '120', value: priceRange[1], onChange: (e) => setPriceRange([priceRange[0], parseInt(e.target.value)]), className: 'w-full accent-[#8B7355] mt-2' })
            ),
            React.createElement('button', { onClick: () => { setSelectedCategories([]); setSelectedMaterials([]); setPriceRange([0, 120]); setSortBy('featured'); }, className: 'text-xs uppercase tracking-widest underline' }, 'Clear All Filters')
          )
        ),
        React.createElement('div', { className: 'flex-1' },
          React.createElement('div', { className: 'flex justify-between items-center mb-8' },
            React.createElement('div', { className: 'text-sm text-[#6B6560]' }, filteredProducts.length + ' products'),
            React.createElement('select', { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: 'text-sm border border-[#E5E0D8] px-4 py-2 bg-white' },
              React.createElement('option', { value: 'featured' }, 'Sort: Featured'),
              React.createElement('option', { value: 'price-low' }, 'Price: Low to High'),
              React.createElement('option', { value: 'price-high' }, 'Price: High to Low'),
              React.createElement('option', { value: 'name' }, 'Name: A-Z')
            )
          ),
          React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' },
            filteredProducts.map(product => React.createElement('div', { key: product.id, className: 'product-card group' },
              React.createElement(Link, { to: '/product/' + product.id, className: 'block' },
                React.createElement('div', { className: 'img-container aspect-[4/3] relative' },
                  React.createElement('img', { src: product.images[0], alt: product.name, className: 'absolute inset-0 w-full h-full object-cover' }),
                  React.createElement('img', { src: product.images[1], alt: product.name, className: 'absolute inset-0 w-full h-full object-cover opacity-0' })
                )
              ),
              React.createElement('div', { className: 'p-5' },
                React.createElement(Link, { to: '/product/' + product.id },
                  React.createElement('div', { className: 'product-name text-sm tracking-wider mb-1' }, product.name)
                ),
                React.createElement('div', { className: 'flex justify-between items-center mt-2' },
                  React.createElement('span', { className: 'text-[#6B6560]' }, '$' + product.price),
                  React.createElement('button', { onClick: (e) => { e.preventDefault(); addToCart(product, product.variants[0]); }, className: 'text-xs uppercase tracking-widest px-4 py-1.5 border border-[#2C2825] hover:bg-[#2C2825] hover:text-white transition-all' }, 'Add to Cart')
                )
              )
            ))
          ),
          filteredProducts.length === 0 && React.createElement('div', { className: 'text-center py-20 text-[#6B6560]' }, 'No products match your filters.')
        )
      )
    )
  );
};

export default Shop;
