import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'all') {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  return (
    <div className="pt-20 md:pt-24">
      <section className="container-padding py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-3xl md:text-4xl mb-2">Shop All</h1>
          <p className="text-muted-foreground text-sm">{filteredProducts.length} products</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center gap-2 mb-4 text-sm tracking-wider uppercase"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Filter sidebar */}
          <aside
            className={`md:w-64 flex-shrink-0 ${
              isFilterOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="space-y-6">
              {/* Category filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm ${
                      selectedCategory === 'all' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm ${
                        selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-3">Material</h3>
                <div className="space-y-2">
                  {['all', 'gold', 'silver'].map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block text-sm capitalize ${
                        selectedMaterial === material ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {material === 'all' ? 'All' : material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: 'Over $100' },
                  ].map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block text-sm ${
                        priceRange === range.value ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-muted-foreground/30 px-4 py-2 pr-8 text-sm focus:outline-none focus:border-accent cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl mb-2">No products found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
