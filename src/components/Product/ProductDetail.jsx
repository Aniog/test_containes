import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { Star, Plus, Minus, ChevronRight, Truck, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-lg mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    openCart();
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: '18K Gold Plated over high-quality brass. Hypoallergenic and nickel-free. To maintain the beauty of your Velmora piece, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not in use.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied with your purchase, return it within 30 days for a full refund or exchange.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 font-sans text-sm text-velmora-muted mb-8">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Back Button (Mobile) */}
        <button
          onClick={() => navigate(-1)}
          className="md:hidden flex items-center space-x-2 font-sans text-sm text-velmora-muted hover:text-velmora-gold mb-6"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-beige overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`gallery-thumbnail w-20 h-20 bg-velmora-beige ${
                    selectedImageIndex === index ? 'active' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="product-name text-2xl md:text-3xl mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-velmora-muted">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-3xl mb-6">${product.price}</p>
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div>
                <p className="font-sans text-sm uppercase tracking-wider mb-3">Tone</p>
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
            )}

            {/* Quantity */}
            <div>
              <p className="font-sans text-sm uppercase tracking-wider mb-3">Quantity</p>
              <div className="quantity-selector inline-flex">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-velmora-beige transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-2 border-x border-velmora-border min-w-[4rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-velmora-beige transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full py-4 text-base"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Shipping Info */}
            <div className="flex items-center space-x-3 text-sm text-velmora-muted">
              <Truck size={18} />
              <span>Free shipping on orders over $50</span>
            </div>

            {/* Accordions */}
            <div className="pt-6 space-y-4">
              {accordionItems.map((item, index) => (
                <div key={item.title} className="accordion-item">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                    className="accordion-trigger"
                  >
                    <span>{item.title}</span>
                    <span className="text-velmora-gold">
                      {expandedAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: expandedAccordion === index ? '500px' : '0',
                    }}
                  >
                    <p className="pb-4 font-sans text-sm leading-relaxed text-velmora-muted">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="heading-md mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="product-card group"
              >
                <div className="relative aspect-square overflow-hidden bg-velmora-beige">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="product-name text-sm">{relatedProduct.name}</h3>
                  <p className="font-serif">${relatedProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
