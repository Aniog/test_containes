import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Droplets, Leaf, Bug, FlaskConical } from 'lucide-react';

const stats = [
  { value: '8,700+', label: '已知微生物种类' },
  { value: '37万亿', label: '人体细胞数量' },
  { value: '1mm³', label: '土壤中含数百万微生物' },
  { value: '70%', label: '地球生物量来自微生物' },
];

const habitats = [
  {
    icon: Droplets,
    titleId: 'hab-title-1',
    subtitleId: 'hab-sub-1',
    imgId: 'hab-img-mc005',
    title: '水生环境',
    subtitle: '淡水与海洋中的微观生命',
    description: '每毫升海水中含有超过100万个细菌，水生微生物是地球生态系统的基础。',
  },
  {
    icon: Leaf,
    titleId: 'hab-title-2',
    subtitleId: 'hab-sub-2',
    imgId: 'hab-img-mc006',
    title: '土壤生态',
    subtitle: '脚下的隐秘王国',
    description: '一茶匙健康土壤中含有的微生物数量，超过地球上所有人类的总和。',
  },
  {
    icon: Bug,
    titleId: 'hab-title-3',
    subtitleId: 'hab-sub-3',
    imgId: 'hab-img-mc007',
    title: '极端环境',
    subtitle: '在不可能中生存',
    description: '嗜极生物能在沸腾的温泉、强酸环境甚至南极冰层中繁衍生息。',
  },
  {
    icon: FlaskConical,
    titleId: 'hab-title-4',
    subtitleId: 'hab-sub-4',
    imgId: 'hab-img-mc008',
    title: '人体微生物组',
    subtitle: '与我们共生的微观伙伴',
    description: '人体携带的微生物细胞数量与人体细胞数量相当，它们对健康至关重要。',
  },
];

const HomeHabitats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00d4c8] mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-medium text-[#00d4c8] uppercase tracking-widest">栖息地</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            微生物无处不在
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            从深海热泉到人体肠道，微生物占据了地球上几乎每一个角落。
          </p>
        </div>

        {/* Habitat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {habitats.map((hab) => {
            const Icon = hab.icon;
            return (
              <div
                key={hab.imgId}
                className="bg-[#050d1a] border border-[#1a3050] rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 hover:shadow-lg hover:shadow-[#00d4c8]/10 transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    alt={hab.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={hab.imgId}
                    data-strk-img={`[${hab.subtitleId}] [${hab.titleId}] microscopic life`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/30 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#050d1a]/70 p-2 rounded-xl">
                    <Icon className="w-5 h-5 text-[#00d4c8]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={hab.titleId} className="text-lg font-bold text-white mb-1">{hab.title}</h3>
                  <p id={hab.subtitleId} className="text-[#00d4c8] text-xs font-medium mb-2">{hab.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{hab.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeHabitats;
