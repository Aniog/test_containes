import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Target, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: '品质至上',
    desc: '通过 ISO 9001:2015 质量管理体系认证，每道工序严格执行三级检验制度，确保零件尺寸精度达到 ±0.005mm 以内。',
  },
  {
    icon: Target,
    title: '精准交付',
    desc: '完善的生产排程与供应链管理体系，准时交付率稳定保持在 97% 以上，为客户生产节拍提供可靠保障。',
  },
  {
    icon: Users,
    title: '协同创新',
    desc: '拥有 200 余名经验丰富的工程师与技师团队，与客户深度协作，从设计优化到工艺改进，全程提供技术支持。',
  },
  {
    icon: Zap,
    title: '智能制造',
    desc: '引入 MES 制造执行系统与数字孪生技术，实现生产全流程可视化管控，持续推进工厂智能化升级。',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="text-[#1E5FA8] text-xs font-semibold uppercase tracking-widest mb-4">
              关于我们
            </div>
            <h2 id="about-title" className="text-3xl lg:text-4xl font-bold text-[#1A2332] mb-4 leading-tight">
              二十年匠心铸就<br />精密制造标杆
            </h2>
            <div className="w-12 h-1 bg-[#C8922A] mb-8" />
            <p id="about-desc" className="text-[#1A2332] text-base leading-relaxed mb-6">
              罗科百道机械智造有限公司成立于 2004 年，总部位于中国制造业核心腹地。
              公司专注于高精度机械零部件的研发、加工与系统集成，服务领域涵盖航空航天、
              新能源汽车、工业机器人、精密仪器及重型装备等高端制造行业。
            </p>
            <p className="text-[#1A2332] text-base leading-relaxed mb-10">
              公司现拥有超过 50,000 平方米的现代化生产基地，配备五轴联动加工中心、
              精密磨床、电火花成型机等高端设备逾 300 台套，年产能突破 200 万件次，
              产品远销欧美、东南亚及中东等 60 余个国家和地区。
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#1E5FA8] hover:bg-[#2E9CDB] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              了解更多
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                alt="现代化精密制造工厂"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0A1628] text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-[#2E9CDB]">20+</div>
              <div className="text-sm text-[#8A9BB0] mt-1">年专注精密制造</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#F4F6F9] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#1E5FA8]/10 rounded-xl flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-[#1E5FA8]" />
              </div>
              <h3 className="text-[#1A2332] font-bold text-lg mb-3">{title}</h3>
              <p className="text-[#8A9BB0] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
