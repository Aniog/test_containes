import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div>Product not found</div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[var(--color-light-gray)] mb-4 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[var(--color-light-gray)] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <span className="text-sm text-[var(--color-taupe)]">{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="text-2xl font-medium mb-8">${product.price}</div>

            <p className="text-[15px] text-[var(--color-taupe)] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[var(--color-taupe)]">Tone</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
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
              <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[var(--color-taupe)]">Quantity</div>
              <div className="flex items-center border border-[var(--color-border)] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[var(--color-light-gray)]">-</button>
                <span className="px-6 py-3 border-x border-[var(--color-border)]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[var(--color-light-gray)]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[var(--color-taupe)]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[var(--color-border)]">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: '18K gold plated over hypoallergenic brass. Wipe gently with a soft cloth. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map((section, idx) => (
                <div key={idx}>
                  <div 
                    className="accordion-header"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span className="text-sm tracking-[0.08em] uppercase">{section.title}</span>
                    <span className="text-xl leading-none">{openAccordion === idx ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-content text-sm text-[var(--color-taupe)] ${openAccordion === idx ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="serif text-3xl">You May Also Like</h3>
            <Link to="/shop" className="text-sm underline">Shop All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;