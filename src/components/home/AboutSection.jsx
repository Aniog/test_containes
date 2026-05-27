import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Target, Eye, Heart } from 'lucide-react';

const milestones = [
  { year: '2003', event: '威尔德家庭护理产品有限公司正式成立，专注家庭日化护理领域' },
  { year: '2008', event: '通过ISO 9001质量管理体系认证，建立标准化生产体系' },
  { year: '2012', event: '成立国家级企业技术中心，研发团队扩充至100人' },
  { year: '2016', event: '婴幼儿护理系列荣获中国质量奖，产品销售覆盖全国31个省市' },
  { year: '2019', event: '启动绿色工厂建设，获得ISO 14001环境管理体系认证' },
  { year: '2023', event: '累计服务家庭突破1000万户，荣获"中国家庭护理行业领军品牌"称号' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            关于我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            二十年匠心，守护家庭健康
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            威尔德始终坚守"让每个家庭都能享有专业级护理"的初心，
            以科技赋能，以品质立信，以责任担当。
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 bg-neutral-200">
            <img
              alt="威尔德工厂与研发中心"
              className="w-full h-full object-cover"
              data-strk-img-id="about-img-v4w5x6"
              data-strk-img="[about-img-desc] [about-section-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="about-section-title" className="hidden">家庭护理产品研发生产工厂</span>
            <span id="about-img-desc" className="hidden">现代化工厂生产线 科研实验室 质量检测</span>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-5 py-3 shadow-lg">
              <div className="text-2xl font-bold text-brand-primary">20+</div>
              <div className="text-xs text-neutral-600 font-medium">年专业积累</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-neutral-700 leading-relaxed mb-6 text-base">
              威尔德家庭护理产品有限公司成立于2003年，总部位于中国广州，是一家专注于家庭日化护理产品研发、生产与销售的高新技术企业。公司现有员工逾2000人，其中研发技术人员占比超过10%。
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8 text-base">
              公司拥有现代化生产基地三处，总建筑面积超过15万平方米，年产能达50万吨。生产全程严格执行GMP标准，并引入智能化质检系统，确保每一件产品均符合国家及国际质量标准。
            </p>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Target, label: '使命', text: '让专业护理走进每个家庭', color: 'text-brand-primary', bg: 'bg-brand-primary/10' },
                { icon: Eye, label: '愿景', text: '成为全球领先的家庭护理品牌', color: 'text-brand-accent', bg: 'bg-brand-accent/10' },
                { icon: Heart, label: '价值观', text: '安全 · 品质 · 责任 · 创新', color: 'text-rose-500', bg: 'bg-rose-50' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className={`${item.bg} rounded-xl p-4`}>
                    <Icon className={`w-5 h-5 ${item.color} mb-2`} />
                    <div className={`text-xs font-bold ${item.color} mb-1`}>{item.label}</div>
                    <div className="text-neutral-700 text-sm leading-snug">{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-10">发展历程</h3>
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -translate-x-1/2" />
            <div className="flex flex-col gap-6">
              {milestones.map((item, idx) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow inline-block max-w-sm">
                      <div className="text-brand-primary font-bold text-lg mb-1">{item.year}</div>
                      <div className="text-neutral-700 text-sm leading-relaxed">{item.event}</div>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-brand-primary border-4 border-white shadow-md flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
