import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Accordion from '../components/ui/Accordion';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/ui/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg pt-20">
        <Navbar />
        <div className="container py-20 text-center">
          <h2 className="mb-4">Piece Not Found</h2>
          <p className="text-velmora-text-muted mb-8">The jewelry you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn btn-accent">Browse Collection</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);
  const images = product.images || [];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />
      <CartDrawer />

      <div className="container py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="gallery-main mb-3">
              <img
                src={images[selectedImageIndex] || images[0]}
                alt={product.name}
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`gallery-thumb ${selectedImageIndex === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-2xl md:text-3xl mb-2 tracking-[0.08em]">
              {product.name}
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium tabular-nums">${product.price}</span>
              <div className="flex items-center gap-2 text-sm">
                <StarRating rating={product.rating} />
                <span className="text-velmora-text-muted">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="body-text text-velmora-text-muted mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <div className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-2">
                  Tone
                </div>
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
            )}

            {/* Quantity */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-2">
                Quantity
              </div>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-velmora-bg-alt transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums border-x border-velmora-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-velmora-bg-alt transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-accent btn-full mb-4">
              Add to Cart
            </button>

            <p className="text-xs text-velmora-text-muted text-center">
              Ships in 1–2 business days · Free worldwide shipping
            </p>

            {/* Accordions */}
            <div className="mt-10 space-y-1">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">
                  Each piece is hand-finished in our atelier and comes with a velvet pouch 
                  and care card.
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-1.5">
                  <li>• 18K gold plating over sterling silver base</li>
                  <li>• Hypoallergenic and nickel-free</li>
                  <li>• Water-resistant for everyday wear</li>
                  <li>• Avoid harsh chemicals and store in provided pouch</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  Free worldwide shipping on all orders. Delivery in 5–10 business days.
                </p>
                <p>
                  30-day returns on unworn items in original packaging. 
                  Contact us to initiate a return.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-velmora-border">
            <div className="flex items-end justify-between mb-8">
              <h3>You May Also Like</h3>
              <Link to="/shop" className="text-sm tracking-widest hidden md:block">VIEW ALL →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;