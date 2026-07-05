import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice } from '../../lib/utils';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.filter(p => p.tags.includes('bestseller')).slice(0, 5);

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-narrow">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-sans text-sm tracking-ultra-wide uppercase text-gold-400 mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-700">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-cream-200 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-cream-400 text-sm">Product Image</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal-800/0 group-hover:bg-charcoal-800/10 transition-all duration-300" />
                  {/* Quick add button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.variants[0]);
                    }}
                    className="absolute bottom-3 left-3 right-3 bg-cream-50 text-charcoal-700 py-2.5 px-4 
                               font-sans text-xs tracking-wider uppercase opacity-0 translate-y-2 
                               group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300
                               flex items-center justify-center gap-2 hover:bg-charcoal-700 hover:text-cream-50"
                  >
                    <ShoppingBag size={14} />
                    Add to Cart
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <Link to={`/product/${product.slug}`}>
                <h3 className="product-name text-sm lg:text-base text-charcoal-700 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-cream-300'}
                    />
                  ))}
                </div>
                <p className="font-sans text-sm font-medium text-charcoal-700">
                  {formatPrice(product.price)}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 lg:mt-14">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
