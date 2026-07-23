import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products.js';
import ProductCard from '@/components/home/ProductCard.jsx';
import { useCart } from '@/context/CartContext.jsx';

const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-serif text-2xl text-brand-ink">Product not found</p>
        <Link to="/shop" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accentHover">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    openCart();
  };

  const sections = [
    { id: 'description', label: 'Description', content: product.description },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: (
        <div className="space-y-2 text-sm text-brand-muted">
          <p>{product.details}</p>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <p className="text-sm text-brand-muted">{product.shipping}</p>
      ),
    },
  ];

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-brand-warm aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`overflow-hidden rounded-xl border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover aspect-square" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">{product.category}</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl text-brand-ink uppercase tracking-wide">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
                <span className="text-sm font-semibold text-brand-ink">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-6 font-serif text-3xl text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                      variant === v
                        ? 'border-brand-accent bg-brand-accent text-white'
                        : 'border-brand-line text-brand-ink hover:border-brand-accent'
                    }`}
                  >
                    {variant === v && <Check className="h-3.5 w-3.5" />}
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-brand-line">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-brand-muted hover:text-brand-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-5 text-sm font-semibold text-brand-ink">{quantity}</span>
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
              className="mt-8 w-full rounded-full bg-brand-accent py-4 text-sm font-semibold text-white hover:bg-brand-accentHover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-8 border-t border-brand-line pt-6 space-y-0">
              {sections.map((section) => (
                <div key={section.id} className="border-b border-brand-line last:border-b-0">
                  <button
                    onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-semibold uppercase tracking-widest text-brand-ink">{section.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-brand-muted transition-transform duration-300 ${
                        openSection === section.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === section.id ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-20 md:mt-28">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">You May Also Like</h2>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Product;
