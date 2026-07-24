import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import useCartStore from '../store/cartStore';

// We'll reuse the seed data from home or define full catalog here
export const CATALOG = [
  {
    id: "1",
    name: "VIVID AURA JEWELS",
    price: 42,
    category: "Ear Cuffs",
    material: "Gold Vermeil",
  },
  {
    id: "2",
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    category: "Necklaces",
    material: "Gold Vermeil",
  },
  {
    id: "3",
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    category: "Huggies",
    material: "Gold Vermeil",
  },
  {
    id: "4",
    name: "AMBER LACE EARRINGS",
    price: 54,
    category: "Earrings",
    material: "Gold Vermeil",
  },
  {
    id: "5",
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    category: "Sets",
    material: "Gold Vermeil",
  },
  {
    id: "6",
    name: "LUMINOUS DROP EARRINGS",
    price: 48,
    category: "Earrings",
    material: "Sterling Silver",
  },
  {
    id: "7",
    name: "ETERNITY BAND RING",
    price: 45,
    category: "Rings",
    material: "Gold Vermeil",
  },
  {
    id: "8",
    name: "CELESTIAL PENDANT",
    price: 62,
    category: "Necklaces",
    material: "Sterling Silver",
  }
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  // Local state for material filter
  const [materialFilter, setMaterialFilter] = useState('all');

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'ear cuffs', 'rings', 'sets'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...CATALOG];
    
    // Filter by Category
    if (currentCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }

    // Filter by Material
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(materialFilter.toLowerCase()));
    }

    // Sort
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      // featured/newest we just leave as default order for now
      default:
        break;
    }

    return result;
  }, [currentCategory, materialFilter, sortOption]);

  const handleCategoryClick = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-20 min-h-screen pb-24">
      {/* Shop Header */}
      <div className="bg-secondary py-16 px-6 text-center border-b border-border/50">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-widest uppercase">
          {currentCategory === 'all' ? 'All Jewelry' : currentCategory}
        </h1>
        <p className="text-muted-foreground font-light max-w-2xl mx-auto">
          Explore our complete collection of demi-fine jewelry. Crafted from 18k gold vermeil and sterling silver for everyday elegance and enduring quality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="flex md:hidden justify-between items-center mb-6">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-border px-4 py-2"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-border px-4 py-2">
              Sort <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-background border border-border z-20 hidden group-hover:block shadow-lg">
              {sortOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSortOption(opt.value)}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className={cn(
          "w-full md:w-64 flex-shrink-0 space-y-10 transition-all",
          isFilterOpen ? "block" : "hidden md:block"
        )}>
          <div>
            <h3 className="font-serif text-lg tracking-widest uppercase mb-4 border-b border-border pb-2">Category</h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => handleCategoryClick(cat)}
                    className={cn(
                      "text-sm tracking-wide capitalize hover:text-accent transition-colors",
                      currentCategory.toLowerCase() === cat ? "font-semibold text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-widest uppercase mb-4 border-b border-border pb-2">Material</h3>
            <ul className="space-y-3">
              {['all', 'gold', 'silver'].map(mat => (
                <li key={mat}>
                  <button 
                    onClick={() => setMaterialFilter(mat)}
                    className={cn(
                      "text-sm tracking-wide capitalize hover:text-accent transition-colors",
                      materialFilter === mat ? "font-semibold text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {mat === 'all' ? 'All Materials' : mat === 'gold' ? '18K Gold Vermeil' : 'Sterling Silver'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-border">
            <span className="text-sm text-muted-foreground">{filteredProducts.length} Products</span>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold tracking-widest uppercase">Sort By:</span>
              <div className="flex gap-4">
                {sortOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setSortOption(opt.value)}
                    className={cn(
                      "text-sm transition-colors",
                      sortOption === opt.value ? "text-accent font-semibold border-b border-accent" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col cursor-pointer">
                  <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop`} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    <img 
                      src={`https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=600&auto=format&fit=crop`} 
                      alt={`${product.name} worn`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-primary uppercase text-[10px] font-bold tracking-widest hover:bg-primary hover:text-white transition-colors">
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{product.category}</span>
                    <Link to={`/product/${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-2 hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </Link>
                    <span className="mt-auto font-serif text-sm">${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-serif italic text-xl text-muted-foreground mb-4">No products found matching your filters.</p>
              <button 
                onClick={() => {
                  searchParams.delete('category');
                  setSearchParams(searchParams);
                  setMaterialFilter('all');
                }}
                className="text-sm font-semibold tracking-widest uppercase border-b border-accent text-accent"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}