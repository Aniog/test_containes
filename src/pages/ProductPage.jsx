import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStrkImages } from '@/hooks/useStrkImages';
import { StrkImg } from '@/components/ui/StrkImg';
import { StarRating } from '@/components/ui/StarRating';
import { ProductAccordion } from '@/components/product/ProductAccordion';
import { ProductCard } from '@/components/ui/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { PRODUCTS, getProductById, formatPrice } from '@/data/products';

const VARIANTS = [
  { id: 'gold', label: 'Gold', className: 'bg-velmora-gold' },
  { id: 'silver', label: 'Silver', className: 'bg-gray-300' },
];

export function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(productId), [productId]);
  const { addToCart } = useCart();
  const containerRef = useStrkImages([productId]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [adding, setAdding] = useState(false);

  const relatedProducts = useMemo(
    () => PRODUCTS.filter((p) => p.id !== product?.id).slice(0, 4),
    [product]
  );

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-velmora-cream px-6 text-center">
        <h1 className="font-serif text-4xl text-velmora-espresso">Product Not Found</h1>
        <p className="mt-3 font-display text-velmora-brown">This piece may have been moved or discontinued.</p>
        <a
          href="/shop"
          className="mt-6 bg-velmora-espresso px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-coffee"
        >
          Back to Shop
        </a>
      </div>
    );
  }

  const handleAdd = () => {
    setAdding(true);
    addToCart(product, quantity, variant);
    setTimeout(() => setAdding(false), 600);
  };

  const nextImage = () => setSelectedImage((i) => (i + 1) % product.images.length);
  const prevImage = () => setSelectedImage((i) => (i - 1 + product.images.length) % product.images.length);

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={img.thumbId}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden bg-velmora-champagne md:h-24 md:w-24 ${
                    selectedImage === idx ? 'ring-1 ring-velmora-espresso' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <StrkImg
                    id={img.thumbId}
                    query={img.query}
                    ratio={img.ratio}
                    width={200}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-velmora-champagne">
              {product.images.map((img, idx) => (
                <StrkImg
                  key={img.mainId}
                  id={img.mainId}
                  query={img.query}
                  ratio="4x5"
                  width={900}
                  alt={product.name}
                  className={`h-full w-full object-cover transition-opacity duration-500 ${
                    selectedImage === idx ? 'relative opacity-100' : 'absolute inset-0 opacity-0'
                  }`}
                  lazy={false}
                />
              ))}
              <span id={`product-${product.id}-name`} className="sr-only">
                {product.name}
              </span>
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 text-velmora-espresso backdrop-blur-sm transition-colors hover:bg-white lg:hidden"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 text-velmora-espresso backdrop-blur-sm transition-colors hover:bg-white lg:hidden"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-1 flex items-center gap-2">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-stone">({product.reviewCount} reviews)</span>
            </div>
            <h1 className="product-title text-2xl font-medium text-velmora-espresso md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-3 font-display text-2xl font-light text-velmora-brown">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 font-display text-sm font-light leading-relaxed text-velmora-brown">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
                Tone
              </p>
              <div className="flex gap-3">
                {VARIANTS.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariant(v.id)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 font-display text-xs font-medium uppercase tracking-widest transition-all ${
                      variant === v.id
                        ? 'border-velmora-espresso bg-velmora-espresso text-white'
                        : 'border-velmora-taupe text-velmora-brown hover:border-velmora-espresso'
                    }`}
                  >
                    <span className={`h-3.5 w-3.5 rounded-full ${v.className}`} />
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-taupe/50">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 text-velmora-brown hover:bg-velmora-champagne"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm text-velmora-espresso">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 text-velmora-brown hover:bg-velmora-champagne"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`mt-8 w-full py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 ${
                adding
                  ? 'bg-velmora-gold-dark'
                  : 'bg-velmora-espresso hover:bg-velmora-coffee'
              }`}
            >
              {adding ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="mt-4 flex items-center gap-2 text-xs text-velmora-stone">
              <Star size={12} className="text-velmora-gold" />
              <span>Free shipping on orders over $50. 30-day returns.</span>
            </div>

            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-velmora-taupe/30 bg-velmora-cream px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-serif text-3xl font-light text-velmora-espresso md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {relatedProducts.map((p) => (
              <div key={p.id}>
                <span id={`product-${p.id}-name`} className="sr-only">
                  {p.name}
                </span>
                <ProductCard
                  product={p}
                  imgId={`related-${p.id}`}
                  query={`[product-${p.id}-name] ${p.category} gold jewelry product`}
                  ratio="4x5"
                  width={500}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
