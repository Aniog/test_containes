import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-2xl text-charcoal">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <main className="py-24 px-6 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-charcoal-500 hover:text-charcoal transition-colors text-sm uppercase tracking-wider"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="bg-cream-100" style={{ aspectRatio: '1/1' }}>
            <img 
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 border-2 transition-all ${
                  selectedImage === index ? 'border-charcoal' : 'border-transparent'
                }`}
                style={{ width: '80px', height: '80px' }}
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
        <div className="space-y-6">
          {/* Product Name */}
          <div>
            <h1 
              className="product-name text-charcoal mb-2"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-charcoal-500 text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p 
              className="text-charcoal font-medium mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem' }}
            >
              ${product.price}
            </p>
          </div>

          {/* Description */}
          <p 
            className="text-charcoal-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8 }}
          >
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="space-y-3">
            <p className="text-charcoal text-sm uppercase tracking-wider">Material</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
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

          {/* Quantity & Add to Cart */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-6">
              <p className="text-charcoal text-sm uppercase tracking-wider">Quantity</p>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>
          </div>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t border-charcoal-200">
            {[
              { title: 'Description', content: product.details },
              { title: 'Materials & Care', content: `Materials: ${product.materials}\n\nCare: To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and lotions. Store in a cool, dry place when not worn.` },
              { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging.' }
            ].map((section, index) => (
              <div key={index} className="border-b border-charcoal-200 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-charcoal uppercase tracking-wider text-sm font-medium">
                    {section.title}
                  </span>
                  <ChevronRight 
                    size={16} 
                    className={`text-charcoal-400 transition-transform ${activeAccordion === index ? 'rotate-90' : ''}`}
                  />
                </button>
                <div className={`accordion-content ${activeAccordion === index ? 'open' : ''}`}>
                  <p 
                    className="text-charcoal-600 pt-3 leading-relaxed whitespace-pre-line"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.8 }}
                  >
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 
            className="font-serif text-charcoal mb-8 text-center"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link 
                key={related.id} 
                to={`/product/${related.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="product-card">
                  <div className="bg-cream-100 mb-3" style={{ aspectRatio: '1/1' }}>
                    <img 
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="product-name text-charcoal mb-1">{related.name}</h3>
                  <p className="text-charcoal font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    ${related.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
