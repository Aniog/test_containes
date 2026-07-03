import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, openDrawer } = useCart();

  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-ink-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-gold hover:text-gold-light">Back to shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      image: product.images[0],
      quantity,
    });
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 1200);
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <nav className="mb-6 text-xs text-ink-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-3">
            <div className="aspect-[4/5] bg-surface-alt rounded-sm overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-main-${product.id}-title] [product-main-${product.id}-category]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <span id={`product-main-${product.id}-category`} className="hidden">{product.category}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((img) => (
                <div key={img.id} className="aspect-[4/5] bg-surface-alt rounded-sm overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={img.id}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 id={`product-main-${product.id}-title`} className="hidden">{product.name}</h1>
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest-xl uppercase text-ink">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-base/20'}`} />
                ))}
              </div>
              <span>{product.rating} · {product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 text-xl text-ink">${product.price}</p>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs tracking-widest-xl uppercase text-ink-muted mb-2">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-4 py-2 text-xs tracking-widest-xl uppercase border rounded-sm transition-all duration-300',
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-base/10 text-ink-muted hover:border-gold hover:text-gold'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-widest-xl uppercase text-ink-muted mb-2">Quantity</p>
              <div className="inline-flex items-center border border-base/10 rounded-sm">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 text-ink hover:text-gold transition-colors" aria-label="Decrease">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm text-ink">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 text-ink hover:text-gold transition-colors" aria-label="Increase">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full" size="lg" onClick={handleAdd}>
                {added ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            </div>

            <div className="mt-8 border-t border-base/5">
              {[
                { id: 'description', label: 'Description', text: product.description },
                { id: 'materials', label: 'Materials & Care', text: product.care },
                { id: 'shipping', label: 'Shipping & Returns', text: product.shipping },
              ].map((item) => (
                <div key={item.id} className="border-b border-base/5 last:border-b-0">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest-xl uppercase text-ink">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 text-ink-muted transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-ink-muted leading-relaxed">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-xl md:text-2xl tracking-wide text-ink mb-6">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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

export default ProductDetail;
