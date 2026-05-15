import { CheckCircle2 } from 'lucide-react';

const milestones = [
  { year: '2004', event: '华康医疗在深圳成立，专注心电监护设备研发' },
  { year: '2009', event: '获得 ISO 13485 国际质量管理体系认证' },
  { year: '2014', event: '产品线扩展至影像诊断与手术器械领域' },
  { year: '2018', event: '完成 A 轮融资，建立智能医疗研发中心' },
  { year: '2022', event: '推出 AI 辅助诊断平台，服务医院突破 3000 家' },
];

const values = [
  '以患者安全为首要原则',
  '持续技术创新驱动发展',
  '严格遵守医疗法规标准',
  '构建长期合作伙伴关系',
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            关于我们
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            二十年专注，只为更好的医疗
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            华康医疗成立于2004年，是国内领先的医疗器械研发制造企业
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Company Info */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">企业使命</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                华康医疗致力于通过技术创新，为医疗机构提供高品质、高可靠性的医疗器械产品，助力医生做出更精准的诊断，为患者提供更安全的治疗保障。
              </p>
              <p className="text-slate-600 leading-relaxed">
                我们拥有超过800名专业员工，其中研发人员占比35%，在深圳、北京、上海设有研发中心，在全国建立了完善的销售与服务网络。
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-5">核心价值观</h3>
              <div className="space-y-3">
                {values.map((v) => (
                  <div key={v} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                    <span className="text-blue-50 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8">发展历程</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100" />

              <div className="space-y-8">
                {milestones.map(({ year, event }, index) => (
                  <div key={year} className="relative flex gap-6 items-start">
                    {/* Dot */}
                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${index === milestones.length - 1 ? 'bg-blue-600' : 'bg-white border-2 border-blue-300'}`}>
                      <span className={`text-xs font-bold ${index === milestones.length - 1 ? 'text-white' : 'text-blue-600'}`}>
                        {year.slice(2)}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-slate-100 flex-1">
                      <p className="text-blue-600 font-bold text-sm mb-1">{year}年</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
