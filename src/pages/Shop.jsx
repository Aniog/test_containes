import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/lib/cartContext';
import JewelryImage from '@/components/JewelryImage';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const materials = ['all', 'gold', 'silver'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $70', min: 50, max: 70 },
  { label: '$70+', min: 70, max: Infinity },
];

export default function Shop() {
  const { addItem } = useCart();
  const [sort, setSort] = useState('featured');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [activePrice, setActivePrice] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== 'all') {
      list = list.filter((p) => p.material === activeMaterial);
    }
    const pr = priceRanges[activePrice];
    list = list.filter((p) => p.price >= pr.min && p.price < pr.max);

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, activeMaterial, activePrice, sort]);

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-stone mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`block font-sans text-sm capitalize transition-colors ${
                activeCategory === c
                  ? 'text-velmora-espresso font-medium'
                  : 'text-velmora-stone hover:text-velmora-cocoa'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-stone mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setActiveMaterial(m)}
              className={`block font-sans text-sm capitalize transition-colors ${
                activeMaterial === m
                  ? 'text-velmora-espresso font-medium'
                  : 'text-velmora-stone hover:text-velmora-cocoa'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-stone mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((pr, idx) => (
            <button
              key={pr.label}
              onClick={() => setActivePrice(idx)}
              className={`block font-sans text-sm transition-colors ${
                activePrice === idx
                  ? 'text-velmora-espresso font-medium'
                  : 'text-velmora-stone hover:text-velmora-cocoa'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      <div className="section-padding py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light mb-2">Shop All</h1>
          <p className="font-sans text-sm text-velmora-stone">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-stone"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-velmora-stone mr-1">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-xs bg-transparent border border-velmora-sand px-3 py-2 text-velmora-espresso focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Filters */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-velmora-stone mb-4">
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveMaterial('all');
                    setActivePrice(0);
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, idx) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden mb-3">
                        <JewelryImage
                          id={`shop-${product.id}`}
                          query={`[shop-title-${idx}]`}
                          ratio="3x4"
                          width={500}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, 1, 'gold');
                          }}
                          className="absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <Plus className="w-3.5 h-3.5 mr-1.5" />
                          Add to Cart
                        </button>
                      </div>
                      <h3 id={`shop-title-${idx}`} className="text-product mb-1">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-velmora-stone">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-velmora-cream z-[70] shadow-2xl md:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-sand">
              <h2 className="font-serif text-lg tracking-widest">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-velmora-espresso" />
              </button>
            </div>
            <div className="p-5">
              <FilterPanel />
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setActiveMaterial('all');
                  setActivePrice(0);
                }}
                className="btn-outline w-full mt-8"
              >
                Clear All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
