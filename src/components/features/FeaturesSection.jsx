import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShieldCheck, Microscope, Cpu, HeartPulse, Award, Truck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '严格质量管控',
    desc: '通过ISO 13485、CE、FDA等多项国际认证，建立全流程质量追溯体系，每件产品出厂前经过严格的多道检测工序。',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Microscope,
    title: '自主研发创新',
    desc: '拥有200余项专利技术，年研发投入占营收15%以上，持续推动医疗器械技术革新，引领行业发展方向。',
    color: 'bg-cyan-50 text-cyan-700',
  },
  {
    icon: Cpu,
    title: '智能化技术',
    desc: '将人工智能、大数据分析融入医疗器械，实现智能辅助诊断、远程监控和预测性维护，提升医疗效率。',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    icon: HeartPulse,
    title: '全面产品覆盖',
    desc: '覆盖诊断影像、手术器械、监护设备、检验仪器等多个医疗领域，500余款产品满足不同临床需求。',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Award,
    title: '国际认证资质',
    desc: '产品获得中国NMPA、欧盟CE、美国FDA、日本PMDA等多国监管机构认证，合规进入全球主要市场。',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Truck,
    title: '完善售后服务',
    desc: '在全国设立50余个服务网点，提供7×24小时技术支持，平均响应时间不超过4小时，保障设备稳定运行。',
    color: 'bg-rose-50 text-rose-700',
  },
];

const certifications = [
  { name: 'ISO 13485', desc: '医疗器械质量管理体系' },
  { name: 'CE 认证', desc: '欧盟市场准入认证' },
  { name: 'FDA 510(k)', desc: '美国食品药品监督管理局' },
  { name: 'NMPA', desc: '国家药品监督管理局' },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (strkImgConfig && Object.keys(strkImgConfig).length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">核心优势</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            为何选择星闪医疗
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            凭借二十年深耕医疗器械领域的经验积累，我们以技术创新和品质保障赢得全球客户的信赖。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">国际权威认证</h3>
            <p className="text-blue-200 text-sm">多项国际认证，品质值得信赖</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-white font-bold text-lg mb-1">{cert.name}</div>
                <div className="text-blue-200 text-xs">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
