import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Minus, Plus, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductGallery from '@/components/product/ProductGallery';
import StarRating from '@/components/shop/StarRating';
import ProductAccordions from '@/components/product/Accordion';
import ProductCard from '@/components/shop/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useImageLoader } from '@/hooks/useImageLoader';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const related = product ? getRelatedProducts(product.slug, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants.find((v) => v.available)?.id || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const containerRef = useImageLoader([slug, selectedVariant]);

  if (!product) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm uppercase tracking-widest underline">
            Return to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleVariantChange = (variantId) => {
    const variant = product.variants.find((v) => v.id === variantId);
    if (variant?.available) setSelectedVariant(variantId);
  };

  return (
    <Layout>
      <div className="pt-24 lg:pt-28 pb-20 bg-velmora-bg min-h-screen" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <button
            onClick={() => navigate(-1)}
            className="text-xs uppercase tracking-[0.15em] text-velmora-muted hover:text-velmora-charcoal transition-colors mb-8"
          >
            ← Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
            <ProductGallery product={product} />

            <div className="lg:pl-8">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.08em] uppercase mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-velmora-warm mb-3">${product.price}</p>
              <div className="mb-6">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="text-sm text-velmora-warm leading-relaxed mb-8 max-w-md">
                {product.description}
              </p>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-velmora-muted block mb-3">
                  Metal
                </span>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleVariantChange(variant.id)}
                      disabled={!variant.available}
                      className={`px-6 py-3 text-xs uppercase tracking-[0.15em] border transition-colors ${
                        selectedVariant === variant.id
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-border text-velmora-warm hover:border-velmora-charcoal'
                      } ${!variant.available ? 'opacity-40 cursor-not-allowed line-through' : ''}`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-velmora-muted block mb-3">
                  Quantity
                </span>
                <div className="flex items-center border border-velmora-border w-fit">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 hover:bg-velmora-cream transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 hover:bg-velmora-cream transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mb-10">
                <button
                  onClick={handleAdd}
                  className="flex-1 bg-velmora-gold text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-velmora-gold-hover transition-colors"
                >
                  {added ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <button
                  className="px-5 border border-velmora-border hover:border-velmora-charcoal transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs text-velmora-muted space-y-2">
                <p>Free shipping on orders over $50</p>
                <p>30-day hassle-free returns</p>
              </div>

              <ProductAccordions product={product} />
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
                {related.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
