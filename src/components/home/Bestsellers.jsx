import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const productImages = {
  "vivid-aura-jewels": "gold ear cuff crystal accent jewelry product shot dark background",
  "majestic-flora-nectar": "floral crystal necklace gold pendant product shot dark background",
  "golden-sphere-huggies": "chunky gold dome huggie earrings product shot dark background",
  "amber-lace-earrings": "gold filigree drop earrings product shot dark background jewelry",
  "royal-heirloom-set": "jewelry gift set gold earrings necklace luxury box dark background",
};

function ProductCard({ product }) {
  const { addItem } = useCart();
  const imgQuery = productImages[product.id] || "gold jewelry product shot dark background";

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-ivory-200 aspect-[4/5] mb-4">
          <img
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-strk-img-id={`bestseller-${product.id}-1`}
            data-strk-img={imgQuery}
            data-strk-img-ratio="4x5"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          
          {product.badge && (
            <span className="absolute top-3 left-3 bg-charcoal-900 text-ivory-50 text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
              {product.badge}
            </span>
          )}

          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full flex items-center justify-center gap-2 bg-charcoal-900/90 backdrop-blur-sm text-ivory-50 py-3 text-xs tracking-widest uppercase font-medium hover:bg-charcoal-900 transition-colors"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Bag
            </button>
          </div>
        </div>
      </Link>

      <div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-ultra-wide text-charcoal-800 mb-1 group-hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-200'}
              />
            ))}
          </div>
          <span className="text-[10px] text-charcoal-400">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm font-semibold text-charcoal-900">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const headerRef = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <p className="text-xs tracking-mega-wide uppercase text-gold-500 font-medium mb-3">Curated Selection</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">
            Our Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
