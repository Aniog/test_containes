import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || { label: 'Gold', value: 'gold' }
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-velmora-text-muted mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => `$${price}`;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  // Related products (exclude current)
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-8">
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Gallery */}
          <div>
            <ProductGallery product={product} />
          </div>

          {/* Right: Details */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl text-velmora-gold font-medium">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center text-sm text-velmora-text-muted">
                <div className="flex text-velmora-gold mr-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                {product.rating} ({product.reviewCount})
              </div>
            </div>

            <p className="text-velmora-text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted mb-2">
                Tone
              </div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant.value === variant.value ? 'active' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted mb-2">
                Quantity
              </div>
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-full mb-3"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-velmora-text-muted tracking-wide">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 space-y-1">
              <Accordion title="Description" defaultOpen>
                <p>
                  {product.description} Each piece is hand-finished in our studio and 
                  packaged in a signature velvet pouch.
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-1.5 text-sm">
                  <li>• 18K gold plated over hypoallergenic brass</li>
                  <li>• Cubic zirconia or natural crystal accents</li>
                  <li>• Avoid contact with perfume, lotions, and water</li>
                  <li>• Store in the provided pouch when not worn</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <ul className="space-y-1.5 text-sm">
                  <li>• Free worldwide shipping on orders over $75</li>
                  <li>• Standard delivery: 5–10 business days</li>
                  <li>• 30-day returns on unworn items in original packaging</li>
                  <li>• Complimentary gift wrapping available at checkout</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16 md:mt-20">
          <div className="mb-6">
            <div className="uppercase tracking-[0.12em] text-xs text-velmora-gold mb-1">Curated For You</div>
            <h3 className="text-2xl">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
