import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, Truck, RotateCcw, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { PRODUCTS, getProductById, getRelatedProducts, formatPrice } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { StarRating } from '@/components/shared/StarRating';
import { Accordion } from '@/components/shared/Accordion';
import { QuantitySelector } from '@/components/shared/QuantitySelector';
import { ProductCard } from '@/components/shared/ProductCard';
import { StockImage } from '@/components/shared/StockImage';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useImageLoader([productId]);

  const product = useMemo(() => getProductById(productId), [productId]);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0]?.value || '',
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate('/shop', { replace: true });
      return;
    }
    setSelectedVariant(product.variants[0]?.value || '');
    setQuantity(1);
    setActiveImageIndex(0);
    setAdded(false);
    window.scrollTo(0, 0);
  }, [product, navigate]);

  if (!product) return null;

  const galleryImages = product.images.gallery.map((img, index) => ({
    ...img,
    alt:
      index === 0
        ? product.name
        : index === 1
          ? `${product.name} detail`
          : index === 2
            ? `${product.name} lifestyle`
            : `${product.name} worn`,
  }));

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials} ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $75. Standard delivery arrives within 5–10 business days. Need it sooner? Express options are available at checkout. Enjoy 30-day hassle-free returns on unworn pieces in original packaging.',
    },
  ];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const nextImage = () =>
    setActiveImageIndex((i) => (i + 1) % galleryImages.length);
  const prevImage = () =>
    setActiveImageIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  return (
    <main ref={containerRef} className="bg-cream pb-16 md:pb-24">
      <div className="mx-auto max-w-[1440px] px-4 pt-24 md:px-8 lg:px-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 pb-6 text-xs font-medium uppercase tracking-widest text-ink-muted hover:text-ink"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              {galleryImages.map((img, index) => (
                <div
                  key={img.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeImageIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
                  }`}
                >
                  <StockImage
                    id={img.id}
                    ratio="4x5"
                    width={900}
                    queryParts={product.images.primary.queryParts}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 bg-paper/90 p-2 text-ink hover:bg-paper"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 bg-paper/90 p-2 text-ink hover:bg-paper"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {galleryImages.map((img, index) => (
                <button
                  key={img.thumbId}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative aspect-[4/5] w-20 shrink-0 overflow-hidden border-2 transition ${
                    index === activeImageIndex ? 'border-gold' : 'border-transparent'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <StockImage
                    id={img.thumbId}
                    ratio="4x5"
                    width={200}
                    queryParts={product.images.primary.queryParts}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:py-8">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {product.category}
            </p>
            <h1 className="mt-3 font-serif text-3xl uppercase tracking-wider text-ink md:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-ink-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-5 font-sans text-2xl font-light text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 leading-relaxed text-ink-muted">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-ink">
                Finish
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.value}
                    type="button"
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wider transition ${
                      selectedVariant === variant.value
                        ? 'border-ink bg-ink text-cream'
                        : 'border-hairline bg-paper text-ink hover:border-ink'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white transition ${
                  added ? 'bg-ink' : 'bg-gold hover:bg-gold-dark'
                }`}
              >
                {added ? 'Added to Bag' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="border border-hairline p-3 text-ink transition hover:border-ink"
                aria-label="Add to wishlist"
              >
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-2 border-y border-hairline py-5 text-center">
              <div>
                <Truck size={18} className="mx-auto text-gold" strokeWidth={1.5} />
                <p className="mt-2 text-[10px] uppercase tracking-wider text-ink-muted">
                  Free Shipping
                </p>
              </div>
              <div>
                <RotateCcw size={18} className="mx-auto text-gold" strokeWidth={1.5} />
                <p className="mt-2 text-[10px] uppercase tracking-wider text-ink-muted">
                  30-Day Returns
                </p>
              </div>
              <div>
                <ShieldCheck size={18} className="mx-auto text-gold" strokeWidth={1.5} />
                <p className="mt-2 text-[10px] uppercase tracking-wider text-ink-muted">
                  1-Year Warranty
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="mx-auto mt-16 max-w-[1440px] px-4 md:mt-24 md:px-8 lg:px-12">
        <h2 className="mb-8 font-serif text-2xl text-ink md:mb-10 md:text-3xl">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {getRelatedProducts(product.id, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
