import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';

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
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-ink mb-2">Product not found</h1>
          <Link to="/shop" className="btn-primary mt-4">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="container-narrow py-10 md:py-14">
        <nav className="mb-6 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-brand-warm aspect-[3/4]">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-16 overflow-hidden rounded-xl border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand-ink' : 'border-transparent'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink uppercase tracking-wide">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-brand-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-semibold text-brand-ink">{product.rating}</span>
              </div>
              <span className="text-xs text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-2">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                      variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {variant === v && <Check className="h-3.5 w-3.5" />}
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-2">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-line">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-3 text-brand-ink hover:text-brand-accent" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold text-brand-ink w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-3 text-brand-ink hover:text-brand-accent" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="mt-8 w-full btn-primary">
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="mt-8 space-y-3 border-t border-brand-line pt-6">
              <Accordion title="Description">
                <p className="text-sm text-brand-muted leading-relaxed">{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="text-sm text-brand-muted leading-relaxed">{product.materials}</p>
                <p className="text-sm text-brand-muted leading-relaxed mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="text-sm text-brand-muted leading-relaxed">{product.shipping}</p>
                <p className="text-sm text-brand-muted leading-relaxed mt-2">{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-brand-line pt-16">
            <h2 className="section-title mb-8">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-line">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-brand-ink">{title}</span>
        <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default Product;
