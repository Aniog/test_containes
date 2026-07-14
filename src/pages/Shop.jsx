import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/shop/ProductCard';
import { products, categories } from '@/data/products';
import Button from '@/components/ui/button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const [sort, setSort] = React.useState('featured');
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (categoryParam) {
      list = list.filter((p) => p.category === categoryParam);
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [categoryParam, sort]);

  const activeCategoryLabel = categories.find((c) => c.id === categoryParam)?.name || 'All';

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-2">Collection</p>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategoryLabel === 'All' ? 'All Jewelry' : activeCategoryLabel}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden flex items-center gap-2 text-xs tracking-[0.18em] uppercase border border-border px-4 py-2"
            onClick={() => setFiltersOpen((prev) => !prev)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-border text-xs tracking-[0.18em] uppercase px-4 py-2 pr-8 focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none text-muted" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className={`md:block ${filtersOpen ? 'block' : 'hidden'}`}>
          <div className="md:sticky md:top-24 space-y-6">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Category</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setSearchParams({})}
                    className={`${!categoryParam ? 'text-charcoal font-medium' : 'text-muted'} hover:text-gold transition-colors`}
                  >
                    All
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSearchParams({ category: category.id })}
                      className={`${categoryParam === category.id ? 'text-charcoal font-medium' : 'text-muted'} hover:text-gold transition-colors`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Price</h3>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span>$30</span>
                <span className="flex-1 h-px bg-border" />
                <span>$120</span>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Material</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>18K Gold Plated</li>
                <li>Crystal</li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-xl text-charcoal">No pieces found</p>
              <p className="mt-2 text-sm text-muted">Try adjusting your filters or browse all collections.</p>
              <Button variant="outline" className="mt-6" onClick={() => setSearchParams({})}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
