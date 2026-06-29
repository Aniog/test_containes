import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Heart, Truck, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products, getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useImageLoader } from '@/hooks/useImageLoader';
import { ProductCard } from '@/components/ProductCard';
import { Accordion } from '@/components/ui/Accordion';
import { StarRating } from '@/components/ui/StarRating';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const containerRef = useImageLoader([id]);

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = useMemo(
    () => (product ? getRelatedProducts(product.id) : []),
    [product]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-velmora-cream text-velmora-espresso px-4">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link
          to="/shop"
          className="px-8 py-3 bg-velmora-gold text-white text-sm uppercase tracking-[0.14em] hover:bg-velmora-gold-dark transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ];

  const handleAdd = () => {
    addToCart(product, selectedTone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors mb-6"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <span id={`product-search-${product.id}`} className="sr-only">
              {product.searchTerms}
            </span>
            <div className="aspect-[4/5] bg-velmora-stone/10 overflow-hidden relative">
              <img
                alt={product.name}
                data-strk-img-id={product.imgId}
                data-strk-img={`[product-search-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={SVG_PLACEHOLDER}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-velmora-stone/10 overflow-hidden"
                >
                  <img
                    alt={`${product.name} view ${i}`}
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[product-search-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={SVG_PLACEHOLDER}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:py-8">
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <h1
              id={`product-title-${product.id}`}
              className="font-serif text-3xl md:text-5xl uppercase tracking-[0.12em] text-velmora-espresso mb-4"
            >
              {product.name}
            </h1>
            <p className="text-2xl text-velmora-espresso font-medium mb-6">
              ${product.price}
            </p>
            <p className="text-velmora-stone leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.14em] text-velmora-stone block mb-3">
                Metal Tone
              </span>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Metal tone">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    aria-pressed={selectedTone === tone}
                    className={cn(
                      'px-5 py-2.5 rounded-full border text-sm uppercase tracking-[0.1em] transition-colors',
                      selectedTone === tone
                        ? 'bg-velmora-gold border-velmora-gold text-white'
                        : 'border-velmora-espresso/20 text-velmora-espresso hover:border-velmora-gold'
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.14em] text-velmora-stone block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-velmora-espresso/20">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-velmora-espresso hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-velmora-espresso">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-velmora-espresso hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 mb-10">
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  'flex-1 py-4 text-sm uppercase tracking-[0.14em] transition-colors',
                  added
                    ? 'bg-velmora-espresso text-white'
                    : 'bg-velmora-gold text-white hover:bg-velmora-gold-dark'
                )}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="w-14 h-14 flex items-center justify-center border border-velmora-espresso/20 text-velmora-espresso hover:text-velmora-gold hover:border-velmora-gold transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-velmora-stone">
                <Truck className="w-5 h-5 text-velmora-gold" />
                Free shipping over $50
              </div>
              <div className="flex items-center gap-3 text-sm text-velmora-stone">
                <RefreshCw className="w-5 h-5 text-velmora-gold" />
                30-day easy returns
              </div>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-espresso mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <div key={p.id}>
                  <span id={`product-title-${p.id}`} className="sr-only">
                    {p.name}
                  </span>
                  <span id={`product-search-${p.id}`} className="sr-only">
                    {p.searchTerms}
                  </span>
                  <ProductCard product={p} showQuickAdd={false} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
