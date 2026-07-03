import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductGrid from '../components/shop/ProductGrid';
import ShopFilters from '../components/shop/ShopFilters';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products.slice();

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, priceRange, sort]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <main>
      <div className="section-container py-10 md:py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-ink">Shop</h1>
            <p className="mt-2 text-sm text-ink-secondary">{filtered.length} products</p>
          </div>
          <button
            type="button"
            onClick={() => setShowFilters((prev) => !prev)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-ink"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <ShopFilters
              categories={['All', ...categories.map((c) => c.name)]}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              sort={sort}
              onSortChange={setSort}
            />
          </div>

          <ProductGrid products={filtered} />
        </div>
      </div>
    </main>
  );
};

export default Shop;
