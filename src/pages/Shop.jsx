import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterSidebar, ProductGrid } from '@/components/shop/ProductGrid';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || null);

  const validCategory = ['Earrings', 'Necklaces', 'Huggies'].includes(selectedCategory) ? selectedCategory : null;

  return (
    <div className="section-padding bg-background">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-64 shrink-0">
            <FilterSidebar selectedCategory={validCategory} onSelectCategory={setSelectedCategory} />
          </div>
          <div className="flex-1">
            <h1 className="font-serif text-3xl md:text-4xl text-ink">Shop</h1>
            <p className="mt-2 text-sm text-muted">Explore our demi-fine collection.</p>
            <div className="mt-8">
              <ProductGrid selectedCategory={validCategory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
