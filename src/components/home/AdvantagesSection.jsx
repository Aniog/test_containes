import { FlaskConical, Leaf, ShieldCheck, Award, Recycle, Users } from 'lucide-react';

const advantages = [
  {
    icon: FlaskConical,
    title: '科学研发体系',
    desc: '设有国家级企业技术中心，拥有200余名专业研发人员，年均研发投入占营收比例超过8%，持续推动产品创新与技术升级。',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Leaf,
    title: '天然植物成分',
    desc: '优先选用经认证的天然植物提取物，严格把控原料来源与纯度，确保产品温和有效，减少化学合成成分对人体及环境的影响。',
    color: 'text-brand-accent',
    bg: 'bg-green-50',
  },
  {
    icon: ShieldCheck,
    title: '严苛品质管控',
    desc: '通过ISO 9001质量管理体系认证，生产全流程实施GMP标准，每批产品经过200余项安全与功效检测，确保出厂品质零缺陷。',
    color: 'text-brand-primary',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: '权威认证背书',
    desc: '产品通过国家卫生健康委员会备案，获得中国质量认证中心CQC认证及多项国际权威机构认证，品质有据可查，安全有保障。',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Recycle,
    title: '绿色可持续发展',
    desc: '采用可降解包装材料，生产过程实现碳排放减量30%，积极践行ESG责任，致力于在守护家庭健康的同时保护地球生态环境。',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Users,
    title: '专业服务支持',
    desc: '配备专业家庭护理顾问团队，提供7×24小时客户服务，并定期开展家庭护理知识普及活动，为消费者提供全生命周期的护理指导。',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            品牌优势
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            为什么选择威尔德
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            二十余年专注家庭护理领域，以技术创新、品质坚守与绿色理念，
            赢得千万家庭的长期信赖与选择。
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 md:p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications Bar */}
        <div className="mt-16 bg-neutral-50 rounded-2xl p-8 md:p-10">
          <p className="text-center text-neutral-500 text-sm font-medium mb-6 uppercase tracking-widest">
            权威认证与资质
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[
              'ISO 9001 质量管理',
              'ISO 14001 环境管理',
              'CQC 中国质量认证',
              'GMP 生产规范',
              '国家卫健委备案',
              'SGS 国际检测',
            ].map((cert) => (
              <div
                key={cert}
                className="bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm font-semibold text-neutral-700 shadow-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
