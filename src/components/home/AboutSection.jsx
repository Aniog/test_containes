import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '2003', text: '金利厨具在广东佛山创立，以"让每个家庭都用上好厨具"为使命' },
  { year: '2010', text: '产品线扩展至500余款，覆盖锅具、刀具、餐具、收纳等全品类' },
  { year: '2016', text: '通过ISO 9001质量管理体系认证，产品远销东南亚十余个国家' },
  { year: '2023', text: '累计服务超百万家庭，荣获"中国厨具行业十大品牌"称号' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-warm-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                id="about-img"
                alt="金利厨具工厂与家庭"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 md:h-96 object-cover"
                data-strk-img-id="about-img-v4w5x6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-lg p-5 max-w-xs">
              <p className="text-brand-orange text-3xl font-bold">20+</p>
              <p className="text-brand-brown font-semibold mt-1">年专注厨具研发</p>
              <p className="text-text-sub text-sm mt-1">坚守品质，不忘初心</p>
            </div>
          </div>

          {/* Text side */}
          <div className="pt-8 lg:pt-0">
            <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              品牌故事
            </span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-brand-brown mb-4 leading-tight">
              二十年匠心，<br />只为家的味道
            </h2>
            <p id="about-subtitle" className="text-text-sub text-lg leading-relaxed mb-6">
              金利厨具创立于2003年，扎根于中国厨具之乡广东佛山。
              我们相信，一顿好饭不仅仅是食材的堆砌，更是家人之间爱与关怀的传递。
              好的厨具，是这份爱最忠实的伙伴。
            </p>
            <p className="text-text-sub leading-relaxed mb-8">
              二十年来，我们始终坚持"选好料、做好工、卖好价"的原则，
              从原材料采购到成品出厂，每一个环节都严格把关。
              我们不追求华而不实的外观，只专注于让每一件厨具都经得起时间的考验，
              陪伴千万家庭走过一日三餐的温暖时光。
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full mt-0.5">
                    {m.year}
                  </span>
                  <p className="text-text-main text-sm leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
