import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="btn btn-primary mt-6 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const related = getRelatedProducts(id);

  const images = [product.images.primary, product.images.secondary];

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] mb-8 hover:text-[var(--color-accent)]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-[var(--color-bg)] mb-4 overflow-hidden">
            <img 
              src={images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 bg-[var(--color-bg)] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[var(--color-accent)]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="stars flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[var(--color-text-muted)]">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <h1 className="product-name text-4xl mb-2 pr-4">{product.name}</h1>
          <p className="text-2xl mb-8">${product.price}</p>

          <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[var(--color-text-muted)]">Tone</div>
            <div className="flex gap-3">
              {product.variants.map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[var(--color-text-muted)]">Quantity</div>
            <div className="flex items-center border border-[var(--color-border)] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[var(--color-bg)]">-</button>
              <span className="px-6 py-3 border-x border-[var(--color-border)]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[var(--color-bg)]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[var(--color-text-muted)] tracking-[0.05em]">
            Free shipping on orders over $75
          </p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[var(--color-border)]">
            {[
              { key: 'desc', label: 'Description', content: product.description + ' Each piece is crafted with care and finished by hand in our atelier.' },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated brass with hypoallergenic posts. Avoid contact with water, perfume, and lotions. Store in the provided pouch.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping. Returns accepted within 30 days. Items must be unworn with original packaging.' },
            ].map(item => (
              <div key={item.key}>
                <button 
                  onClick={() => toggleAccordion(item.key)}
                  className="accordion-trigger"
                >
                  {item.label}
                  <span className="text-xl">{openAccordion === item.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[var(--color-text-muted)] text-sm leading-relaxed ${openAccordion === item.key ? 'open' : ''}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24 pt-16 border-t border-[var(--color-border)]">
        <h3 className="serif text-3xl mb-10 text-center">You May Also Like</h3>
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