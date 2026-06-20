import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product not found</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-velmora-gold">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || ['https://picsum.photos/id/1011/1200/1200'];
  const currentImage = images[selectedImageIndex];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20">
      <div className="container py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center text-sm text-velmora-text-muted hover:text-velmora-gold mb-8">
          <ChevronLeft size={16} className="mr-1" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT: Image Gallery */}
          <div>
            <div className="gallery-main">
              <img src={currentImage} alt={product.name} />
            </div>
            
            {images.length > 1 && (
              <div className="gallery-thumbs">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`gallery-thumb ${idx === selectedImageIndex ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:pt-2">
            <div className="product-name text-2xl md:text-3xl mb-2">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="star" />
                  ))}
                </div>
                <span className="text-velmora-text-muted ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="body-text mb-8">{product.description}</p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <div className="caption mb-3">Tone</div>
                <div className="flex gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                      onClick={() => setSelectedVariant(variant)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <div className="caption mb-3">Quantity</div>
              <div className="quantity-control w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button variant="primary" fullWidth size="lg" onClick={handleAddToCart}>
              Add to Cart — ${product.price * quantity}
            </Button>

            <p className="text-center text-xs text-velmora-text-muted mt-3 tracking-widest">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              {/* Description */}
              <div className="accordion">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion('description')}
                >
                  Description
                  <span>{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">
                    {product.longDescription}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div className="accordion">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion('materials')}
                >
                  Materials & Care
                  <span>{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content space-y-3">
                    <div>
                      <span className="font-medium text-velmora-text">Materials:</span><br />
                      {product.material}
                    </div>
                    <div>
                      <span className="font-medium text-velmora-text">Care:</span><br />
                      {product.care}
                    </div>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="accordion">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion('shipping')}
                >
                  Shipping & Returns
                  <span>{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content space-y-3">
                    <p><strong>Free worldwide shipping</strong> on all orders. Delivery in 3–7 business days.</p>
                    <p>30-day returns. Items must be unworn and in original packaging.</p>
                    <p>Questions? <a href="#contact" className="underline">Contact our team</a>.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-velmora-border-subtle">
            <h3 className="font-serif text-xl mb-6">You may also like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
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