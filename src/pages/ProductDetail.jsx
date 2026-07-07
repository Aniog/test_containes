import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import StarRating from '../components/ui/StarRating';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(slug, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.defaultVariant || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg flex items-center justify-center">
        <div className="text-center">
          <div className="font-serif text-2xl mb-4">Product not found</div>
          <Link to="/shop" className="btn btn-gold">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const currentImage = product.images[selectedVariant] || product.images[product.defaultVariant];
  const allImages = Object.values(product.images);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const updateQty = (delta) => {
    const newQty = Math.max(1, Math.min(10, quantity + delta));
    setQuantity(newQty);
  };

  return (
    <div className="min-h-screen bg-velmora-bg text-velmora-text">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Back link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-8 hover:text-velmora-gold">
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.6] bg-velmora-surface-alt overflow-hidden mb-3">
              <img 
                src={currentImage} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-3">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      // Find which variant this image belongs to
                      const variantKey = Object.keys(product.images).find(
                        key => product.images[key] === img
                      );
                      if (variantKey) {
                        setSelectedVariant(variantKey);
                      }
                      setSelectedImageIndex(idx);
                    }}
                    className={`w-20 h-20 overflow-hidden border-2 transition-all ${
                      currentImage === img ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-1">
            <div className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-2 pr-4">
              {product.name}
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="text-2xl font-medium">{formatPrice(product.price)}</div>
              <StarRating rating={product.rating} size={15} showNumber />
              <span className="text-sm text-velmora-text-light">({product.reviewCount})</span>
            </div>

            <p className="text-[15px] text-velmora-text-muted leading-relaxed mb-8 max-w-[42ch]">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-7">
              <div className="filter-label mb-3">Tone</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`variant-pill ${selectedVariant === variant.value ? 'active' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="filter-label mb-3">Quantity</div>
              <div className="flex items-center">
                <button onClick={() => updateQty(-1)} className="qty-btn" disabled={quantity <= 1}>-</button>
                <div className="qty-input text-sm">{quantity}</div>
                <button onClick={() => updateQty(1)} className="qty-btn">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-3 text-sm tracking-[0.08em]"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-velmora-text-light tracking-widest">
              Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is hand-finished in our atelier and inspected for quality before shipping.</p>
              </Accordion>

              <Accordion title="Materials & Care">
                <div className="space-y-2">
                  <p><strong>Material:</strong> {product.material}</p>
                  <p><strong>Care:</strong> Avoid contact with perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear. Store in the provided pouch.</p>
                  <p className="text-xs pt-1">Our 18K gold plating is designed for everyday wear with proper care.</p>
                </div>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <div className="space-y-2">
                  <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-10 business days.</p>
                  <p><strong>Returns:</strong> 30-day returns on unworn items in original packaging. Contact us to initiate a return.</p>
                  <p className="text-xs pt-1">Custom and personalized pieces are final sale.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-velmora-border">
            <div className="mb-8">
              <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-1">Curated for You</div>
              <h3 className="font-serif text-3xl">You May Also Like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {related.map((p) => (
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
