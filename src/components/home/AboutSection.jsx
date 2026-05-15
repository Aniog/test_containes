import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2003', event: '公司成立，专注高压电力装备研发制造' },
  { year: '2008', event: '通过 ISO 9001 国际质量管理体系认证' },
  { year: '2013', event: '成为国家电网合格供应商，产品覆盖全国' },
  { year: '2018', event: '荣获国家高新技术企业认定，智能化产品线全面升级' },
  { year: '2023', event: '完成新能源配电系统研发，布局绿色电力赛道' },
];

const highlights = [
  '专注电力装备领域超过20年，积累深厚行业经验',
  '拥有完整的研发、制造、检测、服务体系',
  '产品通过国家强制性认证（CCC）及多项行业标准',
  '服务客户涵盖电力、石化、冶金、市政等多个行业',
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            关于我们
          </span>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-brand-text mb-4"
          >
            二十年专注，铸就电力装备品质标杆
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              alt="温思达电力装备生产基地"
              className="w-full h-full object-cover"
              data-strk-img-id="about-factory-d4e5f6"
              data-strk-img="[about-title] power equipment manufacturing factory"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 bg-brand-navy/90 backdrop-blur-sm text-white px-5 py-3 rounded-xl">
              <div className="text-2xl font-extrabold text-brand-orange">20+</div>
              <div className="text-sm text-white/80">年专业制造经验</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p
              id="about-desc"
              className="text-brand-muted text-base leading-relaxed mb-6"
            >
              温思达电力装备有限公司成立于2003年，是一家专业从事高压开关设备、
              智能变压器、配电自动化系统研发与制造的国家高新技术企业。
              公司总部位于中国，拥有现代化生产基地逾50,000平方米，
              年产能超过10,000台（套）。
            </p>
            <p className="text-brand-muted text-base leading-relaxed mb-8">
              我们始终坚持"技术创新、品质为本、服务至上"的经营理念，
              以严格的质量管控体系和持续的技术研发投入，
              为国内外客户提供安全、可靠、高效的电力装备产品与系统解决方案。
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-brand-text text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-brand-text text-center mb-10">发展历程</h3>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-brand-blue/20" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm z-10 mb-3 flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-brand-orange font-bold text-sm mb-1">{m.year}</div>
                  <div className="text-brand-muted text-xs leading-relaxed">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
