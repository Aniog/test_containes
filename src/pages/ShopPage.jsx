import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import './ShopPage.css';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-50':
          result = result.filter(p => p.price < 50);
          break;
        case '50-75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case '75-100':
          result = result.filter(p => p.price > 75 && p.price <= 100);
          break;
        case 'over-100':
          result = result.filter(p => p.price > 100);
          break;
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <>
      <Navigation />
      <main className="shop-page">
        <div className="container">
          <div className="shop-page__header">
            <h1>Shop All</h1>
            <p className="shop-page__count">{filteredProducts.length} pieces</p>
          </div>

          <div className="shop-page__toolbar">
            <button 
              className="shop-page__filter-toggle"
              onClick={() => setIsFilterOpen(true)}
            >
              <SlidersHorizontal size={18} />
              Filters
              {hasActiveFilters && <span className="shop-page__filter-count" />}
            </button>

            <div className="shop-page__sort">
              <span>Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="shop-page__content">
            {/* Mobile Filter Sidebar */}
            <div className={`shop-page__filters ${isFilterOpen ? 'shop-page__filters--open' : ''}`}>
              <div className="shop-page__filters-header">
                <h3>Filters</h3>
                <button 
                  className="shop-page__filters-close"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="shop-page__filter-section">
                <h4>Category</h4>
                <div className="shop-page__filter-options">
                  <button
                    className={`shop-page__filter-btn ${selectedCategory === 'all' ? 'shop-page__filter-btn--active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All Products
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      className={`shop-page__filter-btn ${selectedCategory === cat.id ? 'shop-page__filter-btn--active' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="shop-page__filter-section">
                <h4>Price</h4>
                <div className="shop-page__filter-options">
                  <button
                    className={`shop-page__filter-btn ${priceRange === 'all' ? 'shop-page__filter-btn--active' : ''}`}
                    onClick={() => setPriceRange('all')}
                  >
                    All Prices
                  </button>
                  <button
                    className={`shop-page__filter-btn ${priceRange === 'under-50' ? 'shop-page__filter-btn--active' : ''}`}
                    onClick={() => setPriceRange('under-50')}
                  >
                    Under $50
                  </button>
                  <button
                    className={`shop-page__filter-btn ${priceRange === '50-75' ? 'shop-page__filter-btn--active' : ''}`}
                    onClick={() => setPriceRange('50-75')}
                  >
                    $50 - $75
                  </button>
                  <button
                    className={`shop-page__filter-btn ${priceRange === '75-100' ? 'shop-page__filter-btn--active' : ''}`}
                    onClick={() => setPriceRange('75-100')}
                  >
                    $75 - $100
                  </button>
                  <button
                    className={`shop-page__filter-btn ${priceRange === 'over-100' ? 'shop-page__filter-btn--active' : ''}`}
                    onClick={() => setPriceRange('over-100')}
                  >
                    Over $100
                  </button>
                </div>
              </div>

              {hasActiveFilters && (
                <button 
                  className="shop-page__clear-filters"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Filter Overlay */}
            {isFilterOpen && (
              <div 
                className="shop-page__filter-overlay"
                onClick={() => setIsFilterOpen(false)}
              />
            )}

            {/* Product Grid */}
            <div className="shop-page__grid">
              {filteredProducts.length === 0 ? (
                <div className="shop-page__empty">
                  <p>No products found matching your criteria.</p>
                  <button onClick={clearFilters}>Clear Filters</button>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="product-card"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link to={`/product/${product.id}`} className="product-card__link">
                      <div className="product-card__image-container">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="product-card__image"
                        />
                        {hoveredProduct === product.id && product.images[1] && (
                          <img 
                            src={product.images[1]} 
                            alt={`${product.name} alternate view`}
                            className="product-card__image product-card__image--hover"
                          />
                        )}
                        <button 
                          className={`product-card__quick-add ${hoveredProduct === product.id ? 'product-card__quick-add--visible' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                        >
                          <ShoppingBag size={16} strokeWidth={1.5} />
                          Quick Add
                        </button>
                      </div>
                      
                      <div className="product-card__info">
                        <h3 className="product-card__name">{product.name}</h3>
                        <div className="product-card__rating">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                              strokeWidth={1.5}
                            />
                          ))}
                          <span>({product.reviews})</span>
                        </div>
                        <p className="product-card__price">{formatPrice(product.price)}</p>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}