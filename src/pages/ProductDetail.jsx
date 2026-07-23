import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/home/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="pt-20 pb-20 text-center">
        <p className="text-[#6B6058]">Product not found.</p>
        <Link to="/shop" className="text-sm tracking-wider mt-4 inline-block hover:text-[#8C6F52]">
          Return to Shop →
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < fullStars ? 'fill-current' : ''}
      />
    ));
  };

  return (
    <main className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-xs tracking-wider text-[#6B6058] mb-8">
          <Link to="/shop" className="hover:text-[#8C6F52]">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Details */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl tracking-wider mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-[#B89778]">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-[#6B6058]">
                {product.rating} ({product.reviewCount})
              </span>
            </div>

            <p className="text-[#6B6058] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-[#6B6058] mb-3">Tone</p>
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
              <p className="text-xs tracking-[0.15em] uppercase text-[#6B6058] mb-3">Quantity</p>
              <div className="flex items-center border border-[#D4C9B8] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F8F5F1] text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F8F5F1] text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B6058]">
              Ships in 1–2 business days • Free worldwide shipping
            </p>

            {/* Accordions */}
            <div className="mt-10">
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
                <p className="mt-3">For questions, email <a href="mailto:hello@velmora.co" className="underline">hello@velmora.co</a></p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#D4C9B8]">
            <h3 className="serif text-2xl tracking-[-0.01em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
