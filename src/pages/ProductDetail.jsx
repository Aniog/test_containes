import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-flex text-sm font-semibold text-brand-accent">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="aspect-[3/4] overflow-hidden rounded-md bg-brand-bg">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80';
              }}
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${selectedImage === idx ? 'border-brand-accent' : 'border-transparent'}`}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand-ink uppercase tracking-wide">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex text-brand-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-current' : 'text-brand-border'}`} />
              ))}
            </div>
            <span className="text-xs text-brand-muted">{product.rating} ({product.reviewCount})</span>
          </div>
          <p className="mt-4 text-2xl font-semibold text-brand-ink">${product.price}</p>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink/80">Finish</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    selectedVariant === variant ? 'border-brand-accent bg-brand-accent text-white' : 'border-brand-border text-brand-ink hover:border-brand-accent'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-brand-border">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-9 w-9 inline-flex items-center justify-center text-brand-ink hover:text-brand-accent transition-colors" aria-label="Decrease">
                -
              </button>
              <span className="w-10 text-center text-sm font-semibold text-brand-ink">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="h-9 w-9 inline-flex items-center justify-center text-brand-ink hover:text-brand-accent transition-colors" aria-label="Increase">
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="flex-1 rounded-full bg-brand-accent py-3 text-sm font-semibold text-white hover:bg-brand-warm transition-colors">
              Add to Cart
            </button>
          </div>

          <div className="mt-8 border-t border-brand-border">
            {[
              { key: 'description', label: 'Description', text: product.description },
              { key: 'materials', label: 'Materials & Care', text: product.care },
              { key: 'shipping', label: 'Shipping & Returns', text: 'Free worldwide shipping on orders over $75. 30-day returns on unworn items in original packaging.' },
            ].map(section => (
              <div key={section.key} className="border-b border-brand-border last:border-b-0">
                <button
                  onClick={() => toggleAccordion(section.key)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-semibold uppercase tracking-widest text-brand-ink">{section.label}</span>
                  <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform ${openAccordion === section.key ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === section.key && (
                  <p className="pb-4 text-sm leading-relaxed text-brand-muted">{section.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-brand-ink">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
