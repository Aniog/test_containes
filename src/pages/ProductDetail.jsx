import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const { addToCart, setIsCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    // Load images after component mounts
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-primary inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <div className="section-padding" ref={containerRef}>
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-velmora-warmGray">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] overflow-hidden bg-velmora-cream rounded-lg mb-4">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                data-strk-img-id={`product-detail-${product.id}-${selectedImage}`}
                data-strk-img={product.images[selectedImage].dataStrkImg}
                data-strk-img-ratio={product.images[selectedImage].dataStrkImgRatio}
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-velmora-gold' 
                      : 'border-transparent hover:border-velmora-warmGray/30'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={image.dataStrkImg}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="product-name text-3xl mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl font-medium mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-velmora-gold">
                {'★'.repeat(Math.floor(product.rating))}
              </div>
              <span className="text-sm text-velmora-warmGray">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-velmora-warmGray mb-8 leading-relaxed">
              {product.description}. Crafted with 18k gold plating over high-quality brass. 
              Hypoallergenic and nickel-free, perfect for sensitive skin.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-wider mb-3">
                Material
              </label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setVariant(mat)}
                    className={`px-6 py-2.5 border-2 uppercase tracking-wider text-sm font-medium transition-all ${
                      variant === mat
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-warmGray/30 hover:border-velmora-charcoal'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wider mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-warmGray/30 rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-warmGray/30 rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-6"
            >
              <ShoppingBag size={18} />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {[
                { title: 'Description', content: 'Each Velmora piece is thoughtfully designed and crafted with 18k gold plating over high-quality brass. Our demi-fine jewelry offers the perfect balance of luxury and accessibility.' },
                { title: 'Materials & Care', content: '18k gold plated over brass. Hypoallergenic and nickel-free. Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean with a soft jewelry cloth.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging and unused condition.' }
              ].map((section) => (
                <div key={section.title} className="border-t border-velmora-warmGray/20">
                  <button
                    onClick={() => toggleAccordion(section.title)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="uppercase tracking-wider text-sm font-medium">
                      {section.title}
                    </span>
                    {expandedAccordion === section.title ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {expandedAccordion === section.title && (
                    <p className="pb-4 text-sm text-velmora-warmGray leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-serif text-3xl font-light mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-velmora-cream rounded-lg mb-4">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={related.images[0].alt}
                    data-strk-img-id={`related-${related.id}`}
                    data-strk-img={related.images[0].dataStrkImg}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="product-name text-base mb-1">
                  {related.name}
                </h3>
                <p className="font-serif text-lg font-medium">
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
