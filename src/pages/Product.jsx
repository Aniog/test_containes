import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">{title}</span>
        <ChevronDown className={`h-4 w-4 text-ink-secondary transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-4 text-sm text-ink-secondary leading-relaxed">{children}</div>}
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'gold');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, setCartOpen } = useCart();

  if (!product) {
    return (
      <div className="container-editorial section-padding">
        <p className="text-sm text-ink-secondary">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-4">Back to Shop</Link>
      </div>
    );
  }

  const images = product.images?.[selectedTone] || product.images?.gold || [];
  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setAdded(true);
    setCartOpen(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <main className="pt-24 md:pt-28">
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-background">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border ${
                    selectedImage === idx ? 'border-ink' : 'border-transparent'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl uppercase tracking-[0.18em] text-ink">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-ink-secondary">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                {product.rating}
              </span>
              <span>({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-ink">${product.price}</p>
            <p className="mt-4 text-sm text-ink-secondary leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="eyebrow">Tone</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => {
                      setSelectedTone(tone);
                      setSelectedImage(0);
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      selectedTone === tone
                        ? 'bg-ink text-white'
                        : 'border border-border text-ink-secondary hover:border-ink hover:text-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="eyebrow">Quantity</p>
              <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 items-center justify-center text-ink-secondary hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-9 w-9 items-center justify-center text-ink-secondary hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-accent mt-8 w-full">
              {added ? 'Added to Cart' : 'Add to Cart'}
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

        <section className="section-padding">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">You may also like</p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Related Products</h2>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Product;
