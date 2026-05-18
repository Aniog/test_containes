import { Shield, Truck, RefreshCw, HeartHandshake, Award, Phone } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: '品质保障',
    desc: '所有产品均通过国家质量检测标准，提供一年质保，让您购买无忧',
  },
  {
    icon: Truck,
    title: '极速发货',
    desc: '下单后24小时内发货，全国顺丰包邮，偏远地区也可快速送达',
  },
  {
    icon: RefreshCw,
    title: '无忧退换',
    desc: '收货后7天内无理由退换，产品质量问题30天内免费更换新品',
  },
  {
    icon: HeartHandshake,
    title: '专业服务',
    desc: '专业客服团队全天候在线，为您提供选购建议和使用指导',
  },
  {
    icon: Award,
    title: '正品认证',
    desc: '每件产品均附有防伪标识，扫码即可验证正品，杜绝假冒伪劣',
  },
  {
    icon: Phone,
    title: '售后无忧',
    desc: '购买后享受专属售后服务，一对一跟踪解决您的任何问题',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            服务承诺
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">
            您的满意，是我们最大的心愿
          </h2>
          <p className="text-text-sub text-lg max-w-2xl mx-auto">
            从选购到售后，金利厨具全程守护您的购物体验，让每一次选择都放心、安心
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">{s.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
