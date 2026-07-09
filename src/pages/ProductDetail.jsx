import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordion';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const images = product.images || [];

  return (
    <div className="pt-20">
      <div className="container py-10">
        {/* Breadcrumb */}
        <div className="text-xs tracking-wider text-muted mb-8">
          <Link to="/shop" className="hover:text-gold">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-velmora-bg-alt overflow-hidden mb-3">
              <img
                src={images[selectedImageIndex] || images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`gallery-thumb w-20 h-20 overflow-hidden flex-shrink-0 ${selectedImageIndex === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pt-2">
            <div className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-2">
              {product.name}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm text-muted">
                <div className="flex text-gold">
                  {'★'.repeat(Math.floor(product.rating))}
                </div>
                <span>{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-muted mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[1.5px] text-muted mb-3">TONE</div>
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
              <div className="text-xs tracking-[1.5px] text-muted mb-3">QUANTITY</div>
              <div className="qty-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
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
            <p className="text-center text-xs text-muted tracking-wider">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 space-y-1">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.longDescription}</p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>18K gold-plated brass</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                <p>We offer a 30-day return window for unworn items in original packaging. Please contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-velmora-border">
            <div className="mb-8">
              <div className="text-xs tracking-[2px] text-gold mb-1">EXPLORE MORE</div>
              <h3 className="heading-serif text-2xl">You May Also Like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
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
