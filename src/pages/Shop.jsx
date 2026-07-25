import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductCard from '@/components/shop/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory);
    }

    if (priceRange === 'under-50') result = result.filter((p) => p.price < 50);
    if (priceRange === '50-80') result = result.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === 'over-80') result = result.filter((p) => p.price > 80);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, priceRange, sort]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <CartDrawer />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-subtitle mb-2">Collection</p>
            <h1 className="section-title">Shop All</h1>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden text-xs uppercase tracking-widest text-brand-gold border border-brand-gold rounded-full px-4 py-2"
            >
              {mobileFiltersOpen ? 'Hide Filters' : 'Filters'}
            </button>
          </div>

          <div className="flex gap-10">
            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block md:w-64 flex-shrink-0`}>
              <FilterSidebar
                categories={categories.map((c) => c.id)}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                sort={sort}
                onSortChange={setSort}
              />
            </div>

            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="text-brand-muted mb-4">No pieces match your filters.</p>
                  <button onClick={() => { setSelectedCategory('all'); setPriceRange('all'); }} className="btn-outline">
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
