import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === categoryParam.toLowerCase());
    }

    if (priceRange === 'under50') result = result.filter((p) => p.price < 50);
    if (priceRange === '50to80') result = result.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === 'over80') result = result.filter((p) => p.price > 80);

    if (material === 'gold') result = result.filter((p) => p.variants.includes('gold'));
    if (material === 'silver') result = result.filter((p) => p.variants.includes('silver'));

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [categoryParam, sort, priceRange, material]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const FilterPill = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-medium uppercase tracking-widest border transition-colors ${
        active ? 'border-brand-accent bg-brand-accent text-white' : 'border-brand-line text-brand-ink hover:border-brand-accent'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-ink capitalize">
          {categoryParam === 'all' ? 'All Jewelry' : categoryParam}
        </h1>
        <p className="mt-2 text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Category</h3>
            <div className="space-y-2">
              {['all', ...categories.map((c) => c.id)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`block text-sm capitalize transition-colors ${
                    categoryParam === cat ? 'text-brand-accent font-medium' : 'text-brand-muted hover:text-brand-ink'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Price</h3>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'All Prices' },
                { value: 'under50', label: 'Under $50' },
                { value: '50to80', label: '$50 – $80' },
                { value: 'over80', label: 'Over $80' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPriceRange(opt.value)}
                  className={`block text-sm transition-colors ${
                    priceRange === opt.value ? 'text-brand-accent font-medium' : 'text-brand-muted hover:text-brand-ink'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Material</h3>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'All Materials' },
                { value: 'gold', label: 'Gold Tone' },
                { value: 'silver', label: 'Silver Tone' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setMaterial(opt.value)}
                  className={`block text-sm transition-colors ${
                    material === opt.value ? 'text-brand-accent font-medium' : 'text-brand-muted hover:text-brand-ink'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex md:hidden">
              <Button
                variant="outline"
                className="border-brand-line text-brand-ink hover:bg-brand-warm rounded-none text-xs uppercase tracking-widest"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-brand-line text-brand-ink hover:bg-brand-warm rounded-none text-xs uppercase tracking-widest">
                    Sort: {sort === 'featured' ? 'Featured' : sort === 'price-asc' ? 'Price: Low to High' : sort === 'price-desc' ? 'Price: High to Low' : 'Top Rated'}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-none border-brand-line">
                  <DropdownMenuItem onClick={() => setSort('featured')} className="text-xs uppercase tracking-widest">Featured</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSort('price-asc')} className="text-xs uppercase tracking-widest">Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSort('price-desc')} className="text-xs uppercase tracking-widest">Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSort('rating')} className="text-xs uppercase tracking-widest">Top Rated</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-xl text-brand-ink">No pieces found</p>
              <p className="mt-2 text-sm text-brand-muted">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onQuickAdd={(prod) => { addItem(prod, prod.variants[0]); setCartOpen(true); }} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-brand-bg shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wide">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-ink">Close</button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {['all', ...categories.map((c) => c.id)].map((cat) => (
                    <FilterPill key={cat} active={categoryParam === cat} onClick={() => setCategory(cat)}>
                      {cat === 'all' ? 'All' : cat}
                    </FilterPill>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Price</h4>
                <div className="flex flex-wrap gap-2">
                  {['all', 'under50', '50to80', 'over80'].map((val) => (
                    <FilterPill key={val} active={priceRange === val} onClick={() => setPriceRange(val)}>
                      {val === 'all' ? 'All' : val === 'under50' ? 'Under $50' : val === '50to80' ? '$50–$80' : 'Over $80'}
                    </FilterPill>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Material</h4>
                <div className="flex flex-wrap gap-2">
                  {['all', 'gold', 'silver'].map((val) => (
                    <FilterPill key={val} active={material === val} onClick={() => setMaterial(val)}>
                      {val === 'all' ? 'All' : val === 'gold' ? 'Gold' : 'Silver'}
                    </FilterPill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
