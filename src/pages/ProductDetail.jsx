import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    setMainImageIndex(0);
    setQuantity(1);
    if (product) setSelectedTone(product.tone[0]);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="pt-[72px] min-h-screen bg-velmora-cream flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-xl text-velmora-warm-gray mb-4">Product not found</p>
          <Link
            to="/shop"
            className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-velmora-gold hover:text-velmora-gold-dark"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(slug);

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.details}\n\nCare: ${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <div className="pt-[60px] md:pt-[72px] min-h-screen bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-6 md:py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <Link to="/" className="font-sans text-[11px] text-velmora-warm-gray hover:text-velmora-charcoal transition-colors">
            Home
          </Link>
          <span className="text-velmora-border-dark">/</span>
          <Link to="/shop" className="font-sans text-[11px] text-velmora-warm-gray hover:text-velmora-charcoal transition-colors">
            Shop
          </Link>
          <span className="text-velmora-border-dark">/</span>
          <span className="font-sans text-[11px] text-velmora-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-[4/5] bg-velmora-cream-dark rounded-sm overflow-hidden mb-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-velmora-gold/40 flex items-center justify-center">
                  <div className="w-4 h-4 bg-velmora-gold rounded-full" />
                </div>
              </div>
              {/* Image nav arrows */}
              <button
                onClick={() => setMainImageIndex((i) => (i > 0 ? i - 1 : 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMainImageIndex((i) => (i < 1 ? i + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {[0, 1].map((i) => (
                  <button
                    key={i}
                    onClick={() => setMainImageIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      mainImageIndex === i ? 'bg-velmora-charcoal' : 'bg-velmora-charcoal/25'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setMainImageIndex(i)}
                  className={`w-16 h-20 bg-velmora-cream-dark rounded-sm overflow-hidden border-2 transition-colors ${
                    mainImageIndex === i ? 'border-velmora-charcoal' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border border-velmora-gold/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:pt-4">
            <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-[26px] md:text-[32px] font-medium tracking-[0.06em] uppercase text-velmora-charcoal mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <span className="font-sans text-[20px] font-medium text-velmora-charcoal">
                ${product.price}
              </span>
              <span className="text-velmora-border-dark">|</span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                <span className="font-sans text-[13px] text-velmora-warm-gray">
                  {product.rating}
                </span>
                <span className="font-sans text-[12px] text-velmora-warm-gray/60">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="font-sans text-[14px] text-velmora-warm-gray leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Tone selector */}
            {product.tone.length > 1 && (
              <div className="mb-5">
                <p className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-velmora-charcoal mb-2">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-5 py-2 rounded-full font-sans text-[12px] font-medium tracking-wide capitalize border transition-all duration-200 ${
                        selectedTone === tone
                          ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                          : 'bg-transparent text-velmora-warm-gray border-velmora-border hover:border-velmora-charcoal'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-velmora-charcoal mb-2">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-border rounded-full px-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-sans text-[13px] font-medium w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, quantity, selectedTone)}
              className="w-full py-4 bg-velmora-charcoal text-white font-sans text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-velmora-charcoal-light transition-colors duration-300 mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Trust mini */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-velmora-border">
              {[
                'Free Shipping',
                '30-Day Returns',
                'Hypoallergenic',
              ].map((t) => (
                <span
                  key={t}
                  className="font-sans text-[10px] text-velmora-warm-gray tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="flex flex-col">
              {accordions.map((acc) => (
                <div
                  key={acc.key}
                  className="border-b border-velmora-border"
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? '' : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 group"
                  >
                    <span className="font-sans text-[13px] font-medium text-velmora-charcoal tracking-wide">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-velmora-warm-gray transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-60 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-[13px] text-velmora-warm-gray leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-velmora-border">
            <h2 className="font-serif text-[22px] md:text-[28px] font-light text-velmora-charcoal mb-8 md:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}