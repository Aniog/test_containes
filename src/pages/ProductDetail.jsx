import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-muted mb-4">Product not found.</p>
          <Link to="/shop" className="text-gold hover:text-gold-dark">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const variants = [
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver Tone' },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-text-muted mb-8">
          <Link to="/shop" className="hover:text-gold">Shop</Link> / {product.name}
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-bg-alt mb-4 overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 bg-bg-alt overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="product-name text-3xl md:text-4xl mb-2 tracking-[0.06em]">
              {product.name}
            </h1>
            <p className="text-2xl text-gold mb-4">{formatPrice(product.price)}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-gold">★★★★★</span>
              <span className="text-sm text-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-[0.1em] font-semibold mb-3">Tone</div>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={`variant-pill ${selectedVariant === v.value ? 'active' : ''}`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs uppercase tracking-[0.1em] font-semibold mb-3">Quantity</div>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-bg-alt transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-bg-alt transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="primary"
              className="w-full mb-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <p className="text-center text-xs text-text-muted tracking-widest">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-12 space-y-1">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <p className="mt-3">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                <p className="mt-3">30-day returns. Items must be unworn and in original packaging.</p>
                <p className="mt-3">For questions, please contact hello@velmora.com</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="heading-serif text-2xl mb-8 text-center">You May Also Like</h2>
            <div className="product-grid">
              {relatedProducts.map((p) => (
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
