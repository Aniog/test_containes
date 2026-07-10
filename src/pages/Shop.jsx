import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';

const Shop = () => {
  const { category } = useParams();
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState(category ? [category] : []);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products;

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, priceRange, sort]);

  const toggleCategory = (name) => {
    setSelectedCategories((prev) => (prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-10 md:py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">{category ? category : 'Shop All'}</h1>
            <p className="mt-2 text-sm text-ink-secondary">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileFiltersOpen((v) => !v)} className="md:hidden inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-ink">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <div className="relative">
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 appearance-none rounded-full border border-border bg-surface pl-4 pr-10 text-xs font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/40">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-secondary" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[240px_1fr]">
          <aside className={`md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Category</p>
              <ul className="mt-4 space-y-3 text-sm text-ink-secondary">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button onClick={() => toggleCategory(cat.name)} className={`flex w-full items-center justify-between ${selectedCategories.includes(cat.name) ? 'text-ink' : 'hover:text-ink'}`}>
                      <span>{cat.name}</span>
                      <span className={`h-4 w-4 rounded-full border ${selectedCategories.includes(cat.name) ? 'border-ink bg-ink' : 'border-border'}`} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink">Price</p>
                <div className="mt-4 flex items-center gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="h-9 w-full rounded-lg border border-border bg-background px-3 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                  <span className="text-xs text-ink-secondary">to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="h-9 w-full rounded-lg border border-border bg-background px-3 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>
              </div>
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-surface p-12 text-center">
                <p className="font-display text-xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-ink-secondary">Try adjusting your filters to discover more.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {filtered.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="h-64 overflow-hidden rounded-2xl bg-background md:h-80">
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="mt-3">
                      <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink">{product.name}</p>
                      <p className="mt-1 text-xs text-ink-secondary">{product.category}</p>
                      <p className="mt-1 text-sm font-medium text-ink">${product.price}</p>
                    </div>
                  </Link>
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
