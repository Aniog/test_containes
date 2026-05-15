import { useEffect, useRef, useState } from 'react';
import { Zap, Box, Cpu, Settings, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'switchgear',
    icon: Zap,
    title: '高压开关柜',
    subtitle: 'High Voltage Switchgear',
    desc: '适用于10kV～35kV电压等级，采用全绝缘全封闭结构，具备完善的五防联锁功能，满足IEC 62271标准要求。',
    specs: ['额定电压：10kV / 35kV', '额定电流：630A～4000A', '短路开断电流：31.5kA～50kA', '防护等级：IP4X'],
    imgId: 'prod-switchgear-g7h8i9',
    imgQuery: '[prod-title-switchgear] [prod-subtitle-switchgear]',
  },
  {
    id: 'transformer',
    icon: Box,
    title: '干式变压器',
    subtitle: 'Dry-Type Transformer',
    desc: '环氧树脂浇注绝缘，无油化设计，防火阻燃，适用于地铁、医院、数据中心等对安全要求极高的场所。',
    specs: ['容量范围：100kVA～20000kVA', '电压等级：10kV / 35kV', '绝缘等级：F级 / H级', '节能等级：GB 20052-2020'],
    imgId: 'prod-transformer-j1k2l3',
    imgQuery: '[prod-title-transformer] [prod-subtitle-transformer]',
  },
  {
    id: 'smart-dist',
    icon: Cpu,
    title: '智能配电系统',
    subtitle: 'Smart Distribution System',
    desc: '集成物联网传感、边缘计算与云端管理，实现配电网络的实时监测、故障预警与远程运维，助力数字化转型。',
    specs: ['通信协议：IEC 61850 / Modbus', '监测精度：±0.5%', '响应时间：<100ms', '云端接入：支持私有云/公有云'],
    imgId: 'prod-smart-m4n5o6',
    imgQuery: '[prod-title-smart] [prod-subtitle-smart]',
  },
  {
    id: 'ring-main',
    icon: Settings,
    title: '环网柜',
    subtitle: 'Ring Main Unit',
    desc: '充气式全绝缘环网柜，SF6气体绝缘，体积小、免维护，适用于城市配电网环网供电及终端供电。',
    specs: ['额定电压：12kV / 24kV', '额定电流：630A', '短路耐受电流：20kA', '气体压力：0.13MPa（表压）'],
    imgId: 'prod-ring-p7q8r9',
    imgQuery: '[prod-title-ring] [prod-subtitle-ring]',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(products[0].id);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const current = products.find((p) => p.id === active);

  return (
    <section id="products" className="py-20 bg-[#0A1628]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-[#2196F3] text-xs font-semibold tracking-widest uppercase mb-3">
            PRODUCTS & SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心产品与服务</h2>
          <div className="w-16 h-1 bg-[#2196F3] rounded-full mx-auto mb-6" />
          <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto">
            覆盖发、输、配、用全环节，提供标准化产品与定制化解决方案
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === p.id
                    ? 'bg-[#2196F3] text-white shadow-lg shadow-blue-600/30'
                    : 'bg-[#162032] border border-[#1E3A5F] text-[#8BA3C1] hover:text-white hover:border-[#2196F3]/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Product Detail */}
        {current && (
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#162032]">
              <img
                alt={current.title}
                className="w-full h-full object-cover"
                data-strk-img-id={current.imgId}
                data-strk-img={current.imgQuery}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#2196F3] text-white text-xs font-bold px-3 py-1 rounded-full">
                核心产品
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1565C0]/20 p-3 rounded-xl">
                  <current.icon className="w-7 h-7 text-[#2196F3]" />
                </div>
                <div>
                  <h3
                    id={`prod-title-${current.id}`}
                    className="text-2xl font-bold text-white"
                  >
                    {current.title}
                  </h3>
                  <p
                    id={`prod-subtitle-${current.id}`}
                    className="text-[#8BA3C1] text-sm"
                  >
                    {current.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[#8BA3C1] leading-relaxed mb-6">{current.desc}</p>

              {/* Specs */}
              <div className="bg-[#162032] border border-[#1E3A5F] rounded-xl p-5 mb-6">
                <div className="text-white font-semibold mb-3 text-sm">技术参数</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.specs.map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-sm text-[#8BA3C1]">
                      <span className="w-1.5 h-1.5 bg-[#2196F3] rounded-full mt-1.5 flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-[#2196F3] hover:bg-[#1565C0] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                获取产品资料
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
