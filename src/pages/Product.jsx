import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setCartOpen(true);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <nav className="mb-8 text-sm text-brand-muted">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${selectedImage === idx ? 'border-brand-accent' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-ink">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-medium text-brand-ink">${product.price}</p>
            <p className="mt-4 text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <label className="text-xs uppercase tracking-widest text-brand-muted mb-3 block">Finish</label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 rounded-full text-sm capitalize transition-colors ${
                      selectedVariant === variant
                        ? 'bg-brand-ink text-white'
                        : 'bg-brand-surface border border-brand-line text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <label className="text-xs uppercase tracking-widest text-brand-muted mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mt-8">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-10 space-y-2">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: product.care },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day hassle-free returns. Items must be unworn and in original packaging.' },
              ].map(item => (
                <div key={item.key} className="border-b border-brand-line">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <p className="pb-4 text-sm text-brand-muted leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="section-title text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm">
                    <img src={related.images[0]} alt={related.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="product-name">{related.name}</h3>
                    <p className="mt-1 text-sm text-brand-muted">${related.price}</p>
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

export default Product;
