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
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-sm tracking-extra-wide uppercase text-brand-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-warm-gray" />
        )}
      </button>
      {open && <div className="pb-4 text-sm font-sans font-light text-brand-warm-gray leading-relaxed">{children}</div>}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <p className="font-serif text-2xl text-brand-charcoal">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setQuantity(1);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef}>
      {/* Main product section */}
      <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Image gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-3">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2">
                {[0, 1].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? 'border-brand-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={`pdp-thumb-${idx === 0 ? product.imgId : product.imgId2}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 aspect-[3x4] overflow-hidden bg-brand-ivory">
                <img
                  data-strk-img-id={`pdp-main-${selectedImage === 0 ? product.imgId : product.imgId2}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
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
              <p id={product.descId} className="sr-only">{product.shortDescription}</p>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-sans text-brand-muted">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="mt-4 text-2xl font-serif text-brand-charcoal">${product.price}</p>

              <p className="mt-4 text-sm font-sans font-light text-brand-warm-gray leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Tone selector */}
              <div className="mt-6">
                <p className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal mb-3">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-5 py-2.5 font-sans text-xs font-medium tracking-extra-wide uppercase transition-colors duration-200 ${
                        selectedTone === tone
                          ? 'bg-brand-charcoal text-white'
                          : 'bg-transparent border border-brand-sand text-brand-warm-gray hover:border-brand-charcoal hover:text-brand-charcoal'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-brand-sand text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-sans text-brand-charcoal min-w-[24px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-brand-sand text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="mt-8 w-full bg-brand-gold text-white font-sans text-xs font-semibold tracking-super-wide uppercase py-4 hover:bg-brand-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description" defaultOpen>
                  <p>{product.description}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <ul className="space-y-1">
                    <li>• 18K Gold Plated over brass base</li>
                    <li>• Hypoallergenic — nickel & lead free</li>
                    <li>• Store in the provided pouch when not wearing</li>
                    <li>• Avoid contact with water, perfume, and lotions</li>
                    <li>• Gently wipe with a soft cloth after each wear</li>
                  </ul>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <ul className="space-y-1">
                    <li>• Free worldwide shipping on all orders</li>
                    <li>• Standard delivery: 5–10 business days</li>
                    <li>• Express delivery available at checkout</li>
                    <li>• 30-day hassle-free returns</li>
                    <li>• Items must be unworn and in original packaging</li>
                  </ul>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="py-16 md:py-20 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl tracking-extra-wide text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group text-center">
                <div className="aspect-[3x4] overflow-hidden bg-brand-sand/30 mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-sans text-brand-warm-gray">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
