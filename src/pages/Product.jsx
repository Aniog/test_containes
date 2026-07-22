import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setCartOpen(true);
  };

  const sections = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: product.care },
    { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
        <Link to="/" className="hover:text-brand-ink">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
        <span>/</span>
        <span className="text-brand-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-border">
            <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-20 w-20 rounded-xl overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-brand-ink' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="product-name text-2xl md:text-3xl">{product.name}</h1>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-brand-gold fill-current" />
              <span className="text-sm font-medium text-brand-ink">{product.rating}</span>
            </div>
            <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-4 text-2xl font-medium text-brand-ink">${product.price}</p>
          <p className="mt-4 text-brand-muted leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <p className="text-sm font-medium text-brand-ink mb-3">Tone</p>
            <div className="flex gap-3">
              {product.variants.map(v => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm capitalize transition-colors ${
                    variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-border text-brand-ink hover:border-brand-ink'
                  }`}
                >
                  {variant === v && <Check className="h-3.5 w-3.5" />}
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-brand-ink mb-3">Quantity</p>
            <div className="inline-flex items-center gap-3 border border-brand-border rounded-full px-2 py-1">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-brand-ink hover:text-brand-gold transition-colors" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm w-6 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-brand-ink hover:text-brand-gold transition-colors" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="mt-8 w-full btn-primary">
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          <div className="mt-8 border-t border-brand-border pt-6 space-y-2">
            {sections.map(section => (
              <div key={section.id} className="border-b border-brand-border last:border-0">
                <button
                  onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-brand-ink"
                >
                  {section.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSection === section.id ? 'rotate-180' : ''}`} />
                </button>
                {openSection === section.id && (
                  <p className="pb-4 text-sm text-brand-muted leading-relaxed">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="section-title mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;
