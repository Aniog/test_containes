import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.category === 'sets'))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-8">
          <Link to="/shop" className="hover:text-[var(--velmora-text)]">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[var(--velmora-bg-alt)] mb-3 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 bg-[var(--velmora-bg-alt)] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[var(--velmora-gold)]' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.08em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-[var(--velmora-gold)]">★★★★★</span>
                <span className="text-[var(--velmora-text-muted)]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-3">Tone</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
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
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-3">Quantity</div>
              <div className="flex items-center border border-[var(--velmora-border)] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums border-x border-[var(--velmora-border)]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-3"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[var(--velmora-text-muted)]">
              Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen={true}>
                {product.longDescription}
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-2">
                  <p><strong>Material:</strong> {product.material}</p>
                  <p><strong>Care:</strong> Avoid contact with perfumes, lotions, and water. Store in the provided pouch. Clean gently with a soft cloth.</p>
                  <p><strong>Notes:</strong> Our 18K gold plating is applied over hypoallergenic brass. All pieces are nickel-free.</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-2">
                  <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-10 business days. Express available at checkout.</p>
                  <p><strong>Returns:</strong> 30-day returns on unworn items in original packaging. Contact us to initiate a return.</p>
                  <p><strong>Gifting:</strong> Complimentary gift wrapping and handwritten note available at checkout.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[var(--velmora-border)]">
            <h3 className="serif text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
