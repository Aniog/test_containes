import { Shield, Zap, Award, Users, Globe, Microscope } from 'lucide-react';

const advantages = [
  {
    icon: Microscope,
    title: '精密工艺技术',
    desc: '拥有五轴联动加工中心、精密坐标磨床等高端设备逾200台套，加工精度达微米级，满足航空航天等极端工况要求。',
  },
  {
    icon: Shield,
    title: '严苛质量管控',
    desc: '建立从原材料入厂到成品出厂的全流程质量追溯体系，配备三坐标测量机、光谱分析仪等精密检测设备，一次交检合格率≥99.5%。',
  },
  {
    icon: Zap,
    title: '快速响应交付',
    desc: '智能化排产系统实现生产计划动态优化，标准件交期压缩至行业平均水平的60%，紧急订单可启动绿色通道，72小时内响应。',
  },
  {
    icon: Award,
    title: '研发创新能力',
    desc: '设立省级企业技术中心，研发投入占年营收比例超6%，持有发明专利38项、实用新型专利120余项，持续推动工艺创新。',
  },
  {
    icon: Users,
    title: '专业工程团队',
    desc: '拥有工程技术人员逾300名，其中高级工程师及以上职称占比40%，多名专家具备海外顶尖制造企业工作经历。',
  },
  {
    icon: Globe,
    title: '全球供应链整合',
    desc: '与德国、日本、美国等国际顶级设备及原材料供应商建立战略合作，确保核心物料供应稳定，品质可追溯至源头。',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 md:py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#E87722] text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            核心优势
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Noto Serif SC, serif' }}>
            为何选择威达机械
          </h2>
          <div className="w-16 h-1 bg-[#E87722] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            二十年深耕精密制造领域，威达机械以技术实力、质量体系与服务能力构筑核心竞争壁垒。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group bg-[#1A3A6B]/30 border border-[#1A3A6B] hover:border-[#E87722]/50 hover:bg-[#1A3A6B]/50 p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#E87722]/10 border border-[#E87722]/30 flex items-center justify-center mb-6 group-hover:bg-[#E87722] transition-colors duration-300">
                  <Icon size={22} className="text-[#E87722] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Noto Serif SC, serif' }}>
                  {adv.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#E87722] text-white px-12 py-4 font-semibold text-base hover:bg-[#F5A623] transition-colors duration-200 tracking-wide"
            style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
          >
            立即咨询合作
          </a>
        </div>
      </div>
    </section>
  );
}
