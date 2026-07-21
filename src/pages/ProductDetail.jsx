import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-serif mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-velmora-text-muted mb-8">
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-velmora-surface-warm overflow-hidden mb-4">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`gallery-thumb w-20 h-20 overflow-hidden ${selectedImageIndex === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex text-velmora-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-velmora-text-muted ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="body-text text-velmora-text-muted mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="uppercase tracking-[0.1em] text-xs text-velmora-text-muted mb-3">Tone</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                    disabled={!variant.available}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.1em] text-xs text-velmora-text-muted mb-3">Quantity</div>
              <div className="flex items-center border border-velmora-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-velmora-surface-warm transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-velmora-border">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-velmora-surface-warm transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4 py-4 text-base"
            >
              Add to Cart
            </button>
            
            <p className="text-center text-xs text-velmora-text-muted tracking-wide">
              Free shipping on orders over $50
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full"
                >
                  Description
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">
                    {product.longDescription}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full"
                >
                  Materials & Care
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content space-y-3">
                    <p>• 18K gold-plated brass base</p>
                    <p>• Hypoallergenic and nickel-free</p>
                    <p>• Faceted crystal accents</p>
                    <p className="pt-2">Care: Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full"
                >
                  Shipping & Returns
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content space-y-3">
                    <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                    <p><strong>Returns:</strong> 30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
                    <p className="pt-2">Each piece is carefully packaged in a premium gift box.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-border">
            <h3 className="font-serif text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.slug}`} className="group">
                  <div className="aspect-square bg-velmora-surface-warm overflow-hidden mb-3">
                    <img 
                      src={related.images[0]} 
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="product-card-name text-sm">{related.name}</div>
                  <div className="text-sm text-velmora-text-muted">{formatPrice(related.price)}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
