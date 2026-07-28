import { Briefcase, Building2, Shield, FileText, Users, Globe } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: '商事诉讼',
    desc: '代理各类商业纠纷诉讼与仲裁，包括合同纠纷、股权争议、债权债务等，为客户争取最大利益。',
    tags: ['合同纠纷', '股权争议', '商业仲裁'],
  },
  {
    icon: Building2,
    title: '公司法务',
    desc: '为企业提供全生命周期法律服务，涵盖公司设立、股权架构设计、并购重组及日常合规管理。',
    tags: ['公司设立', '并购重组', '合规管理'],
  },
  {
    icon: Shield,
    title: '刑事辩护',
    desc: '由资深刑辩律师团队提供专业辩护服务，保障当事人合法权益，维护司法公正。',
    tags: ['刑事辩护', '取保候审', '申诉复议'],
  },
  {
    icon: FileText,
    title: '知识产权',
    desc: '提供专利、商标、著作权的申请、保护及维权服务，助力企业构建完善的知识产权体系。',
    tags: ['专利申请', '商标注册', '版权保护'],
  },
  {
    icon: Users,
    title: '婚姻家事',
    desc: '专业处理离婚诉讼、财产分割、子女抚养、遗产继承等家事法律事务，以专业和温情守护家庭权益。',
    tags: ['离婚诉讼', '财产分割', '遗产继承'],
  },
  {
    icon: Globe,
    title: '涉外法律',
    desc: '为跨国企业及个人提供国际商事合同、外资并购、跨境争议解决等涉外法律服务。',
    tags: ['国际合同', '外资并购', '跨境争议'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">业务领域</p>
          <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl lg:text-5xl mb-5">
            专业法律服务
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            我们深耕多个法律领域，以专业知识和丰富经验为您提供量身定制的法律解决方案
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-navy text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-cream text-navy px-3 py-1 rounded border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
