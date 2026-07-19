import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.slug === slug);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-cream pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-serif-custom mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const images = product.images;

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-[0.05em] mb-8 hover:text-velmora-gold transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-velmora-surface mb-4 overflow-hidden">
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${product.name} view ${index + 1}`}
                  className={`gallery-thumb flex-shrink-0 ${selectedImageIndex === index ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] leading-tight mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex text-velmora-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-velmora-muted">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-velmora-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-3">Tone</div>
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
              <div className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-3">Quantity</div>
              <div className="qty-selector inline-flex">
                <button 
                  className="qty-btn" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  className="qty-btn" 
                  onClick={() => setQuantity(quantity + 1)}
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
              Add to Cart — ${product.price * quantity}
            </button>

            <p className="text-center text-xs text-velmora-muted tracking-[0.05em]">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-velmora-taupe">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span>Description</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-velmora-muted leading-relaxed ${openAccordion === 'description' ? 'open' : ''}`}>
                  {product.longDescription}
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
                <div className={`accordion-content text-sm text-velmora-muted leading-relaxed ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <ul className="space-y-1.5">
                    <li>• 18K gold-plated brass</li>
                    <li>• Hypoallergenic posts and clasps</li>
                    <li>• Faceted crystal accents</li>
                    <li>• Wipe gently with a soft, dry cloth</li>
                    <li>• Avoid contact with water, perfume, and lotions</li>
                    <li>• Store in the provided pouch when not wearing</li>
                  </ul>
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
                <div className={`accordion-content text-sm text-velmora-muted leading-relaxed ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <p className="mb-3"><strong>Shipping:</strong> Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
                  <p className="mb-3"><strong>Returns:</strong> 30-day returns for unworn items in original packaging.</p>
                  <p><strong>Gifting:</strong> Complimentary gift wrapping and handwritten note available at checkout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-20 pt-12 border-t border-velmora-taupe">
          <h2 className="font-serif-custom text-2xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
