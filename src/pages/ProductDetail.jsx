import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-ink mb-4">Product Not Found</h1>
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

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <nav className="mb-8 text-sm text-brand-muted">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-brand-warm">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square overflow-hidden rounded-xl bg-brand-warm border-2 transition-colors ${
                    activeImage === idx ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="product-name text-2xl md:text-3xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                <span className="text-sm font-medium text-brand-ink">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-medium text-brand-ink">${product.price}</p>
            <p className="mt-6 text-brand-muted leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm font-medium text-brand-ink mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                      selectedVariant === variant
                        ? 'border-brand-ink bg-brand-ink text-white'
                        : 'border-brand-border text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {selectedVariant === variant && <Check className="h-3.5 w-3.5" />}
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm font-medium text-brand-ink mb-3">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 flex items-center justify-center text-brand-ink hover:text-brand-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 flex items-center justify-center text-brand-ink hover:text-brand-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="mt-8 w-full btn-primary">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-border">
              {[
                { id: 'description', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: product.details + ' Avoid contact with perfumes, lotions, and water. Store in a dry place when not in use.' },
                { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.' },
              ].map((item) => (
                <div key={item.id} className="border-b border-brand-border last:border-b-0">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-brand-ink">{item.label}</span>
                    <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-brand-muted leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
