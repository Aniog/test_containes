import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import ProductGallery from '@/components/product/ProductGallery.jsx';
import Accordion from '@/components/product/Accordion.jsx';
import StarRating from '@/components/ui/StarRating.jsx';
import ProductCard from '@/components/ui/ProductCard.jsx';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setAdded(false);
  }, [productId]);

  useEffect(() => {
    if (product) {
      setTone(product.tone.includes('gold') ? 'gold' : product.tone[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, tone);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days. We offer 30-day hassle-free returns on unworn items in original packaging.',
    },
  ];

  return (
    <div className="bg-cream pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-stone transition hover:text-ink"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <div className="grid gap-12 lg:grid-cols-2">
          <ProductGallery product={product} />

          <div className="flex flex-col justify-center lg:pl-8">
            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-stone">
                {product.reviewCount} reviews
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl uppercase tracking-widest text-ink md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 font-serif text-2xl text-ink">${product.price}</p>

            <p className="mt-6 text-base leading-relaxed text-stone">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-stone">
                Metal Tone
              </span>
              <div className="mt-3 flex gap-3">
                {['gold', 'silver'].map((t) => {
                  const available = product.tone.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={!available}
                      onClick={() => available && setTone(t)}
                      aria-pressed={tone === t}
                      className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition ${
                        tone === t
                          ? 'border-ink bg-ink text-cream'
                          : available
                            ? 'border-warm-gray text-ink hover:border-ink'
                            : 'cursor-not-allowed border-warm-gray/40 bg-warm-gray/10 text-stone/40'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-stone">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-warm-gray bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-stone hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`mt-8 w-full py-4 text-xs uppercase tracking-widest text-white transition ${
                added ? 'bg-stone' : 'bg-gold hover:bg-gold-hover'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Cart'}
            </button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-widest text-gold">Complete the Look</p>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                You May Also Like
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  query={`[product-${p.id}-title]`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
