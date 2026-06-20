import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');
  const { addItem, setCartOpen } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-display text-3xl font-medium text-[var(--color-ink)]">Product not found</h1>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setCartOpen(true);
  };

  const sections = [
    { id: 'description', label: 'Description', content: product.description },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: (
        <div className="space-y-2 text-sm text-[var(--color-ink-secondary)]">
          <p>{product.details}</p>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <div className="space-y-2 text-sm text-[var(--color-ink-secondary)]">
          <p>{product.shipping}</p>
          <p>{product.returns}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <nav className="mb-8 text-xs text-[var(--color-ink-tertiary)]">
        <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[var(--color-accent)]">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-ink)]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-[var(--color-background)]">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedImage(i)}
                className={`aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
                  selectedImage === i ? 'border-[var(--color-accent)]' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:py-4">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-[var(--color-ink)] uppercase tracking-product">
            {product.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-[var(--color-ink)]">${product.price}</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[var(--color-star)] text-[var(--color-star)]" />
              <span className="text-sm font-medium text-[var(--color-ink)]">{product.rating}</span>
            </div>
            <span className="text-xs text-[var(--color-ink-tertiary)]">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-5 text-sm text-[var(--color-ink-secondary)] leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <p className="text-sm font-medium text-[var(--color-ink)] mb-3">Tone</p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm capitalize transition-colors ${
                    selectedVariant === variant
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]'
                      : 'border-[var(--color-border)] text-[var(--color-ink-secondary)] hover:border-[var(--color-ink)]'
                  }`}
                >
                  {selectedVariant === variant && <Check className="h-3.5 w-3.5" />}
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-[var(--color-ink)] mb-3">Quantity</p>
            <div className="inline-flex items-center rounded-full border border-[var(--color-border)]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2.5 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 text-sm font-medium text-[var(--color-ink)]">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2.5 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button type="button" onClick={handleAddToCart} className="btn-primary mt-8 w-full">
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          <div className="mt-8 space-y-2">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-[var(--color-border)]">
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
                  className="flex w-full items-center justify-between py-4 text-sm font-medium text-[var(--color-ink)]"
                >
                  {section.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSection === section.id && (
                  <div className="pb-4">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 sm:mt-20">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[var(--color-ink)] mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
