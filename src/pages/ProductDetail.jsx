import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronRight, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ImageGallery from '../components/product/ImageGallery';
import ProductAccordion from '../components/product/Accordion';
import ProductCard from '../components/product/ProductCard';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-text-dark mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-brand-gold-dark hover:text-brand-gold transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);
  const activeVariant = product.variants.find(v => v.value === selectedVariant);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="bg-surface-warm pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <nav className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-text-dark-secondary">
          <Link to="/" className="hover:text-brand-gold-dark transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-brand-gold-dark transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-text-dark capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="section-padding pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Images */}
            <ImageGallery product={product} />

            {/* Right - Details */}
            <div className="lg:py-4">
              <p className="font-sans text-overline uppercase text-brand-gold mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-heading-2 text-text-dark tracking-[0.06em] uppercase mb-3">
                {product.name}
              </h1>

              {/* Price & Rating */}
              <div className="flex items-center gap-4 mb-5">
                <span className="font-sans text-xl text-brand-gold-dark font-medium">
                  ${product.price}
                </span>
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-brand-gold fill-brand-gold" />
                  <span className="font-sans text-sm text-text-dark-secondary">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-body text-text-dark-secondary leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="h-px bg-brand-gold/10 mb-6" />

              {/* Variant selector */}
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-text-dark font-medium mb-3">
                  Tone: <span className="text-text-dark-secondary font-normal capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant.value}
                      onClick={() => variant.available && setSelectedVariant(variant.value)}
                      disabled={!variant.available}
                      className={cn(
                        'px-5 py-2.5 rounded-pill border font-sans text-xs uppercase tracking-[0.1em] transition-all duration-300',
                        selectedVariant === variant.value
                          ? 'border-brand-gold bg-brand-gold text-surface-primary'
                          : variant.available
                            ? 'border-brand-gold/30 text-text-dark hover:border-brand-gold'
                            : 'border-gray-200 text-gray-300 cursor-not-allowed line-through'
                      )}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-text-dark font-medium mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-brand-gold/20 rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-text-dark-secondary hover:text-text-dark transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-5 font-sans text-sm text-text-dark font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-text-dark-secondary hover:text-text-dark transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={cn(
                  'w-full font-sans text-sm uppercase tracking-[0.15em] py-4 rounded-sm transition-all duration-300 font-medium flex items-center justify-center gap-2',
                  added
                    ? 'bg-accent-success text-white'
                    : 'bg-brand-gold text-surface-primary hover:bg-brand-gold-light shadow-gold'
                )}
              >
                <ShoppingBag size={16} />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>

              {/* Wishlist */}
              <button className="w-full mt-3 py-3 border border-brand-gold/20 rounded-sm flex items-center justify-center gap-2 text-text-dark-secondary hover:text-brand-gold-dark hover:border-brand-gold/40 transition-all duration-300 font-sans text-xs uppercase tracking-[0.12em]">
                <Heart size={14} />
                Add to Wishlist
              </button>

              {/* Accordion */}
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-surface-ivory section-padding py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-heading-3 text-text-dark tracking-[0.03em]">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
