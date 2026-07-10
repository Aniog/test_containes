import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-brand-accent">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <p className="text-[11px] font-medium tracking-widest uppercase text-brand-subtle">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl text-brand-ink">{product.name.toUpperCase()}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm text-brand-muted">
            <span className="inline-flex items-center gap-1 text-brand-accent">
              <Star className="h-4 w-4 fill-current" />
              {product.rating}
            </span>
            <span>·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
          <p className="mt-4 text-2xl font-medium text-brand-ink">${product.price}</p>
          <p className="mt-4 text-sm text-brand-muted leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Tone</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-widest uppercase border transition-colors ${
                    variant === v ? 'border-brand-accent text-brand-accent' : 'border-brand-line text-brand-ink hover:border-brand-accent'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-brand-line">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-9 w-9 inline-flex items-center justify-center text-brand-ink hover:text-brand-accent transition-colors">
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium text-brand-ink w-4 text-center">{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} className="h-9 w-9 inline-flex items-center justify-center text-brand-ink hover:text-brand-accent transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 w-full rounded-full bg-brand-accent py-3.5 text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-accentHover transition-colors inline-flex items-center justify-center gap-2"
          >
            <ShoppingBag className="h-4 w-4" />
            {added ? 'Added to cart' : 'Add to Cart'}
          </button>

          <ProductAccordion
            items={[
              { title: 'Description', content: product.description },
              { title: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
              { title: 'Shipping & Returns', content: product.shipping },
            ]}
          />
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif text-2xl text-brand-ink">You may also like</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group rounded-xl border border-brand-line bg-brand-surface overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-brand-warm">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-medium tracking-widest uppercase text-brand-subtle">{item.category}</p>
                  <h3 className="mt-1 font-serif text-base text-brand-ink">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-ink">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
