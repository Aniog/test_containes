import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '150+', label: '年历史' },
  { value: '30', label: 'MLB球队' },
  { value: '162', label: '常规赛场次' },
  { value: '亿', label: '全球球迷' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-slate-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">关于棒球</p>
          <h2
            id="about-title"
            className="font-black text-4xl md:text-5xl text-white uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            美国的国民运动
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p id="about-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
              棒球（Baseball）是一项起源于18世纪英国的球棒运动，19世纪在美国发展成熟并广泛流行，被誉为"美国国民消遣"（America's Pastime）。
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              这项运动由两支各9名球员的队伍进行，在一个菱形球场上展开对决。进攻方球员依次上场击球，防守方则努力阻止对手得分。
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              如今，棒球已成为全球性运动，在美国、日本、韩国、古巴、多米尼加等国家拥有数以亿计的忠实球迷，每年的世界大赛（World Series）更是全球瞩目的体育盛事。
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img
              data-strk-img-id="about-img-baseball-d4e5f6"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="棒球运动"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-red-600/50 transition-colors duration-300"
            >
              <div
                className="font-black text-4xl md:text-5xl text-red-500 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
