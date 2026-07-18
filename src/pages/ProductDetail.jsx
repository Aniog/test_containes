import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-velmora-gold text-sm underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'details', title: 'Materials & Care', content: product.details + '\n\n' + product.care },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $75. Standard delivery: 5–10 business days. Express delivery: 2–4 business days.\n\nWe offer hassle-free 30-day returns. Items must be unworn and in original packaging. Return shipping is free for exchanges.' },
  ];

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-velmora-stone hover:text-velmora-gold transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-square bg-velmora-warm flex items-center justify-center mb-4">
              <ShoppingBag className="w-20 h-20 text-velmora-sand" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-velmora-warm flex items-center justify-center border-2 transition-colors ${
                    activeImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <ShoppingBag className="w-6 h-6 text-velmora-sand" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-velmora-charcoal">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-charcoal mt-5">${product.price}</p>

            <p className="text-sm text-velmora-stone leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Tone selector */}
            {product.tone.length > 1 && (
              <div className="mt-6">
                <p className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-charcoal mb-3">
                  Tone
                </p>
                <div className="flex gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-colors ${
                        selectedTone === tone
                          ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                          : 'bg-transparent text-velmora-charcoal border-velmora-sand hover:border-velmora-charcoal'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, quantity, selectedTone)}
              className="w-full mt-8 py-4 bg-velmora-gold text-white text-xs font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6 text-xs text-velmora-stone">
              <span>Free Shipping over $75</span>
              <span className="text-velmora-sand">|</span>
              <span>30-Day Returns</span>
              <span className="text-velmora-sand">|</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-sand">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-charcoal">
                      {acc.title}
                    </span>
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-velmora-stone" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-stone" />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-5 text-sm text-velmora-stone leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28 pt-16 border-t border-velmora-sand">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-velmora-warm flex items-center justify-center mb-3">
                    <ShoppingBag className="w-10 h-10 text-velmora-sand" />
                  </div>
                  <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-velmora-stone mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
