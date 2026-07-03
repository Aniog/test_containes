import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronRight, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import ProductCard from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="section-container py-24 text-center">
        <p className="text-sm text-ink-secondary">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-4">Back to shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <main>
      <div className="section-container py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-secondary">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery images={product.images} name={product.name} />

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-ultra text-accent">{product.category}</p>
              <h1 className="mt-2 font-serif text-3xl md:text-4xl text-ink">{product.name}</h1>
              <p className="mt-3 text-2xl font-semibold text-ink">${product.price}</p>
              <div className="mt-2 flex items-center gap-2 text-sm text-ink-secondary">
                <span className="inline-flex items-center gap-1 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  {product.rating}
                </span>
                <span>·</span>
                <span>{product.reviewCount} reviews</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-ink-secondary leading-relaxed">{product.description}</p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-ultra text-ink">Finish</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold capitalize transition-colors ${
                      variant === v ? 'border-ink bg-ink text-white' : 'border-border text-ink-secondary hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center rounded-full border border-border">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="inline-flex h-10 w-10 items-center justify-center text-ink hover:bg-black/5"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="mx-4 text-sm font-medium text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center text-ink hover:bg-black/5"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button type="button" onClick={handleAdd} className="btn-primary flex-1">
                {added ? (
                  <span className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4" /> Added
                  </span>
                ) : (
                  'Add to Cart'
                )}
              </button>
            </div>

            <ProductAccordion
              items={[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: product.care },
                { title: 'Shipping & Returns', content: product.shipping },
              ]}
            />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-ink">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Product;
