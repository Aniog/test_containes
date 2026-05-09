import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Shield, Truck, RefreshCw, Headphones, ArrowRight } from 'lucide-react';
import { products, categories, testimonials } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const bannerSlides = [
  {
    id: 1,
    title: '2024 全新旗舰',
    subtitle: '尤尼克斯 ASTROX 99 PRO',
    desc: '旋转发电系统 · 释放极致力量',
    cta: '立即选购',
    ctaLink: '/products?category=racket',
    bg: 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600',
    img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=500&fit=crop',
  },
  {
    id: 2,
    title: '李宁龙战系列',
    subtitle: '国家队同款装备',
    desc: '专业品质 · 为冠军而生',
    cta: '探索系列',
    ctaLink: '/products?category=racket',
    bg: 'bg-gradient-to-r from-red-900 via-red-800 to-red-600',
    img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=500&fit=crop',
  },
  {
    id: 3,
    title: '夏季大促销',
    subtitle: '全场最高立减 400 元',
    desc: '限时特惠 · 错过等一年',
    cta: '查看优惠',
    ctaLink: '/products',
    bg: 'bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-600',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=500&fit=crop',
  },
];

const features = [
  { icon: Shield, title: '正品保证', desc: '100%官方授权，假一赔十' },
  { icon: Truck, title: '极速发货', desc: '当日下单，次日送达' },
  { icon: RefreshCw, title: '7天退换', desc: '无理由退换，购物无忧' },
  { icon: Headphones, title: '专业客服', desc: '资深球员顾问，专业选购建议' },
];

export default function Home({ onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.filter((p) => p.badge).slice(0, 4);
  const newProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerSlides.map((slide) => (
            <div
              key={slide.id}
              className={`min-w-full ${slide.bg} relative`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white z-10">
                  <div className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {slide.title}
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                    {slide.subtitle}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 mb-8">{slide.desc}</p>
                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-base"
                  >
                    {slide.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <img
                    src={slide.img}
                    alt={slide.subtitle}
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors border-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors border-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all border-0 ${i === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{title}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">商品分类</h2>
          <Link to="/products" className="text-blue-700 text-sm font-medium hover:underline flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {categories.filter((c) => c.id !== 'all').map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <span className="text-2xl">
                  {cat.id === 'racket' ? '🏸' : cat.id === 'shuttlecock' ? '⚪' : cat.id === 'shoes' ? '👟' : cat.id === 'apparel' ? '👕' : cat.id === 'bag' ? '🎒' : '🔧'}
                </span>
              </div>
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700 transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">热门推荐</h2>
            <p className="text-gray-500 text-sm mt-1">精选热销爆款，品质保证</p>
          </div>
          <Link to="/products" className="text-blue-700 text-sm font-medium hover:underline flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <div className="text-sm font-medium text-blue-200 mb-2">限时特惠</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">新用户专享优惠</h2>
            <p className="text-blue-100">首单立减 50 元，满 299 元免运费</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/products"
              className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-center"
            >
              立即抢购
            </Link>
            <Link
              to="/contact"
              className="bg-white/20 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/30 transition-colors text-center border border-white/30"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">全部商品</h2>
            <p className="text-gray-500 text-sm mt-1">专业装备，一站购齐</p>
          </div>
          <Link to="/products" className="text-blue-700 text-sm font-medium hover:underline flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors"
          >
            查看全部商品
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">用户好评</h2>
            <p className="text-gray-500 text-sm mt-1">来自真实买家的评价</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
