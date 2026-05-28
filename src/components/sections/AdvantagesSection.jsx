import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Shield, Clock, Microscope, BarChart2, Handshake } from 'lucide-react';

const advantages = [
  {
    icon: Microscope,
    title: '超精密加工能力',
    desc: '配备 MAZAK、DMG MORI 等国际顶级五轴加工中心 30 余台，最高加工精度达 ±0.001mm，可处理复杂曲面、深孔、薄壁等高难度工件。',
    highlight: '±0.001mm',
    highlightLabel: '最高加工精度',
  },
  {
    icon: Shield,
    title: '严苛质量管控',
    desc: '建立覆盖原材料入厂、过程检验、成品全检的三级质量管控体系，配备蔡司 CONTURA 三坐标测量机，关键零件 100% 出具检测报告。',
    highlight: '100%',
    highlightLabel: '关键件全检率',
  },
  {
    icon: Zap,
    title: '快速响应与交付',
    desc: '标准样件 7 个工作日内交付，批量订单按节拍准时出货，MES 系统实时追踪生产进度，客户可随时查询订单状态，异常情况 2 小时内响应。',
    highlight: '7天',
    highlightLabel: '样件交付周期',
  },
  {
    icon: BarChart2,
    title: '数字化智能制造',
    desc: '全厂部署 MES + ERP 一体化管理系统，实现生产计划、物料、设备、质量的数字化协同管理，生产效率较传统模式提升 40% 以上。',
    highlight: '+40%',
    highlightLabel: '生产效率提升',
  },
  {
    icon: Clock,
    title: '全材料加工覆盖',
    desc: '具备铝合金、钛合金、不锈钢、高温合金、工程塑料等 50 余种材料的加工经验，针对不同材料特性制定专属工艺参数，确保加工质量稳定。',
    highlight: '50+',
    highlightLabel: '可加工材料种类',
  },
  {
    icon: Handshake,
    title: '一站式合作服务',
    desc: '提供 DFM 设计优化、材料选型、工艺咨询、样件试制、批量生产、物流配送全链条服务，专属客户经理全程跟进，降低客户管理成本。',
    highlight: '全链条',
    highlightLabel: '一站式服务',
  },
];

const certifications = [
  'ISO 9001:2015 质量管理体系',
  'IATF 16949 汽车行业质量管理',
  'AS9100D 航空航天质量管理',
  '国家高新技术企业认定',
  '省级企业技术中心',
  'CNAS 实验室认可',
];

export default function AdvantagesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="advantages" ref={containerRef} className="py-20 bg-[#0D2137]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            核心竞争优势
          </h2>
          <div className="w-16 h-1 bg-[#D4820A] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            二十年技术积累与持续创新，构建难以复制的制造竞争壁垒
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map(({ icon: Icon, title, desc, highlight, highlightLabel }) => (
            <div
              key={title}
              className="bg-[#1A5276]/30 border border-[#1A5276] rounded-lg p-6 hover:bg-[#1A5276]/50 hover:border-[#D4820A]/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D4820A]/20 border border-[#D4820A]/40 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4820A]/30 transition">
                  <Icon size={24} className="text-[#D4820A]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4820A] leading-none">{highlight}</div>
                  <div className="text-gray-500 text-xs">{highlightLabel}</div>
                </div>
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-[#1A5276]/20 border border-[#1A5276] rounded-lg p-8">
          <h3
            className="text-white font-bold text-xl text-center mb-8"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            资质认证
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 bg-[#0D2137]/60 border border-[#1A5276] rounded-lg px-4 py-3"
              >
                <div className="w-2 h-2 bg-[#D4820A] rounded-full flex-shrink-0" />
                <span className="text-gray-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <div className="relative rounded-lg overflow-hidden">
            <img
              alt="溪流谷精密制造车间"
              className="w-full h-48 object-cover opacity-30"
              data-strk-img-id="adv-banner-k1l2m3"
              data-strk-img="[adv-banner-desc] precision manufacturing factory automation"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="adv-banner-desc" className="hidden">industrial automation smart factory CNC machining</span>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white text-xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                准备好与我们合作了吗？
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#D4820A] text-white px-8 py-3 rounded font-semibold hover:bg-[#B8700A] transition"
              >
                立即获取定制方案
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
