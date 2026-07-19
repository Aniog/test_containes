import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openSection, setOpenSection] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 btn-outline inline-flex">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const sections = [
    { id: 'description', label: 'Description', content: product.description },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: (
        <div className="space-y-3 text-sm text-brand-muted">
          <p>{product.details}</p>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <div className="space-y-3 text-sm text-brand-muted">
          <p>{product.shipping}</p>
          <p>{product.returns}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <nav className="mb-8 text-xs uppercase tracking-widest text-brand-subtle">
        <Link to="/" className="hover:text-brand-ink transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-brand-ink transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-4">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-brand-warm">
            <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-20 w-16 overflow-hidden rounded-xl border ${
                  selectedImage === idx ? 'border-brand-ink' : 'border-transparent'
                } bg-brand-warm`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-brand-ink uppercase tracking-wide">{product.name}</h1>
          <p className="mt-3 text-2xl text-brand-ink">${product.price}</p>
          <div className="mt-3 flex items-center gap-2 text-brand-accent">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-brand-ink">{product.rating}</span>
            <span className="text-sm text-brand-subtle">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-6 text-sm md:text-base text-brand-muted leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-brand-ink font-semibold mb-3">Finish</p>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                    variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
                  }`}
                >
                  {variant === v && <Check className="h-3.5 w-3.5" />}
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-brand-ink font-semibold mb-3">Quantity</p>
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-line">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex h-10 w-10 items-center justify-center text-brand-ink" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium text-brand-ink w-6 text-center">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="flex h-10 w-10 items-center justify-center text-brand-ink" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button onClick={handleAdd} className="mt-8 w-full btn-primary">
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>

          <div className="mt-10 border-t border-brand-line pt-8 space-y-3">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-brand-line last:border-b-0">
                <button
                  onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-widest text-brand-ink font-semibold">{section.label}</span>
                  <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform ${openSection === section.id ? 'rotate-180' : ''}`} />
                </button>
                {openSection === section.id && <div className="pb-4">{section.content}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <p className="section-subtitle mb-2">Complete the look</p>
          <h2 className="section-title mb-8">You may also like</h2>
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

export default Product;