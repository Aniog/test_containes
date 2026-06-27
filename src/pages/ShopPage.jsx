import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X, Star, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

// Mock product data
const allProducts = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    reviews: 124,
    isBestseller: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    reviews: 89,
    isBestseller: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    reviews: 156,
    isBestseller: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    reviews: 92,
    isBestseller: false
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    reviews: 67,
    isBestseller: true
  }
];

const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const materials = ["All", "Gold", "Silver"];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'bestsellers', label: 'Bestsellers' }
];

export default function ShopPage() {
  const { addToCart, openCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }
    
    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }
    
    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);
  
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    openCart();
  };
  
  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 200]);
  };
  
  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || priceRange[0] > 0 || priceRange[1] < 200;
  
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <div className="w-16 h-px bg-velmora-gold mx-auto"></div>
        </div>
        
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-velmora-text-light hover:border-velmora-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Filters</span>
          </button>
          
          {/* Active Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-velmora-gold hover:underline"
            >
              Clear all filters
            </button>
          )}
          
          {/* Sort Dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center space-x-2 px-4 py-2 border border-velmora-text-light hover:border-velmora-gold transition-colors"
            >
              <span className="text-sm">Sort: {sortOptions.find(o => o.value === sortBy)?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-velmora-white shadow-lg border border-gray-200 py-2 min-w-[200px] z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-velmora-cream transition-colors ${
                      sortBy === option.value ? 'text-velmora-gold font-medium' : 'text-velmora-text'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className={`
            fixed lg:static inset-0 z-40 bg-velmora-ivory lg:bg-transparent
            w-80 lg:w-64 p-6 lg:p-0 transform transition-transform duration-300
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto lg:overflow-visible
          `}>
            <div className="lg:hidden flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        selectedCategory === cat
                          ? 'bg-velmora-gold text-velmora-white'
                          : 'hover:bg-velmora-cream'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Material Filter */}
              <div>
                <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Material</h4>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        selectedMaterial === mat
                          ? 'bg-velmora-gold text-velmora-white'
                          : 'hover:bg-velmora-cream'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Price</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-velmora-gold"
                  />
                  <div className="flex justify-between text-sm text-velmora-text-light">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Overlay for mobile filter */}
          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}
          
          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-velmora-text-light mb-6">
              {filteredAndSortedProducts.length} products
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group cursor-pointer fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden bg-velmora-cream aspect-square mb-4">
                    <a href={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </a>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-velmora-black text-velmora-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-velmora-charcoal"
                    >
                      Add to Cart
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <a href={`/product/${product.id}`}>
                      <h3 className="product-name text-sm">{product.name}</h3>
                    </a>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                      <span className="text-sm text-velmora-text-light">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <p className="font-medium">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-text-light mb-4">No products match your filters</p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
