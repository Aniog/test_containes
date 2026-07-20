import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const containerRef = useRef(null);
  const { addToCart, openCart } = useCart();

  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', '18K Gold Plated'];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedMaterial, sortBy]);

  let filtered = products.filter((p) => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (selectedMaterial !== 'All' && p.material !== selectedMaterial) return false;
    return true;
  });

  if (sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
    openCart();
  };

  return (
    <div className="pt-20 md:pt-28 pb-20 section-padding">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4 font-medium">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-ink tracking-wide">
            Shop All Jewelry
          </h1>
        </div>

        {/* Sort + Filter bar */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-velmora-smoke hover:text-velmora-gold transition-colors font-medium"
          >
            <SlidersHorizontal size={14} />
            Filter
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs tracking-[0.1em] uppercase bg-transparent border-b border-velmora-sand/50 py-1.5 text-velmora-smoke focus:outline-none focus:border-velmora-gold transition-colors cursor-pointer font-medium"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Sort: Price Low to High</option>
            <option value="price-high">Sort: Price High to Low</option>
          </select>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="mb-10 p-6 border border-velmora-sand/40 bg-velmora-pearl animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-ink">Filters</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="text-velmora-smoke/50 hover:text-velmora-charcoal transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Category filter */}
              <div>
                <p className="text-xs tracking-[0.1em] uppercase text-velmora-smoke mb-3 font-medium">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-xs tracking-[0.08em] uppercase transition-all duration-200 border ${
                        selectedCategory === cat
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-sand/40 text-velmora-smoke hover:border-velmora-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <p className="text-xs tracking-[0.1em] uppercase text-velmora-smoke mb-3 font-medium">Material</p>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`px-4 py-2 text-xs tracking-[0.08em] uppercase transition-all duration-200 border ${
                        selectedMaterial === mat
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-sand/40 text-velmora-smoke hover:border-velmora-gold'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] bg-velmora-blush mb-3 overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={`shop-${product.imgId}`}
                  data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full py-2.5 bg-velmora-ink/90 backdrop-blur-sm text-white text-xs tracking-[0.12em] uppercase hover:bg-velmora-gold transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={13} />
                    Quick Add
                  </button>
                </div>
              </div>
              <h3
                id={`shop-${product.titleId}`}
                className="font-serif text-xs tracking-[0.12em] text-velmora-charcoal uppercase truncate"
              >
                {product.name}
              </h3>
              <p id={`shop-${product.descId}`} className="sr-only">{product.description}</p>
              <p className="text-sm text-velmora-gold font-medium mt-1">${product.price}</p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-velmora-smoke/60 mt-16 text-sm">
            No products match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
