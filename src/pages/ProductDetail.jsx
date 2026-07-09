import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordion';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.slug === slug);
  
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn btn-outline">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setJustAdded(true);
    // Reset the "added" state after 2 seconds
    setTimeout(() => setJustAdded(false), 2000);
  };

  const images = product.images || [product.images?.[0] || ''];

  return (
    <div className="pt-20">
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-muted)] mb-8">
          <Link to="/shop" className="hover:text-[var(--velmora-deep)]">Shop</Link>
          {' / '}
          <Link to={`/shop?category=${product.category}`} className="hover:text-[var(--velmora-deep)]">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          {' / '}
          <span>{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[var(--velmora-bg-alt)] mb-4 overflow-hidden">
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`gallery-thumb ${selectedImageIndex === index ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex text-[var(--velmora-gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[var(--velmora-muted)]">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="body-text mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-muted)] mb-2">
                Finish
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedVariant('gold')}
                  className={`variant-pill ${selectedVariant === 'gold' ? 'active' : ''}`}
                >
                  Gold Tone
                </button>
                <button
                  onClick={() => setSelectedVariant('silver')}
                  className={`variant-pill ${selectedVariant === 'silver' ? 'active' : ''}`}
                >
                  Silver Tone
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-muted)] mb-2">
                Quantity
              </div>
              <div className="quantity-control w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease">
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase">
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className={`btn btn-full mb-4 transition-all ${justAdded ? 'btn-primary' : 'btn-accent'}`}
              disabled={justAdded}
            >
              {justAdded ? (
                <span className="flex items-center justify-center gap-2">
                  <Check size={16} /> Added to Cart
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>

            <p className="text-xs text-center text-[var(--velmora-muted)] tracking-[0.05em]">
              Ships in 1–2 business days · Free worldwide shipping
            </p>

            {/* Accordions */}
            <div className="mt-10 space-y-1">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.longDescription}</p>
              </Accordion>
              
              <Accordion title="Materials & Care">
                <ul className="space-y-1 list-disc list-inside">
                  <li>18K gold plated over sterling silver base</li>
                  <li>High-quality faceted crystals</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in provided pouch when not wearing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              
              <Accordion title="Shipping & Returns">
                <p className="mb-3">
                  Free worldwide shipping on all orders. Delivery in 5–10 business days depending on location.
                </p>
                <p>
                  30-day returns accepted on unworn items in original packaging. 
                  Please contact us to initiate a return.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[var(--velmora-border)]">
            <h3 className="text-xl mb-8 tracking-[-0.01em]">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;