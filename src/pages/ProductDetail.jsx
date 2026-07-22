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
      <div className="container py-20 text-center">
        <h1 className="heading-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: (
        <p>{product.description}</p>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-2">
          <p><strong>Materials:</strong> {product.material}</p>
          <p><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2">
          <p>Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
          <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="container py-10 md:py-16">
      <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10">
        {/* Left: Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Right: Details */}
        <div className="pt-2">
          <div className="mb-6">
            <h1 className="product-name text-3xl md:text-4xl mb-3">{product.name}</h1>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl text-[var(--velmora-gold-dark)]">${product.price}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
                  ))}
                </div>
                <span className="text-[var(--velmora-text-muted)]">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>
            <p className="text-[var(--velmora-text-muted)]">{product.shortDescription}</p>
          </div>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-2">Tone</div>
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
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-2">Quantity</div>
            <div className="qty-selector inline-flex">
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary btn-full mb-4"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-[var(--velmora-text-muted)] tracking-wide">
            Ships in 1-2 business days • 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20">
        <h3 className="heading-serif text-2xl mb-8">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
