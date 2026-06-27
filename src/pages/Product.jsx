import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Product = () => {
  const { id } = useParams();
  const [selectedMaterial, setSelectedMaterial] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, setDrawer } = useCart();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark transition-colors">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedMaterial, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setDrawer(true);
    }, 600);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <CartDrawer />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4">
        <nav className="flex items-center gap-2 text-[11px] text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} material={selectedMaterial} />

          {/* Info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink tracking-wide mb-3">
              {product.name.toUpperCase()}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-warm-gray-light'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-ink mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Material selector */}
            <div className="mb-6">
              <p className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink mb-3">
                Material
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`px-5 py-2.5 text-[11px] font-sans font-medium tracking-[0.15em] uppercase border transition-all duration-200 ${
                      selectedMaterial === mat
                        ? 'border-ink bg-ink text-paper'
                        : 'border-border text-warm-gray hover:border-ink hover:text-ink'
                    }`}
                  >
                    {mat === 'gold' ? '18K Gold' : 'Sterling Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warm-gray hover:text-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-medium text-ink min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warm-gray hover:text-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-800 text-paper'
                  : 'bg-ink text-paper hover:bg-charcoal'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Bag
                </>
              ) : (
                'Add to Bag'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion
                description={product.description}
                details={product.details}
                shipping="Free worldwide shipping on orders over $75. 30-day hassle-free returns. All orders are packaged in our signature Velmora gift box."
              />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl text-ink">You May Also Like</h2>
              <Link
                to="/shop"
                className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-warm-gray hover:text-gold transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-cream overflow-hidden mb-3">
                    <img
                      src={`https://placehold.co/600x800/f7f4ef/c9a96e?text=${encodeURIComponent(rp.name)}`}
                      alt={rp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm tracking-[0.12em] uppercase text-ink group-hover:text-gold transition-colors">
                    {rp.name}
                  </h3>
                  <p className="text-sm font-medium text-ink mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Product;
