import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Shop() {
  const { addToCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'VIVID AURA JEWELS',
      price: 42,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=600&q=80',
      category: 'Earrings',
      material: '18K Gold Plated',
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: 'MAJESTIC FLORA NECTAR',
      price: 68,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      category: 'Necklaces',
      material: '18K Gold Plated',
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: 'GOLDEN SPHERE HUGGIES',
      price: 38,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=600&q=80',
      category: 'Huggies',
      material: '18K Gold Plated',
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: 'AMBER LACE EARRINGS',
      price: 54,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      category: 'Earrings',
      material: '18K Gold Plated',
      rating: 4.6,
      reviews: 97,
    },
    {
      id: 5,
      name: 'ROYAL HEIRLOOM SET',
      price: 95,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=600&q=80',
      category: 'Sets',
      material: '18K Gold Plated',
      rating: 5.0,
      reviews: 68,
    },
  ];

  const categories = ['all', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['all', '18K Gold Plated', 'Sterling Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-3xl sm:text-4xl font-light mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Shop All
          </h1>
          <p className="text-gray-600">Discover our collection of demi-fine jewelry</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 uppercase-label"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-velmora-border bg-white text-sm focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Filter Sidebar (Mobile Overlay) */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)}>
            <div
              className="absolute top-0 left-0 h-full w-80 bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="uppercase-label">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block text-sm ${
                        selectedCategory === cat ? 'text-velmora-gold font-medium' : 'text-gray-600'
                      } hover:text-velmora-gold transition-colors`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block text-sm ${
                        selectedMaterial === mat ? 'text-velmora-gold font-medium' : 'text-gray-600'
                      } hover:text-velmora-gold transition-colors`}
                    >
                      {mat.charAt(0).toUpperCase() + mat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Filter Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="uppercase-label mb-4">Category</h3>
              <div className="space-y-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block text-sm ${
                      selectedCategory === cat ? 'text-velmora-gold font-medium' : 'text-gray-600'
                    } hover:text-velmora-gold transition-colors`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              <h3 className="uppercase-label mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block text-sm ${
                      selectedMaterial === mat ? 'text-velmora-gold font-medium' : 'text-gray-600'
                    } hover:text-velmora-gold transition-colors`}
                  >
                    {mat.charAt(0).toUpperCase() + mat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden mb-4 bg-velmora-warm aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-charcoal px-4 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
                      >
                        Quick Add
                      </button>
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-medium tracking-wider uppercase mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-velmora-gold fill-velmora-gold'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-base font-medium">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
