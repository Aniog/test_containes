import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F1]">
        <Navbar />
        <div className="container pt-32 pb-20 text-center">
          <h1 className="mb-4">Product Not Found</h1>
          <p className="text-[#6B635C] mb-8">The piece you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn btn-primary">Browse Collection</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentImage = product.images[selectedImageIndex];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      <div className="container pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-white overflow-hidden mb-4">
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index ? 'border-[#B8976A]' : 'border-transparent'
                    }`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-2">
              {product.name}
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-2">
                <div className="stars">★★★★★</div>
                <span className="text-sm text-[#6B635C]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-[#6B635C] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="filter-label mb-3">Tone</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="filter-label mb-3">Quantity</div>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F8F5F1] transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F8F5F1] transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>

            <p className="text-xs text-center text-[#9A9085]">
              Free shipping on orders over $75 • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#E5DFD6]">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header"
                >
                  Description
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">
                    {product.longDescription}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header"
                >
                  Materials & Care
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content space-y-3">
                    <p><strong>Materials:</strong> {product.material}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header"
                >
                  Shipping & Returns
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content space-y-3">
                    <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
                    <p><strong>Returns:</strong> 30-day returns on unworn items in original packaging. Contact us to initiate a return.</p>
                    <p><strong>Gifting:</strong> Complimentary gift wrapping and handwritten note available at checkout.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E5DFD6]">
            <h3 className="mb-8 tracking-[0.05em]">You May Also Like</h3>
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