import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-warm-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-wide uppercase text-brand-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-warm-gray" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-brand-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-wide uppercase text-brand-gold hover:text-brand-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-brand-warm-muted">
            <li><Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="text-sm text-brand-warm-gray mt-2">{product.description}</p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-warm-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-warm-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-brand-charcoal mt-4">${product.price}</p>

            <div className="h-px bg-brand-warm-border my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <label className="font-sans text-xs tracking-wide uppercase text-brand-charcoal block mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`font-sans text-xs tracking-wide uppercase px-6 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === variant
                        ? 'border-brand-gold text-brand-gold bg-brand-gold/5'
                        : 'border-brand-warm-border text-brand-warm-gray hover:border-brand-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-sans text-xs tracking-wide uppercase text-brand-charcoal block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-brand-warm-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full font-sans text-xs tracking-wide uppercase bg-brand-gold text-white py-4 flex items-center justify-center gap-2 hover:bg-brand-gold-dark transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="h-px bg-brand-warm-border my-8" />

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p>{product.details}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2">{product.materials}</p>
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5–7 business days. Express shipping available at checkout.</p>
              <p>We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-brand-warm-border">
          <h2 className="font-serif text-xl md:text-2xl tracking-wide text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
                  <img
                    data-strk-img-id={`${p.images[0].imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs tracking-ultra-wide uppercase text-brand-charcoal">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-brand-charcoal mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
