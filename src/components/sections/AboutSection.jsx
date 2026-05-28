import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Users, Globe, Cpu } from 'lucide-react';

const milestones = [
  { year: '2004', event: '公司成立，专注精密机械零部件加工' },
  { year: '2010', event: '引进五轴联动数控加工中心，产能大幅提升' },
  { year: '2016', event: '通过 ISO 9001:2015 质量管理体系认证' },
  { year: '2020', event: '建立智能化生产管理系统，实现数字化转型' },
  { year: '2024', event: '年产值突破 3 亿元，服务客户遍及 20 余国' },
];

const highlights = [
  { icon: Award, title: 'ISO 9001 认证', desc: '严格执行国际质量管理标准，每道工序均有可追溯记录' },
  { icon: Cpu, title: '智能制造', desc: '全厂部署 MES 系统，实时监控生产进度与设备状态' },
  { icon: Users, title: '专业团队', desc: '拥有 300 余名工程技术人员，其中高级工程师 60 余名' },
  { icon: Globe, title: '全球服务', desc: '产品出口欧美、东南亚等 20 余个国家和地区' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0D2137] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            关于溪流谷
          </h2>
          <div className="w-16 h-1 bg-[#D4820A] mx-auto mb-6" />
          <p className="text-[#4A5568] text-lg max-w-2xl mx-auto leading-relaxed">
            二十年深耕精密制造领域，以匠心铸就每一个零件，以技术赋能每一条产线
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              alt="溪流谷工厂车间"
              className="w-full h-80 object-cover"
              data-strk-img-id="about-factory-d4e5f6"
              data-strk-img="[about-img-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="about-img-desc" className="hidden">precision CNC machining factory floor industrial manufacturing</span>
            <span id="about-title" className="hidden">mechanical manufacturing company</span>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D2137]/80 to-transparent p-6">
              <p className="text-white font-semibold text-lg">溪流谷智造基地 · 总面积 50,000 m²</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3
              className="text-2xl font-bold text-[#0D2137] mb-4"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              以精密制造为核心，以智能技术为驱动
            </h3>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              溪流谷机械智造有限公司成立于 2004 年，是一家专注于高精度机械零部件研发、制造与系统集成的国家高新技术企业。公司坐落于工业重镇，占地面积逾 50,000 平方米，拥有现代化厂房及完善的研发检测中心。
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              我们配备国际先进的五轴联动加工中心、精密磨床、三坐标测量仪等设备逾 200 台套，具备从原材料采购、精密加工、热处理、表面处理到整机装配的全流程制造能力，可承接单件小批至大批量的定制化生产需求。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '200+', label: '高端设备台套' },
                { num: '50,000㎡', label: '现代化厂房' },
                { num: '300+', label: '工程技术人员' },
                { num: '3亿+', label: '年产值（元）' },
              ].map((item) => (
                <div key={item.label} className="bg-[#F4F6F8] rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#D4820A]">{item.num}</div>
                  <div className="text-[#4A5568] text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#F4F6F8] rounded-lg p-6 border border-[#CBD5E0] hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#0D2137] rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} className="text-[#D4820A]" />
              </div>
              <h4 className="text-[#0D2137] font-semibold text-base mb-2">{title}</h4>
              <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3
            className="text-2xl font-bold text-[#0D2137] text-center mb-10"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            发展历程
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#CBD5E0] hidden md:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-[#CBD5E0] rounded-lg p-4 shadow-sm inline-block max-w-xs">
                      <p className="text-[#4A5568] text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-14 h-14 bg-[#0D2137] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-[#D4820A] font-bold text-xs">{m.year}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
