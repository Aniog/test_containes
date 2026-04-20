import React, { useState, useEffect } from 'react';
import {
  X, Star, ShoppingCart, Check, ChevronLeft, ChevronRight,
  Shield, Truck, RotateCcw, Zap, Plus, Minus
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductDetail = ({ product, onClose }) => {
  const { addItem, items } = useCart();
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('features');
  const [added, setAdded] = useState(false);

  const inCart = items.some((i) => i.id === product?.id && i.color === selectedColor);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setActiveImage(0);
      setQuantity(1);
      setActiveTab('features');
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = product.images || [product.image];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-gray-950 border border-white/10 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-5xl max-h-[95vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left — Images */}
          <div className="p-6 lg:p-8">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-square mb-4">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                  -{product.discount}% OFF
                </div>
              )}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveImage((i) => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === i ? 'border-blue-400 scale-105' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Details */}
          <div className="p-6 lg:p-8 lg:pl-0 flex flex-col gap-5">
            {/* Brand + Badge */}
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">{product.brand}</span>
              {product.badge && (
                <span className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Name */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-2">{product.name}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <span className="text-yellow-400 font-bold text-sm">{product.rating}</span>
              <span className="text-gray-400 text-sm">{product.reviews.toLocaleString()} verified reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-white">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold px-2.5 py-1 rounded-lg">
                    Save ${product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Color */}
            {product.colors?.length > 0 && (
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Color: <span className="text-white font-medium">{selectedColor}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                        selectedColor === color
                          ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-gray-900 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-white font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 hover:bg-blue-400 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]'
                }`}
              >
                {added ? (
                  <><Check className="w-4 h-4" /> Added to Cart!</>
                ) : (
                  <><ShoppingCart className="w-4 h-4" /> Add to Cart — ${(product.price * quantity).toFixed(2)}</>
                )}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: 'Free Shipping', sub: 'Orders $49+' },
                { icon: Shield, label: '2-Year Warranty', sub: 'Full coverage' },
                { icon: RotateCcw, label: '30-Day Returns', sub: 'No questions' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-gray-900 border border-white/5 rounded-xl p-3 text-center">
                  <Icon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <div className="text-white text-xs font-semibold">{label}</div>
                  <div className="text-gray-500 text-xs">{sub}</div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 bg-gray-900 rounded-xl p-1 mb-4">
                {['features', 'specs'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all capitalize ${
                      activeTab === tab
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab === 'features' ? 'Key Features' : 'Tech Specs'}
                  </button>
                ))}
              </div>

              {activeTab === 'features' ? (
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400 text-sm">{key}</span>
                      <span className="text-white text-sm font-medium text-right max-w-[55%]">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
