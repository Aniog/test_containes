import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/product/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`, {
      description: `${selectedVariant.label} • Qty ${quantity}`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
      {/* Back Link */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-8 hover:text-[#8C6F4E] transition-colors">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Right: Details */}
        <div className="pt-2">
          <h1 className="product-name text-2xl md:text-3xl tracking-[0.15em] mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-medium">${product.price}</span>
            <div className="flex items-center gap-1 text-sm">
              <div className="stars flex text-[#B89778]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[#6B6560] ml-1">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          <p className="text-[#6B6560] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.1em] uppercase mb-3 text-[#6B6560]">Tone</p>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  disabled={!variant.available}
                  className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''} ${!variant.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  {variant.label}
                  {!variant.available && ' (Sold Out)'}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.1em] uppercase mb-3 text-[#6B6560]">Quantity</p>
            <div className="flex items-center border border-[#D9D2C7] w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-[#F8F5F1] transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="px-6 py-2 text-sm border-x border-[#D9D2C7]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-[#F8F5F1] transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedVariant?.available}
            className="btn btn-primary btn-full mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B6560] tracking-wide">
            Ships in 1-2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.longDescription}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3"><strong>Materials:</strong> {product.material}</p>
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5-10 business days.</p>
              <p>30-day returns. Items must be unworn and in original packaging.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[#E8E2D9]">
          <h3 className="heading-serif text-2xl mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
