import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart, openCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="text-[var(--color-gold)] underline">Return to shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
    // Cart drawer can be opened via the cart icon in the navbar.
    // We intentionally do NOT auto-open here to avoid intercepting clicks.
  };

  return (
    <div className="min-h-screen pt-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[var(--color-bg-alt)] mb-3 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`gallery-thumb w-20 h-20 overflow-hidden ${selectedImage === idx ? 'active' : ''}`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl mb-2 tracking-[0.06em]">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <p className="gold-text text-xl font-medium">${product.price}</p>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-[var(--color-gold)]">★★★★★</span>
                <span className="text-[var(--color-text-muted)]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-3">Tone</p>
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
              <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--color-border)] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[var(--color-bg-alt)] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums border-x border-[var(--color-border)]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[var(--color-bg-alt)] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button variant="primary" size="full" onClick={handleAddToCart} className="mb-3">
              {added ? 'Added ✓' : 'Add to Cart'}
            </Button>
            <p className="text-center text-xs text-[var(--color-text-muted)] tracking-widest">FREE SHIPPING • 30-DAY RETURNS</p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1 list-disc list-inside">
                  <li>18K gold-plated brass</li>
                  <li>Hypoallergenic posts and clasps</li>
                  <li>Nickel and lead free</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in a cool, dry place</li>
                  <li>Clean gently with a soft cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[var(--color-border-light)]">
            <h2 className="text-xl tracking-[0.05em] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
