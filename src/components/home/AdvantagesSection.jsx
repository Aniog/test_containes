import { FlaskConical, ShieldCheck, Headphones, Globe, Award, Users } from 'lucide-react';

const advantages = [
  {
    icon: FlaskConical,
    title: '自主研发能力',
    desc: '拥有省级企业技术中心，研发团队超250人，累计获得专利技术180余项，持续推动产品迭代升级。',
    highlight: '180+ 项专利',
  },
  {
    icon: ShieldCheck,
    title: '严苛质量管控',
    desc: '全流程质量管理体系，关键零部件100%出厂检测，产品通过CCC、CE、ISO等多项国内外认证。',
    highlight: '多项国际认证',
  },
  {
    icon: Headphones,
    title: '全生命周期服务',
    desc: '提供方案设计、安装调试、运维培训、备品备件及应急抢修一体化服务，7×24小时响应保障。',
    highlight: '7×24h 响应',
  },
  {
    icon: Globe,
    title: '广泛市场覆盖',
    desc: '在全国30余个省市设有服务网点，产品出口东南亚、中东、非洲等地区，服务客户超3000家。',
    highlight: '3000+ 客户',
  },
  {
    icon: Award,
    title: '行业权威认可',
    desc: '荣获国家高新技术企业、省级专精特新企业等称号，多次入选行业优秀供应商名录。',
    highlight: '多项荣誉资质',
  },
  {
    icon: Users,
    title: '专业工程团队',
    desc: '拥有注册电气工程师、高级工程师逾100名，可为客户提供从需求分析到竣工验收的全程技术支持。',
    highlight: '100+ 注册工程师',
  },
];

const certs = [
  'ISO 9001:2015', 'ISO 14001:2015', 'CCC 认证', 'CE 认证',
  'IEC 62271', 'GB/T 11022', '国家高新技术企业', '省级专精特新',
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-[#2196F3] text-xs font-semibold tracking-widest uppercase mb-3">
            CORE ADVANTAGES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心竞争优势</h2>
          <div className="w-16 h-1 bg-[#2196F3] rounded-full mx-auto mb-6" />
          <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto">
            技术、质量、服务三位一体，构建差异化竞争壁垒
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map(({ icon: Icon, title, desc, highlight }) => (
            <div
              key={title}
              className="group bg-[#162032] border border-[#1E3A5F] rounded-xl p-6 hover:border-[#2196F3]/50 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#1565C0]/20 group-hover:bg-[#1565C0]/30 p-3 rounded-xl transition-colors flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#2196F3]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-0.5">{title}</h3>
                  <span className="text-[#FF6D00] text-xs font-semibold">{highlight}</span>
                </div>
              </div>
              <p className="text-[#8BA3C1] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-[#162032] border border-[#1E3A5F] rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg text-center mb-6">资质认证</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certs.map((cert) => (
              <div
                key={cert}
                className="bg-[#0A1628] border border-[#1E3A5F] text-[#E8EDF5] text-sm font-medium px-5 py-2.5 rounded-lg hover:border-[#2196F3]/50 hover:text-[#2196F3] transition-colors"
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
