import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/layout/CartDrawer';
import ProductGallery from '../components/product/ProductGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/home/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart, openCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="heading-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn btn-primary mt-4">Back to Shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = [product.image, product.imageSecondary].filter(Boolean);

  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    // Open cart drawer after adding so user sees confirmation (intentional on detail page)
    setTimeout(() => {
      openCart();
    }, 80);
  };

  const incrementQty = () => setQuantity(q => q + 1);
  const decrementQty = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-8">
          <Link to="/shop" className="hover:text-velmora-gold-dark">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <ProductGallery images={images} productName={product.name} />
          </div>

          {/* Details */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm text-velmora-muted">
                <Star size={14} className="fill-velmora-gold text-velmora-gold" />
                <span>{product.rating}</span>
                <span className="text-velmora-border">·</span>
                <span>{product.reviewCount} reviews</span>
              </div>
            </div>

            <p className="text-velmora-muted leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-3">Tone</p>
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
              <p className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-3">Quantity</p>
              <div className="qty-selector inline-flex">
                <button onClick={decrementQty} className="qty-btn" aria-label="Decrease quantity">−</button>
                <span className="qty-value">{quantity}</span>
                <button onClick={incrementQty} className="qty-btn" aria-label="Increase quantity">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-velmora-muted tracking-[0.08em]">
              Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc pl-5 space-y-1">
                  <li>18K gold plated over solid brass</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Wipe gently with a soft, dry cloth</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in a cool, dry place</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5-10 business days.</p>
                <p>30-day returns accepted on unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-24">
            <h3 className="heading-serif text-2xl md:text-3xl mb-8 tracking-[0.02em]">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
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
