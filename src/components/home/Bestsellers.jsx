import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function Bestsellers() {
  const { addItem } = useCart();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Bestsellers</h2>
          <p className="mt-3 text-sm text-muted">The pieces our community reaches for again and again</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-muted uppercase tracking-wider">{product.category}</span>
                  </div>
                  {/* Hover overlay with Add to Cart */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-espresso text-cream text-[10px] uppercase tracking-widest font-medium py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
              <Link to={`/product/${product.slug}`}>
                <h3 className="font-serif text-sm text-espresso uppercase tracking-wider">
                  {product.name}
                </h3>
                <p className="text-sm text-walnut mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
