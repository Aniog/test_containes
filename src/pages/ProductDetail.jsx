import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div className="pt-20 p-12 text-center">Product not found.</div>;
  }

  const related = getRelatedProducts(id);

  const images = [product.image, product.image2].filter(Boolean);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, variant: selectedVariant, quantity });
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[var(--color-gold)]">
        <ChevronLeft size={16} /> BACK TO COLLECTION
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3.2] bg-[#F0EBE3] mb-4 overflow-hidden">
            <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button key={idx} onClick={() => setSelectedImage(idx)} className={`w-20 h-20 border-2 overflow-hidden ${selectedImage === idx ? 'border-[var(--color-gold)]' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="product-name text-3xl tracking-[0.12em] mb-2">{product.name}</div>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-2xl font-light">${product.price}</div>
            <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
              <Star size={14} className="fill-current text-[var(--color-gold)]" /> {product.rating} ({product.reviews} reviews)
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">{product.description}</p>

          {/* Variant */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[var(--color-text-muted)]">Tone</div>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map(v => (
                <button 
                  key={v} 
                  onClick={() => setSelectedVariant(v)}
                  className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[var(--color-text-muted)]">Quantity</div>
            <div className="flex items-center border border-[var(--color-border)] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3">-</button>
              <span className="px-6">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4">Add to Cart</button>
          <p className="text-center text-xs text-[var(--color-text-muted)] tracking-[0.05em]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[var(--color-border)]">
            {[
              { key: 'desc', label: 'Description', content: product.details },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated over brass. Wipe gently with a soft cloth. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns. Items must be unworn with tags attached.' },
            ].map(acc => (
              <div key={acc.key}>
                <button onClick={() => toggleAccordion(acc.key)} className="accordion-header w-full text-left">
                  {acc.label}
                  <span className="text-xl leading-none">{openAccordion === acc.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-[var(--color-text-muted)] ${openAccordion === acc.key ? 'open' : ''}`}>
                  {acc.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-20">
        <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-3">YOU MAY ALSO LIKE</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;