import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShieldCheck, Truck, RefreshCw, Headphones, Star, Package } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '品质保证',
    desc: '所有产品均经过严格质检，符合国家安全标准，让您放心使用。',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Truck,
    title: '极速配送',
    desc: '全国范围内48小时内发货，偏远地区72小时，让温馨早日到家。',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: RefreshCw,
    title: '无忧退换',
    desc: '30天无理由退换货，让您的每一次购物都没有后顾之忧。',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Headphones,
    title: '贴心服务',
    desc: '专业客服团队7×12小时在线，随时解答您的疑问与需求。',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: Star,
    title: '精选材质',
    desc: '严格筛选天然、环保材料，拒绝有害物质，守护家人健康。',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    icon: Package,
    title: '精美包装',
    desc: '每件商品均采用环保礼品包装，送礼自用两相宜，体面又贴心。',
    color: 'bg-teal-50 text-teal-700',
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">品质承诺</span>
          <h2
            id="features-title"
            className="text-3xl md:text-4xl font-bold text-stone-800 mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            选择庆巷，选择放心
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            我们深知，您对家的每一份期待都值得被认真对待。庆巷家居以六大承诺，守护您的每一次选择。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-6 rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all bg-white"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h3
                  className="text-base font-bold text-stone-800 mb-1.5"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="features-banner-j1k2l3"
            data-strk-bg="[features-banner-subtitle] [features-banner-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-stone-900/60" />
          <div className="relative z-10 py-14 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3
                id="features-banner-title"
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                让家更美好，从庆巷开始
              </h3>
              <p id="features-banner-subtitle" className="text-white/80 text-base max-w-md leading-relaxed">
                现在下单，享受首单九折优惠，并赠送精美家居礼品一份，让温馨从第一天就开始。
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-white text-amber-800 font-bold px-8 py-4 rounded-full hover:bg-amber-50 transition-colors shadow-lg text-base whitespace-nowrap"
            >
              立即享受优惠
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
