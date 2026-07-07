import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-bronze-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase text-bronze-700 font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-3.5 h-3.5 text-bronze-500" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-bronze-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-taupe-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section-padding pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-bronze-900">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imageLabels = ['Front View', 'Model Shot', 'Detail', 'In Box'];

  return (
    <div className="section-padding pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-taupe-400">
          <Link to="/" className="hover:text-bronze-600 transition-colors no-underline">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-bronze-600 transition-colors no-underline">Shop</Link>
          <span>/</span>
          <span className="text-bronze-700">{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left: Gallery */}
        <div>
          {/* Main image */}
          <div className="aspect-[3/4] bg-bronze-100 overflow-hidden mb-4">
            <div className="w-full h-full bg-bronze-200 flex items-center justify-center">
              <span className="text-xs tracking-[0.2em] uppercase text-bronze-500">
                {imageLabels[activeImage]}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {imageLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`aspect-square bg-bronze-100 overflow-hidden transition-all duration-200 ${
                  activeImage === i ? 'ring-1 ring-bronze-600' : 'hover:opacity-80'
                }`}
              >
                <div className="w-full h-full bg-bronze-200 flex items-center justify-center">
                  <span className="text-[9px] tracking-wider uppercase text-bronze-400">{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-bronze-900 leading-tight mb-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-bronze-500 text-bronze-500'
                    : 'text-bronze-300'
                }`}
              />
            ))}
            <span className="text-xs text-taupe-400 ml-1">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <p className="text-xl text-bronze-800 font-medium mb-6">${product.price}</p>

          {/* Description */}
          <p className="text-sm text-taupe-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mb-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-600 block mb-3">
              Finish
            </span>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-6 py-2.5 text-xs tracking-wider uppercase transition-all duration-200 ${
                    selectedVariant === v
                      ? 'bg-bronze-600 text-cream border border-bronze-600'
                      : 'bg-transparent text-bronze-600 border border-bronze-300 hover:border-bronze-500'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-600 block mb-3">
              Quantity
            </span>
            <div className="flex items-center border border-bronze-300 w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2.5 text-bronze-600 hover:text-bronze-900 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-5 text-sm text-bronze-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2.5 text-bronze-600 hover:text-bronze-900 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button onClick={handleAdd} className="btn-accent w-full mb-6 text-xs tracking-[0.2em]">
            {added ? 'Added to Bag' : 'Add to Bag'}
          </button>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2"><strong className="text-bronze-700">Materials:</strong> {product.materials}</p>
              <p><strong className="text-bronze-700">Care:</strong> {product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-20 md:mt-28">
        <div className="hairline-divider mb-12" />
        <h2 className="font-serif text-2xl md:text-3xl text-bronze-900 tracking-wide text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((rp) => (
            <Link
              key={rp.id}
              to={`/product/${rp.slug}`}
              className="group no-underline"
            >
              <div className="aspect-[3/4] bg-bronze-100 overflow-hidden mb-3">
                <div className="w-full h-full bg-bronze-200 flex items-center justify-center group-hover:opacity-80 transition-opacity">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-bronze-500">{rp.name}</span>
                </div>
              </div>
              <h3 className="font-serif text-[11px] tracking-[0.15em] uppercase text-bronze-900 group-hover:text-bronze-600 transition-colors">
                {rp.name}
              </h3>
              <p className="text-sm text-bronze-700 mt-1">${rp.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
