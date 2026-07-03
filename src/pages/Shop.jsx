import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(
    categoryParam
      ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)
      : 'All'
  );
  const [activePrice, setActivePrice] = useState(null);
  const [activeMaterial, setActiveMaterial] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      if (activePrice) {
        if (p.price < activePrice.min || p.price >= activePrice.max) return false;
      }
      if (activeMaterial && p.material !== activeMaterial) return false;
      return true;
    });
  }, [activeCategory, activePrice, activeMaterial]);

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-ink">Shop</h1>
          <p className="mt-2 text-sm text-warm-500 font-sans">
            Discover our full collection of demi-fine jewelry.
          </p>
        </div>

        <div className="flex gap-10">
          <FilterSidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activePrice={activePrice}
            setActivePrice={setActivePrice}
            activeMaterial={activeMaterial}
            setActiveMaterial={setActiveMaterial}
            isOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />
          <ProductGrid
            products={filteredProducts}
            onFilterMobileOpen={() => setMobileFiltersOpen(true)}
          />
        </div>
      </div>
    </div>
  );
}