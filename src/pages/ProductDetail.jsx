import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ProductGallery from '../components/product/ProductGallery';
import Accordion from '../components/product/Accordion';
import RelatedProducts from '../components/product/RelatedProducts';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn-premium btn-premium-outline">
            Browse Collection
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const handleQuantityChange = (newQty) => {
    if (newQty >= 1) setQuantity(newQty);
  };

  return (
    <Layout>
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="text-xs uppercase tracking-[0.1em] text-[#6B5F57] mb-8">
            <Link to="/shop" className="hover:text-[#B8865C]">Shop</Link>
            <span className="mx-2">/</span>
            <span>{product.category}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Gallery */}
            <div>
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Details */}
            <div className="pt-2">
              <h1 className="product-name text-3xl md:text-4xl tracking-widest mb-3">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-medium">${product.price}</span>
                <div className="flex items-center gap-1 text-sm text-[#6B5F57]">
                  <div className="stars flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-1">{product.rating} ({product.reviewCount})</span>
                </div>
              </div>

              <p className="text-[#6B5F57] text-sm mb-8">{product.category} · {product.material} Tone</p>

              <p className="text-[#6B5F57] leading-relaxed mb-8 pr-4">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.1em] mb-3 text-[#6B5F57]">Tone</p>
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
                <p className="text-xs uppercase tracking-[0.1em] mb-3 text-[#6B5F57]">Quantity</p>
                <div className="qty-selector inline-flex">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="qty-btn"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="qty-btn"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-premium btn-premium-solid w-full mb-4"
              >
                Add to Cart
              </button>
              <p className="text-center text-xs text-[#6B5F57] tracking-widest">
                Ships in 1-2 business days
              </p>

              {/* Accordions */}
              <div className="mt-12 space-y-1">
                <Accordion title="Description" defaultOpen>
                  <p>
                    {product.description} Each piece is hand-finished in our atelier and 
                    inspected for quality before being carefully packaged in our signature box.
                  </p>
                </Accordion>

                <Accordion title="Materials & Care">
                  <ul className="space-y-1.5">
                    <li>• 18K gold plating over sterling silver base</li>
                    <li>• Hypoallergenic and nickel-free</li>
                    <li>• Avoid contact with perfumes, lotions, and harsh chemicals</li>
                    <li>• Store in the provided pouch when not worn</li>
                    <li>• Gently polish with a soft cloth to maintain shine</li>
                  </ul>
                </Accordion>

                <Accordion title="Shipping & Returns">
                  <ul className="space-y-1.5">
                    <li>• Free worldwide shipping on all orders</li>
                    <li>• Standard delivery: 5-10 business days</li>
                    <li>• 30-day returns for unworn items in original packaging</li>
                    <li>• Complimentary gift wrapping available at checkout</li>
                  </ul>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </Layout>
  );
};

export default ProductDetail;
