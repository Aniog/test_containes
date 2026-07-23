import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const legacies = [
  {
    id: 'water',
    titleId: 'legacy-title-water',
    descId: 'legacy-desc-water',
    imgId: 'legacy-img-water-hd020',
    icon: '💧',
    title: '水资源管理',
    desc: '胡佛大坝形成的米德湖是美国最大的人工水库，储水量达350亿立方米，为内华达州、亚利桑那州和加利福尼亚州的2500万居民提供饮用水和农业灌溉用水。',
  },
  {
    id: 'power',
    titleId: 'legacy-title-power',
    descId: 'legacy-desc-power',
    imgId: 'legacy-img-power-hd021',
    icon: '⚡',
    title: '清洁能源先驱',
    desc: '作为美国最早的大型水力发电站之一，胡佛大坝为美国西部的工业化和城市化提供了关键的电力支撑，洛杉矶、拉斯维加斯等城市的崛起都与其密不可分。',
  },
  {
    id: 'economy',
    titleId: 'legacy-title-economy',
    descId: 'legacy-desc-economy',
    imgId: 'legacy-img-economy-hd022',
    icon: '📈',
    title: '经济与就业',
    desc: '大萧条期间，大坝建设为数万名工人提供了就业机会，成为罗斯福新政的重要组成部分。其建设经验也推动了美国建筑业和工程业的技术进步。',
  },
  {
    id: 'tourism',
    titleId: 'legacy-title-tourism',
    descId: 'legacy-desc-tourism',
    imgId: 'legacy-img-tourism-hd023',
    icon: '🏛️',
    title: '文化与旅游',
    desc: '胡佛大坝每年吸引超过700万游客，是美国最受欢迎的旅游目的地之一。大坝已成为美国精神和工业文明的重要象征，出现在无数电影、文学和艺术作品中。',
  },
];

export default function Legacy() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="legacy" ref={containerRef} className="bg-darkSlate py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-accentGold text-sm uppercase tracking-[0.3em] mb-3 font-sans">历史遗产</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-warmWhite mb-4">
            跨越世纪的影响
          </h2>
          <p className="text-mutedBlue max-w-xl mx-auto">
            胡佛大坝不仅是一座水坝，更是改变了美国西部乃至整个国家发展轨迹的历史性工程
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {legacies.map((item) => (
            <div
              key={item.id}
              className="bg-navyBlack border border-steelBorder rounded-xl overflow-hidden hover:border-accentGold/40 transition-colors group flex flex-col md:flex-row"
            >
              <div className="md:w-48 aspect-[4/3] md:aspect-auto overflow-hidden flex-shrink-0">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 id={item.titleId} className="font-serif text-accentGold font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p id={item.descId} className="text-mutedBlue text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="border-l-4 border-accentGold pl-6 md:pl-8 max-w-3xl mx-auto">
          <blockquote className="font-serif text-xl md:text-2xl text-warmWhite italic leading-relaxed mb-4">
            "胡佛大坝是美国人民意志与智慧的结晶，它证明了当一个国家团结一致时，没有什么是不可能的。"
          </blockquote>
          <cite className="text-accentGold text-sm not-italic uppercase tracking-widest">
            — 富兰克林·D·罗斯福，1935年落成典礼致辞
          </cite>
        </div>
      </div>
    </section>
  );
}
