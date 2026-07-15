import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/home/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <p className="uppercase tracking-[0.15em] text-xs text-[var(--color-gold)] mb-2">
            {product.category}
          </p>
          <h1 className="product-name text-3xl md:text-4xl mb-3">{product.name}</h1>

          <div className="flex items-center gap-3 mb-4">
            <div className="stars flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-[var(--color-text-muted)]">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="text-2xl font-medium mb-6">${product.price}</p>

          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="uppercase tracking-[0.1em] text-xs text-[var(--color-text-muted)] mb-2">Tone</p>
            <div className="flex gap-3">
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
            <p className="uppercase tracking-[0.1em] text-xs text-[var(--color-text-muted)] mb-2">Quantity</p>
            <div className="qty-selector inline-flex">
              <button onClick={decrementQty} className="qty-btn">−</button>
              <span className="qty-value">{quantity}</span>
              <button onClick={incrementQty} className="qty-btn">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[var(--color-text-muted)] tracking-widest">
            {product.inStock ? 'IN STOCK • SHIPS IN 1-2 DAYS' : 'PRE-ORDER'}
          </p>

          {/* Accordions */}
          <div className="mt-10 space-y-1">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3">
                Each piece is hand-finished in our studio. Slight variations in texture are part of the charm.
              </p>
            </Accordion>
            <Accordion title="Materials & Care">
              <ul className="space-y-1">
                <li>• 18K gold plating over sterling silver base</li>
                <li>• Hypoallergenic and nickel-free</li>
                <li>• Avoid contact with perfumes, lotions, and harsh chemicals</li>
                <li>• Store in the provided pouch when not worn</li>
                <li>• Clean gently with a soft, dry cloth</li>
              </ul>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                Free worldwide shipping on all orders. Delivery in 3-7 business days for most destinations.
              </p>
              <p className="mt-3">
                30-day returns on unworn items in original packaging. Contact us to initiate a return.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 md:mt-24">
        <h3 className="text-2xl font-serif mb-8">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
