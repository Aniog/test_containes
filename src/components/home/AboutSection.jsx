import { CheckCircle2, ArrowRight } from 'lucide-react';

const highlights = [
  '超过 10 年的行业经验积累',
  '服务全球 50+ 个国家和地区',
  '荣获多项国际技术创新奖项',
  '持续迭代，每月发布新功能',
  '严格遵守 ISO 27001 安全标准',
  '专业团队 7×24 小时全程陪伴',
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' }}>
              <div className="p-10 text-white">
                <div className="text-6xl font-black text-blue-300 mb-2">10+</div>
                <div className="text-xl font-semibold mb-6">年行业深耕</div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-blue-200 text-sm mt-1">企业客户</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-blue-200 text-sm mt-1">客户满意度</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-blue-200 text-sm mt-1">技术专家</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-blue-200 text-sm mt-1">覆盖国家</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200 rounded-2xl -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              关于我们
            </span>
            <h2 className="text-4xl font-bold text-blue-900 mb-5 leading-tight">
              我们是您值得信赖的
              <br />
              <span className="text-blue-600">数字化伙伴</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              BlueSky 成立于 2014 年，致力于为全球企业提供最先进的云计算和数字化转型解决方案。
              我们相信技术的力量能够改变世界，让每一个企业都能享受到科技带来的红利。
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              凭借深厚的技术积累和对客户需求的深刻理解，我们已成功帮助超过 500 家企业完成数字化升级，
              实现业务的跨越式增长。
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full transition shadow-md"
            >
              了解更多
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
