import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const capabilities = [
  '五轴联动加工中心 × 48 台，最大行程 2000mm',
  '精密内外圆磨床 × 32 台，圆度精度 0.001mm',
  '电火花成型机 × 20 台，加工精度 ±0.005mm',
  '三坐标测量机（CMM）× 12 台，测量精度 0.5μm',
  '激光跟踪仪 × 4 台，大型零件空间精度检测',
  '洁净装配车间 2000㎡，达 ISO Class 7 标准',
  'MES 制造执行系统，全流程数字化追溯',
  '数字孪生仿真平台，工艺优化与预测性维护',
];

const certifications = [
  { name: 'ISO 9001:2015', desc: '质量管理体系认证' },
  { name: 'AS9100D', desc: '航空航天质量管理体系' },
  { name: 'IATF 16949', desc: '汽车行业质量管理体系' },
  { name: 'ISO 13485', desc: '医疗器械质量管理体系' },
];

export default function Capability() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="capability" className="py-20 lg:py-28 bg-[#0A1628]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#2E9CDB] text-xs font-semibold uppercase tracking-widest mb-4">
            制造实力
          </div>
          <h2 id="capability-title" className="text-3xl lg:text-4xl font-bold text-white mb-4">
            硬核装备 · 数字赋能
          </h2>
          <div className="w-12 h-1 bg-[#C8922A] mx-auto mb-6" />
          <p id="capability-subtitle" className="text-[#8A9BB0] text-lg max-w-2xl mx-auto">
            超过 300 台套高端制造设备，配合数字化管控平台，
            构建行业领先的智能制造体系。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Equipment List */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-8">核心设备配置</h3>
            <div className="space-y-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E9CDB] flex-shrink-0 mt-0.5" />
                  <span className="text-[#8A9BB0] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Factory Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              alt="智能制造工厂设备"
              className="w-full h-full object-cover"
              data-strk-img-id="cap-img-g7h8i9"
              data-strk-img="[capability-subtitle] [capability-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-white font-bold text-2xl mb-8 text-center">资质认证</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map(({ name, desc }) => (
              <div
                key={name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-[#1E5FA8]/20 border-2 border-[#1E5FA8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2E9CDB] font-bold text-xs text-center leading-tight px-1">{name}</span>
                </div>
                <div className="text-white font-semibold text-base mb-1">{name}</div>
                <div className="text-[#8A9BB0] text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
