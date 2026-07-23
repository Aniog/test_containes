import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/home/ProductCard';
import FilterSidebar from '../components/shop/FilterSidebar';
import { products } from '../data/products';
import { Menu, X } from 'lucide-react';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';
  const urlCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    urlCategory ? [urlCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 999 });
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material filter (simulated - all products are gold by default)
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(p => 
      p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange({ min: 0, max: 999 });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.15em] text-xs text-[#6B645C] mb-2">Curated Collection</p>
            <h1 className="font-serif text-4xl tracking-[0.05em]">Shop All</h1>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden flex items-center gap-2 text-sm uppercase tracking-[0.08em]"
            >
              {showMobileFilters ? <X size={16} /> : <Menu size={16} />} Filters
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jewelry..."
            className="w-full md:w-80 border border-[#D9D2C7] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar 
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              onClearFilters={clearFilters}
            />
          </aside>

          {/* Filters - Mobile */}
          {showMobileFilters && (
            <div className="md:hidden border border-[#D9D2C7] p-6 bg-white">
              <FilterSidebar 
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedMaterials={selectedMaterials}
                setSelectedMaterials={setSelectedMaterials}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                onClearFilters={clearFilters}
              />
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <>
                <p className="text-sm text-[#6B645C] mb-6">
                  {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg mb-4">No pieces found matching your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;