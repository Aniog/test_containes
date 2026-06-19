import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-sm tracking-extra-wide uppercase text-brand-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-brand-muted" />
        ) : (
          <ChevronDown size={16} className="text-brand-muted" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-brand-muted font-sans leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedVariant(0);
      setQuantity(1);
      setSelectedImage(0);
      window.scrollTo(0, 0);
    }
  }, [id]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [selectedImage, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold font-sans hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-brand-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-brand-muted">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={`${product.imgId}-main-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${selectedImage === 0 ? 'front' : 'worn'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-brand-warm border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${idx === 0 ? 'front' : 'worn'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-brand-charcoal mt-4">
              ${product.price}
            </p>

            <p
              id={product.descId}
              className="text-sm text-brand-muted font-sans leading-relaxed mt-4"
            >
              {product.description}. Crafted with premium {product.material} materials for lasting
              beauty and comfort. Each piece is hypoallergenic and water-resistant, designed
              for everyday wear.
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-extra-wide uppercase font-sans text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((v, idx) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(idx)}
                    className={`px-5 py-2 text-xs tracking-extra-wide uppercase font-sans border transition-all duration-300 ${
                      selectedVariant === idx
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-extra-wide uppercase font-sans text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-brand-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-brand-gold hover:bg-brand-gold-dark text-white font-sans text-xs tracking-super-wide uppercase py-4 flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a stunning addition to any jewelry collection.
                  {product.description}, this piece embodies the perfect balance of
                  elegance and everyday wearability. Each piece is individually inspected
                  to ensure the highest quality standards.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1">
                  <li>&#8226; {product.material} over premium brass</li>
                  <li>&#8226; Hypoallergenic & nickel-free</li>
                  <li>&#8226; Water-resistant coating</li>
                  <li>&#8226; Store in a cool, dry place</li>
                  <li>&#8226; Avoid direct contact with perfumes & lotions</li>
                  <li>&#8226; Clean gently with a soft cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-1">
                  <li>&#8226; Free worldwide shipping on all orders</li>
                  <li>&#8226; Standard delivery: 5-7 business days</li>
                  <li>&#8226; Express delivery: 2-3 business days</li>
                  <li>&#8226; 30-day hassle-free returns</li>
                  <li>&#8226; Gift wrapping available at checkout</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-brand-sand">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal text-center mb-8 md:mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
                  <img
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal mt-2">
                  {p.name}
                </h3>
                <p className="text-sm font-sans text-brand-charcoal mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
