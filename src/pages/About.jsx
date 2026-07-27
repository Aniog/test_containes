import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const timeline = [
  {
    year: '约公元前3000年',
    title: '弓箭的诞生',
    desc: '弓箭作为狩猎和战争工具在世界各地独立发展，成为人类最重要的远程武器之一。',
    id: 'tl-1',
  },
  {
    year: '公元前2000年',
    title: '中国射箭文化',
    desc: '射箭被列为中国古代"六艺"之一，成为贵族教育的重要组成部分，形成了独特的射礼文化。',
    id: 'tl-2',
  },
  {
    year: '1900年',
    title: '首次进入奥运会',
    desc: '射箭首次出现在巴黎奥运会上，开启了现代竞技射箭的新纪元。',
    id: 'tl-3',
  },
  {
    year: '1972年',
    title: '重返奥运舞台',
    desc: '射箭在慕尼黑奥运会上重新成为正式比赛项目，并延续至今，成为奥运会的经典项目。',
    id: 'tl-4',
  },
  {
    year: '现代',
    title: '全球化发展',
    desc: '射箭运动在全球超过150个国家和地区开展，世界射箭联合会成员遍布各大洲。',
    id: 'tl-5',
  },
];

const disciplines = [
  {
    id: 'disc-recurve',
    title: '反曲弓',
    desc: '奥运会标准项目，使用反曲弓在70米距离射击，是最广泛参与的射箭形式。',
    imgId: 'disc-recurve-img-8a3f1c',
    titleId: 'disc-recurve-title',
    descId: 'disc-recurve-desc',
  },
  {
    id: 'disc-compound',
    title: '复合弓',
    desc: '使用滑轮系统的现代弓，精准度极高，在世界射箭锦标赛中设有专项比赛。',
    imgId: 'disc-compound-img-2b7e4d',
    titleId: 'disc-compound-title',
    descId: 'disc-compound-desc',
  },
  {
    id: 'disc-traditional',
    title: '传统弓',
    desc: '包括中国传统弓、日本弓道等，保留了射箭运动的文化传承和哲学内涵。',
    imgId: 'disc-traditional-img-6c9a2e',
    titleId: 'disc-traditional-title',
    descId: 'disc-traditional-desc',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="bg-surface min-h-screen">
      <section className="relative py-32 px-4 md:px-8 bg-forest-dark overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          data-strk-bg-id="about-hero-bg-5d2c8f"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] archery history"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-forest-dark/70" />
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">关于射箭</span>
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-6xl font-bold text-text-light mt-4 mb-6">
            千年传承的精准艺术
          </h1>
          <p id="about-hero-subtitle" className="text-text-light/80 text-lg leading-relaxed max-w-2xl mx-auto">
            射箭是人类最古老的技艺之一，跨越数千年的历史，从战场到竞技场，从生存技能到奥运项目
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">射箭发展历史</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-green md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-surface -translate-x-1.5 md:-translate-x-2 mt-1" />

                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-border-green shadow-md hover:shadow-lg transition-shadow">
                      <span className="text-gold text-sm font-semibold">{item.year}</span>
                      <h3 className="font-serif text-xl font-bold text-text-primary mt-1 mb-3">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">项目分类</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
              射箭运动的主要形式
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              现代射箭运动包含多种形式，每种都有其独特的魅力和技术要求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {disciplines.map((disc) => (
              <div
                key={disc.id}
                className="group rounded-2xl overflow-hidden border border-border-green shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={disc.title}
                    data-strk-img-id={disc.imgId}
                    data-strk-img={`[${disc.descId}] [${disc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent" />
                  <h3 id={disc.titleId} className="absolute bottom-4 left-4 font-serif text-xl font-bold text-text-light">
                    {disc.title}
                  </h3>
                </div>
                <div className="p-6 bg-white">
                  <p id={disc.descId} className="text-text-secondary text-sm leading-relaxed">
                    {disc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
