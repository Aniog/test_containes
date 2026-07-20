import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck, Check } from 'lucide-react';
import { products, getProductBySlug, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { StarRating } from '@/components/ui/StarRating';
import { ProductCard } from '@/components/shared/ProductCard';
import { cn } from '@/lib/utils';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const containerRef = useImageLoader([product?.id, activeImage]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-3xl text-foreground mb-4">Product not found</h1>
        <Link to="/shop" className="text-accent hover:underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ];

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div ref={containerRef} className="bg-background pt-[88px] md:pt-[104px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-8 md:mb-12 uppercase tracking-extra-wide">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-cream border transition-colors',
                    activeImage === index ? 'border-foreground' : 'border-hairline hover:border-muted'
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <div
                    className="w-full h-full"
                    data-strk-bg-id={`${product.id}-thumb-${index}`}
                    data-strk-bg={`[${product.id}-desc] [${product.id}-title]`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="150"
                    role="img"
                    aria-label={`${product.name} thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-cream overflow-hidden">
              <div
                className="w-full h-full"
                data-strk-bg-id={`${product.id}-main-${activeImage}`}
                data-strk-bg={`[${product.id}-desc] [${product.id}-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
                role="img"
                aria-label={product.name}
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:pl-8">
            <h1
              id={`${product.id}-title`}
              className="product-name text-2xl md:text-4xl text-foreground mb-3"
            >
              {product.name}
            </h1>
            <p id={`${product.id}-desc`} className="hidden">
              {product.description}
            </p>

            <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              {formatPrice(product.price)}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} count={product.reviewCount} size={14} />
            </div>

            <p className="text-muted leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-7">
              <span className="block text-xs uppercase tracking-extra-wide text-foreground mb-3">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-5 py-2.5 text-xs uppercase tracking-extra-wide border transition-colors',
                      selectedVariant === variant
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent text-foreground border-hairline hover:border-foreground'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-extra-wide text-foreground mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button fullWidth onClick={handleAdd} className="sm:flex-[2]">
                {added ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4" /> Added to Cart
                  </span>
                ) : (
                  'Add to Cart'
                )}
              </Button>
              <Button
                variant="outline"
                className="sm:flex-1 py-3 px-4"
                aria-label="Add to wishlist"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            {/* Trust mini bar */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-hairline">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto text-accent mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-muted">
                  Free Shipping
                </span>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 mx-auto text-accent mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-muted">
                  30-Day Returns
                </span>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-5 h-5 mx-auto text-accent mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-muted">
                  Hypoallergenic
                </span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10 md:mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} sectionId="related" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
