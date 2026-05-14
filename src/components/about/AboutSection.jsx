import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Users, Globe, FlaskConical } from 'lucide-react';

const milestones = [
  { year: '2003', event: '公司成立，专注医疗器械研发' },
  { year: '2008', event: '获得ISO 13485国际质量认证' },
  { year: '2013', event: '产品出口至30余个国家和地区' },
  { year: '2018', event: '建立国家级医疗器械研发中心' },
  { year: '2023', event: '产品线扩展至500余个型号' },
];

const highlights = [
  { icon: Users, label: '专业团队', value: '1200+ 名员工' },
  { icon: Globe, label: '全球覆盖', value: '50+ 个国家' },
  { icon: FlaskConical, label: '研发投入', value: '年营收15%' },
  { icon: CheckCircle, label: '质量认证', value: '多项国际认证' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (strkImgConfig && Object.keys(strkImgConfig).length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">关于我们</span>
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            二十年专注，铸就医疗品质
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                alt="星闪医疗器械研发中心"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm text-blue-200 mt-1">年行业经验</div>
            </div>
          </div>

          <div>
            <p id="about-subtitle" className="text-slate-600 text-lg leading-relaxed mb-6">
              星闪医疗器械有限公司成立于2003年，是一家专注于高精度医疗器械研发、生产与销售的国家高新技术企业。
              公司总部位于中国，拥有现代化生产基地和国家级研发中心。
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              我们始终坚持"精准、可靠、创新"的核心理念，以严格的质量管理体系和持续的技术创新，
              为全球医疗机构提供覆盖诊断、治疗、监护等多领域的专业医疗器械解决方案。
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              了解更多
            </a>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">发展历程</h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />
            <div className="flex flex-col gap-6">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow inline-block text-left">
                      <span className="text-blue-700 font-bold text-lg">{m.year}</span>
                      <p className="text-slate-600 text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-blue-700 rounded-full border-4 border-blue-100 flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
