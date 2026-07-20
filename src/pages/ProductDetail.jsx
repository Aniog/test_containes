import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/home/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Piece Not Found</h1>
        <p className="text-[var(--velmora-taupe)] mb-8">The jewelry piece you're looking for doesn't exist.</p>
        <Link to="/shop">
          <Button variant="outline">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[var(--velmora-ivory)] overflow-hidden mb-3">
            <img 
              src={product.images[activeImageIndex]} 
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
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 bg-[var(--velmora-ivory)] overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[var(--velmora-gold)]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:pt-2">
          <h1 className="product-name text-3xl tracking-[0.12em] mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xl text-[var(--velmora-gold-dark)]">${product.price}</span>
            <StarRating rating={product.rating} showNumber />
            <span className="text-xs text-[var(--velmora-taupe)]">({product.reviewCount} reviews)</span>
          </div>

          <p className="body-text text-[var(--velmora-taupe)] mb-8 pr-4">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[var(--velmora-taupe)]">Tone</div>
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
            <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[var(--velmora-taupe)]">Quantity</div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 border border-[var(--velmora-border)] flex items-center justify-center hover:border-[var(--velmora-gold)]"
              >
                −
              </button>
              <span className="w-8 text-center font-sans">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 border border-[var(--velmora-border)] flex items-center justify-center hover:border-[var(--velmora-gold)]"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button 
            variant="primary" 
            className="w-full mb-4" 
            onClick={handleAddToCart}
          >
            ADD TO CART — ${product.price * quantity}
          </Button>

          <p className="text-center text-xs tracking-widest text-[var(--velmora-taupe)]">
            FREE SHIPPING • 30-DAY RETURNS
          </p>

          {/* Accordions */}
          <div className="mt-12">
            <Accordion title="Description" defaultOpen>
              <p>{product.longDescription}</p>
            </Accordion>
            
            <Accordion title="Materials & Care">
              <ul className="space-y-1.5 list-disc pl-5">
                <li>18K gold plated brass</li>
                <li>Hypoallergenic and nickel-free</li>
                <li>Hand-finished with care</li>
                <li>Avoid contact with water, perfume, and lotions</li>
                <li>Store in the provided pouch when not worn</li>
              </ul>
            </Accordion>
            
            <Accordion title="Shipping & Returns">
              <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
              <p>30-day returns accepted on unworn items in original packaging. Contact us to initiate a return.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[var(--velmora-border)]">
          <h3 className="font-serif text-2xl mb-8">You may also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
