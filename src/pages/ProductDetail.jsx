import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Check, Truck, RotateCcw } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { ProductImage } from '@/components/ui/ProductImage';
import { ProductCard } from '@/components/ui/ProductCard';
import { Accordion } from '@/components/ui/Accordion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { formatPrice } from '@/lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-espresso">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-accent hover:underline">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(id, 4);

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.care },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Orders are processed within 1–2 business days. Returns accepted within 30 days of delivery in original condition.',
    },
  ];

  const handleAdd = () => {
    addToCart(product, quantity, selectedTone);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-white overflow-hidden">
              <ProductImage product={product} ratio="4x5" width={900} imgId={`${product.id}-detail-main`} />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white overflow-hidden border border-stone">
                  <ProductImage
                    product={product}
                    ratio="1x1"
                    width={300}
                    imgId={`${product.id}-thumb-${i}`}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="md:pt-8">
            <p className="text-xs uppercase tracking-label text-taupe mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso font-light uppercase tracking-label mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-espresso mb-6">{formatPrice(product.price)}</p>

            <p className="text-taupe leading-relaxed mb-8">{product.description}</p>

            {product.tone.length > 1 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-label text-espresso mb-3">
                  Tone: <span className="capitalize">{selectedTone}</span>
                </p>
                <div className="flex gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`px-5 py-2 text-xs uppercase tracking-label border transition-colors ${
                        selectedTone === tone
                          ? 'border-espresso bg-espresso text-white'
                          : 'border-stone text-espresso hover:border-espresso'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <p className="text-xs uppercase tracking-label text-espresso mb-3">Quantity</p>
              <div className="flex items-center border border-stone w-fit">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-stone/50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-espresso">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-stone/50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`w-full py-4 text-xs uppercase tracking-label font-medium flex items-center justify-center gap-2 transition-colors ${
                added
                  ? 'bg-espresso text-white'
                  : 'bg-accent text-white hover:bg-accent-dark'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            <div className="flex flex-wrap gap-6 mt-6 text-xs text-taupe">
              <span className="flex items-center gap-2">
                <Truck size={14} className="text-accent" /> Free shipping over $50
              </span>
              <span className="flex items-center gap-2">
                <RotateCcw size={14} className="text-accent" /> 30-day returns
              </span>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-16 md:py-24 bg-white border-t border-stone">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
