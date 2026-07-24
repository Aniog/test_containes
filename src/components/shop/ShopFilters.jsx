import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver', 'Freshwater Pearl'];

export default function ShopFilters({
  selectedCategory,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
  categories,
}) {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    material: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      {/* Category filter */}
      <div className="border-b border-charcoal-100/50 pb-6">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="text-caption uppercase tracking-[0.15em] text-charcoal-700">
            Category
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${
              openSections.category ? 'rotate-180' : ''
            }`}
          />
        </button>
        <AnimatePresence>
          {openSections.category && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-2.5">
                <button
                  onClick={() => onCategoryChange(null)}
                  className={`block text-body transition-colors ${
                    !selectedCategory
                      ? 'text-charcoal-800 font-medium'
                      : 'text-charcoal-400 hover:text-charcoal-600'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`block text-body transition-colors ${
                      selectedCategory === cat.id
                        ? 'text-charcoal-800 font-medium'
                        : 'text-charcoal-400 hover:text-charcoal-600'
                    }`}
                  >
                    {cat.name}
                    <span className="text-charcoal-300 ml-1.5">({cat.count})</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price filter */}
      <div className="border-b border-charcoal-100/50 pb-6">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="text-caption uppercase tracking-[0.15em] text-charcoal-700">
            Price
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${
              openSections.price ? 'rotate-180' : ''
            }`}
          />
        </button>
        <AnimatePresence>
          {openSections.price && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-2.5">
                <button
                  onClick={() => onPriceChange(null)}
                  className={`block text-body transition-colors ${
                    !selectedPrice
                      ? 'text-charcoal-800 font-medium'
                      : 'text-charcoal-400 hover:text-charcoal-600'
                  }`}
                >
                  All Prices
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => onPriceChange(range)}
                    className={`block text-body transition-colors ${
                      selectedPrice?.label === range.label
                        ? 'text-charcoal-800 font-medium'
                        : 'text-charcoal-400 hover:text-charcoal-600'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Material filter */}
      <div>
        <button
          onClick={() => toggleSection('material')}
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="text-caption uppercase tracking-[0.15em] text-charcoal-700">
            Material
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${
              openSections.material ? 'rotate-180' : ''
            }`}
          />
        </button>
        <AnimatePresence>
          {openSections.material && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-2.5">
                {materials.map((mat) => (
                  <label
                    key={mat}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-charcoal-300 accent-gold-500"
                    />
                    <span className="text-body text-charcoal-400 group-hover:text-charcoal-600 transition-colors">
                      {mat}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
