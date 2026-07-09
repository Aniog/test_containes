import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const champions = [
  {
    id: 'champ-zhang',
    name: '张伟',
    dog: '黑影（德国牧羊犬）',
    title: '2025年全国服从训练冠军',
    city: '北京',
    imgId: 'champ-img-zhang-m4n5o6',
    titleId: 'champ-zhang-title',
    descId: 'champ-zhang-desc',
    desc: '张伟与德国牧羊犬黑影，全国服从训练冠军',
  },
  {
    id: 'champ-li',
    name: '李晓梅',
    dog: '闪电（边境牧羊犬）',
    title: '2025年敏捷障碍全国亚军',
    city: '上海',
    imgId: 'champ-img-li-p7q8r9',
    titleId: 'champ-li-title',
    descId: 'champ-li-desc',
    desc: '李晓梅与边境牧羊犬闪电，敏捷障碍全国亚军',
  },
  {
    id: 'champ-wang',
    name: '王建国',
    dog: '雷霆（马林诺斯）',
    title: '2025年护卫工作犬全国冠军',
    city: '广州',
    imgId: 'champ-img-wang-s1t2u3',
    titleId: 'champ-wang-title',
    descId: 'champ-wang-desc',
    desc: '王建国与马林诺斯雷霆，护卫工作犬全国冠军',
  },
];

export default function HomeChampions() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="bg-navy py-20 md:py-28" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">冠军风采</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            2025年度冠军选手
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            他们用汗水与坚持，书写了人犬合作的传奇故事。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {champions.map((c) => (
            <div
              key={c.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group"
            >
              <div className="relative h-56 bg-gray-800 overflow-hidden">
                <img
                  alt={c.name}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p id={c.descId} className="hidden">{c.desc}</p>
                <h3 id={c.titleId} className="text-white font-bold text-lg">{c.name}</h3>
                <p className="text-gold text-sm font-medium mt-0.5">{c.dog}</p>
                <p className="text-gray-400 text-xs mt-2">{c.title}</p>
                <div className="mt-3 inline-block bg-gold/20 text-gold text-xs px-2.5 py-1 rounded-full">
                  {c.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
