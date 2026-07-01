import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/shop" className="btn btn-gold">Browse Collection</Link>
      </div>
    );
  }

  // Create image gallery (use secondary if available)
  const images = [product.image, product.imageSecondary].filter(Boolean);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const variants = ['Gold', 'Silver'];

  return (
    <div className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* Back link */}
        <Link to="/shop" className="inline-flex items-center text-sm text-velmora-text-muted hover:text-velmora-gold mb-8">
          <ChevronLeft size={16} className="mr-1" /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square bg-velmora-warm-gray overflow-hidden mb-3 cursor-pointer"
                 onClick={() => {
                   // Could open lightbox here, but for simplicity we'll just show the image
                 }}>
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 bg-velmora-warm-gray overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-widest mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <p className="text-2xl font-medium">${product.price}</p>
              <div className="flex items-center gap-1 text-sm">
                <div className="stars flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className={i < Math.floor(product.rating) ? '' : 'opacity-30'} />
                  ))}
                </div>
                <span className="text-velmora-text-muted ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-velmora-text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-3">Tone</p>
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
              <p className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-velmora-warm-gray transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2.5 text-sm border-x border-velmora-border">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-velmora-warm-gray transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4 text-sm py-4"
            >
              Add to Cart
            </button>

            <p className="text-center text-xs text-velmora-text-muted">
              Free shipping on all orders • Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-velmora-border-light">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span>Description</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-velmora-text-muted leading-relaxed pr-8">
                    {product.details}
                  </div>
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  <span>Materials & Care</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-velmora-text-muted leading-relaxed pr-8 space-y-3">
                    <p>• 18K gold-plated brass (hypoallergenic, nickel-free)</p>
                    <p>• Avoid contact with perfumes, lotions, and harsh chemicals</p>
                    <p>• Store in a cool, dry place away from direct sunlight</p>
                    <p>• Gently clean with a soft, dry cloth</p>
                    <p>• Remove before swimming or bathing</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-velmora-text-muted leading-relaxed pr-8 space-y-3">
                    <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
                    <p><strong>Returns:</strong> 30-day returns accepted. Items must be unworn and in original packaging.</p>
                    <p><strong>International:</strong> Duties and taxes may apply depending on your location.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-border-light">
            <h3 className="serif text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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