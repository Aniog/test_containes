import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ImageGallery from '../components/product/ImageGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/home/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <p className="text-muted mb-8">The piece you're looking for doesn't exist.</p>
        <Link to="/shop" className="velmora-btn velmora-btn-primary">Browse Collection</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const updateQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
      {/* Breadcrumb */}
      <div className="text-xs tracking-[0.1em] text-muted mb-8">
        <Link to="/shop" className="hover:text-[var(--velmora-text)]">SHOP</Link>
        <span className="mx-2">/</span>
        <span>{product.category.toUpperCase()}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Image Gallery */}
        <div>
          <ImageGallery images={product.images} productName={product.name} />
        </div>

        {/* Right: Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-3">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <p className="text-2xl font-medium">${product.price}</p>
            <div className="flex items-center gap-1 text-sm text-muted">
              <div className="flex text-[var(--velmora-gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>{product.rating} ({product.reviewCount})</span>
            </div>
          </div>

          <p className="body-text text-[var(--velmora-text-muted)] mb-8 pr-4">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.1em] text-muted uppercase mb-3">Tone</p>
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
            <p className="text-xs tracking-[0.1em] text-muted uppercase mb-3">Quantity</p>
            <div className="quantity-selector inline-flex">
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(quantity - 1)}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="velmora-btn velmora-btn-primary w-full mb-4"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-muted">Free shipping on all orders • 30-day returns</p>

          {/* Accordions */}
          <div className="mt-10 space-y-1">
            <Accordion title="Description" defaultOpen={true}>
              <p>{product.longDescription}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <ul className="space-y-1.5">
                <li>• 18K gold plated over hypoallergenic brass</li>
                <li>• Lead and nickel free</li>
                <li>• Avoid contact with water, perfume, and lotions</li>
                <li>• Store in the provided pouch when not wearing</li>
                <li>• Clean gently with a soft, dry cloth</li>
              </ul>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
              <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 md:mt-24">
          <h3 className="font-serif text-2xl mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
