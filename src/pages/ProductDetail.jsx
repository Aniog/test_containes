import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-divider">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-ink">{title}</span>
        <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-4 text-sm text-brand-muted leading-relaxed">{children}</div>}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setDrawer } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-muted">Product not found.</p>
          <Link to="/shop" className="mt-3 inline-block text-sm font-semibold text-brand-accent hover:text-brand-accentHover">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setDrawer(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Breadcrumb" className="text-xs text-brand-muted">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-brand-ink">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/shop" className="hover:text-brand-ink">Shop</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-brand-ink">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-brand-warm aspect-[4/5]">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`overflow-hidden rounded-xl bg-brand-warm aspect-square border-2 transition-colors ${selectedImage === idx ? 'border-brand-ink' : 'border-transparent'}`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-brand-ink">{product.name}</h1>
            <p className="mt-2 text-xl text-brand-ink">${product.price}</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-brand-muted">
              <div className="flex items-center gap-1 text-brand-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium text-brand-ink">{product.rating}</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>{product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm capitalize transition-colors ${variant === v ? 'border-brand-ink text-brand-ink' : 'border-brand-divider text-brand-muted hover:text-brand-ink'}`}
                  >
                    {variant === v && <Check className="h-4 w-4" />}
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-brand-divider">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-brand-muted hover:text-brand-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm text-brand-ink w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-brand-muted hover:text-brand-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-accentHover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-ink">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

export default ProductDetail;
