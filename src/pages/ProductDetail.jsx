import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 container py-20 text-center">
        <h2>Product not found</h2>
        <Link to="/shop" className="text-[var(--velmora-gold)] mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Materials & Care",
      content: (
        <div className="space-y-2">
          <p><strong>Materials:</strong> {product.material}</p>
          <p><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.</p>
          <p><strong>Origin:</strong> Handcrafted with care.</p>
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <div className="space-y-2">
          <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
          <p><strong>Returns:</strong> 30-day returns for unworn items in original packaging.</p>
          <p><strong>Packaging:</strong> Every piece arrives in our signature velvet box, ready for gifting.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <div className="container py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="product-gallery-main">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
              />
            </div>
            {product.images.length > 1 && (
              <div className="product-thumbnails">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`product-thumbnail ${selectedImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-2xl md:text-3xl mb-2 tracking-[0.08em]">
              {product.name}
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-light">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex text-[var(--velmora-gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[var(--velmora-text-muted)]">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="body-text mb-6">{product.shortDescription}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-2">Tone</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-2">Quantity</div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-[var(--velmora-border)] flex items-center justify-center hover:border-[var(--velmora-gold)]"
                >
                  −
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-[var(--velmora-border)] flex items-center justify-center hover:border-[var(--velmora-gold)]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} className="w-full mb-3">
              Add to Cart
            </Button>
            <p className="text-center text-xs text-[var(--velmora-text-muted)] tracking-wide">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[var(--velmora-border)]">
            <h3 className="mb-6 text-xl">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
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