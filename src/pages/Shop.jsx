import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
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
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleMaterial = (material) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] text-taupe mb-2">DISCOVER</p>
          <h1 className="text-4xl font-serif">All Jewelry</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden text-sm tracking-[0.1em]"
          >
            FILTERS
          </button>
          <div className="relative">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-border px-4 py-2 pr-10 text-sm tracking-[0.05em] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
          <div className="sticky top-24 space-y-8">
            {/* Categories */}
            <div>
              <p className="filter-label">Category</p>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-base"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <p className="filter-label">Material</p>
              <div className="space-y-2">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-base"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <p className="filter-label mb-3">Price Range</p>
              <div className="flex items-center gap-3 text-sm">
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 px-3 py-1 border border-border"
                />
                <span>—</span>
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                  className="w-20 px-3 py-1 border border-border"
                />
              </div>
            </div>

            <button onClick={clearFilters} className="text-xs tracking-[0.1em] text-taupe hover:text-base">
              CLEAR ALL FILTERS
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-taupe mb-4">No products match your filters.</p>
              <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <div className="product-card-image">
                    <img src={product.image} alt={product.name} />
                    <img 
                      src={product.imageSecondary} 
                      alt={product.name} 
                      className="product-card-image-secondary"
                    />
                    <div className="product-card-actions">
                      <Button 
                        variant="gold" 
                        className="w-full text-xs py-3"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-wider mb-1 hover:text-gold transition-colors">
                        {product.name}
                      </p>
                    </Link>
                    <p className="text-sm text-taupe">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;