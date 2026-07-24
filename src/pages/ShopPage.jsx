import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import ShopFilters from '@/components/shop/ShopFilters';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-50 mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-500" />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-4 left-4 right-4 btn-primary text-xs py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
          >
            <ShoppingBag className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Add to Cart
          </button>
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-gold-500 text-white text-caption px-3 py-1 uppercase tracking-wider">
              New
            </span>
          )}
        </div>
      </Link>
      <Link to={`/product/${product.slug}`}>
        <h3 className="product-name text-charcoal-800 mb-1.5">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold-500 fill-gold-500'
                    : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>
          <span className="text-body-sm text-charcoal-400">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-body-sm font-medium text-charcoal-700">
          {formatPrice(product.price)}
        </p>
      </Link>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || null;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategory, selectedPrice, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }

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
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <main className="pt-20 lg:pt-24" ref={containerRef}>
      {/* Page header */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-8 lg:pt-12 pb-4">
        <div className="text-center mb-8">
          <h1 className="heading-section text-charcoal-800">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="divider mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-body-sm text-charcoal-600 hover:text-charcoal-800 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-body-sm text-charcoal-400 hidden lg:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-body-sm text-charcoal-400 hidden sm:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-body-sm text-charcoal-700 bg-transparent border border-charcoal-200 px-3 py-2 focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-20">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <ShopFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPrice={selectedPrice}
              onPriceChange={setSelectedPrice}
              categories={categories}
            />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-500 mb-3">
                  No pieces found
                </p>
                <p className="text-body-sm text-charcoal-400">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="absolute left-0 top-0 bottom-0 w-[300px] bg-cream-50 shadow-elevated p-6 pt-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl text-charcoal-800">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-charcoal-400 hover:text-charcoal-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ShopFilters
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
              }}
              selectedPrice={selectedPrice}
              onPriceChange={(price) => {
                setSelectedPrice(price);
              }}
              categories={categories}
            />
          </motion.div>
        </div>
      )}
    </main>
  );
}
