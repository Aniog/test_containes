import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [tone, setTone] = useState(product?.tone || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container-site py-24 text-center">
        <p className="font-serif text-2xl text-brand-ink">Product not found</p>
        <Link to="/shop" className="btn-primary mt-6">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, tone);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-square rounded-2xl bg-brand-warm">
              <div className="h-full w-full flex items-center justify-center text-brand-subtle text-xs tracking-widest uppercase">
                Primary Image
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-brand-warm">
                  <div className="h-full w-full flex items-center justify-center text-brand-subtle text-[10px] tracking-widest uppercase">
                    Thumb {i}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">{product.category}</p>
            <h1 className="mt-3 font-serif text-4xl text-brand-ink">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-brand-ink">
              <div className="flex items-center gap-1 text-brand-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-brand-subtle">{product.reviewCount} reviews</span>
            </div>
            <p className="mt-6 font-serif text-3xl text-brand-ink">${product.price}</p>
            <p className="mt-6 text-brand-ink leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`h-11 rounded-full px-5 text-sm font-semibold border transition-colors ${
                      tone === t ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {t === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-brand-line">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-10 w-10 flex items-center justify-center text-brand-ink hover:text-brand-accent" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold text-brand-ink w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="h-10 w-10 flex items-center justify-center text-brand-ink hover:text-brand-accent" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary mt-8 w-full">
              {added ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" /> Added to Bag
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-line">
              {[
                { title: 'Description', body: product.details },
                { title: 'Materials & Care', body: `${product.materials}. ${product.care}` },
                { title: 'Shipping & Returns', body: `${product.shipping} ${product.returns}` },
              ].map((item) => (
                <details key={item.title} className="group border-b border-brand-line">
                  <summary className="flex items-center justify-between py-4 text-sm font-semibold text-brand-ink cursor-pointer list-none">
                    {item.title}
                    <ChevronDown className="h-4 w-4 text-brand-subtle transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-4 text-sm text-brand-muted leading-relaxed">{item.body}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="section-title">You May Also Like</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
