import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import { ProductCard } from '@/components/product/ProductCard';
import { Accordion } from '@/components/product/Accordion';

const variants = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
];

export function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(productId), [productId]);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-3xl text-velmora-text">Product Not Found</h1>
        <p className="mt-3 text-velmora-muted">
          We could not find the piece you are looking for.
        </p>
        <Button onClick={() => navigate('/shop')} className="mt-6">
          Continue Shopping
        </Button>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ];

  const handleAddToCart = () => {
    addToCart(product, { variant: selectedVariant, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-velmora-bg">
      {/* Breadcrumb / back */}
      <div className="px-5 md:px-8 lg:px-12 xl:px-16 pt-24 md:pt-28 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-text transition-colors"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      </div>

      <section className="px-5 md:px-8 lg:px-12 xl:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar lg:w-20">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'relative flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 overflow-hidden border transition-colors',
                    selectedImage === index
                      ? 'border-velmora-text'
                      : 'border-velmora-hairline hover:border-velmora-sand'
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="img-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] flex-1 overflow-hidden border border-velmora-hairline bg-velmora-surface">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="img-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col lg:py-8">
            <div className="mb-1 flex items-center gap-2">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest-plus text-velmora-text">
              {product.name}
            </h1>
            <p className="mt-3 font-sans text-xl md:text-2xl text-velmora-text">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-velmora-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="block mb-3 font-sans text-xs uppercase tracking-widest text-velmora-muted">
                Metal Tone
              </span>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={cn(
                      'px-6 py-2.5 rounded-full text-xs font-sans uppercase tracking-widest border transition-all',
                      selectedVariant === variant.id
                        ? 'border-velmora-accent text-velmora-accent bg-velmora-accent/5'
                        : 'border-velmora-hairline text-velmora-muted hover:border-velmora-sand'
                    )}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="block mb-3 font-sans text-xs uppercase tracking-widest text-velmora-muted">
                Quantity
              </span>
              <div className="inline-flex items-center border border-velmora-hairline bg-velmora-surface">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-text"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm tabular-nums text-velmora-text">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-text"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <Button
                onClick={handleAddToCart}
                className="flex-1"
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </Button>
              <button
                onClick={() => setIsWishlisted((v) => !v)}
                className={cn(
                  'flex h-12 w-12 items-center justify-center border transition-colors',
                  isWishlisted
                    ? 'border-velmora-accent text-velmora-accent'
                    : 'border-velmora-hairline text-velmora-muted hover:border-velmora-sand'
                )}
                aria-label="Add to wishlist"
              >
                <Heart
                  size={20}
                  className={cn(isWishlisted && 'fill-current')}
                />
              </button>
              <button
                className="flex h-12 w-12 items-center justify-center border border-velmora-hairline text-velmora-muted hover:border-velmora-sand transition-colors"
                aria-label="Share product"
              >
                <Share2 size={18} />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="border-t border-velmora-hairline bg-velmora-surface py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12 xl:px-16">
          <h2 className="mb-10 md:mb-12 font-serif text-2xl md:text-3xl text-center text-velmora-text">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
