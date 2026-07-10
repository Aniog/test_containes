import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCartDispatch } from '../hooks/useCart';
import { products } from '../data/products';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch = useCartDispatch();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="section-container py-24 text-center">
        <p className="font-display text-2xl text-ink">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-sm font-medium text-ink underline underline-offset-4">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, variant: selectedVariant, quantity },
    });
    dispatch({ type: 'OPEN_DRAWER' });
  };

  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-secondary">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-ink">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
            <li>/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-background">
              <img src={product.images[activeImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border ${activeImage === idx ? 'border-ink' : 'border-transparent'}`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">{product.name.toUpperCase()}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-ink-secondary">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-display font-semibold text-ink">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Tone</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                      selectedVariant === variant ? 'border-ink bg-ink text-white' : 'border-border text-ink hover:border-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-border px-2 py-1">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="rounded-full p-2 text-ink-secondary hover:text-ink" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="rounded-full p-2 text-ink-secondary hover:text-ink" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={addToCart} className="mt-8 w-full btn-primary">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </button>

            <div className="mt-8 space-y-3 border-t border-border pt-6">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: product.care },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((section) => (
                <div key={section.key} className="border-b border-border pb-3">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-ink"
                  >
                    <span>{section.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openAccordion === section.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === section.key && <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{section.content}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-surface">
        <div className="section-container py-16 md:py-24">
          <h2 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">You May Also Like</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="h-64 overflow-hidden rounded-2xl bg-background md:h-80">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-3">
                  <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink">{item.name}</p>
                  <p className="mt-1 text-sm font-medium text-ink">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
