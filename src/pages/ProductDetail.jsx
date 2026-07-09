import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronRight, Truck, RefreshCw, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      setSelectedVariant(found.variants[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-charcoal-600">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-charcoal-500 mb-8">
          <Link to="/" className="hover:text-charcoal-900">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-charcoal-900">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-charcoal-900">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] overflow-hidden bg-cream-100 mb-4">
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
                  className={`w-20 h-20 aspect-square overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-charcoal-900' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="product-name text-2xl md:text-3xl text-charcoal-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'star-filled fill-current' : 'star-empty'}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-light text-charcoal-900 mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-charcoal-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-sm font-medium text-charcoal-900 mb-3 block">
                  Tone
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-sm tracking-wider uppercase border transition-colors ${
                        selectedVariant === variant
                          ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                          : 'bg-transparent text-charcoal-900 border-charcoal-900/30 hover:border-charcoal-900'
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
              <label className="text-sm font-medium text-charcoal-900 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-charcoal-900/30 flex items-center justify-center hover:border-charcoal-900 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-charcoal-900/30 flex items-center justify-center hover:border-charcoal-900 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-premium btn-premium-solid w-full mb-6"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-charcoal-900/10">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RefreshCw, text: '30-Day Returns' },
                { icon: Shield, text: 'Hypoallergenic' },
              ].map((badge, i) => (
                <div key={i} className="text-center">
                  <badge.icon size={20} className="mx-auto mb-2 text-charcoal-600" />
                  <p className="text-xs text-charcoal-600">{badge.text}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-charcoal-900/10">
              {[
                {
                  id: 'description',
                  title: 'Description',
                  content: product.description,
                },
                {
                  id: 'materials',
                  title: 'Materials & Care',
                  content: '18K gold plated over brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfume, and lotions. Store in provided pouch.',
                },
                {
                  id: 'shipping',
                  title: 'Shipping & Returns',
                  content: 'Free worldwide shipping on orders over $50. Standard shipping: 5-7 business days. Express: 2-3 business days. 30-day hassle-free returns.',
                },
              ].map((section) => (
                <div key={section.id} className="border-b border-charcoal-900/10">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm tracking-wider uppercase font-medium">
                      {section.title}
                    </span>
                    <span className="text-charcoal-400">
                      {activeAccordion === section.id ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === section.id && (
                    <div className="pb-4 text-sm text-charcoal-600 leading-relaxed">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-charcoal-900/10">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-cream-100 mb-3">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="product-name text-sm text-charcoal-900">
                  {related.name}
                </h3>
                <p className="text-charcoal-900 font-medium mt-1">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
