import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Shield, Truck, RotateCcw, Headphones, Star, ArrowRight, Flame } from 'lucide-react';
import { products, categories, banners } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex(i => (i + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const hotProducts = products.filter(p => p.sold > 5000).slice(0, 4);
  const newProducts = products.filter(p => p.badge === '新品' || p.badge === '智能').slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div
          className={`bg-gradient-to-r ${banners[bannerIndex].bg} transition-all duration-700`}
        >
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-4">
                🔥 限时特惠
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {banners[bannerIndex].title}
                <br />
                <span className="text-yellow-300">{banners[bannerIndex].discount}</span>
              </h1>
              <p className="text-white/80 text-lg mb-6">{banners[bannerIndex].subtitle}</p>
              <div className="flex gap-3">
                <Link
                  to="/products"
                  className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition flex items-center gap-2"
                >
                  立即选购 <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition"
                >
                  查看全部
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={banners[bannerIndex].image}
                    alt="banner"
                    className="w-full h-full object-cover"
                    onError={e => { e.target.src = 'https://placehold.co/400x400/f9a8d4/9333ea?text=新品'; }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 rounded-2xl px-4 py-2 font-bold shadow-lg">
                  {banners[bannerIndex].discount}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setBannerIndex(i)}
              className={`rounded-full transition-all ${i === bannerIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Shield className="w-5 h-5 text-green-500" />, title: '隐私包装', desc: '全程保密发货' },
            { icon: <Truck className="w-5 h-5 text-blue-500" />, title: '快速发货', desc: '24小时内发出' },
            { icon: <RotateCcw className="w-5 h-5 text-orange-500" />, title: '7天退换', desc: '无忧售后保障' },
            { icon: <Headphones className="w-5 h-5 text-purple-500" />, title: '专业客服', desc: '7×24小时在线' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full inline-block" />
          商品分类
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
          {categories.slice(1).map(cat => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-xs text-gray-700 font-medium text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Hot products */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Flame className="w-6 h-6 text-red-500" />
            热销爆款
          </h2>
          <Link to="/products" className="text-pink-600 text-sm hover:underline flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hotProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* New arrivals */}
      <section className="max-w-7xl mx-auto px-4 py-6 pb-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            新品推荐
          </h2>
          <Link to="/products" className="text-pink-600 text-sm hover:underline flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">♥</div>
              <span className="text-white font-bold text-lg">蜜语商城</span>
            </div>
            <p className="text-sm leading-relaxed">专注成人健康生活，提供高品质情趣用品，隐私包装，安全发货。</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-pink-400 transition">全部商品</Link></li>
              <li><Link to="/products?category=vibrator" className="hover:text-pink-400 transition">震动棒</Link></li>
              <li><Link to="/products?category=couple" className="hover:text-pink-400 transition">情侣用品</Link></li>
              <li><Link to="/products?category=massage" className="hover:text-pink-400 transition">按摩器</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">客户服务</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 客服热线：400-888-8888</li>
              <li>📧 邮箱：service@miyu.com</li>
              <li>🕐 服务时间：7×24小时</li>
              <li>🔒 隐私保护承诺</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-xs">
          <p>© 2024 蜜语商城 版权所有 | 本站商品仅供18岁以上成年人购买</p>
        </div>
      </footer>
    </div>
  );
}
