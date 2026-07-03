import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products, categories } from '../data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryParam) {
      result = result.filter((p) => p.category.toLowerCase() === categoryParam.toLowerCase());
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [categoryParam, sort, priceRange]);

  const setCategory = (value) => {
    if (value) {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Collection</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl text-text">
              {categoryParam ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) : 'All Jewelry'}
            </h1>
          </div>
          <button type="button" className="md:hidden inline-flex items-center gap-2 btn-outline" onClick={() => setMobileFiltersOpen((prev) => !prev)}>
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
          <aside className={`md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="eyebrow mb-3">Category</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>
                    <button type="button" onClick={() => setCategory('')} className={`${!categoryParam ? 'text-accent font-medium' : 'hover:text-accent'} transition-colors`}>All</button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button type="button" onClick={() => setCategory(cat.id)} className={`${categoryParam === cat.id ? 'text-accent font-medium' : 'hover:text-accent'} transition-colors`}>{cat.name}</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow mb-3">Price</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={150}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="h-9 w-full rounded-md border border-border bg-white px-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                  <span className="text-text-secondary">—</span>
                  <input
                    type="number"
                    min={0}
                    max={150}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="h-9 w-full rounded-md border border-border bg-white px-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-9 appearance-none rounded-full border border-border bg-white pl-4 pr-10 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary pointer-events-none" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-12 text-center">
                <p className="text-sm text-text-secondary">No products match your filters.</p>
                <button type="button" onClick={() => { setCategory(''); setPriceRange([0, 150]); }} className="btn-outline mt-4">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
