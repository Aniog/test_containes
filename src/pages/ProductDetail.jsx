import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted mb-4">Product not found.</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const variants = product.variants || ['Gold', 'Silver'];
  
  // Create image gallery (main + hover as second view)
  const images = [product.image, product.hoverImage || product.image];

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm text-muted hover:text-gold mb-8">
          <ChevronLeft size={16} className="mr-1" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* IMAGE GALLERY */}
          <div>
            <div className="gallery-main mb-3">
              <img
                src={images[selectedImageIndex]}
                alt={product.name}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`gallery-thumb ${selectedImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-gold">
                <Star size={14} fill="currentColor" />
                <span className="text-sm text-muted ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* VARIANT SELECTOR */}
            <div className="mb-6">
              <div className="uppercase tracking-[0.15em] text-xs text-muted mb-3">Tone</div>
              <div className="flex gap-2">
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

            {/* QUANTITY */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.15em] text-xs text-muted mb-3">Quantity</div>
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

            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-muted tracking-wider">
              Ships in 1–2 business days
            </p>

            {/* ACCORDIONS */}
            <div className="mt-10 divide-y divide-border">
              {/* Description */}
              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-trigger"
                >
                  Description
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">
                    {product.description} Each piece is hand-finished in our atelier and 
                    inspected for quality before shipping. Designed for everyday wear.
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-trigger"
                >
                  Materials & Care
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content">
                    <ul className="space-y-1 list-disc pl-4">
                      <li>18K gold plating over sterling silver base</li>
                      <li>Premium crystal accents</li>
                      <li>Hypoallergenic and nickel-free</li>
                      <li>Avoid contact with perfumes, lotions, and water</li>
                      <li>Store in the provided pouch when not worn</li>
                      <li>Clean gently with a soft, dry cloth</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-trigger"
                >
                  Shipping & Returns
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content">
                    <p className="mb-3">
                      <strong>Free worldwide shipping</strong> on all orders. 
                      Delivery in 3–7 business days (international may vary).
                    </p>
                    <p>
                      30-day returns accepted on unworn items in original packaging. 
                      Contact us to initiate a return.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="heading-serif text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
