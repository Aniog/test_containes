import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ChevronDown, ChevronUp, Truck, RefreshCw, Shield } from 'lucide-react';
import products from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="container-velmora py-12 px-4">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-velmora-charcoal">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-black">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div>
          <div className="mb-4 bg-velmora-cream">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 border-2 transition-colors ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-center">
          <h1
            className="product-name text-2xl mb-4 text-velmora-black"
            style={{ fontFamily: 'Cormorant Garamond', serif: true }}
          >
            {product.name}
          </h1>

          <p className="text-2xl mb-6" style={{ fontFamily: 'Cormorant Garamond', serif: true }}>
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-velmora-gold">
              {'★'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-sm text-velmora-charcoal">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-velmora-charcoal mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-8">
            <label className="block text-sm uppercase tracking-wider mb-4">Material</label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`variant-pill ${
                    selectedVariant === variant ? 'active' : ''
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm uppercase tracking-wider mb-4">Quantity</label>
            <div className="quantity-input inline-flex">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:text-velmora-gold transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:text-velmora-gold transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="btn-primary w-full mb-6"
          >
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="mt-8">
            {[
              { title: 'Description', content: product.description },
              {
                title: 'Materials & Care',
                content: '18K gold plated over sustainable brass. Hypoallergenic and tarnish-resistant. Avoid contact with water, perfume, and lotions. Store in provided pouch.'
              },
              {
                title: 'Shipping & Returns',
                content: 'Free worldwide shipping on all orders. 30-day return policy. See our returns page for details.'
              }
            ].map((section) => (
              <div key={section.title} className="accordion-item">
                <button
                  onClick={() => toggleAccordion(section.title)}
                  className="accordion-trigger"
                >
                  <span>{section.title}</span>
                  {expandedAccordion === section.title ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {expandedAccordion === section.title && (
                  <div className="pb-6 text-velmora-charcoal leading-relaxed">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-velmora-beige pt-16">
        <h2
          className="text-3xl font-light text-center mb-12"
          style={{ fontFamily: 'Cormorant Garamond', serif: true }}
        >
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              to={`/product/${related.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-velmora-cream mb-4">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="product-name text-sm mb-2">{related.name}</h3>
              <p className="text-lg" style={{ fontFamily: 'Cormorant Garamond', serif: true }}>
                ${related.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}