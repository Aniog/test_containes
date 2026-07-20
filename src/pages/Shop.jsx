import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [sort, setSort] = React.useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const [selectedPrice, setSelectedPrice] = React.useState(null);
  const [selectedMaterial, setSelectedMaterial] = React.useState(null);

  const filtered = useMemo(() => {
    let result = [...products];
    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (selectedPrice === 'under-50') result = result.filter((p) => p.price < 50);
    if (selectedPrice === '50-80') result = result.filter((p) => p.price >= 50 && p.price <= 80);
    if (selectedPrice === '80-120') result = result.filter((p) => p.price > 80 && p.price <= 120);
    if (selectedMaterial === 'gold') result = result.filter((p) => p.variants && p.variants.includes('gold'));
    if (selectedMaterial === 'silver') result = result.filter((p) => p.variants && p.variants.includes('silver'));
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [categoryParam, sort, selectedPrice, selectedMaterial]);

  const setCategory = (value) => {
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl text-ink-950">Shop</h1>
            <p className="text-sm text-ink-500 mt-1">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="md:hidden rounded-full"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  Sort by: {sort === 'featured' ? 'Featured' : sort === 'price-asc' ? 'Price: Low to High' : sort === 'price-desc' ? 'Price: High to Low' : 'Top Rated'}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setSort('featured')}>Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort('price-asc')}>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort('price-desc')}>Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort('rating')}>Top Rated</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className={`md:col-span-1 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block w-full text-left text-sm ${categoryParam === 'all' ? 'text-brand-600 font-medium' : 'text-ink-600 hover:text-ink-900'}`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block w-full text-left text-sm ${categoryParam === cat.id ? 'text-brand-600 font-medium' : 'text-ink-600 hover:text-ink-900'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline" />

              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-900 mb-3">Price</h3>
                <div className="space-y-2 text-sm">
                  <button
                    onClick={() => setSelectedPrice(selectedPrice === 'under-50' ? null : 'under-50')}
                    className={`block w-full text-left ${selectedPrice === 'under-50' ? 'text-brand-600 font-medium' : 'text-ink-600 hover:text-ink-900'}`}
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => setSelectedPrice(selectedPrice === '50-80' ? null : '50-80')}
                    className={`block w-full text-left ${selectedPrice === '50-80' ? 'text-brand-600 font-medium' : 'text-ink-600 hover:text-ink-900'}`}
                  >
                    $50 – $80
                  </button>
                  <button
                    onClick={() => setSelectedPrice(selectedPrice === '80-120' ? null : '80-120')}
                    className={`block w-full text-left ${selectedPrice === '80-120' ? 'text-brand-600 font-medium' : 'text-ink-600 hover:text-ink-900'}`}
                  >
                    $80 – $120
                  </button>
                </div>
              </div>

              <div className="hairline" />

              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-900 mb-3">Material</h3>
                <div className="space-y-2 text-sm">
                  <button
                    onClick={() => setSelectedMaterial(selectedMaterial === 'gold' ? null : 'gold')}
                    className={`block w-full text-left ${selectedMaterial === 'gold' ? 'text-brand-600 font-medium' : 'text-ink-600 hover:text-ink-900'}`}
                  >
                    18K Gold Plated
                  </button>
                  <button
                    onClick={() => setSelectedMaterial(selectedMaterial === 'silver' ? null : 'silver')}
                    className={`block w-full text-left ${selectedMaterial === 'silver' ? 'text-brand-600 font-medium' : 'text-ink-600 hover:text-ink-900'}`}
                  >
                    Silver Tone
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="py-20 text-center text-ink-500 text-sm">No pieces found in this collection.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
