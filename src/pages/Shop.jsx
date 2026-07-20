import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sort]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [activeCategory, sort]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categoryOptions = [
    { id: 'all', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-linen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">The Collection</h1>
          <p className="mt-3 text-sm text-stone">Timeless pieces crafted for everyday elegance</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-stone"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>

            {/* Desktop category filters */}
            <div className="hidden md:flex items-center gap-4">
              {categoryOptions.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`text-xs uppercase tracking-widest transition-colors pb-1 ${
                    activeCategory === cat.id
                      ? 'text-charcoal border-b border-charcoal'
                      : 'text-stone hover:text-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone">{filteredProducts.length} pieces</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs text-charcoal bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-linen border border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-charcoal font-medium">Category</span>
              <button onClick={() => setFilterOpen(false)} className="text-stone">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setFilterOpen(false); }}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-gold bg-gold text-white'
                      : 'border-sand text-stone hover:border-gold'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-linen overflow-hidden">
                <img
                  data-strk-img-id={`shop-${product.id}-p0l9k8`}
                  data-strk-img={`[shop-title-${product.id}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </Link>

              <div className="mt-3">
                <h3 id={`shop-title-${product.id}`} className="text-xs uppercase tracking-product font-medium text-charcoal">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-stone">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="text-sm text-stone mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
