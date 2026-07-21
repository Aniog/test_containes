import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');
  const { addItem, openCart } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm text-ink-secondary">Product not found.</p>
        <Link to="/shop" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, tone, quantity);
    openCart();
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
        <nav className="flex items-center gap-2 text-xs text-ink-secondary">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="grid gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-surface-warm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
                    selectedImage === idx ? 'border-ink' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-serif text-3xl font-medium uppercase tracking-wide md:text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-ink-muted">{product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 text-2xl font-medium">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Tone</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                      tone === option ? 'border-ink bg-ink text-white' : 'border-border text-ink hover:border-ink'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-border">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-ink-secondary hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-ink-secondary hover:text-ink"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button type="button" onClick={handleAddToCart} className="btn-primary mt-8 w-full">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-8 space-y-3">
              {[
                { key: 'description', label: 'Description', text: product.description },
                { key: 'materials', label: 'Materials & Care', text: `${product.materials}. ${product.care}` },
                { key: 'shipping', label: 'Shipping & Returns', text: product.shipping },
              ].map((section) => (
                <div key={section.key} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenSection((prev) => (prev === section.key ? '' : section.key))}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
                  >
                    {section.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openSection === section.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openSection === section.key && (
                    <p className="pb-4 text-sm leading-relaxed text-ink-secondary">{section.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="font-serif text-2xl font-medium">You may also like</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="product-card">
                  <div className="aspect-[3/4] overflow-hidden bg-surface-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif text-sm font-medium uppercase tracking-wide">{item.name}</h4>
                    <p className="mt-1 text-sm font-medium">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
