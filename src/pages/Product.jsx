import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container-narrow py-24 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addItem(product, variant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="pt-28 pb-20 bg-brand-bg">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-brand-warm">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <button key={idx} onClick={() => setSelectedImage(idx)} className={`aspect-square overflow-hidden rounded-xl bg-brand-warm border ${selectedImage === idx ? 'border-brand-accent' : 'border-transparent'}`}>
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink uppercase tracking-widest">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
              <div className="flex text-brand-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span>{product.rating} ({product.reviewCount})</span>
            </div>
            <p className="mt-6 text-2xl font-semibold text-brand-ink">${product.price}</p>
            <p className="mt-4 text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-colors ${variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-line">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-3 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold text-brand-ink w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-3 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAdd} className="btn-primary mt-8 w-full">
              {added ? <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Added to Cart</span> : 'Add to Cart'}
            </button>

            <div className="mt-10 space-y-4">
              <details className="group rounded-2xl border border-brand-line bg-brand-surface">
                <summary className="flex items-center justify-between p-4 text-sm font-semibold text-brand-ink cursor-pointer list-none">
                  Description
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-4 pb-4 text-sm text-brand-muted leading-relaxed">{product.details}</p>
              </details>
              <details className="group rounded-2xl border border-brand-line bg-brand-surface">
                <summary className="flex items-center justify-between p-4 text-sm font-semibold text-brand-ink cursor-pointer list-none">
                  Materials & Care
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-4 pb-4 text-sm text-brand-muted leading-relaxed">{product.care}</p>
              </details>
              <details className="group rounded-2xl border border-brand-line bg-brand-surface">
                <summary className="flex items-center justify-between p-4 text-sm font-semibold text-brand-ink cursor-pointer list-none">
                  Shipping & Returns
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-4 pb-4 text-sm text-brand-muted leading-relaxed">{product.shipping}</p>
              </details>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
