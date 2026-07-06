import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Heart, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-warmgray transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out-expo ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="text-sm text-warmgray leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-xs tracking-widest uppercase text-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, quantity, variant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <div className="flex items-center gap-2 text-xs text-warmgray">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-gold' : 'border-transparent'}`}
                >
                  <div
                    className={`w-full h-full ${idx === 0 ? 'bg-gradient-to-br from-sand to-parchment' : 'bg-gradient-to-br from-taupe to-sand'}`}
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden bg-parchment relative">
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${selectedImage === 0 ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  alt={`${product.name} main`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`${product.id}-main`}
                  data-strk-img={`[product-name] [product-desc]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${selectedImage === 1 ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  alt={`${product.name} alternate`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`${product.id}-alt`}
                  data-strk-img={`[product-desc] [product-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:py-6">
            <p className="text-xs font-medium tracking-widest uppercase text-gold mb-2">
              {product.category}
            </p>
            <h1 id="product-name" className="font-serif text-3xl md:text-4xl text-charcoal tracking-widest uppercase">
              {product.name}
            </h1>
            <p id="product-desc" className="hidden">{product.description}</p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-warmgray">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-charcoal mt-5">${product.price}</p>

            <p className="mt-5 text-sm text-warmgray leading-relaxed">{product.description}</p>

            {/* Variant */}
            <div className="mt-7">
              <p className="text-xs font-medium tracking-widest uppercase text-charcoal mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase border transition-all ${
                      variant === v
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-sand text-warmgray hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-xs font-medium tracking-widest uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-sand rounded-sm w-fit">
                <button
                  className="px-4 py-2.5 text-charcoal hover:bg-sand transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium text-charcoal min-w-[2rem] text-center">{quantity}</span>
                <button
                  className="px-4 py-2.5 text-charcoal hover:bg-sand transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors ${
                  added
                    ? 'bg-gold text-espresso'
                    : 'bg-charcoal text-cream hover:bg-espresso'
                }`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                className="px-4 border border-sand text-charcoal hover:border-charcoal transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Details:</strong> {product.details}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-sand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal">You May Also Like</h2>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
