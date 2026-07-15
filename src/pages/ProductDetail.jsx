import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronLeft, Truck, RefreshCcw, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import { QuantitySelector } from '@/components/ui/QuantitySelector';
import { Accordion } from '@/components/ui/Accordion';
import { ProductCard } from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => getProductById(id), [id]);
  const { addItem } = useCart();
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (product?.toneOptions?.length) {
      setSelectedTone(product.toneOptions[0]);
    }
  }, [product]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-velmora-ink">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-velmora-gold underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Orders are processed within 1-2 business days. We offer 30-day hassle-free returns on unworn items in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-velmora-taupe transition-colors hover:text-velmora-gold"
        >
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone">
              <img
                data-strk-img-id={`product-main-${product.id}-${activeImage}`}
                data-strk-img={`[product-detail-name] [product-detail-category]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: product.images }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square overflow-hidden bg-velmora-stone transition-all ${
                    activeImage === index
                      ? 'ring-1 ring-velmora-ink'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[product-detail-name] [product-detail-category]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-6">
            <p
              id="product-detail-category"
              className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold"
            >
              {product.category}
            </p>
            <h1
              id="product-detail-name"
              className="mt-3 font-serif text-3xl uppercase tracking-[0.12em] text-velmora-ink sm:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="font-serif text-2xl text-velmora-ink">
                ${product.price}
              </span>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-velmora-taupe">
                  {product.reviewCount} reviews
                </span>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-velmora-taupe">
              {product.description}
            </p>

            {/* Tone selector */}
            {product.toneOptions.length > 1 && (
              <div className="mt-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
                  Tone
                </span>
                <div className="mt-3 flex gap-3">
                  {product.toneOptions.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
                        selectedTone === tone
                          ? 'bg-velmora-ink text-white'
                          : 'border border-velmora-sand bg-white text-velmora-taupe hover:border-velmora-ink hover:text-velmora-ink'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and add to cart */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <Button
                variant="accent"
                className="flex-1"
                onClick={() => addItem(product, quantity, selectedTone)}
              >
                Add to Cart — ${product.price * quantity}
              </Button>
              <button
                type="button"
                className="flex h-12 w-12 shrink-0 items-center justify-center border border-velmora-sand bg-white text-velmora-ink transition-colors hover:text-velmora-gold"
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-velmora-sand pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-3 text-velmora-taupe">
                <Truck size={18} className="text-velmora-gold" />
                <span className="text-xs uppercase tracking-widest">
                  Free Shipping
                </span>
              </div>
              <div className="flex items-center gap-3 text-velmora-taupe">
                <RefreshCcw size={18} className="text-velmora-gold" />
                <span className="text-xs uppercase tracking-widest">
                  30-Day Returns
                </span>
              </div>
              <div className="flex items-center gap-3 text-velmora-taupe">
                <ShieldCheck size={18} className="text-velmora-gold" />
                <span className="text-xs uppercase tracking-widest">
                  Hypoallergenic
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-velmora-sand bg-velmora-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl text-velmora-ink sm:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
