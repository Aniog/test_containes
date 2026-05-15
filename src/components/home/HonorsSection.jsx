import { useRef } from 'react';
import { Award, BadgeCheck, FileText, Star } from 'lucide-react';

const honors = [
  {
    icon: Award,
    title: '国家高新技术企业',
    year: '2018年认定',
    desc: '经科技部、财政部、国家税务总局联合认定，具备持续研发创新能力。',
  },
  {
    icon: BadgeCheck,
    title: 'ISO 9001 质量管理体系',
    year: '2008年认证',
    desc: '通过国际质量管理体系认证，全流程质量管控达到国际标准。',
  },
  {
    icon: FileText,
    title: '国家电网合格供应商',
    year: '2013年入围',
    desc: '通过国家电网公司严格审核，成为合格供应商名录成员单位。',
  },
  {
    icon: Star,
    title: '省级企业技术中心',
    year: '2015年认定',
    desc: '经省科技厅认定，具备省级技术研发与创新能力的企业技术中心。',
  },
  {
    icon: BadgeCheck,
    title: 'CCC 强制性产品认证',
    year: '全系列产品',
    desc: '全系列产品通过中国强制性产品认证，符合国家安全标准要求。',
  },
  {
    icon: Award,
    title: '行业优秀企业奖',
    year: '多年获评',
    desc: '连续多年荣获中国电器工业协会"行业优秀企业"称号。',
  },
];

const partners = [
  '国家电网', '南方电网', '中国华能', '中国大唐',
  '中国华电', '国家能源集团', '中石化', '中石油',
  '宝武钢铁', '中国铁建', '中交集团', '中国建筑',
];

export default function HonorsSection() {
  const containerRef = useRef(null);

  return (
    <section id="honors" className="relative py-20 md:py-28" ref={containerRef}>
      {/* Background: certificates / awards / corporate achievement */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="honors-bg-f8a9b0"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-white/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            荣誉资质
          </span>
          <h2 id="honors-title" className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            权威认证，实力见证
          </h2>
          <p className="text-brand-muted text-base max-w-2xl mx-auto">
            多项国家级、行业级认证与荣誉，是温思达品质实力的最佳背书。
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-4" />
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {honors.map(({ icon: Icon, title, year, desc }) => (
            <div
              key={title}
              className="border border-brand-blue/10 rounded-xl p-6 hover:border-brand-orange/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-brand-text font-bold text-base mb-0.5">{title}</div>
                  <div className="text-brand-orange text-xs font-semibold mb-2">{year}</div>
                  <div className="text-brand-muted text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="bg-brand-gray rounded-2xl p-8 md:p-12">
          <h3 className="text-brand-text font-bold text-xl text-center mb-8">
            合作客户（部分）
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white rounded-lg py-3 px-2 text-center text-brand-text text-sm font-medium shadow-sm hover:shadow-md hover:text-brand-sky transition-all duration-200"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
