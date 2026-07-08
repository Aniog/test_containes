import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const Product = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <main className="pt-24 md:pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl text-brand-ink">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm tracking-widest uppercase text-brand-accent hover:text-brand-accentHover">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <main className="pt-24 md:pt-28 pb-20 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-white rounded-sm overflow-hidden">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square bg-white rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand-ink' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink tracking-wide">{product.name}</h1>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-accent text-brand-accent' : 'text-brand-line'}`} />
                ))}
              </div>
              <span className="text-sm text-brand-muted">{product.rating}</span>
              <span className="text-sm text-brand-subtle">({product.reviews} reviews)</span>
            </div>
            <p className="mt-4 text-2xl text-brand-ink">${product.price}</p>
            <p className="mt-4 text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-brand-ink mb-2">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-xs tracking-widest uppercase rounded-sm border transition-colors ${
                      selectedVariant === variant ? 'bg-brand-ink text-white border-brand-ink' : 'bg-white text-brand-muted border-brand-line hover:border-brand-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-brand-ink mb-2">Quantity</p>
              <div className="inline-flex items-center border border-brand-line rounded-sm bg-white">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2.5 text-brand-muted hover:text-brand-ink transition-colors" aria-label="Decrease quantity">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 text-sm text-brand-ink">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-2.5 text-brand-muted hover:text-brand-ink transition-colors" aria-label="Increase quantity">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-brand-accent hover:bg-brand-accentHover text-white text-sm tracking-widest uppercase py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-line">
              <Accordion title="Description">
                <p className="text-brand-muted text-sm leading-relaxed">{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="text-brand-muted text-sm leading-relaxed">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="text-brand-muted text-sm leading-relaxed">{product.shipping} {product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-ink tracking-wide mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-line">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase text-brand-ink">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default Product;
