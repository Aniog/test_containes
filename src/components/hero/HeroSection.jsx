import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const HeroSection = ({ products = [], onProductClick }) => {
  const heroProducts = products.slice(0, 3);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % heroProducts.length);
      setAnimating(false);
    }, 300);
  };

  const goPrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c - 1 + heroProducts.length) % heroProducts.length);
      setAnimating(false);
    }, 300);
  };

  const product = heroProducts[current];

  if (!product) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-400 text-sm font-medium">
                {product.badge} — Save {product.discount}%
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                {product.name.split(' ').slice(0, 2).join(' ')}
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {product.name.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-lg leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Key features */}
            <ul className="space-y-3">
              {product.features.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-white">${product.price}</span>
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => addItem(product, product.colors[0])}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Buy Now
                </button>
                <button
                  onClick={() => onProductClick(product)}
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right — Product Image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-300 ${
              animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-75" />
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full max-w-lg h-80 lg:h-[500px] object-cover rounded-3xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => onProductClick(product)}
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-white/10 rounded-2xl p-4 shadow-xl">
                <div className="text-xs text-gray-400 mb-1">Limited Offer</div>
                <div className="text-white font-bold text-lg">{product.discount}% OFF</div>
                <div className="text-blue-400 text-xs">Today only</div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 pb-12">
          <button
            onClick={goPrev}
            className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {heroProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-blue-400' : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
