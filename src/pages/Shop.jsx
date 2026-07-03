import React, { useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import { useCart } from '@/context/CartContext';
import { Star, SlidersHorizontal, X } from 'lucide-react';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['All', '18K Gold Plated', 'Sterling Silver'];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-surface-muted overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.image_hover_url || product.image_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, product.variants?.[0] || 'Gold');
        }}
        className={`absolute bottom-4 left-4 right-4 bg-white text-foreground py-3 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-accent hover:text-white ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        Add to Cart
      </button>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm tracking-product uppercase">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-star text-star" />
          <span className="text-xs text-muted">{product.rating}</span>
        </div>
        <p className="text-sm mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    fetchProducts()
      .then((rows) => {
        setProducts(rows.map((r) => r.data || r));
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'All') {
      list = list.filter((p) => p.material === selectedMaterial);
    }
    if (priceRange !== 'All') {
      if (priceRange === 'under50') list = list.filter((p) => p.price < 50);
      if (priceRange === '50to80') list = list.filter((p) => p.price >= 50 && p.price <= 80);
      if (priceRange === 'over80') list = list.filter((p) => p.price > 80);
    }
    if (sort === 'priceAsc') list.sort((a, b) => a.price - b.price);
    if (sort === 'priceDesc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, selectedCategory, selectedMaterial, priceRange, sort]);

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-28 pb-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light mb-2">Shop All Jewelry</h1>
          <p className="text-muted text-sm">{filtered.length} pieces curated for you</p>
        </div>

        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase hover:text-accent transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted hidden md:inline">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs tracking-wide bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent"
            >
              <option value="featured">Featured</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {filtersOpen && (
          <div className="mb-8 p-6 bg-white border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setFiltersOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-medium tracking-[0.12em] uppercase mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setSearchParams(cat === 'All' ? {} : { category: cat }); }}
                      className={`px-3 py-1.5 text-xs tracking-wide border transition-colors ${selectedCategory === cat ? 'bg-accent text-white border-accent' : 'border-border hover:border-foreground'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.12em] uppercase mb-3">Material</p>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`px-3 py-1.5 text-xs tracking-wide border transition-colors ${selectedMaterial === mat ? 'bg-accent text-white border-accent' : 'border-border hover:border-foreground'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.12em] uppercase mb-3">Price</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'All', label: 'All' },
                    { key: 'under50', label: 'Under $50' },
                    { key: '50to80', label: '$50 - $80' },
                    { key: 'over80', label: 'Over $80' },
                  ].map((p) => (
                    <button
                      key={p.key}
                      onClick={() => setPriceRange(p.key)}
                      className={`px-3 py-1.5 text-xs tracking-wide border transition-colors ${priceRange === p.key ? 'bg-accent text-white border-accent' : 'border-border hover:border-foreground'}`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {status === 'loading' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-surface-muted" />
                <div className="h-4 bg-surface-muted mt-4 w-2/3 mx-auto" />
                <div className="h-3 bg-surface-muted mt-2 w-1/3 mx-auto" />
              </div>
            ))}
          </div>
        )}

        {status === 'ready' && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-muted">No products match your filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedMaterial('All'); setPriceRange('All'); setSearchParams({}); }}
              className="mt-4 text-xs tracking-[0.12em] uppercase border-b border-accent pb-1 text-accent hover:text-accent-hover transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {status === 'ready' && filtered.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id || product.slug} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
