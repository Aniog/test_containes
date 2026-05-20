import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const lifestylePosts = [
  {
    id: 'ls-1',
    tag: '生活美学',
    title: '一杯茶的时光',
    desc: '在忙碌的日常中，为自己留一段安静的时光。一把好壶，一杯清茶，让心灵得到片刻的宁静与滋养。',
    imgId: 'ls-img-k1l2m3',
    titleId: 'ls-title-1',
    descId: 'ls-desc-1',
  },
  {
    id: 'ls-2',
    tag: '家居搭配',
    title: '绿植与家的对话',
    desc: '一盆绿植，能让整个空间焕然一新。学会用自然元素装点家居，让生命的气息流淌在每个角落。',
    imgId: 'ls-img-n4o5p6',
    titleId: 'ls-title-2',
    descId: 'ls-desc-2',
  },
  {
    id: 'ls-3',
    tag: '亲子时光',
    title: '共享餐桌的温暖',
    desc: '一顿家常便饭，胜过千言万语。精心布置的餐桌，是家人情感交流最美好的舞台。',
    imgId: 'ls-img-q7r8s9',
    titleId: 'ls-title-3',
    descId: 'ls-desc-3',
  },
];

const testimonials = [
  {
    name: '李晓雯',
    location: '上海',
    text: '买了梅露可的棉麻床品，睡眠质量明显提升了。材质真的很好，洗了很多次还是那么柔软，值得推荐！',
    stars: 5,
  },
  {
    name: '张建国',
    location: '北京',
    text: '给新家选了梅露可的客厅系列，朋友来了都说很有品味。设计简约不失温馨，和我们家的风格完美契合。',
    stars: 5,
  },
  {
    name: '陈美华',
    location: '成都',
    text: '香薰蜡烛是我的最爱，每天下班回家点上一支，整个人都放松了。气味很自然，不刺鼻，真的很喜欢。',
    stars: 5,
  },
];

export default function LifestyleSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="lifestyle" ref={containerRef} className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Lifestyle Posts */}
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-medium tracking-widest uppercase text-brand-gold mb-3">
            生活理念
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-brand-dark mb-4">
            家，是最好的生活方式
          </h2>
          <p className="font-sans text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            我们不只是在卖家居用品，更是在分享一种生活态度——
            用心经营每一个家的角落，让平凡的日子充满仪式感。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {lifestylePosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-sans font-medium text-brand-gold tracking-widest uppercase">{post.tag}</span>
                <h3 id={post.titleId} className="font-serif font-semibold text-brand-dark text-xl mt-2 mb-3">{post.title}</h3>
                <p id={post.descId} className="font-sans text-brand-muted text-sm leading-relaxed">{post.desc}</p>
                <button className="mt-4 text-brand-brown font-sans text-sm font-medium hover:text-brand-dark transition-colors flex items-center gap-1">
                  阅读更多 <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-brand-beige rounded-3xl p-8 md:p-14">
          <div className="text-center mb-10">
            <p className="text-sm font-sans font-medium tracking-widest uppercase text-brand-gold mb-3">
              用户心声
            </p>
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-brand-dark">
              他们的家，因梅露可而不同
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-brand-gold text-lg">★</span>
                  ))}
                </div>
                <p className="font-sans text-brand-dark text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-beige flex items-center justify-center">
                    <span className="font-serif font-bold text-brand-brown text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-brand-dark text-sm">{t.name}</p>
                    <p className="font-sans text-brand-muted text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
