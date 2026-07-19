import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="font-serif text-2xl text-brand-ink">Product not found</p>
        <Link to="/shop" className="mt-4 inline-flex text-sm font-medium text-brand-accent hover:text-brand-accentDark transition-colors">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-brand-accent transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-brand-warm">
              <img src={product.images[activeImage]} alt={product.name} className="h-[520px] w-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`h-20 w-20 overflow-hidden rounded-xl border-2 transition-colors ${
                    activeImage === idx ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-4">
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-brand-ink uppercase">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-brand-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-brand-muted">{product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 font-serif text-2xl text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Tone</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide capitalize transition-colors ${
                      selectedVariant === variant
                        ? 'bg-brand-ink text-white'
                        : 'border border-brand-border text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Quantity</p>
              <div className="mt-2 inline-flex items-center rounded-full border border-brand-border">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 text-sm font-medium text-brand-ink">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="mt-6 w-full rounded-full bg-brand-ink py-3.5 text-sm font-semibold tracking-wide text-white hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              {added ? <><Check className="h-4 w-4" /> Added to Cart</> : 'Add to Cart'}
            </button>

            <div className="mt-8 space-y-4">
              <details className="group rounded-xl border border-brand-border">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold tracking-wide text-brand-ink">
                  Description
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>
              </details>
              <details className="group rounded-xl border border-brand-border">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold tracking-wide text-brand-ink">
                  Materials & Care
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-brand-muted">{product.details} {product.care}</p>
              </details>
              <details className="group rounded-xl border border-brand-border">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold tracking-wide text-brand-ink">
                  Shipping & Returns
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-brand-muted">Free worldwide shipping on all orders. 30-day returns for unworn items in original packaging.</p>
              </details>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-brand-ink text-center">You May Also Like</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Product;
