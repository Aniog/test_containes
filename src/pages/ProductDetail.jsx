import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium tracking-wide text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-warm-gray leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const defaultVariant = product.variants.find((v) => v.inStock);
      setSelectedVariant(defaultVariant?.value || product.variants[0]?.value);
      setQty(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-warm-gray">
        Product not found
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-hairline/30 overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
              data-strk-img-id={`detail-${product.id}`}
              data-strk-img={`[detail-name-${product.id}] [detail-category]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
            />
          </div>

          {/* Info */}
          <div className="md:py-6">
            <p id="detail-category" className="text-xs font-medium tracking-ultra-wide uppercase text-accent mb-2">
              {product.category}
            </p>
            <h1 id={`detail-name-${product.id}`} className="font-serif text-3xl md:text-4xl font-light text-charcoal uppercase tracking-ultra-wide">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-light-gray">({product.reviews} reviews)</span>
            </div>
            <p className="font-serif text-2xl font-light mt-4 text-charcoal">${product.price}</p>
            <p className="mt-5 text-sm text-warm-gray leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-wide uppercase text-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => v.inStock && setSelectedVariant(v.value)}
                    disabled={!v.inStock}
                    className={`px-5 py-2.5 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                      selectedVariant === v.value
                        ? 'border-charcoal bg-charcoal text-white'
                        : v.inStock
                        ? 'border-hairline text-charcoal hover:border-charcoal'
                        : 'border-hairline text-light-gray cursor-not-allowed line-through'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-wide uppercase text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 border border-hairline flex items-center justify-center hover:bg-hairline/30"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 h-10 border-t border-b border-hairline flex items-center justify-center text-sm font-medium">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 border border-hairline flex items-center justify-center hover:bg-hairline/30"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full mt-8 py-4 text-xs font-medium tracking-ultra-wide uppercase flex items-center justify-center gap-2 transition-colors duration-300 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-accent text-white hover:bg-accent-hover'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materialsCare}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shippingReturns}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-hairline/30 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-name-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                    />
                  </div>
                  <h3 id={`related-name-${p.id}`} className="font-serif text-sm uppercase tracking-ultra-wide text-charcoal mt-3 text-center">
                    {p.name}
                  </h3>
                  <p className="text-sm text-center mt-1 text-warm-gray">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
