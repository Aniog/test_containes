import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const BestsellersGrid = () => {
  const { addItem, openCart } = useCart();
  const bestsellers = products.filter(product => product.featured).slice(0, 5);
  
  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]); // Default to first variant
    openCart();
  };
  
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-600 mb-2 block">
            Most Loved
          </span>
          <h2 className="text-heading text-espresso-900 mb-4">
            Bestsellers
          </h2>
          <p className="font-sans text-body text-espresso-500 max-w-2xl mx-auto">
            Discover the pieces our customers can't stop wearing. Timeless designs crafted with care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link 
              key={product.id}
              to={`/products/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-cream-200 mb-4">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[${product.id}-name] [${product.id}-desc]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                />
                
                {/* Quick add button */}
                <button 
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-cream-50 text-espresso-900 px-4 py-2 rounded-md shadow-medium flex items-center gap-2 text-sm font-medium"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
              
              <div className="text-center">
                <h3 
                  id={`${product.id}-name`}
                  className="font-serif text-sm tracking-wider text-espresso-900 uppercase mb-1"
                >
                  {product.name}
                </h3>
                <p 
                  id={`${product.id}-desc`}
                  className="font-sans text-xs text-espresso-500 mb-2"
                >
                  {product.shortDescription}
                </p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-current' : 'text-cream-300'}`}
                    />
                  ))}
                  <span className="font-sans text-xs text-espresso-400 ml-1">
                    ({product.reviewCount})
                  </span>
                </div>
                <p className="font-sans text-sm font-medium text-espresso-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/collections"
            className="btn-outline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersGrid;
