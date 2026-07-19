import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ImageGallery from '../components/product/ImageGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../context/CartContext';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F1]">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif-custom text-3xl mb-4">Product Not Found</h1>
          <p className="text-[#6B665F] mb-8">The piece you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn-gold">BROWSE COLLECTION</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const incrementQty = () => setQuantity(q => q + 1);
  const decrementQty = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] text-[#6B665F] mb-8">
          <Link to="/shop" className="hover:text-[#C5A46E]">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name font-serif-custom text-3xl md:text-4xl tracking-[0.06em] leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="stars flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C5A46E" />
                  ))}
                </div>
                <span className="text-[#6B665F]">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] text-[#6B665F] mb-3">TONE</p>
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
              <p className="text-xs tracking-[0.1em] text-[#6B665F] mb-3">QUANTITY</p>
              <div className="qty-selector inline-flex text-sm">
                <button onClick={decrementQty} className="qty-btn" aria-label="Decrease quantity">−</button>
                <span className="qty-value">{quantity}</span>
                <button onClick={incrementQty} className="qty-btn" aria-label="Increase quantity">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn-gold w-full mb-4"
            >
              ADD TO CART
            </button>

            <p className="text-center text-xs text-[#6B665F] tracking-[0.05em]">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-12 space-y-1">
              <Accordion title="DESCRIPTION" defaultOpen={true}>
                <p>{product.longDescription}</p>
              </Accordion>

              <Accordion title="MATERIALS & CARE">
                <ul className="space-y-1.5">
                  <li>• 18K gold plated brass</li>
                  <li>• Hypoallergenic posts and clasps</li>
                  <li>• Cubic zirconia crystal accents</li>
                  <li>• Wipe gently with a soft, dry cloth</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Store in the provided pouch when not worn</li>
                </ul>
              </Accordion>

              <Accordion title="SHIPPING & RETURNS">
                <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h3 className="font-serif-custom text-2xl tracking-[0.02em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
