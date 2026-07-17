import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Star, ChevronDown } from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, toggleCart } = useCart();
  const [selectedTone, setSelectedTone] = useState(product?.tone || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedTone);
    }
    toggleCart();
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      key: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      label: 'Materials & Care',
      content: (
        <div>
          <p>{product.details}</p>
          <p className="mt-3 text-brand-muted">{product.care}</p>
        </div>
      ),
    },
    {
      key: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <div>
          <p>{product.shipping}</p>
        </div>
      ),
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <nav aria-label="Breadcrumb" className="text-xs text-brand-subtle">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-brand-accent transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl bg-brand-warm">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(idx)}
                className={`h-20 w-16 overflow-hidden rounded-xl border ${
                  activeImage === idx ? 'border-brand-ink' : 'border-transparent'
                } bg-brand-warm`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="product-name">{product.name}</h1>
          <p className="mt-2 text-xl font-semibold text-brand-ink">${product.price}</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
            <div className="flex gap-0.5 text-brand-gold">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>{product.rating} ({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-brand-muted">{product.description}</p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</p>
            <div className="mt-3 flex gap-3">
              {['gold', 'silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    selectedTone === tone
                      ? 'border-brand-ink bg-brand-ink text-white'
                      : 'border-brand-divider text-brand-ink hover:border-brand-ink'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-brand-divider">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 text-brand-ink hover:text-brand-accent transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-semibold text-brand-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 text-brand-ink hover:text-brand-accent transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button type="button" onClick={handleAddToCart} className="btn-primary mt-8 w-full">
            Add to Cart
          </button>

          <div className="mt-8 space-y-3 border-t border-brand-divider pt-6">
            {accordions.map((item) => (
              <div key={item.key} className="border-b border-brand-divider">
                <button
                  type="button"
                  onClick={() => setOpenAccordion((prev) => (prev === item.key ? '' : item.key))}
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-widest text-brand-ink"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openAccordion === item.key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === item.key ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 text-sm leading-relaxed text-brand-muted">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="section-title">You May Also Like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group overflow-hidden rounded-2xl bg-brand-warm">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="product-name text-sm">{item.name}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-ink">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Product;
