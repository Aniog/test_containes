import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-nav font-medium text-stone-900">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
      </button>
      {open && <div className="pb-4 text-sm text-stone-600 font-light leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  useEffect(() => {
    if (relatedRef.current) {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-500 font-light">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-accent text-sm hover:text-accent-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);
  const images = [
    { imgId: product.imgId, label: 'main' },
    { imgId: product.imgIdHover, label: 'alternate' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setQuantity(1);
  };

  return (
    <div className="pt-20 md:pt-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/3] overflow-hidden bg-ivory mb-3">
              <img
                data-strk-img-id={images[selectedImg].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${images[selectedImg].label}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={img.label}
                  onClick={() => setSelectedImg(i)}
                  className={`w-20 h-16 overflow-hidden border-2 transition-colors ${selectedImg === i ? 'border-accent' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${img.label} thumbnail`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${img.label}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pl-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-stone-900"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone-500">({product.reviews})</span>
            </div>

            <p className="text-xl font-serif text-stone-900 mt-4">${product.price}</p>

            <p
              id={product.descId}
              className="text-stone-600 font-light leading-relaxed mt-4"
            >
              {product.description}. Crafted with premium {product.material.toLowerCase()} materials for lasting shine and comfort. Each piece is hypoallergenic and tarnish-resistant.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-nav font-medium text-stone-900 mb-3">Tone</p>
              <div className="flex gap-2">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs uppercase tracking-nav font-medium border transition-colors duration-300 ${
                      selectedTone === tone
                        ? 'border-accent bg-accent text-white'
                        : 'border-stone-300 text-stone-700 hover:border-accent'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-nav font-medium text-stone-900 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-stone-300 flex items-center justify-center text-stone-600 hover:border-stone-500 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-stone-300 flex items-center justify-center text-stone-600 hover:border-stone-500 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-accent text-white text-xs uppercase tracking-nav font-medium py-4 hover:bg-accent-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a signature Velmora piece, designed to elevate any look with
                  understated elegance. {product.description}, featuring premium {product.material.toLowerCase()} construction
                  that ensures lasting beauty and comfort for everyday wear.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1">
                  <li>• {product.material} over brass base</li>
                  <li>• Hypoallergenic — nickel and lead free</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid direct contact with perfume or lotions</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-1">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–7 business days</li>
                  <li>• Express delivery available at checkout</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Gift wrapping available</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-stone-900 text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-ivory">
                  <img
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-stone-900 mt-2 group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-stone-900 mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
