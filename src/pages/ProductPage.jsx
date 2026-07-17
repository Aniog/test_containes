import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-deep-900">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-deep-400" /> : <ChevronDown className="w-4 h-4 text-deep-400" />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-deep-500 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-deep-500 mb-4">Product not found.</p>
          <Link to="/shop" className="text-xs text-accent hover:text-accent-dark transition-colors tracking-wider uppercase">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const imageCount = product.images?.length || 1;

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-cream pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-deep-400 mb-8 lg:mb-12">
          <Link to="/" className="hover:text-deep-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-deep-900 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-deep-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-sand/50 rounded-sm overflow-hidden mb-4">
              <div className="w-full h-full bg-warm-200 flex items-center justify-center">
                <span className="text-warm-500 text-sm tracking-wider">
                  {product.name} — View {activeImage + 1}
                </span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors ${i === activeImage ? 'border-accent' : 'border-transparent hover:border-sand'}`}
                >
                  <div className="w-full h-full bg-warm-100 flex items-center justify-center">
                    <span className="text-[9px] text-warm-400">{i + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl text-deep-900 font-medium tracking-widest2 uppercase mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-deep-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-xl font-medium text-deep-900 tabular-nums mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-sm text-deep-500 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-xs tracking-wider uppercase font-medium text-deep-900 mb-3">
                  Finish: <span className="text-deep-500 font-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 text-xs tracking-wider rounded-full border transition-all ${selectedVariant === v ? 'bg-deep-900 text-cream border-deep-900' : 'border-sand text-deep-600 hover:border-deep-400'}`}
                    >
                      {v === 'Gold' ? 'Gold Tone' : 'Silver Tone'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase font-medium text-deep-900 mb-3">Quantity</p>
              <div className="flex items-center border border-sand rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:text-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-medium tabular-nums">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:text-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-xs tracking-widest mb-6"
            >
              Add to Cart — ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen={true}>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-deep-700">Materials:</strong> {product.materials}</p>
                <p><strong className="text-deep-700">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 lg:mt-32">
            <div className="text-center mb-10">
              <p className="text-xs tracking-widest3 uppercase text-accent mb-3">Complete the Look</p>
              <h2 className="font-serif text-2xl lg:text-3xl text-deep-900 font-light">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
