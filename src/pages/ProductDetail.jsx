import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ChevronRight, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/StarRating';
import { ProductCard } from '@/components/ui/ProductCard';
import { getProductBySlug, PRODUCTS, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const FALLBACK_SRC =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function getImageUrl(imageId) {
  const entry = strkImgConfig[imageId];
  return entry?.results?.[0]?.url || FALLBACK_SRC;
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!product) {
      navigate('/shop', { replace: true });
      return;
    }
    setSelectedTone(product.tones[0]);
    setQuantity(1);
    setActiveImageIndex(0);
  }, [product, navigate]);

  if (!product) return null;

  const galleryUrls = product.imageIds.gallery.map(getImageUrl);
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-paper pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-taupe">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-espresso">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand/40">
              {galleryUrls.map((url, idx) => (
                <img
                  key={url}
                  alt={`${product.name} view ${idx + 1}`}
                  src={url}
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                    activeImageIndex === idx ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {galleryUrls.map((url, idx) => (
                <button
                  key={`${product.imageIds.gallery[idx]}-${idx}`}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    'relative aspect-square overflow-hidden bg-sand/40 ring-1 transition-all',
                    activeImageIndex === idx
                      ? 'ring-espresso'
                      : 'ring-transparent hover:ring-hairline'
                  )}
                >
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    src={url}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:py-8">
            <h1
              id={product.titleId}
              className="font-cormorant text-2xl font-semibold uppercase tracking-[0.18em] text-espresso md:text-3xl"
            >
              {product.name}
            </h1>
            <p className="mt-3 font-sans text-2xl font-light text-espresso">
              {formatPrice(product.price)}
            </p>
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>

            <p
              id={product.descId}
              className="mt-6 font-sans text-base font-light leading-relaxed text-taupe"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso">
                Metal Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      'h-11 rounded-full border px-6 font-sans text-xs font-medium uppercase tracking-wider transition-all',
                      selectedTone === tone
                        ? 'border-espresso bg-espresso text-white'
                        : 'border-hairline bg-white text-espresso hover:border-gold'
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso">
                Quantity
              </span>
              <div className="inline-flex items-center border border-hairline bg-white">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-espresso hover:bg-sand"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm text-espresso">{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-espresso hover:bg-sand"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="mt-8 h-14 w-full rounded-none bg-gold font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-gold-hover"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            <div className="mt-6 flex items-center gap-2 text-xs text-taupe">
              <Star className="h-4 w-4 fill-gold text-gold" />
              Free worldwide shipping on orders over $50
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="mt-10 border-t border-hairline">
              <AccordionItem value="description" className="border-b border-hairline">
                <AccordionTrigger className="py-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso hover:no-underline">
                  Description
                </AccordionTrigger>
                <AccordionContent className="pb-4 font-sans text-sm font-light leading-relaxed text-taupe">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-b border-hairline">
                <AccordionTrigger className="py-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso hover:no-underline">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="pb-4 font-sans text-sm font-light leading-relaxed text-taupe">
                  <p className="font-medium text-espresso">{product.material}</p>
                  <p className="mt-2">{product.details}</p>
                  <p className="mt-3">{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-b border-hairline">
                <AccordionTrigger className="py-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-espresso hover:no-underline">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="pb-4 font-sans text-sm font-light leading-relaxed text-taupe">
                  {product.shipping}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related */}
        <section className="mt-20 border-t border-hairline pt-16">
          <h2 className="mb-10 text-center font-playfair text-2xl font-medium text-espresso md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
