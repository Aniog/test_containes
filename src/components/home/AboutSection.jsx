import { useEffect, useRef } from 'react';
import { CheckCircle, Target, Eye } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '2003', event: '公司成立，专注高压开关设备研发' },
  { year: '2008', event: '通过 ISO 9001 质量管理体系认证' },
  { year: '2013', event: '获批国家高新技术企业资质' },
  { year: '2018', event: '智能配电产品线全面投产' },
  { year: '2023', event: '产品出口东南亚、中东等地区' },
];

const values = [
  { icon: Target, title: '使命', desc: '为电力基础设施提供安全、高效、可靠的装备解决方案，推动能源现代化进程。' },
  { icon: Eye, title: '愿景', desc: '成为国内领先、具有国际竞争力的电力装备综合服务商。' },
  { icon: CheckCircle, title: '价值观', desc: '诚信经营、技术创新、客户至上、持续改进。' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="about" className="py-20 bg-[#0F1923]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-[#2196F3] text-xs font-semibold tracking-widest uppercase mb-3">
            ABOUT US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">关于温思达</h2>
          <div className="w-16 h-1 bg-[#2196F3] rounded-full mx-auto mb-6" />
          <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto leading-relaxed">
            二十年深耕电力装备制造领域，以技术创新驱动产业升级
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              alt="温思达电力装备制造工厂"
              className="w-full h-full object-cover"
              data-strk-img-id="about-factory-d4e5f6"
              data-strk-img="[about-title] [about-desc]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-[#0A1628]/90 backdrop-blur-sm border border-[#1E3A5F] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#2196F3]">20+</div>
              <div className="text-[#E8EDF5] text-sm">年专业经验</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 id="about-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
              专注电力装备，铸就品质典范
            </h3>
            <p id="about-desc" className="text-[#8BA3C1] leading-relaxed mb-6">
              温思达电力装备有限公司成立于2003年，是一家集研发、制造、销售与服务于一体的专业电力装备企业。
              公司总部位于中国，拥有现代化生产基地逾50,000平方米，员工逾800人，其中研发技术人员占比超过30%。
            </p>
            <p className="text-[#8BA3C1] leading-relaxed mb-8">
              公司主营产品涵盖高压开关柜、干式变压器、智能配电箱、环网柜及综合自动化系统等，
              广泛应用于电力、冶金、石化、轨道交通、数据中心等领域，产品远销东南亚、中东及非洲市场。
            </p>

            {/* Values */}
            <div className="grid gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 bg-[#162032] rounded-xl border border-[#1E3A5F]">
                  <div className="bg-[#1565C0]/20 p-2.5 rounded-lg flex-shrink-0 h-fit">
                    <Icon className="w-5 h-5 text-[#2196F3]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{title}</div>
                    <div className="text-[#8BA3C1] text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-10">发展历程</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#1E3A5F] hidden md:block" />
            <div className="flex flex-col gap-6">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-[#162032] border border-[#1E3A5F] rounded-xl p-4 hover:border-[#2196F3]/40 transition-colors">
                      <div className="text-[#2196F3] font-bold text-lg mb-1">{m.year}</div>
                      <div className="text-[#E8EDF5] text-sm">{m.event}</div>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-[#2196F3] rounded-full border-4 border-[#0F1923] flex-shrink-0 z-10 mx-auto" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
