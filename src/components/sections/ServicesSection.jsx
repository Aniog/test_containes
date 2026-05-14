import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Palette, Megaphone, Globe, BarChart2, Film, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: '品牌视觉设计',
    desc: 'VI系统设计、Logo设计、品牌手册，构建完整的品牌视觉识别体系，让品牌形象深入人心。',
    imgId: 'svc-img-a1b2c3',
    imgQuery: '[svc-title-1] brand visual identity design logo',
  },
  {
    icon: Megaphone,
    title: '整合营销传播',
    desc: '线上线下全渠道整合，制定精准的营销传播策略，实现品牌声量与销售转化的双重提升。',
    imgId: 'svc-img-d4e5f6',
    imgQuery: '[svc-title-2] integrated marketing communication campaign',
  },
  {
    icon: Globe,
    title: '数字广告投放',
    desc: '精准人群定向，多平台广告投放管理，数据实时监控优化，最大化广告投资回报率。',
    imgId: 'svc-img-g7h8i9',
    imgQuery: '[svc-title-3] digital advertising social media marketing',
  },
  {
    icon: Film,
    title: '影视广告制作',
    desc: '从创意脚本到拍摄制作，打造高品质TVC、网络视频广告，用影像力量传递品牌温度。',
    imgId: 'svc-img-j1k2l3',
    imgQuery: '[svc-title-4] video production film advertising commercial',
  },
  {
    icon: BarChart2,
    title: '市场调研分析',
    desc: '深度市场洞察，消费者行为研究，竞品分析报告，为品牌决策提供有力的数据支撑。',
    imgId: 'svc-img-m4n5o6',
    imgQuery: '[svc-title-5] market research analysis data business',
  },
  {
    icon: Smartphone,
    title: '社交媒体运营',
    desc: '微信、微博、抖音、小红书全平台内容运营，打造有温度的品牌社交媒体矩阵。',
    imgId: 'svc-img-p7q8r9',
    imgQuery: '[svc-title-6] social media management content creation mobile',
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E8431A] font-semibold text-sm uppercase tracking-widest">服务项目</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-2">全方位广告服务</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            从品牌策划到落地执行，我们提供一站式广告服务解决方案
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const titleId = `svc-title-${idx + 1}`;
            return (
              <div
                key={svc.title}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={svc.imgId}
                    data-strk-img={svc.imgQuery}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[#E8431A] flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 id={titleId} className="text-lg font-bold text-[#1A1A2E] mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center mt-4 text-[#E8431A] text-sm font-semibold hover:text-[#F5A623] transition-colors"
                  >
                    了解更多 →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
