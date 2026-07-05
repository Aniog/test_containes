import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/product/ProductCard';
import StarRating from '../components/ui/StarRating';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#5C5752] mb-4">Product not found.</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] text-[#9A9288] mb-8">
          <Link to="/shop" className="hover:text-[#B8976A]">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Info */}
          <div className="pt-2">
            <div className="product-name text-2xl md:text-3xl tracking-[0.12em] mb-2 leading-tight">
              {product.name}
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium tabular-nums">${product.price}</span>
              <StarRating rating={product.rating} showNumber />
              <span className="text-xs text-[#9A9288]">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-[#5C5752] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] text-[#9A9288] mb-3">TONE</div>
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
              <div className="text-xs tracking-[0.1em] text-[#9A9288] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F5F2ED] transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums border-x border-[#E5DFD6]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F5F2ED] transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full py-4 text-base mb-3"
            >
              ADD TO CART
            </button>
            
            <p className="text-center text-xs text-[#9A9288] tracking-[0.05em]">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is hand-finished in our studio and inspected before shipping.</p>
              </Accordion>
              
              <Accordion title="Materials & Care">
                <p><strong>Materials:</strong> {product.material}</p>
                <p className="mt-3"><strong>Care:</strong> Avoid contact with water, lotions, and perfumes. Store in the provided pouch. Clean gently with a soft cloth.</p>
              </Accordion>
              
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
                <p className="mt-3">30-day returns on unworn items in original packaging. Contact us for exchanges or questions.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#E5DFD6]">
            <h2 className="heading-serif text-2xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
