import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container-editorial section-padding">
        <p className="font-serif text-2xl text-brand-ink">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setQuantity(1);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Crafted from ${product.material}. To keep your jewelry looking its best, avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place and clean with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer 30-day returns for unworn items in original packaging. Express delivery available at checkout.',
    },
  ];

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white">
      <div className="container-editorial section-padding">
        <nav className="flex items-center gap-2 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <span>/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-2xl bg-brand-warm">
              <img alt={product.name} className="h-[520px] w-full object-cover" src={product.images[activeImage]} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`overflow-hidden rounded-xl border-2 transition ${
                    activeImage === idx ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img alt={`${product.name} ${idx + 1}`} className="h-24 w-full object-cover" src={image} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="product-name text-2xl md:text-3xl">{product.name}</h1>
            <p className="mt-3 text-2xl font-serif text-brand-ink">${product.price}</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5 text-brand-gold">
                {Array.from({ length: Math.floor(product.rating) }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-brand-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-5 text-sm text-brand-muted">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</p>
              <div className="mt-3 flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      selectedVariant === variant
                        ? 'border-brand-accent bg-brand-accent text-white'
                        : 'border-brand-border text-brand-ink hover:border-brand-accent'
                    }`}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                    {selectedVariant === variant && <Check className="h-3 w-3" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-brand-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-brand-muted transition-colors hover:text-brand-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-brand-muted transition-colors hover:text-brand-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary mt-8 w-full">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="hairline mt-8" />

            <div className="mt-6 space-y-3">
              {accordions.map((item) => (
                <div key={item.id} className="border-b border-brand-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-brand-ink"
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-brand-muted">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-3xl text-brand-ink">You May Also Like</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group rounded-2xl bg-brand-bg p-3">
                  <div className="overflow-hidden rounded-xl">
                    <img alt={item.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src={item.images[0]} />
                  </div>
                  <div className="mt-4">
                    <p className="product-name text-sm">{item.name}</p>
                    <p className="mt-1 text-sm text-brand-muted">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Product;
