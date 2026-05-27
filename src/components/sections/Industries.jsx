import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const industries = [
  { id: 'ind-1', name: '航空航天', desc: '结构件、发动机零部件、起落架系统' },
  { id: 'ind-2', name: '新能源汽车', desc: '电驱壳体、电池托盘、底盘结构件' },
  { id: 'ind-3', name: '工业机器人', desc: '关节模组、减速器、末端执行器' },
  { id: 'ind-4', name: '能源装备', desc: '液压元件、风电零部件、核电紧固件' },
  { id: 'ind-5', name: '精密仪器', desc: '光学底座、半导体设备、检测装置' },
  { id: 'ind-6', name: '医疗器械', desc: '植入体、手术器械、影像设备零件' },
];

export default function Industries() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F4F6F9]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-[#1E5FA8] text-xs font-semibold uppercase tracking-widest mb-4">
            服务行业
          </div>
          <h2 id="industries-title" className="text-3xl lg:text-4xl font-bold text-[#1A2332] mb-4">
            深耕六大高端制造领域
          </h2>
          <div className="w-12 h-1 bg-[#C8922A] mx-auto mb-6" />
          <p id="industries-subtitle" className="text-[#8A9BB0] text-lg max-w-2xl mx-auto">
            凭借跨行业的技术积累与定制化服务能力，
            为全球高端制造客户创造持续价值。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ id, name, desc }) => (
            <div
              key={id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-video"
            >
              <img
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={`ind-img-${id}`}
                data-strk-img={`[${id}-desc] [${id}] [industries-subtitle] [industries-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={id} className="text-white font-bold text-xl mb-1">{name}</h3>
                <p id={`${id}-desc`} className="text-[#8A9BB0] text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
