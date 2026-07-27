import { useEffect, useRef } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const olympicHistory = [
  { year: '1900', city: '巴黎', note: '射箭首次进入奥运会' },
  { year: '1904', city: '圣路易斯', note: '多个射箭项目参赛' },
  { year: '1908', city: '伦敦', note: '英国选手主导比赛' },
  { year: '1920', city: '安特卫普', note: '最后一届早期奥运射箭' },
  { year: '1972', city: '慕尼黑', note: '射箭重返奥运会' },
  { year: '1988', city: '首尔', note: '韩国开始统治射箭项目' },
  { year: '2000', city: '悉尼', note: '混合团体项目首次亮相' },
  { year: '2020', city: '东京', note: '混合团体成为正式项目' },
];

const champions = [
  {
    id: 'champ-kim',
    name: '金宝廉',
    country: '韩国',
    achievement: '奥运会三连冠，世界射箭史上最伟大的运动员之一',
    imgId: 'champ-kim-img-2e7b4f',
    titleId: 'champ-kim-title',
    descId: 'champ-kim-desc',
  },
  {
    id: 'champ-brady',
    name: '布雷迪·埃利森',
    country: '美国',
    achievement: '多届世界锦标赛冠军，现代反曲弓技术的代表人物',
    imgId: 'champ-brady-img-8c3a1e',
    titleId: 'champ-brady-title',
    descId: 'champ-brady-desc',
  },
  {
    id: 'champ-deepika',
    name: '迪皮卡·库马里',
    country: '印度',
    achievement: '亚洲射箭女王，多次世界杯总决赛冠军',
    imgId: 'champ-deepika-img-5f9d2c',
    titleId: 'champ-deepika-title',
    descId: 'champ-deepika-desc',
  },
];

const majorEvents = [
  {
    id: 'event-olympics',
    title: '奥运会射箭',
    desc: '四年一届，是射箭运动最高荣誉的舞台。设有男女个人和团体项目，以及混合团体项目。',
    icon: Trophy,
    imgId: 'event-olympics-img-1a4c8e',
    titleId: 'event-olympics-title',
    descId: 'event-olympics-desc',
  },
  {
    id: 'event-worlds',
    title: '世界射箭锦标赛',
    desc: '两年一届，由世界射箭联合会主办，是规模最大的射箭专项赛事，涵盖多种弓型。',
    icon: Medal,
    imgId: 'event-worlds-img-6b2f9d',
    titleId: 'event-worlds-title',
    descId: 'event-worlds-desc',
  },
  {
    id: 'event-worldcup',
    title: '世界杯系列赛',
    desc: '每年举办多站比赛，积分最高的选手参加年终总决赛，是职业射箭运动员的重要赛场。',
    icon: Star,
    imgId: 'event-worldcup-img-3d7e1b',
    titleId: 'event-worldcup-title',
    descId: 'event-worldcup-desc',
  },
];

const Competition = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="bg-surface min-h-screen">
      <section className="relative py-32 px-4 md:px-8 bg-forest-dark overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          data-strk-bg-id="comp-hero-bg-7c3e2a"
          data-strk-bg="[comp-hero-subtitle] [comp-hero-title] archery competition olympic"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-forest-dark/70" />
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">赛事历史</span>
          <h1 id="comp-hero-title" className="font-serif text-4xl md:text-6xl font-bold text-text-light mt-4 mb-6">
            竞技场上的荣耀
          </h1>
          <p id="comp-hero-subtitle" className="text-text-light/80 text-lg leading-relaxed max-w-2xl mx-auto">
            从奥运会到世界锦标赛，回顾射箭运动在国际竞技舞台上的辉煌历程
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">主要赛事</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {majorEvents.map((event) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.id}
                  className="group rounded-2xl overflow-hidden border border-border-green shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      alt={event.title}
                      data-strk-img-id={event.imgId}
                      data-strk-img={`[${event.descId}] [${event.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                      <Icon className="w-5 h-5 text-forest-dark" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 id={event.titleId} className="font-serif text-xl font-bold text-text-primary mb-3">
                      {event.title}
                    </h3>
                    <p id={event.descId} className="text-text-secondary text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-forest-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">奥运历史</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-light mt-3 mb-4">
              射箭与奥运会
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {olympicHistory.map((item) => (
              <div
                key={item.year}
                className="bg-white/5 border border-gold/20 rounded-xl p-5 hover:border-gold/50 hover:bg-white/10 transition-all"
              >
                <div className="font-serif text-2xl font-bold text-gold mb-1">{item.year}</div>
                <div className="text-text-light font-semibold text-sm mb-2">{item.city}</div>
                <div className="text-text-light/60 text-xs leading-relaxed">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">传奇射手</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-text-secondary max-w-2xl mx-auto">
              这些运动员用他们的成就定义了现代竞技射箭的高度
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {champions.map((champ) => (
              <div
                key={champ.id}
                className="group rounded-2xl overflow-hidden border border-border-green shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={champ.name}
                    data-strk-img-id={champ.imgId}
                    data-strk-img={`[${champ.descId}] [${champ.titleId}] archery champion athlete`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 id={champ.titleId} className="font-serif text-xl font-bold text-text-light">
                      {champ.name}
                    </h3>
                    <span className="text-gold text-sm">{champ.country}</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p id={champ.descId} className="text-text-secondary text-sm leading-relaxed">
                    {champ.achievement}
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

export default Competition;
