import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2003', event: '公司成立，专注精密机械零部件加工' },
  { year: '2008', event: '引进德国五轴联动加工中心，产能跃升' },
  { year: '2013', event: '通过ISO 9001质量管理体系认证' },
  { year: '2018', event: '建立智能化生产线，实现数字化转型' },
  { year: '2021', event: '荣获国家高新技术企业认定' },
  { year: '2024', event: '年产值突破5亿元，服务客户超500家' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="威达机械智造工厂"
                className="w-full h-[420px] object-cover"
                data-strk-img-id="about-factory-d4e5f6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0A1628] text-white p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-[#E87722]" style={{ fontFamily: 'Inter, sans-serif' }}>20+</div>
              <div className="text-sm text-gray-300 mt-1" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>年专注精密制造</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="text-[#E87722] text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
              关于我们
            </div>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4 leading-tight"
              style={{ fontFamily: 'Noto Serif SC, serif' }}
            >
              二十年匠心铸就<br />精密制造标杆
            </h2>
            <div className="w-16 h-1 bg-[#E87722] mb-6" />
            <p
              id="about-subtitle"
              className="text-[#4A5568] leading-relaxed mb-6 text-base"
              style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
            >
              威达机械智造有限公司成立于2003年，是一家集精密机械研发、智能制造、系统集成于一体的高新技术企业。
              公司坐落于国家级经济技术开发区，占地面积逾60,000平方米，拥有现代化生产车间及研发中心。
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-8 text-base" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
              我们以"精密、可靠、创新"为核心价值观，持续引进国际先进制造设备，构建完善的质量管控体系，
              为航空航天、汽车制造、能源装备、轨道交通等高端领域提供定制化解决方案。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                '国家高新技术企业认定',
                'ISO 9001:2015 质量认证',
                '省级企业技术中心',
                '多项发明专利持有',
                '德国五轴联动加工设备',
                '智能化数字工厂',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#E87722] flex-shrink-0" />
                  <span className="text-[#4A5568] text-sm" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#0A1628] text-center mb-12" style={{ fontFamily: 'Noto Serif SC, serif' }}>
            发展历程
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#E2E8F0] hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex gap-4 items-start ${i % 2 === 0 ? 'md:pr-12 md:text-right md:flex-row-reverse' : 'md:pl-12'}`}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0A1628] flex items-center justify-center">
                    <span className="text-[#E87722] font-bold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{m.year}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-[#1A202C] font-medium text-sm" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
