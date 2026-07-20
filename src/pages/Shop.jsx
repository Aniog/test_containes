import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'all') {
      list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (priceRange === 'under50') list = list.filter((p) => p.price < 50);
    if (priceRange === '50to80') list = list.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === 'over80') list = list.filter((p) => p.price > 80);

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, sort, priceRange]);

  const updateCategory = (value) => {
    setCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const FilterSection = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-wide-custom text-[#1c1917]">Category</h3>
        <div className="mt-3 space-y-2">
          {['all', ...categories.map((c) => c.id)].map((c) => (
            <button
              key={c}
              onClick={() => updateCategory(c)}
              className={`block w-full text-left text-sm capitalize ${
                category === c ? 'text-[#1c1917] font-medium' : 'text-[#5c5650] hover:text-[#1c1917]'
              }`}
            >
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-wide-custom text-[#1c1917]">Price</h3>
        <div className="mt-3 space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block w-full text-left text-sm ${
                priceRange === option.value ? 'text-[#1c1917] font-medium' : 'text-[#5c5650] hover:text-[#1c1917]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f6f4f0]">
      <Nav />
      <CartDrawer />
      <main className="section-container py-10 md:py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-serif text-3xl text-[#1c1917] md:text-4xl">Shop</h1>
            <p className="mt-2 text-sm text-[#5c5650]">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 rounded-full border border-[#e7e3dc] bg-white px-4 text-xs uppercase tracking-wide-custom text-[#1c1917]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <Button variant="outline" className="md:hidden" onClick={() => setMobileFiltersOpen(true)}>
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <aside className="hidden md:block">
            <FilterSection />
          </aside>

          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-[#1c1917]">No pieces match your filters.</p>
                <button onClick={() => { updateCategory('all'); setPriceRange('all'); }} className="mt-4 text-sm text-[#5c5650] underline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {filtered.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="aspect-[3x4] overflow-hidden rounded-lg bg-[#f1efe9]">
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="mt-3">
                      <p className="font-serif text-sm uppercase tracking-wide-custom text-[#1c1917]">{product.name}</p>
                      <p className="mt-1 text-sm text-[#5c5650]">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
