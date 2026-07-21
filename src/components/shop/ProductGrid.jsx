import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products, categories } from '@/data/products';

const ProductGrid = ({ selectedCategory }) => {
  const [sort, setSort] = useState('featured');
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, toggleDrawer } = useCart();

  const filtered = useMemo(() => {
    let list = products;
    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (sort === 'price-asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [selectedCategory, sort]);

  const handleAdd = (product, e) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0],
    });
    toggleDrawer();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <p className="text-sm text-muted">{filtered.length} product{filtered.length === 1 ? '' : 's'}</p>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-10 rounded-full border border-border bg-surface px-4 text-sm text-ink focus:outline-none focus:border-accent"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {filtered.map((product) => {
          const isHovered = hoveredId === product.id;
          return (
            <div
              key={product.id}
              className="group rounded-2xl bg-surface border border-border overflow-hidden"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-background">
                  <img
                    src={isHovered ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <button
                      onClick={(e) => handleAdd(product, e)}
                      className="w-full rounded-full bg-ink py-2 text-xs font-semibold text-surface hover:bg-accent"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <p className="product-name text-xs md:text-sm">{product.name}</p>
                  <p className="mt-1 text-sm font-medium">${product.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FilterSidebar = ({ selectedCategory, onSelectCategory }) => {
  return (
    <aside className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">Category</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>
            <button
              onClick={() => onSelectCategory(null)}
              className={`hover:text-ink ${!selectedCategory ? 'text-ink font-medium' : ''}`}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onSelectCategory(category)}
                className={`hover:text-ink ${selectedCategory === category ? 'text-ink font-medium' : ''}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">Price</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {['Under $40', '$40–$70', '$70–$100', '$100+'].map((range) => (
            <li key={range}>
              <button className="hover:text-ink">{range}</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">Material</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {['18K Gold Plated', 'Silver Tone', 'Crystal', 'Hypoallergenic'].map((item) => (
            <li key={item}>
              <button className="hover:text-ink">{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export { ProductGrid, FilterSidebar };
