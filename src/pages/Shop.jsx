import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);
  const [selectedCats, setSelectedCats] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sort, setSort] = useState('featured');

  const toggleCat = (catId) => {
    setSelectedCats((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCats.length > 0) {
      list = list.filter((p) => selectedCats.includes(p.category));
    }
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedMaterial !== 'all') {
      list = list.filter((p) => p.material === selectedMaterial);
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCats, priceRange, selectedMaterial, sort]);

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium mb-4">Category</h4>
        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedCats.includes(cat.id)
                    ? 'border-espresso bg-espresso'
                    : 'border-divider group-hover:border-warm-gray'
                }`}
              >
                {selectedCats.includes(cat.id) && (
                  <span className="w-1.5 h-1.5 bg-white" />
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCats.includes(cat.id)}
                onChange={() => toggleCat(cat.id)}
              />
              <span className="text-sm text-warm-gray group-hover:text-espresso transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium mb-4">Price</h4>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={priceRange[0]}
            min={0}
            max={priceRange[1]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-20 border border-divider px-2 py-1.5 text-sm focus:outline-none focus:border-espresso"
          />
          <span className="text-warm-gray">—</span>
          <input
            type="number"
            value={priceRange[1]}
            min={priceRange[0]}
            max={200}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-20 border border-divider px-2 py-1.5 text-sm focus:outline-none focus:border-espresso"
          />
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium mb-4">Material</h4>
        <div className="flex flex-col gap-2.5">
          {['all', 'gold', 'silver'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                  selectedMaterial === mat
                    ? 'border-espresso'
                    : 'border-divider group-hover:border-warm-gray'
                }`}
              >
                {selectedMaterial === mat && (
                  <span className="w-2 h-2 rounded-full bg-espresso" />
                )}
              </span>
              <input
                type="radio"
                name="material"
                className="sr-only"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
              />
              <span className="text-sm text-warm-gray group-hover:text-espresso transition-colors capitalize">
                {mat === 'all' ? 'All Materials' : `${mat}-Plated`}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedCats([]);
          setPriceRange([0, 150]);
          setSelectedMaterial('all');
        }}
        className="text-xs uppercase tracking-widest underline underline-offset-4 text-warm-gray hover:text-espresso transition-colors self-start"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <div ref={ref} className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-14">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide">Shop All</h1>
            <p className="text-sm text-warm-gray mt-2">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest border border-divider px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs uppercase tracking-widest border border-divider bg-transparent px-3 py-2 pr-8 focus:outline-none focus:border-espresso appearance-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter overlay */}
          {mobileFilterOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-50 md:hidden" onClick={() => setMobileFilterOpen(false)} />
              <div className="fixed top-0 left-0 h-full w-80 bg-white z-[60] p-6 overflow-y-auto md:hidden">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-xl">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCats([]);
                    setPriceRange([0, 150]);
                    setSelectedMaterial('all');
                  }}
                  className="mt-3 text-bronze underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link
                      to={`/product/${product.id}`}
                      className="block bg-white shadow-soft hover:shadow-soft-hover transition-shadow duration-300"
                    >
                      <div className="aspect-[3/4] relative overflow-hidden bg-cream">
                        <img
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={`[shop-${product.id}-name]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, 'Gold', 1);
                          }}
                          className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-bronze hover:text-white"
                          aria-label="Add to cart"
                        >
                          <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="p-3 md:p-4">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-3 h-3 fill-star-gold text-star-gold" />
                          <span className="text-[11px] text-warm-gray">{product.rating}</span>
                        </div>
                        <h3 id={`shop-${product.id}-name`} className="font-serif text-xs md:text-sm uppercase tracking-widest-xl truncate">
                          {product.name}
                        </h3>
                        <p className="text-sm font-medium mt-1">${product.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
