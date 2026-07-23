import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-xs uppercase tracking-widest text-brand-accent">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openCart();
    }, 600);
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-sm bg-brand-surfaceAlt">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-16 w-16 overflow-hidden rounded-sm border ${
                  selectedImage === idx ? 'border-brand-accent' : 'border-brand-border'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-display text-3xl uppercase tracking-widest text-brand-text sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
            <div className="flex gap-0.5 text-brand-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>{product.rating}</span>
            <span className="text-brand-border">|</span>
            <span>{product.reviewCount} reviews</span>
          </div>
          <p className="mt-4 text-2xl text-brand-text">${product.price}</p>
          <p className="mt-4 text-sm leading-relaxed text-brand-textSoft">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-brand-muted">Tone</p>
            <div className="mt-2 flex gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                    variant === v ? 'border-brand-accent text-brand-accent' : 'border-brand-border text-brand-textSoft hover:border-brand-accent hover:text-brand-accent'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-brand-muted">Quantity</p>
            <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-brand-border">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 text-brand-textSoft hover:text-brand-text" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm text-brand-text">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 text-brand-textSoft hover:text-brand-text" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-brand-bg transition-colors hover:bg-brand-accentHover"
          >
            {added ? <Check className="h-4 w-4" /> : null}
            {added ? 'Added' : 'Add to Cart'}
          </button>

          <div className="mt-8 space-y-3 border-t border-brand-border pt-6">
            <Accordion title="Description">
              <p className="text-sm leading-relaxed text-brand-textSoft">{product.details}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="text-sm leading-relaxed text-brand-textSoft">{product.materials}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-textSoft">{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="text-sm leading-relaxed text-brand-textSoft">{product.shipping}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-textSoft">{product.returns}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl text-brand-text sm:text-3xl">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="h-64 overflow-hidden rounded-sm bg-brand-surfaceAlt">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-3 font-display text-sm uppercase tracking-widest text-brand-text">{item.name}</h3>
                <p className="text-sm text-brand-muted">${item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left text-sm uppercase tracking-widest text-brand-text"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default Product;
