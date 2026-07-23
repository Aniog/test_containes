import { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { categories } from '@/data/products';

export default function FilterSidebar({ filters, setFilters, products, priceRange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    material: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === categoryId ? 'all' : categoryId,
    }));
  };

  const handlePriceChange = (price) => {
    setFilters(prev => ({ ...prev, maxPrice: price }));
  };

  const handleMaterialChange = (material) => {
    setFilters(prev => {
      const materials = prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material];
      return { ...prev, materials };
    });
  };

  const activeFilterCount = [
    filters.category !== 'all',
    filters.maxPrice < priceRange.max,
    filters.materials.length > 0,
  ].filter(Boolean).length;

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-sm tracking-wider uppercase mb-3"
        >
          <span>Category</span>
          <ChevronDown size={16} className={`transition-transform ${expandedSections.category ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === cat.id}
                  onChange={() => handleCategoryChange(cat.id)}
                  className="accent-[#B8956A]"
                />
                <span className="text-sm text-[#6B6560] group-hover:text-[#1A1A1A] transition-colors">
                  {cat.name}
                </span>
                <span className="text-xs text-[#9B9590] ml-auto">
                  ({cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="hairline" />

      {/* Price */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-sm tracking-wider uppercase mb-3"
        >
          <span>Price</span>
          <ChevronDown size={16} className={`transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            {[30, 50, 70, 100, 150].map(price => (
              <label key={price} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={filters.maxPrice === price}
                  onChange={() => handlePriceChange(price)}
                  className="accent-[#B8956A]"
                />
                <span className="text-sm text-[#6B6560] group-hover:text-[#1A1A1A] transition-colors">
                  Under ${price}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="hairline" />

      {/* Material */}
      <div>
        <button
          onClick={() => toggleSection('material')}
          className="flex items-center justify-between w-full text-sm tracking-wider uppercase mb-3"
        >
          <span>Material</span>
          <ChevronDown size={16} className={`transition-transform ${expandedSections.material ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.material && (
          <div className="space-y-2">
            {['Gold', 'Silver'].map(material => (
              <label key={material} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material)}
                  onChange={() => handleMaterialChange(material)}
                  className="accent-[#B8956A]"
                />
                <span className="text-sm text-[#6B6560] group-hover:text-[#1A1A1A] transition-colors">
                  {material} Tone
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear filters */}
      {activeFilterCount > 0 && (
        <button
          onClick={() => setFilters({ category: 'all', maxPrice: priceRange.max, materials: [], sort: 'featured' })}
          className="text-xs text-[#B8956A] hover:text-[#A07D55] tracking-wider uppercase transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile filter button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden flex items-center gap-2 px-4 py-2 border border-[#E8E4DF] text-sm"
      >
        <Filter size={16} />
        Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-[#FAF8F5] z-50 overflow-y-auto p-6 md:hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="serif-heading text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileOpen(false)} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            <SidebarContent />
          </div>
        </>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0">
        <SidebarContent />
      </aside>
    </>
  );
}
