import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, closeCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Product not found.</p>
          <Link to="/shop" className="underline">Return to shop</Link>
        </div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];
  
  const images = [
    product.images.primary,
    product.images.secondary || product.images.primary,
  ];

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    // Ensure drawer is closed so the add action isn't blocked by backdrop
    closeCart();
    setTimeout(() => {
      addToCart(product, selectedVariant, quantity);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-velmora-cream overflow-hidden mb-3">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
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
          <div>
            <div className="product-name text-3xl tracking-[0.06em] mb-2">{product.name}</div>
            <div className="text-xl mb-4">${product.price}</div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <span className="stars">★★★★★</span>
              <span className="text-sm text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-[15px] leading-relaxed text-velmora-charcoal/90 mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] text-velmora-muted mb-3">TONE</div>
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
              <div className="text-xs tracking-[0.1em] text-velmora-muted mb-3">QUANTITY</div>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-velmora-cream"
                >
                  −
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-velmora-cream"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-3">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-velmora-muted tracking-[0.05em]">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-velmora-border">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span>Description</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <div className="py-4 text-sm leading-relaxed text-velmora-charcoal/90 pr-4">
                    {product.description} Each piece is hand-finished in our atelier and packaged in a signature velvet pouch.
                  </div>
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  <span>Materials & Care</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="py-4 text-sm leading-relaxed text-velmora-charcoal/90 pr-4 space-y-2">
                    <p>• 18K gold plated over brass</p>
                    <p>• Hypoallergenic and nickel-free</p>
                    <p>• Avoid contact with water, perfume, and lotions</p>
                    <p>• Store in the provided pouch when not worn</p>
                    <p>• Gently polish with a soft cloth</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="py-4 text-sm leading-relaxed text-velmora-charcoal/90 pr-4 space-y-2">
                    <p>• Free worldwide shipping on orders over $75</p>
                    <p>• Standard delivery: 5–10 business days</p>
                    <p>• 30-day returns on unworn items in original packaging</p>
                    <p>• Each order is gift-wrapped and includes a care card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] text-velmora-muted mb-1">MORE TO LOVE</div>
              <h3 className="font-serif text-2xl tracking-[0.02em]">You May Also Like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
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