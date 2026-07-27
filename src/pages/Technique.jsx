import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const bowTypes = [
  {
    id: 'bow-recurve',
    title: '反曲弓',
    subtitle: 'Recurve Bow',
    desc: '奥运会标准用弓，弓臂末端向前弯曲，储能效率高。现代反曲弓由弓把、弓臂、瞄准器、稳定杆等部件组成，是竞技射箭最主流的选择。',
    specs: ['射程：70米（奥运标准）', '拉力：18-25公斤', '箭速：约200公里/小时'],
    imgId: 'bow-recurve-img-7f4a2c',
    titleId: 'bow-recurve-title',
    descId: 'bow-recurve-desc',
  },
  {
    id: 'bow-compound',
    title: '复合弓',
    subtitle: 'Compound Bow',
    desc: '使用滑轮和钢缆系统，在满拉时可减少50-80%的持弓力，让射手能更稳定地瞄准。精准度极高，在世界锦标赛中设有专项比赛。',
    specs: ['射程：50米（世锦赛标准）', '拉力：20-30公斤', '箭速：约300公里/小时'],
    imgId: 'bow-compound-img-3b8e1d',
    titleId: 'bow-compound-title',
    descId: 'bow-compound-desc',
  },
  {
    id: 'bow-traditional',
    title: '传统弓',
    subtitle: 'Traditional Bow',
    desc: '包括长弓、中国传统弓、土耳其弓等，不使用现代辅助设备，考验射手的本能和感觉。传统弓射箭更注重与自然的连接和内心的修炼。',
    specs: ['射程：20-60米', '拉力：15-40公斤', '形式多样，各有特色'],
    imgId: 'bow-traditional-img-9c5f3a',
    titleId: 'bow-traditional-title',
    descId: 'bow-traditional-desc',
  },
];

const techniques = [
  {
    step: '01',
    title: '站姿',
    desc: '双脚与肩同宽，垂直于射击线站立，身体重心均匀分布，保持稳定的基础姿势。',
  },
  {
    step: '02',
    title: '握弓',
    desc: '弓把放在拇指根部，手指自然放松，避免过度握紧导致弓臂偏转，影响箭的飞行轨迹。',
  },
  {
    step: '03',
    title: '搭箭',
    desc: '将箭搭在箭台上，箭尾卡入弦上，确保箭羽方向正确，通常一片箭羽朝外。',
  },
  {
    step: '04',
    title: '拉弓',
    desc: '用背部肌肉发力，肘部向后拉，将弓弦拉至锚点位置，保持一致的锚点是精准射击的关键。',
  },
  {
    step: '05',
    title: '瞄准',
    desc: '通过瞄准器对准靶心，保持呼吸平稳，在呼气末端的自然停顿时完成瞄准。',
  },
  {
    step: '06',
    title: '撒放',
    desc: '手指自然放松，让弓弦从手指上滑落，避免主动撒放导致的偏差，保持撒放后的随弓动作。',
  },
];

const equipment = [
  { name: '箭', desc: '碳纤维箭是现代竞技的主流选择，重量轻、刚性好' },
  { name: '箭羽', desc: '稳定箭的飞行轨迹，分为塑料羽和真羽两种' },
  { name: '护指', desc: '保护拉弦手指，分为指套和护指板两种形式' },
  { name: '臂护', desc: '防止弓弦弹打前臂，初学者必备装备' },
  { name: '瞄准器', desc: '帮助精确瞄准，可调节上下左右方向' },
  { name: '稳定杆', desc: '减少射击时弓的震动，提高稳定性和精准度' },
];

const Technique = () => {
  const containerRef = useRef(null);
  const [activeBow, setActiveBow] = useState(bowTypes[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeBow]);

  const currentBow = bowTypes.find((b) => b.id === activeBow);

  return (
    <main ref={containerRef} className="bg-surface min-h-screen">
      <section className="relative py-32 px-4 md:px-8 bg-forest-dark overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          data-strk-bg-id="tech-hero-bg-4a1f9c"
          data-strk-bg="[tech-hero-subtitle] [tech-hero-title] archery equipment bow"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-forest-dark/70" />
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">技术与装备</span>
          <h1 id="tech-hero-title" className="font-serif text-4xl md:text-6xl font-bold text-text-light mt-4 mb-6">
            精准背后的科学
          </h1>
          <p id="tech-hero-subtitle" className="text-text-light/80 text-lg leading-relaxed max-w-2xl mx-auto">
            了解不同类型的弓箭装备，掌握正确的射箭技术，让每一支箭都飞向靶心
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">弓的种类</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {bowTypes.map((bow) => (
              <button
                key={bow.id}
                onClick={() => setActiveBow(bow.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeBow === bow.id
                    ? 'bg-gold text-forest-dark shadow-md'
                    : 'bg-white border border-border-green text-text-secondary hover:border-gold hover:text-gold'
                }`}
              >
                {bow.title}
              </button>
            ))}
          </div>

          {currentBow && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-96">
                <img
                  alt={currentBow.title}
                  data-strk-img-id={currentBow.imgId}
                  data-strk-img={`[${currentBow.descId}] [${currentBow.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl p-8 border border-border-green shadow-md">
                <div className="mb-2">
                  <span className="text-gold text-sm font-medium">{currentBow.subtitle}</span>
                </div>
                <h3 id={currentBow.titleId} className="font-serif text-2xl font-bold text-text-primary mb-4">
                  {currentBow.title}
                </h3>
                <p id={currentBow.descId} className="text-text-secondary leading-relaxed mb-6">
                  {currentBow.desc}
                </p>
                <div className="space-y-2">
                  {currentBow.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-text-primary text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-forest-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">技术要领</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-light mt-3 mb-4">
              射箭六步法
            </h2>
            <p className="text-text-light/70 max-w-2xl mx-auto">
              掌握正确的射箭技术是提升成绩的基础，每一个步骤都至关重要
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((tech) => (
              <div
                key={tech.step}
                className="bg-white/5 border border-gold/20 rounded-2xl p-6 hover:border-gold/50 hover:bg-white/10 transition-all"
              >
                <div className="font-serif text-4xl font-bold text-gold/30 mb-3">{tech.step}</div>
                <h3 className="font-serif text-xl font-bold text-text-light mb-3">{tech.title}</h3>
                <p className="text-text-light/70 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">必备装备清单</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-border-green hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{item.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technique;
