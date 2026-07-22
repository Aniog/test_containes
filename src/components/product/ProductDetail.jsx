import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Accordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-champagne">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left"
    >
      <span className="text-sm uppercase tracking-wide font-medium text-espresso">
        {title}
      </span>
      {isOpen ? (
        <ChevronUp className="w-4 h-4 text-taupe" />
      ) : (
        <ChevronDown className="w-4 h-4 text-taupe" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
      }`}
    >
      <p className="text-sm text-taupe leading-relaxed">{children}</p>
    </div>
  </div>
);

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    openCart();
  };

  const toggleAccordion = (title) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-product bg-cream overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 bg-cream overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-espresso' : 'border-transparent'
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
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pl-4">
            {/* Title & Price */}
            <h1 className="product-title text-espresso text-lg md:text-xl mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-warmgray'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl md:text-4xl text-espresso mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wide text-espresso mb-3">
                  Finish: <span className="text-taupe capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-xs uppercase tracking-wide border transition-colors ${
                        selectedVariant === variant
                          ? 'border-espresso bg-espresso text-ivory'
                          : 'border-warmgray/30 text-espresso hover:border-espresso'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wide text-espresso mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-warmgray/30 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm font-medium border-x border-warmgray/30">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-ivory py-4 text-xs uppercase tracking-ultra-wide hover:bg-taupe transition-colors flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Product Details */}
            <div className="space-y-1 mb-8">
              {product.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-taupe">
                  <span className="w-1 h-1 bg-gold-500 rounded-full" />
                  {detail}
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-champagne">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => toggleAccordion('description')}
              >
                {product.description}
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => toggleAccordion('materials')}
              >
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => toggleAccordion('shipping')}
              >
                <div className="space-y-3">
                  <p><strong>Shipping:</strong> {product.shipping}</p>
                  <p><strong>Returns:</strong> {product.returns}</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
