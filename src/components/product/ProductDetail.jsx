import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(defaultOpen ? 'none' : '0px');

  useEffect(() => {
    if (open) {
      const el = contentRef.current;
      if (el) {
        setMaxHeight(`${el.scrollHeight}px`);
        const timer = setTimeout(() => setMaxHeight('none'), 350);
        return () => clearTimeout(timer);
      }
    } else {
      const el = contentRef.current;
      if (el) {
        setMaxHeight(`${el.scrollHeight}px`);
        requestAnimationFrame(() => {
          setMaxHeight('0px');
        });
      }
    }
  }, [open]);

  return (
    <div className="border-t border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text group-hover:text-velmora-gold transition-colors duration-200">{title}</span>
        <span className="transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown className="w-4 h-4 text-velmora-muted" />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-350"
        style={{ maxHeight, opacity: open ? 1 : 0 }}
      >
        <div className="pb-5 text-sm text-velmora-text leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedRef, relatedVisible] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-text mb-4">Product not found</p>
          <Link to="/shop" className="text-sm text-velmora-gold hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-velmora-muted tracking-wide">
          <Link to="/" className="hover:text-velmora-gold transition-colors duration-200">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-200">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-text">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-velmora-warm mb-3">
              <img
                data-strk-img-id={`${product.imgId}-detail-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-all duration-300 ${selectedImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-gold/50'}`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-velmora-text">
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.description}</p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl mt-4">${product.price}</p>

            <p className="text-sm text-velmora-text leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text mb-3">
                Tone: <span className="capitalize text-velmora-muted font-normal">{selectedTone}</span>
              </p>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs tracking-[0.12em] uppercase border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border text-velmora-text hover:border-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-gold transition-colors duration-200"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-gold transition-colors duration-200"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full mt-8 py-4 bg-velmora-gold text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-velmora-gold/20 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>18K Gold Plated over 925 Sterling Silver</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Water-resistant for everyday wear</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid direct contact with perfumes and lotions</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5-7 business days</li>
                  <li>Express delivery: 2-3 business days (available at checkout)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div
          ref={relatedRef}
          className={`reveal ${relatedVisible ? 'visible' : ''} mt-16 md:mt-24 pt-12 border-t border-velmora-border`}
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-text text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-velmora-warm mb-3">
                  <img
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-velmora-text group-hover:text-velmora-gold transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-sm mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
