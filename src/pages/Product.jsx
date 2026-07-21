import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
        <p className="font-serif text-2xl">Product not found</p>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, tone);
    }
  };

  const sections = [
    { key: 'description', label: 'Description', text: product.description },
    { key: 'materials', label: 'Materials & Care', text: product.care },
    { key: 'shipping', label: 'Shipping & Returns', text: product.shipping },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <nav className="mb-6 text-xs text-brand-muted">
        <Link to="/" className="hover:text-brand-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-brand-accent">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-brand-warm">
            <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-16 w-16 overflow-hidden rounded-lg border ${selectedImage === idx ? 'border-brand-ink' : 'border-transparent'}`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="product-name text-base md:text-lg">{product.name}</h1>
          <p className="mt-2 text-xl font-medium text-brand-ink">${product.price}</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-brand-muted">
            <span className="flex items-center gap-1 text-brand-accent">
              <Star size={16} fill="currentColor" />
              {product.rating}
            </span>
            <span>·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium capitalize transition-colors ${
                    tone === t ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-divider text-brand-ink hover:border-brand-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-divider">
                -
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-divider">
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="btn-primary flex-1">
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-brand-divider border-t border-brand-divider">
            {sections.map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => setOpenSection(openSection === section.key ? '' : section.key)}
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-brand-ink"
                >
                  <span>{section.label}</span>
                  <ChevronDown size={16} className={`transition-transform ${openSection === section.key ? 'rotate-180' : ''}`} />
                </button>
                {openSection === section.key && (
                  <p className="pb-4 text-sm leading-relaxed text-brand-muted">{section.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  );
};

const RelatedProducts = ({ currentId }) => {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);
  return (
    <section className="mt-20">
      <h3 className="section-title">You may also like</h3>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-brand-warm">
              <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-3">
              <p className="product-name">{product.name}</p>
              <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
