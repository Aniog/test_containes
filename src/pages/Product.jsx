import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);
  const { addItem, setDrawer } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Link to="/shop"><Button>Back to Shop</Button></Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setDrawer(true);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav className="text-xs text-brand-textMuted mb-8">
          <Link to="/" className="hover:text-brand-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-text">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-brand-surfaceAlt rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main-${activeImage}`}
                data-strk-img={`[${product.name}] [${product.category}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-brand-surfaceAlt rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`[${product.name}] [${product.category}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-textMuted">({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl font-light text-brand-text mb-6">${product.price}</p>
            <p className="text-brand-textMuted leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-brand-textMuted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 rounded-full border text-sm capitalize transition-all ${
                      selectedVariant === variant
                        ? 'border-brand-gold bg-brand-gold text-brand-bg'
                        : 'border-brand-border text-brand-text hover:border-brand-gold'
                    }`}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-brand-textMuted mb-3">Quantity</p>
              <div className="inline-flex items-center border border-brand-border rounded-full">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-brand-gold transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:text-brand-gold transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Button className="w-full mb-8" size="lg" onClick={handleAddToCart}>
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Accordions */}
            <div className="border-t border-brand-border">
              {[
                { key: 'description', label: 'Description', content: product.details },
                { key: 'materials', label: 'Materials & Care', content: `${product.materials}. ${product.care}` },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((item) => (
                <div key={item.key} className="border-b border-brand-border last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-widest">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <p className="pb-4 text-sm text-brand-textMuted leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/5] bg-brand-surfaceAlt rounded-sm overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[${p.name}] [${p.category}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-sm">{p.name}</h3>
                  <p className="text-sm text-brand-textMuted mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Product;
