import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ShoppingBag, Truck, RefreshCw, Shield } from 'lucide-react';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/shop')} className="btn-secondary">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={18} fill="currentColor" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" size={18} />);
    }
    return stars;
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen py-12">
      <div className="container-velmora">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-sm text-warm-gray">
            <li><a href="/" className="hover:text-charcoal">Home</a></li>
            <li>/</li>
            <li><a href="/shop" className="hover:text-charcoal">Shop</a></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-ivory overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            {/* Product Name & Price */}
            <div>
              <h1 className="product-name text-3xl md:text-4xl mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif text-2xl">${product.price}</span>
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {renderStars(product.rating)}
                  </div>
                  <span className="font-sans text-sm text-warm-gray">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="font-sans text-charcoal/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase mb-4">Material</h3>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wide uppercase transition-colors ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-sand hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-sand">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-ivory transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-6 py-3 font-sans">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-ivory transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn-primary w-full flex items-center justify-center gap-3"
              >
                <ShoppingBag size={18} />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sand">
              <div className="text-center">
                <Truck size={24} className="mx-auto mb-2 text-gold" />
                <p className="font-sans text-xs">Free Shipping</p>
              </div>
              <div className="text-center">
                <RefreshCw size={24} className="mx-auto mb-2 text-gold" />
                <p className="font-sans text-xs">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield size={24} className="mx-auto mb-2 text-gold" />
                <p className="font-sans text-xs">2-Year Warranty</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-sand">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="flex items-center justify-between w-full py-4 font-sans text-sm tracking-widest uppercase"
                >
                  Description
                  <span className={`transform transition-transform ${
                    activeAccordion === 'description' ? 'rotate-180' : ''
                  }`}>↓</span>
                </button>
                {activeAccordion === 'description' && (
                  <div className="pb-4 font-sans text-sm text-charcoal/70 leading-relaxed">
                    <p>Each Velmora piece is thoughtfully crafted with 18K gold plating over high-quality brass. Our demi-fine jewelry is designed for everyday wear, combining affordability with luxury aesthetics.</p>
                    <p className="mt-2">The {product.name} features precision detailing and a warm, lasting finish that maintains its beauty over time.</p>
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="flex items-center justify-between w-full py-4 font-sans text-sm tracking-widest uppercase"
                >
                  Materials & Care
                  <span className={`transform transition-transform ${
                    activeAccordion === 'materials' ? 'rotate-180' : ''
                  }`}>↓</span>
                </button>
                {activeAccordion === 'materials' && (
                  <div className="pb-4 font-sans text-sm text-charcoal/70 leading-relaxed">
                    <p><strong>Materials:</strong> 18K Gold Plated over Brass, Hypoallergenic</p>
                    <p className="mt-2"><strong>Care Instructions:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Avoid contact with water, perfume, and cosmetics</li>
                      <li>Store in a cool, dry place when not wearing</li>
                      <li>Clean gently with a soft jewelry cloth</li>
                      <li>Remove before sleeping and exercising</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="flex items-center justify-between w-full py-4 font-sans text-sm tracking-widest uppercase"
                >
                  Shipping & Returns
                  <span className={`transform transition-transform ${
                    activeAccordion === 'shipping' ? 'rotate-180' : ''
                  }`}>↓</span>
                </button>
                {activeAccordion === 'shipping' && (
                  <div className="pb-4 font-sans text-sm text-charcoal/70 leading-relaxed">
                    <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                    <p className="mt-2"><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-sand pt-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="group block"
              >
                <div className="aspect-[3/4] bg-ivory overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{product.name}</h3>
                <p className="font-sans text-sm">${product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
