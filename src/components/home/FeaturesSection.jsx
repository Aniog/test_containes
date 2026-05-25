import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShieldCheck, Truck, RefreshCw, Headphones, Star, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#8B6F47]" />,
    title: '品质严选',
    desc: '每件产品经过多道质检工序，严格把控原材料与生产工艺，确保品质始终如一。',
  },
  {
    icon: <Truck className="w-7 h-7 text-[#8B6F47]" />,
    title: '极速配送',
    desc: '全国顺丰包邮，48小时内发货，让您尽快收到心仪的家居好物。',
  },
  {
    icon: <RefreshCw className="w-7 h-7 text-[#8B6F47]" />,
    title: '无忧退换',
    desc: '收货后30天内支持无理由退换，让您购物无后顾之忧，放心选购。',
  },
  {
    icon: <Headphones className="w-7 h-7 text-[#8B6F47]" />,
    title: '贴心服务',
    desc: '专业客服团队7×12小时在线，随时解答您的疑问，提供个性化家居搭配建议。',
  },
];

const stats = [
  { icon: <Users className="w-6 h-6" />, value: '50万+', label: '幸福家庭' },
  { icon: <Star className="w-6 h-6" />, value: '4.9分', label: '用户好评' },
  { icon: <ShieldCheck className="w-6 h-6" />, value: '10年+', label: '品质积累' },
  { icon: <Truck className="w-6 h-6" />, value: '200+', label: '城市覆盖' },
];

export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C4714A] text-sm font-medium tracking-widest uppercase mb-3">品牌优势</p>
          <h2 id="features-title" className="text-3xl md:text-4xl font-serif font-bold text-[#2C1810] mb-4">
            选择维纯，选择放心
          </h2>
          <p id="features-subtitle" className="text-[#6B5B4E] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            我们不只是在销售产品，更是在传递一种对家的态度——用心、用情、用品质。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#FDFAF5] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-[#F5F0E8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#2C1810] mb-3">{f.title}</h3>
              <p className="text-[#6B5B4E] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-[#8B6F47] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="flex justify-center mb-2 opacity-80">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-serif font-bold mb-1">{s.value}</div>
                <div className="text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lifestyle Image */}
        <div className="mt-16 md:mt-20 rounded-2xl overflow-hidden shadow-lg aspect-[16/6] relative">
          <img
            alt="温馨家庭生活场景"
            className="w-full h-full object-cover"
            data-strk-img-id="features-img-y7z8a9"
            data-strk-img="[features-subtitle] [features-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/60 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                让家成为最美的风景
              </h3>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                维纯家居，陪伴您和家人走过每一个平凡而珍贵的日子。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
