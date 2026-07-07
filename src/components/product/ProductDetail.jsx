import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import RelatedProducts from './RelatedProducts';
import RevealSection from '@/components/RevealSection';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-extra-wide uppercase text-brand-gold mt-4 inline-block link-underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordions = [
    {
      title: 'Description',
      content: product.details,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.\n\nWe offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-brand-muted">
            <li><Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <RevealSection>
            <div className="space-y-3">
              <div className="aspect-[3/4] overflow-hidden bg-brand-warm img-placeholder">
                <img
                  data-strk-img-id={`pdp-main-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-brand-warm cursor-pointer hover:opacity-80 transition-opacity img-placeholder">
                    <img
                      data-strk-img-id={`pdp-thumb-${product.imgId}-${i}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Product info */}
          <RevealSection delay={1}>
            <div className="py-2">
              <h1
                id={product.titleId}
                className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal"
              >
                {product.name}
              </h1>

              <p
                id={product.descId}
                className="font-sans text-sm text-brand-muted mt-2"
              >
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-brand-gold text-brand-gold'
                          : 'text-brand-sand'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-brand-muted">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-2xl text-brand-charcoal mt-4">
                ${product.price}
              </p>

              <div className="w-full h-px bg-brand-sand my-6" />

              {/* Variant selector */}
              <div>
                <span className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted block mb-3">
                  Tone
                </span>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-wide uppercase px-6 py-2.5 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-brand-gold text-brand-gold bg-brand-gold/5'
                          : 'border-brand-sand text-brand-muted hover:border-brand-gold hover:text-brand-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <span className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted block mb-3">
                  Quantity
                </span>
                <div className="flex items-center border border-brand-sand w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-brand-charcoal border-x border-brand-sand">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full mt-8 font-sans text-xs tracking-extra-wide uppercase py-4 text-white transition-all duration-300 flex items-center justify-center gap-2 btn-lift ${
                  addedToCart
                    ? 'bg-brand-charcoal'
                    : 'bg-brand-gold hover:bg-brand-gold-dark'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mt-4">
                <span className="font-sans text-[10px] tracking-wide text-brand-muted-light uppercase">Free Shipping</span>
                <span className="font-sans text-[10px] tracking-wide text-brand-muted-light uppercase">30-Day Returns</span>
                <span className="font-sans text-[10px] tracking-wide text-brand-muted-light uppercase">Hypoallergenic</span>
              </div>

              <div className="w-full h-px bg-brand-sand my-8" />

              {/* Accordions */}
              <div className="space-y-0">
                {accordions.map((acc) => (
                  <div key={acc.title} className="border-b border-brand-sand">
                    <button
                      onClick={() =>
                        setActiveAccordion(activeAccordion === acc.title ? null : acc.title)
                      }
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="font-sans text-xs tracking-extra-wide uppercase text-brand-charcoal">
                        {acc.title}
                      </span>
                      <div className={`transition-transform duration-300 ${activeAccordion === acc.title ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4 text-brand-muted" />
                      </div>
                    </button>
                    <div
                      className={`accordion-content ${activeAccordion === acc.title ? 'open' : ''}`}
                    >
                      <div className="pb-4">
                        <p className="font-sans text-sm text-brand-muted leading-relaxed whitespace-pre-line">
                          {acc.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Related products */}
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}
