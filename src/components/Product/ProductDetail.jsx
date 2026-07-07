import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, openCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
      openCart();
    }
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-velmora-mist">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-charcoal">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
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
                className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-mist'}
                />
              ))}
            </div>
            <span className="text-sm text-velmora-mist">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-medium mb-8">${product.price.toFixed(2)}</p>

          {/* Description */}
          <p className="text-velmora-graphite leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border-2 transition-all duration-300 ${
                      selectedVariant?.id === variant.id
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-warm hover:border-velmora-gold'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-3">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-warm hover:border-velmora-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-warm hover:border-velmora-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-velmora-charcoal text-white font-medium tracking-wider uppercase text-sm hover:bg-velmora-gold transition-all duration-300 mb-8 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
              <div key={section} className="border-t border-velmora-warm">
                <button
                  onClick={() => toggleAccordion(section)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-sm uppercase tracking-wider">
                    {section}
                  </span>
                  {expandedAccordion === section ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {expandedAccordion === section && (
                  <div className="pb-4 text-sm text-velmora-graphite leading-relaxed">
                    {section === 'Description' && <p>{product.description}</p>}
                    {section === 'Materials & Care' && (
                      <div>
                        <p className="mb-2"><strong>Materials:</strong> {product.material}, Hypoallergenic</p>
                        <p><strong>Care:</strong> Avoid contact with perfumes, lotions, and water. Store in a cool, dry place. Clean gently with a soft cloth.</p>
                      </div>
                    )}
                    {section === 'Shipping & Returns' && (
                      <div>
                        <p className="mb-2">Free worldwide shipping on all orders.</p>
                        <p>30-day return policy. Items must be returned in original packaging.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              to={`/product/${related.id}`}
              className="group bg-velmora-cream overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                  {related.name}
                </h3>
                <p className="font-medium text-sm">${related.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
