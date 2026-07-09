import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play, ChevronRight } from 'lucide-react';

const categories = ['全部', '初级', '中级', '高级', '越野'];

const skills = [
  {
    id: 'snowplow',
    category: '初级',
    title: '犁式制动',
    subtitle: '初学者必学',
    duration: '15 分钟',
    description: '掌握最基础的减速和停止技术，V字形站姿让你安全控制速度，是所有初学者的第一课。',
    imgId: 'skill-snowplow-img-s1t2u3',
    titleId: 'skill-snowplow-title',
    descId: 'skill-snowplow-desc',
  },
  {
    id: 'parallel',
    category: '中级',
    title: '平行转弯',
    subtitle: '进阶核心技术',
    duration: '25 分钟',
    description: '双板平行的优雅转弯技术，通过重心转移和边刃控制实现流畅的S形滑行轨迹。',
    imgId: 'skill-parallel-img-v4w5x6',
    titleId: 'skill-parallel-title',
    descId: 'skill-parallel-desc',
  },
  {
    id: 'carving',
    category: '高级',
    title: '刻滑技术',
    subtitle: '高速精准控制',
    duration: '30 分钟',
    description: '利用雪板边刃在雪面刻出精准弧线，体验高速滑行的极致快感，是竞技滑雪的核心技术。',
    imgId: 'skill-carving-img-y7z8a9',
    titleId: 'skill-carving-title',
    descId: 'skill-carving-desc',
  },
  {
    id: 'mogul',
    category: '高级',
    title: '雪包滑行',
    subtitle: '地形挑战',
    duration: '35 分钟',
    description: '在凹凸不平的雪包地形中保持节奏和平衡，考验滑雪者的反应速度和腿部力量。',
    imgId: 'skill-mogul-img-b1c2d3',
    titleId: 'skill-mogul-title',
    descId: 'skill-mogul-desc',
  },
  {
    id: 'backcountry',
    category: '越野',
    title: '越野滑雪',
    subtitle: '探索原始雪野',
    duration: '45 分钟',
    description: '离开标记雪道，在未经压实的原始粉雪中自由穿行，需要丰富经验和安全知识。',
    imgId: 'skill-backcountry-img-e4f5g6',
    titleId: 'skill-backcountry-title',
    descId: 'skill-backcountry-desc',
  },
  {
    id: 'jump',
    category: '高级',
    title: '跳台技巧',
    subtitle: '空中飞翔',
    duration: '40 分钟',
    description: '从跳台腾空而起，在空中完成旋转和翻转动作，是自由式滑雪最令人热血沸腾的技术。',
    imgId: 'skill-jump-img-h7i8j9',
    titleId: 'skill-jump-title',
    descId: 'skill-jump-desc',
  },
];

const levelColors = {
  '初级': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  '中级': 'bg-sky-blue/20 text-sky-blue border-sky-blue/30',
  '高级': 'bg-slope-orange/20 text-slope-orange border-slope-orange/30',
  '越野': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export default function Skills() {
  const containerRef = useRef(null);
  const [active, setActive] = useState('全部');

  const filtered = active === '全部' ? skills : skills.filter((s) => s.category === active);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <section id="skills" ref={containerRef} className="bg-gradient-to-b from-deep-navy to-frost/30 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sky-blue text-sm font-semibold uppercase tracking-widest mb-3">
            技巧教程
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-snow-white mb-4">
            从零到专业
          </h2>
          <p className="text-glacier text-lg max-w-2xl mx-auto">
            无论你是第一次踏上雪板的新手，还是追求极限的老手，这里都有适合你的专业教程
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? 'bg-sky-blue text-snow-white shadow-lg shadow-sky-blue/30'
                  : 'bg-frost border border-white/10 text-glacier hover:border-sky-blue/40 hover:text-ice-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill) => (
            <article
              key={skill.id}
              className="group bg-frost rounded-2xl overflow-hidden border border-white/10 hover:border-sky-blue/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  alt={skill.title}
                  data-strk-img-id={skill.imgId}
                  data-strk-img={`[${skill.descId}] [${skill.titleId}] skiing technique`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frost/70 to-transparent" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-sky-blue/90 rounded-full p-3 shadow-lg">
                    <Play className="w-6 h-6 text-snow-white fill-snow-white" />
                  </div>
                </div>
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border ${levelColors[skill.category]}`}>
                  {skill.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 id={skill.titleId} className="text-lg font-bold text-snow-white">
                      {skill.title}
                    </h3>
                    <p className="text-glacier text-xs mt-0.5">{skill.subtitle}</p>
                  </div>
                  <span className="text-glacier text-xs bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {skill.duration}
                  </span>
                </div>
                <p id={skill.descId} className="text-glacier text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
                <button className="flex items-center gap-1.5 text-sky-blue text-sm font-semibold hover:text-blue-400 transition-colors">
                  开始学习 <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
