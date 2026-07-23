import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { products, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Image from '@/components/Image';
import Stars from '@/components/Stars';
import Accordion from '@/components/Accordion';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Product() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState(product?.tone?.[0] || 'gold');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id, selectedImage]);

  useEffect(() => {
    if (product) {
      setTone(product.tone[0]);
      setQuantity(1);
      setSelectedImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 text-center px-5">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gold-600 underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.details.join('. ')}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef}>
      <section className="pt-20 md:pt-24 pb-12 md:pb-20 bg-cream">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible md:w-20">
                {Array.from({ length: product.images }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`shrink-0 w-16 h-16 md:w-20 md:h-20 border bg-warmgray overflow-hidden transition-colors ${
                      selectedImage === idx ? 'border-gold-600' : 'border-transparent'
                    }`}
                  >
                    <Image
                      id={`product-thumb-${product.id}-${idx}`}
                      query={`[product-name-${product.id}] [product-desc-${product.id}]`}
                      ratio="1x1"
                      width={200}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="relative flex-1 aspect-[3/4] bg-warmgray overflow-hidden">
                <Image
                  id={`product-main-${product.id}-${selectedImage}`}
                  query={`[product-name-${product.id}] [product-desc-${product.id}]`}
                  ratio="3x4"
                  width={900}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  aria-label="Previous image"
                  onClick={() => setSelectedImage((i) => (i === 0 ? product.images - 1 : i - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-cream/80 p-2 hover:bg-cream transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={1.6} />
                </button>
                <button
                  aria-label="Next image"
                  onClick={() => setSelectedImage((i) => (i === product.images - 1 ? 0 : i + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-cream/80 p-2 hover:bg-cream transition-colors"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={1.6} />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="lg:pl-8 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Stars rating={product.rating} size={14} />
                <span className="text-xs text-clay">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1
                id={`product-name-${product.id}`}
                className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-3"
              >
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-ink mb-6">
                {formatPrice(product.price)}
              </p>

              <p id={`product-desc-${product.id}`} className="text-clay leading-relaxed mb-8">
                {product.description}
              </p>

              {product.tone.length > 1 && (
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-clay block mb-3">
                    Metal Tone
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {product.tone.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTone(t)}
                        className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium border transition-colors ${
                          tone === t
                            ? 'border-gold-600 bg-gold-100 text-gold-700'
                            : 'border-warmgray hover:border-gold-400'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-clay block mb-3">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-warmgray bg-cream">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 hover:bg-warmgray transition-colors"
                  >
                    <Minus className="w-4 h-4" strokeWidth={1.6} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 hover:bg-warmgray transition-colors"
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.6} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => addItem(product, quantity, tone)}
                  className="flex-1 bg-gold-600 text-white py-4 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-gold-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" strokeWidth={1.6} />
                  Add to Cart — {formatPrice(product.price * quantity)}
                </button>
                <button className="px-5 py-4 border border-warmgray hover:border-gold-600 hover:text-gold-600 transition-colors">
                  <Heart className="w-5 h-5" strokeWidth={1.6} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-clay mb-10">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gold-600" strokeWidth={1.6} />
                  Free shipping over $50
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-gold-600" strokeWidth={1.6} />
                  30-day returns
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-600" strokeWidth={1.6} />
                  Hypoallergenic
                </div>
              </div>

              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-parchment border-t border-warmgray">
          <div className="mx-auto px-5 md:px-8 lg:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} queryContext="[related-title]" />
              ))}
            </div>
            <div id="related-title" className="sr-only">
              Related Products
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
