import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-ultra-wide text-brand-charcoal">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-brand-muted" /> : <ChevronDown className="w-4 h-4 text-brand-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-brand-muted font-sans leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="text-sm text-brand-gold font-sans uppercase tracking-wider hover:underline">
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
        <nav className="mb-6 text-xs font-sans text-brand-muted">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] jewelry ${selectedImage === 0 ? 'front' : 'detail'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-brand-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry ${i === 0 ? 'front' : 'detail'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:pl-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wider text-brand-charcoal mb-2">
              {product.name}
            </h1>
            <p id={product.descId} className="text-sm text-brand-muted font-sans mb-3">{product.description}</p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-hairline'}`} />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans">({product.reviews})</span>
            </div>

            <p className="text-2xl font-serif text-brand-charcoal mb-6">${product.price}</p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-ultra-wider text-brand-muted mb-2">Tone</p>
              <div className="flex gap-2">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTone(t)}
                    className={`px-5 py-2 text-xs font-sans uppercase tracking-wider border transition-all duration-200 ${
                      selectedTone === t
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-hairline text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-ultra-wider text-brand-muted mb-2">Quantity</p>
              <div className="flex items-center border border-brand-hairline w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-brand-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full bg-brand-gold text-white text-xs font-sans uppercase tracking-ultra-wide py-4 hover:bg-brand-gold-dark transition-colors flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>The {product.name} is a stunning piece from our demi-fine collection. {product.description}, crafted with meticulous attention to detail. Each piece is designed to transition effortlessly from day to night, making it the perfect addition to your jewelry rotation.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K Gold Plated over brass base</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Tarnish-resistant coating</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–7 business days</li>
                  <li>Express delivery: 2–3 business days (available at checkout)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-brand-hairline">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-ultra-wider text-brand-charcoal">{p.name}</h3>
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
