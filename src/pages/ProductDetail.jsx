import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Heart, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import Accordion from '@/components/Accordion';
import ProductCard from '@/components/ProductCard';
import {
  VividAuraImage,
  MajesticFloraImage,
  GoldenSphereImage,
  AmberLaceImage,
  RoyalHeirloomImage,
} from '@/components/ProductImages';
import { useImageLoader } from '@/hooks/useImageLoader';

const productImageMap = {
  'vivid-aura-jewels': VividAuraImage,
  'majestic-flora-nectar': MajesticFloraImage,
  'golden-sphere-huggies': GoldenSphereImage,
  'amber-lace-earrings': AmberLaceImage,
  'royal-heirloom-set': RoyalHeirloomImage,
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find(p => p.id === id), [id]);
  const { addItem } = useCart();
  const containerRef = useImageLoader([id]);

  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl text-espresso">Product Not Found</h1>
        <Link
          to="/shop"
          className="mt-4 font-sans text-sm uppercase tracking-widest text-gold hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const related = useMemo(
    () => products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4),
    [product],
  );

  const accordionItems = [
    { title: 'Description', content: product.description },
    {
      title: 'Materials & Care',
      content: `${product.materials} ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content: `${product.shipping} ${product.returns}`,
    },
  ];

  const handleAdd = e => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-taupe transition-colors hover:text-gold"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div
              data-strk-bg-id={`${product.imgId}-main`}
              data-strk-bg={`[${product.titleId}]`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              role="img"
              aria-label={product.name}
              className="aspect-[4/5] w-full bg-warm-gray bg-cover bg-center"
            />
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square overflow-hidden bg-warm-gray bg-cover bg-center ${
                    activeImage === index ? 'ring-1 ring-espresso' : 'opacity-80'
                  }`}
                  data-strk-bg-id={`${product.imgId}-thumb-${index}`}
                  data-strk-bg={`[${product.titleId}]`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="300"
                  aria-label={`${product.name} view ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="mt-2 font-serif text-3xl font-medium uppercase tracking-widest text-espresso md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.description}
            </p>

            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="font-sans text-xs text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-5 font-sans text-2xl font-light text-espresso">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 font-sans text-sm leading-relaxed text-taupe">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-espresso">
                Metal Tone
              </span>
              <div className="mt-3 flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-6 py-2 font-sans text-xs font-medium uppercase tracking-widest transition-all ${
                      variant === v
                        ? 'border-espresso bg-espresso text-cream'
                        : 'border-border-strong text-taupe hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-border">
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-taupe hover:text-espresso"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-espresso">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-taupe hover:text-espresso"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors ${
                  added ? 'bg-espresso' : 'bg-gold hover:bg-gold-hover'
                }`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>

              <button
                type="button"
                className="border border-border p-3.5 text-espresso transition-colors hover:border-gold hover:text-gold"
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-ivory py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-2xl font-medium text-espresso">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {related.map(p => {
                const RelatedImage = productImageMap[p.id];
                return (
                  <ProductCard
                    key={p.id}
                    product={p}
                    image={RelatedImage ? <RelatedImage /> : null}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
