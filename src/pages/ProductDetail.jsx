import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gold hover:text-gold-dark font-sans text-sm underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <nav className="mb-8 font-sans text-xs text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-gold-light overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.id}-e7f8g9`}
                data-strk-img={`[pdp-name-${product.id}] [pdp-desc-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-gold-light/60 border border-hairline hover:border-gold transition-colors cursor-pointer">
                  <img
                    alt={`${product.name} view ${i}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-h1i2j3`}
                    data-strk-img={`[pdp-name-${product.id}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 id={`pdp-name-${product.id}`} className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-charcoal mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-hairline'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-charcoal mb-6">${product.price}.00</p>

            <p id={`pdp-desc-${product.id}`} className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal mb-3 block">
                Tone
              </span>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 font-sans text-xs uppercase tracking-wider border transition-colors bg-transparent ${
                      selectedVariant === variant
                        ? 'border-gold text-gold'
                        : 'border-hairline text-warm-gray hover:border-gold/50'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal mb-3 block">
                Quantity
              </span>
              <div className="flex items-center gap-0 border border-hairline w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-gold-light transition-colors bg-transparent border-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center font-sans text-sm text-charcoal border-x border-hairline">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-gold-light transition-colors bg-transparent border-none"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gold text-white font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors border-none mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-hairline">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: `${product.details.materials}\n\n${product.details.care}` },
                { key: 'shipping', title: 'Shipping & Returns', content: product.details.shipping },
              ].map(item => (
                <div key={item.key} className="border-b border-hairline">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none"
                  >
                    <span className="font-sans text-sm text-charcoal">{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4">
                      <p className="font-sans text-sm text-warm-gray leading-relaxed whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-hairline">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] bg-gold-light overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}-k4l5m6`}
                    data-strk-img={`[related-name-${p.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 id={`related-name-${p.id}`} className="font-serif text-xs uppercase tracking-widest text-charcoal text-center mb-1">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-warm-gray text-center">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
