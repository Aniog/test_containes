import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import Nav from '../components/ui/Nav';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ImageGallery from '../components/product/ImageGallery';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Nav />
        <div className="min-h-[60vh] flex items-center justify-center pt-20">
          <div className="text-center">
            <p className="text-xl mb-4">Product not found</p>
            <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
          </div>
        </div>
        <Footer />
        <CartDrawer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const variants = ['Gold', 'Silver'];

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Gallery */}
            <div>
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Details */}
            <div className="pt-2">
              <div className="product-name text-2xl md:text-3xl tracking-[0.06em] mb-2">
                {product.name}
              </div>

              <div className="text-xl mb-4">${product.price}</div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="stars flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-vel-muted">
                  {product.rating} · {product.reviewCount} reviews
                </span>
              </div>

              <p className="text-[15px] leading-relaxed text-vel-muted mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mb-6">
                <div className="text-xs tracking-[0.08em] uppercase text-vel-muted mb-2">Tone</div>
                <div className="flex gap-3">
                  {variants.map((variant) => (
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
                <div className="text-xs tracking-[0.08em] uppercase text-vel-muted mb-2">Quantity</div>
                <div className="flex items-center border border-vel-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-vel-bg-alt transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 tabular-nums">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-vel-bg-alt transition-colors"
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

              <p className="text-center text-xs text-vel-muted">
                Free shipping on orders over $75
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
                </Accordion>
              </div>
            </div>
          </div>

          {/* You May Also Like */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 md:mt-24">
              <div className="mb-8">
                <div className="text-xs tracking-[0.12em] uppercase text-vel-muted mb-2">Curated for You</div>
                <h3 className="text-2xl">You May Also Like</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((related) => (
                  <ProductCard key={related.id} product={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
