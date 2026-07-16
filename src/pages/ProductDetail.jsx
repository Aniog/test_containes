import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg">
        <Navbar />
        <div className="container pt-32 pb-20 text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);
  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />

      <div className="container pt-24 pb-16">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] mb-8 hover:text-velmora-accent">
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-velmora-bg-alt overflow-hidden mb-4">
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
                    className={`gallery-thumb w-20 h-20 overflow-hidden ${selectedImageIndex === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="stars flex text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-velmora-text-muted ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="body-text text-velmora-text-muted mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="uppercase text-xs tracking-[0.1em] text-velmora-text-muted mb-3">Tone</p>
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
              <p className="uppercase text-xs tracking-[0.1em] text-velmora-text-muted mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:bg-velmora-bg-alt"
                >
                  −
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:bg-velmora-bg-alt"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full py-4 text-base mb-4"
            >
              Add to Cart
            </button>

            <p className="text-center text-xs text-velmora-text-muted tracking-wide">
              Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full"
                >
                  <span>Description</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <p className="body-text text-sm text-velmora-text-muted pr-4">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full"
                >
                  <span>Materials & Care</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="space-y-3 text-sm text-velmora-text-muted">
                    <p>{product.details}</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="space-y-3 text-sm text-velmora-text-muted">
                    <p>Free worldwide shipping on all orders. Delivery in 5-10 business days.</p>
                    <p>30-day returns. Items must be unworn and in original packaging.</p>
                    <p>Complimentary gift wrapping available at checkout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-border">
            <h3 className="font-serif text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
