import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingBag, ChevronRight, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(products[0]?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-velmora-charcoal/60 mb-8">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-black">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image */}
          <div className="aspect-square bg-velmora-beige">
            <div className="w-full h-full jewelry-placeholder">
              <span className="text-velmora-gold/30 text-8xl">♢</span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:pl-8">
            <h1 className="product-name text-3xl md:text-4xl mb-4 text-velmora-black">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-charcoal/60">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl mb-8 text-velmora-black">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-velmora-charcoal/80 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && (
              <div className="mb-8">
                <p className="text-sm uppercase tracking-wider mb-3 text-velmora-charcoal/60">
                  Tone
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 border-2 transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold'
                          : 'border-velmora-gold/30 text-velmora-charcoal hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider mb-3 text-velmora-charcoal/60">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-gold/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-serif text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-gold/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-white py-4 uppercase tracking-wider text-sm font-medium hover:bg-velmora-gold-dark transition-all duration-300 flex items-center justify-center gap-2 mb-6"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 py-6 border-t border-velmora-gold/20">
              <div className="flex items-center gap-2 text-sm text-velmora-charcoal/60">
                <Truck className="w-4 h-4" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-sm text-velmora-charcoal/60">
                <RefreshCw className="w-4 h-4" />
                30-Day Returns
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="border-t border-velmora-gold/20 pt-16">
          <h2 className="font-serif text-3xl uppercase tracking-wider text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="group block"
              >
                <div className="aspect-square bg-velmora-beige mb-4">
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
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
