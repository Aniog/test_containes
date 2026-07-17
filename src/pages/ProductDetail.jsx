import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Star, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold tracking-widest uppercase">{title}</span>
        <ChevronDown className={`w-4 h-4 text-ink-secondary transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-4 text-sm text-ink-secondary leading-relaxed">{children}</div>}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, openDrawer } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Product not found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <nav className="flex items-center gap-2 text-xs text-ink-secondary mb-8">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-background rounded-sm overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square bg-background rounded-sm overflow-hidden border-2 transition-colors ${
                  selectedImage === idx ? 'border-ink' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="md:py-4">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-2">{product.name}</h1>
          <p className="font-serif text-2xl text-ink-secondary mb-4">${product.price}</p>

          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${idx < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border-strong'}`}
                />
              ))}
            </div>
            <span className="text-xs text-ink-secondary">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="text-ink-secondary leading-relaxed mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3">Finish</p>
            <div className="flex gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase border rounded-sm transition-colors ${
                    variant === v
                      ? 'bg-ink text-white border-ink'
                      : 'bg-surface text-ink border-border hover:border-ink'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3">Quantity</p>
            <div className="inline-flex items-center border border-border rounded-sm">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-ink-secondary hover:text-ink transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-ink-secondary hover:text-ink transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn-primary w-full mb-3"
          >
            {added ? (
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4" /> Added to Cart
              </span>
            ) : (
              'Add to Cart'
            )}
          </button>

          <div className="space-y-0 mt-8">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.details}</p>
              <p className="mt-2">{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 md:mt-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">You May Also Like</p>
              <h2 className="section-heading">Related Products</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
