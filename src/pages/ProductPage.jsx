import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-champagne-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="font-sans text-sm text-charcoal-600 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/collection" className="btn-outline">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-champagne-500 text-champagne-500' : 'text-charcoal-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-20 bg-ivory-100">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-500">
          <Link to="/" className="hover:text-charcoal-900">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-charcoal-900">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-champagne-50 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-charcoal-900'
                      : 'border-transparent hover:border-champagne-300'
                  }`}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block bg-champagne-200 text-charcoal-900 px-3 py-1 text-xs font-sans uppercase tracking-wide mb-3">
                {product.badge}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 uppercase tracking-wide mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl font-semibold text-charcoal-700 mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">{renderStars(product.rating)}</div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-charcoal-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900 mb-3">
                  Finish: {selectedVariant}
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 rounded-full border-2 font-sans text-sm transition-all ${
                        selectedVariant === variant
                          ? 'border-charcoal-900 bg-charcoal-900 text-ivory-100'
                          : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-900'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-charcoal-200 rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-champagne-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-champagne-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-2 mb-4"
            >
              Add to Bag — ${product.price * quantity}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-xs font-sans text-charcoal-500 mb-8">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
                Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
                30-Day Returns
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
                Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="pt-4">
              <Accordion title="Description">
                {product.description} Crafted with attention to detail, this piece features premium 
                18K gold plating over hypoallergenic sterling silver, ensuring comfortable all-day wear.
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over Hypoallergenic Metal</li>
                  <li>• Sterling Silver Base</li>
                  <li>• Cubic Zirconia Crystals</li>
                  <li>• Store in provided pouch when not wearing</li>
                  <li>• Avoid contact with water, perfume, and chemicals</li>
                  <li>• Clean gently with a soft polishing cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on orders over $75</li>
                  <li>• Standard shipping: 5-7 business days</li>
                  <li>• Express shipping: 2-3 business days</li>
                  <li>• Free 30-day returns for unworn items</li>
                  <li>• Contact us for exchanges or special requests</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group block">
                  <div className="aspect-[3/4] bg-champagne-50 rounded overflow-hidden mb-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs mb-1">{item.name}</h3>
                  <p className="product-price text-sm">${item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
