import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Truck, RefreshCcw, ChevronRight } from 'lucide-react';
import { StrkImage } from '@/components/Image';
import { StarRating } from '@/components/StarRating';
import { QuantitySelector } from '@/components/QuantitySelector';
import { Accordion } from '@/components/Accordion';
import { ProductCard } from '@/components/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const { addToCart } = useCart();
  const containerRef = useImageLoader([productId]);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.value || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    setSelectedVariant(product.variants[0]?.value || 'gold');
    setQuantity(1);
    setActiveImage(0);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">We couldn't find the piece you're looking for.</p>
        <Link
          to="/shop"
          className="px-8 py-3 bg-accent text-accent-foreground text-xs uppercase tracking-[0.16em] font-medium hover:bg-accent-hover transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ];

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto px-5 md:px-8 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-16 lg:py-24">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-muted overflow-hidden">
                <StrkImage
                  id={`product-${product.id}-gallery-main`}
                  query={`[product-${product.id}-name] ${product.imgQuery}`}
                  ratio="4x5"
                  width={900}
                  alt={product.name}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      'aspect-square bg-muted overflow-hidden border transition-colors',
                      activeImage === index ? 'border-foreground' : 'border-transparent hover:border-border-strong'
                    )}
                    aria-label={`View image ${index + 1}`}
                  >
                    <StrkImage
                      id={`product-${product.id}-thumb-${index}`}
                      query={`[product-${product.id}-name] ${product.imgQuery} view ${index + 1}`}
                      ratio="1x1"
                      width={300}
                      alt={`${product.name} view ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {product.category}
              </p>
              <h1
                id={`product-${product.id}-name`}
                className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.12em] font-light mb-4"
              >
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-4">{formatPrice(product.price)}</p>
              <StarRating rating={product.rating} count={product.reviewCount} className="mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Variant selector */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-3">
                  Metal Tone
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.value}
                      type="button"
                      onClick={() => setSelectedVariant(variant.value)}
                      className={cn(
                        'px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium border transition-all',
                        selectedVariant === variant.value
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-transparent text-foreground border-border hover:border-foreground'
                      )}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <QuantitySelector value={quantity} onChange={setQuantity} />
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={cn(
                    'flex-1 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors',
                    added
                      ? 'bg-foreground text-background'
                      : 'bg-accent text-accent-foreground hover:bg-accent-hover'
                  )}
                >
                  {added ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <button
                  type="button"
                  className="px-4 border border-border hover:bg-muted transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Trust mini */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-accent" />
                  Free shipping over $50
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <RefreshCcw className="w-4 h-4 text-accent" />
                  30-day returns
                </div>
              </div>

              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-muted border-t border-border">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-center mb-10 md:mb-14">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
