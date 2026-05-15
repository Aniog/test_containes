import { CheckCircle, Award, Users, Factory } from 'lucide-react';

const milestones = [
  { year: '2004', event: '公司成立，专注高压开关设备研发制造' },
  { year: '2010', event: '通过ISO 9001质量管理体系认证' },
  { year: '2015', event: '获评国家高新技术企业，产品覆盖全国30余省市' },
  { year: '2020', event: '新能源并网装备研发中心正式投入运营' },
  { year: '2024', event: '累计服务超1200个重点电力工程项目' },
];

const certifications = [
  'ISO 9001 质量管理体系',
  'ISO 14001 环境管理体系',
  'CCC 强制性产品认证',
  '国家高新技术企业',
  'AAA级信用企业',
  '电力行业优秀供应商',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            关于我们
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            二十年专注，铸就电力装备品质标杆
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            温思达电力装备有限公司成立于2004年，是集研发、制造、销售与工程服务于一体的综合性电力装备企业。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + Stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                alt="温思达电力装备制造工厂"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-blue-600 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-blue-200 text-sm">年专业经验</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-slate-700 text-sm font-medium">国家高新技术企业</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-slate-600 leading-relaxed mb-8">
              公司总部位于中国，拥有现代化生产基地逾50,000平方米，配备国际先进的检测设备与自动化生产线。
              核心团队由来自电力、机械、自动化等领域的资深工程师组成，持续推动产品技术创新与工艺升级。
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Factory, value: '50,000㎡', label: '现代化生产基地' },
                { icon: Users, value: '800+', label: '专业技术人员' },
                { icon: CheckCircle, value: '1200+', label: '工程项目案例' },
                { icon: Award, value: '60+', label: '专利技术成果' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">{value}</div>
                    <div className="text-slate-500 text-sm">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-slate-700 font-semibold mb-3">资质认证</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">发展历程</h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-100 hidden lg:block" />
            <div className="space-y-6 lg:space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 inline-block">
                      <div className="text-blue-600 font-bold text-lg">{m.year}</div>
                      <div className="text-slate-600 text-sm mt-1">{m.event}</div>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 flex-shrink-0 mx-auto" />
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
