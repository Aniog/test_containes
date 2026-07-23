import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-sm tracking-widest uppercase text-stone-900 mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'all'}
              onChange={() => setSelectedCategory('all')}
              className="accent-amber-700"
            />
            <span className="text-sm text-stone-700">All</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="accent-amber-700"
              />
              <span className="text-sm text-stone-700">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-sm tracking-widest uppercase text-stone-900 mb-4">Material</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === 'all'}
              onChange={() => setSelectedMaterial('all')}
              className="accent-amber-700"
            />
            <span className="text-sm text-stone-700">All</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === 'gold'}
              onChange={() => setSelectedMaterial('gold')}
              className="accent-amber-700"
            />
            <span className="text-sm text-stone-700">18K Gold Plated</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === 'silver'}
              onChange={() => setSelectedMaterial('silver')}
              className="accent-amber-700"
            />
            <span className="text-sm text-stone-700">Sterling Silver</span>
          </label>
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-sm tracking-widest uppercase text-stone-900 mb-4">Price</h3>
        <div className="space-y-3">
          <div className="flex gap-4">
            <div>
              <label className="text-xs text-stone-500">Min</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full mt-1 px-3 py-2 border border-stone-200 text-sm outline-none focus:border-amber-700"
                min={0}
              />
            </div>
            <div>
              <label className="text-xs text-stone-500">Max</label>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full mt-1 px-3 py-2 border border-stone-200 text-sm outline-none focus:border-amber-700"
                min={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-wide py-8 md:py-12">
        <h1 className="serif-heading text-4xl md:text-5xl text-stone-900 mb-2">Shop All</h1>
        <p className="text-stone-500">{filteredProducts.length} pieces</p>
      </div>

      <div className="container-wide pb-16">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 text-sm text-stone-700 mb-6"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-stone-50 p-6 overflow-y-auto slide-up">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="serif-heading text-2xl">Filters</h2>
                  <button onClick={() => setSidebarOpen(false)} className="p-2">Close</button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-stone-200 px-4 py-2 pr-8 text-sm text-stone-700 outline-none focus:border-amber-700 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl text-stone-500 mb-2">No pieces found</p>
                <p className="text-sm text-stone-400">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
