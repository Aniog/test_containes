import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import { useCart } from '@/context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [tone, setTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem, setCartOpen } = useCart();

  if (!product) {
    return (
      <div className="container-narrow py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-4">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem({ ...product, tone, quantity });
    setCartOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-brand-bg">
      <div className="container-narrow">
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink tracking-wide">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                <span className="text-sm font-medium text-brand-ink">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-medium text-brand-ink">${product.price}</p>
            <p className="mt-4 text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <p className="text-sm font-medium text-brand-ink mb-3">Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`rounded-full px-5 py-2 text-sm border transition-colors ${
                      tone === t ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {t === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-brand-ink mb-3">Quantity</p>
              <div className="inline-flex items-center gap-3 border border-brand-line rounded-full px-3 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 text-brand-ink hover:text-brand-accent" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium text-brand-ink w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-1 text-brand-ink hover:text-brand-accent" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mt-8">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-10">
              <ProductAccordion
                items={[
                  { title: 'Description', content: product.details },
                  { title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
                  { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.' },
                ]}
              />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="section-title text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-3 font-serif text-sm text-brand-ink tracking-wide">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-ink">${item.price}</p>
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
