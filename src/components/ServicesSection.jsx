import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Megaphone, Palette, TrendingUp, Globe, Camera, BarChart2 } from 'lucide-react';

const services = [
  {
    id: 'svc-1',
    icon: Megaphone,
    title: '品牌策划',
    desc: '从品牌定位到视觉识别，构建完整的品牌体系，让您的品牌在市场中脱颖而出。',
    imgId: 'svc-img-1a2b3c',
    imgQuery: '[svc-title-1] [services-title]',
  },
  {
    id: 'svc-2',
    icon: Palette,
    title: '创意设计',
    desc: '专业设计团队提供平面设计、包装设计、UI/UX设计等全方位创意服务。',
    imgId: 'svc-img-2d3e4f',
    imgQuery: '[svc-title-2] [services-title]',
  },
  {
    id: 'svc-3',
    icon: TrendingUp,
    title: '整合营销',
    desc: '线上线下全渠道整合营销策略，精准触达目标受众，提升品牌影响力。',
    imgId: 'svc-img-3g4h5i',
    imgQuery: '[svc-title-3] [services-title]',
  },
  {
    id: 'svc-4',
    icon: Globe,
    title: '数字营销',
    desc: '社交媒体运营、SEO优化、内容营销，全面提升品牌数字化影响力。',
    imgId: 'svc-img-4j5k6l',
    imgQuery: '[svc-title-4] [services-title]',
  },
  {
    id: 'svc-5',
    icon: Camera,
    title: '影视制作',
    desc: '专业影视团队提供广告片、宣传片、短视频等高质量视频内容制作。',
    imgId: 'svc-img-5m6n7o',
    imgQuery: '[svc-title-5] [services-title]',
  },
  {
    id: 'svc-6',
    icon: BarChart2,
    title: '数据分析',
    desc: '基于数据驱动的营销决策，精准分析市场趋势，优化广告投放效果。',
    imgId: 'svc-img-6p7q8r',
    imgQuery: '[svc-title-6] [services-title]',
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 bg-[#0D1220]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">我们的服务</span>
          <h2 id="services-title" className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            全方位广告<span className="gold-gradient-text">解决方案</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            从策略规划到创意执行，我们提供一站式广告服务，助力品牌实现商业价值最大化。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={svc.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber flex items-center justify-center shadow-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 id={`svc-title-${idx + 1}`} className="text-white text-xl font-semibold mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    了解更多
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
