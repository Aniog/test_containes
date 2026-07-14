import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import products from '../../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const found = products.find(p => p.slug === slug);
    if (found) {
      setProduct(found);
      setSelectedVariant(found.variants[0]);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-2xl text-velmora-charcoal">Loading...</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="font-sans text-xs text-velmora-muted hover:text-velmora-gold uppercase tracking-wider">
            Home
          </Link>
          <span className="font-sans text-xs text-velmora-muted mx-2">/</span>
          <Link to="/shop" className="font-sans text-xs text-velmora-muted hover:text-velmora-gold uppercase tracking-wider">
            Shop
          </Link>
          <span className="font-sans text-xs text-velmora-muted mx-2">/</span>
          <span className="font-sans text-xs text-velmora-charcoal uppercase tracking-wider">
            {product.name}
          </span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-velmora-cream mb-4 overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 
                               flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 
                               flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 
                               ${selectedImageIndex === index ? 'border-velmora-gold' : 'border-transparent'}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="font-sans text-3xl uppercase tracking-widest text-velmora-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-taupe'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velmora-charcoal mb-8">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-base text-velmora-charcoal/80 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-8">
                <label className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-4 block">
                  Tone
                </label>
                <div className="flex space-x-4">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-8 py-3 font-sans text-sm uppercase tracking-wider transition-colors
                                 ${
                                   selectedVariant === variant
                                     ? 'bg-velmora-charcoal text-white'
                                     : 'border border-velmora-taupe text-velmora-charcoal hover:border-velmora-gold'
                                 }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-4 block">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-taupe flex items-center justify-center
                             hover:border-velmora-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-taupe flex items-center justify-center
                             hover:border-velmora-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-white py-4 font-sans text-sm uppercase tracking-wider
                         hover:bg-velmora-gold-dark transition-colors duration-300 mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <div key={section} className="border-t border-velmora-sand">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === section ? null : section)}
                    className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-wider
                               text-velmora-charcoal hover:text-velmora-gold transition-colors"
                  >
                    {section}
                    <span className="text-lg">
                      {activeAccordion === section ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === section && (
                    <div className="pb-4">
                      <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed">
                        {section === 'Description' && product.description}
                        {section === 'Materials & Care' && 
                          '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain your jewelry\'s beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place.'}
                        {section === 'Shipping & Returns' && 
                          'Free worldwide shipping on all orders. 30-day returns. See our full shipping and returns policy for details.'}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-serif text-3xl text-velmora-charcoal mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <Link
                key={related.id}
                to={`/product/${related.slug}`}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-velmora-cream mb-4 overflow-hidden">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-2">
                  {related.name}
                </h3>
                <p className="font-serif text-lg text-velmora-charcoal">
                  ${related.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
