import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const { addToCart } = useCart();

  const handleQuickAdd = (product) => {
    addToCart(product);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-velmora-charcoal">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl tracking-wider uppercase mb-6 leading-tight">
            Crafted to Be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of demi-fine gold jewelry, hand-crafted 
            with intention and designed to celebrate life's most precious moments.
          </p>
          <Link
            to="/shop"
            className="group bg-velmora-gold text-white px-12 py-5 text-sm uppercase tracking-widest font-medium inline-flex items-center gap-3 hover:bg-velmora-gold-dark transition-all duration-500 hover:shadow-premium-lg"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-beige border-y border-velmora-gold/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm">
            {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-velmora-charcoal/80">
                <span className="text-velmora-gold">✓</span>
                <span className="tracking-wide uppercase text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider uppercase mb-4">
            Bestsellers
          </h2>
          <div className="hairline-divider w-24 mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="aspect-square bg-velmora-beige mb-4 overflow-hidden">
                  <div className="w-full h-full jewelry-placeholder">
                    <span className="text-velmora-gold/30 text-6xl">♢</span>
                  </div>
                </div>
                <h3 className="product-name text-sm mb-2 text-velmora-black">
                  {product.name}
                </h3>
                <p className="font-serif text-lg text-velmora-black">
                  ${product.price}
                </p>
              </Link>
              <button
                onClick={() => handleQuickAdd(product)}
                className="mt-4 w-full bg-velmora-gold text-white py-3 text-xs uppercase tracking-wider font-medium hover:bg-velmora-gold-dark transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-premium-outline inline-block"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-velmora-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-velmora-beige">
              <div className="w-full h-full jewelry-placeholder">
                <span className="text-velmora-gold/30 text-8xl">♢</span>
              </div>
            </div>
            <div className="max-w-lg">
              <h2 className="font-serif text-4xl md:text-5xl tracking-wider uppercase mb-6">
                Our Story
              </h2>
              <div className="hairline-divider w-16 mb-8" />
              <p className="text-velmora-charcoal/80 leading-relaxed mb-6">
                At Velmora, we believe jewelry should be treasured, not just worn.
                Each piece in our collection is thoughtfully designed and crafted with
                the finest 18K gold plating.
              </p>
              <Link
                to="/about"
                className="btn-premium-outline inline-block"
              >
                Discover Our Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
