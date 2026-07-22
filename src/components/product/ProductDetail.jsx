import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ImageGallery from './ImageGallery';
import Accordion from './Accordion';
import ProductCard from '../home/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/shop" className="underline">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const updateQty = (delta) => {
    const newQty = Math.max(1, quantity + delta);
    setQuantity(newQty);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Left: Gallery */}
        <div>
          <ImageGallery images={product.images} productName={product.name} />
        </div>

        {/* Right: Info */}
        <div className="pt-2">
          <div>
            <p className="text-xs tracking-[0.1em] uppercase text-[#6B6359]">{product.category}</p>
            <h1 className="product-name serif text-3xl md:text-4xl tracking-[0.06em] mt-2 mb-3">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm text-[#6B6359]">
                <Star size={14} className="text-[#B89778] fill-[#B89778]" />
                <span>{product.rating}</span>
                <span>({product.reviewCount})</span>
              </div>
            </div>
          </div>

          <p className="text-[#6B6359] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.08em] uppercase mb-3 text-[#6B6359]">Tone</p>
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
            <p className="text-xs tracking-[0.08em] uppercase mb-3 text-[#6B6359]">Quantity</p>
            <div className="qty-selector inline-flex">
              <button onClick={() => updateQty(-1)} className="qty-btn" aria-label="Decrease">
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button onClick={() => updateQty(1)} className="qty-btn" aria-label="Increase">
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
          <p className="text-xs text-center text-[#6B6359]">
            Ships in 1-2 business days • Free worldwide shipping
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.details}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                Free worldwide shipping on all orders. Returns accepted within 30 days of delivery.
                Items must be unworn and in original packaging. Please contact us for return authorization.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 pt-12 border-t border-[#E5DFD4]">
        <h3 className="serif text-2xl tracking-[0.04em] mb-8">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
