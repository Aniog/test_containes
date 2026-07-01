import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { getProductBySlug, getRelatedProducts } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants.find((v) => v.available) || product?.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-cream flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);
  const availableVariants = product.variants.filter((v) => v.available);

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
    }
  };

  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-velmora-ivory mb-3 overflow-hidden">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 bg-velmora-ivory overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl text-velmora-text mb-2 tracking-[0.1em]">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl text-velmora-text">${product.price}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <span className="stars">★★★★★</span>
                <span className="text-velmora-muted">{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-velmora-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {availableVariants.length > 0 && (
              <div className="mb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-velmora-muted mb-3">Tone</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => variant.available && setSelectedVariant(variant)}
                      disabled={!variant.available}
                      className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''} ${!variant.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      {variant.label}
                      {!variant.available && ' (Sold Out)'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-velmora-ivory transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-3 text-sm border-x border-velmora-border">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-velmora-ivory transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock || !selectedVariant}
              className="btn btn-primary w-full mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>

            <p className="text-center text-xs text-velmora-muted tracking-widest">
              FREE SHIPPING • 30-DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-velmora-border">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is hand-finished in our studio. Slight variations in texture are a natural part of the artisanal process.</p>
              </Accordion>
              
              <Accordion title="Materials & Care">
                <p><strong>Material:</strong> {product.material}</p>
                <p className="mt-3">To maintain the beauty of your jewelry, avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place and polish gently with a soft cloth.</p>
              </Accordion>
              
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery within 5–10 business days.</p>
                <p className="mt-3">We offer a 30-day return policy for unworn items in original packaging. Please contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <h2 className="heading-serif text-2xl">You May Also Like</h2>
            <Link to="/shop" className="text-sm tracking-widest hover:text-velmora-gold transition-colors hidden md:block">
              SHOP ALL →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
