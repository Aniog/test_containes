import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

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
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back link */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-widest mb-8 hover:text-velmora-accent">
          <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-velmora-bg mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 border-2 overflow-hidden transition-all ${selectedImageIndex === idx ? 'border-velmora-accent' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-widest mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 star ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
                <span className="ml-2 text-velmora-text-light">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-velmora-text-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-3">TONE</p>
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
              <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-3">QUANTITY</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-velmora-bg transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-velmora-border">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-velmora-bg transition-colors"
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
              ADD TO CART
            </button>
            <p className="text-center text-xs text-velmora-text-light tracking-widest">
              FREE SHIPPING • 30-DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-velmora-border">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span>DESCRIPTION</span>
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
                  className="accordion-header w-full text-left"
                >
                  <span>MATERIALS & CARE</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content space-y-3">
                    <p>18K gold plated over hypoallergenic brass base.</p>
                    <p>To preserve the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not in use. Clean gently with a soft, dry cloth.</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span>SHIPPING & RETURNS</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content space-y-3">
                    <p><strong>Free worldwide shipping</strong> on all orders. Delivery in 5–10 business days.</p>
                    <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-border">
            <h3 className="serif text-2xl tracking-[0.05em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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