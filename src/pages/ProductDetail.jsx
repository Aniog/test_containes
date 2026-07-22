import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest font-medium text-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-warm-gray" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-charcoal-light leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-link">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id && (p.category === product.category || p.featured)).slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-xs font-sans text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-cream-dark overflow-hidden mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-300 ${
                      selectedImage === idx ? 'border-gold' : 'border-transparent hover:border-charcoal/20'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="py-2">
            <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs text-warm-gray hover:text-gold transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Shop
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-product text-charcoal font-light mb-3">
              {product.name}
            </h1>

            <p className="font-sans text-xl font-medium text-charcoal mb-3">
              ${product.price}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">({product.reviews} reviews)</span>
            </div>

            <p className="text-sm text-charcoal-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-sans font-medium border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-white'
                        : 'border-charcoal/20 text-charcoal hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.longDescription}
              </Accordion>
              <Accordion title="Materials & Care">
                <strong>Materials:</strong> {product.materials}
                <br /><br />
                <strong>Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <h2 className="section-heading">You May Also Like</h2>
              <div className="w-12 h-px bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-cream-dark overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm md:text-base uppercase tracking-product text-charcoal text-center group-hover:text-gold transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="text-sm font-sans text-charcoal text-center mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
