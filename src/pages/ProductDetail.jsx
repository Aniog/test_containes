import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus, ChevronRight, Truck, RefreshCw, Shield } from 'lucide-react';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, itemCount } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/shop');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, quantity, selectedVariant);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-velmora-gold"></div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="page-transition pt-24 md:pt-32">
      <div className="container-premium">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-velmora-warm-gray mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/5] bg-velmora-light-gray mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-light-gray overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Product Name */}
            <h1
              className="product-name text-2xl md:text-3xl mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mb-8">${product.price}.00</p>

            {/* Short Description */}
            <p className="text-velmora-text-light mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector (Gold/Silver) */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wide mb-4">Tone</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold/10'
                        : 'border-gray-300 hover:border-velmora-gold/50'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wide mb-4">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-velmora-light-gray transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-3 min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-velmora-light-gray transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full btn-premium btn-premium-solid mb-4 ${
                isAdding ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isAdding ? 'Added!' : 'Add to Cart'}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="text-center">
                <Truck size={24} className="mx-auto mb-2 text-velmora-gold" />
                <p className="text-xs uppercase tracking-wide">Free Shipping</p>
              </div>
              <div className="text-center">
                <RefreshCw size={24} className="mx-auto mb-2 text-velmora-gold" />
                <p className="text-xs uppercase tracking-wide">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield size={24} className="mx-auto mb-2 text-velmora-gold" />
                <p className="text-xs uppercase tracking-wide">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200">
              {/* Description */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-wide">Description</span>
                  <span className={`transform transition-transform ${
                    activeAccordion === 'description' ? 'rotate-180' : ''
                  }`}>
                    ↓
                  </span>
                </button>
                <div className={`accordion-content ${activeAccordion === 'description' ? 'open' : ''}`}>
                  <div className="pb-4">
                    <p className="text-velmora-text-light leading-relaxed">{product.details}</p>
                  </div>
                </div>
              </div>

              {/* Materials & Care */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-wide">Materials & Care</span>
                  <span className={`transform transition-transform ${
                    activeAccordion === 'materials' ? 'rotate-180' : ''
                  }`}>
                    ↓
                  </span>
                </button>
                <div className={`accordion-content ${activeAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="pb-4">
                    <p className="text-velmora-text-light leading-relaxed mb-4">
                      <strong>Materials:</strong> {product.materials}
                    </p>
                    <p className="text-velmora-text-light leading-relaxed">
                      <strong>Care:</strong> To maintain the beauty of your Velmora jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not in use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-wide">Shipping & Returns</span>
                  <span className={`transform transition-transform ${
                    activeAccordion === 'shipping' ? 'rotate-180' : ''
                  }`}>
                    ↓
                  </span>
                </button>
                <div className={`accordion-content ${activeAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="pb-4">
                    <p className="text-velmora-text-light leading-relaxed mb-4">
                      <strong>Shipping:</strong> Free worldwide shipping on all orders. Delivery within 5-7 business days.
                    </p>
                    <p className="text-velmora-text-light leading-relaxed">
                      <strong>Returns:</strong> Not satisfied? Return within 30 days for a full refund. See our return policy for details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="pb-20 md:pb-32">
            <h2
              className="font-serif text-2xl md:text-3xl text-center mb-12"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-velmora-light-gray mb-4 overflow-hidden">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-2">{related.name}</h3>
                  <p className="font-serif">${related.price}.00</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
