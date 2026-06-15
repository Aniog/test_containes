import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-court-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-80 md:h-[500px]">
              <img
                alt="篮球场馆"
                data-strk-img-id="about-img-v1w2x3"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-court-black/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-hoop-orange rounded-2xl p-5 shadow-[0_0_40px_rgba(249,115,22,0.4)]">
              <p className="font-heading font-black text-white text-4xl leading-none">1998</p>
              <p className="text-white/80 font-body text-sm uppercase tracking-wider mt-1">成立年份</p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 md:pt-0">
            <p className="text-hoop-orange text-xs font-body font-semibold uppercase tracking-[0.3em] mb-4">
              关于球队
            </p>
            <h2
              id="about-title"
              className="font-heading font-black text-white uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              雷霆队的
              <br />
              <span className="text-hoop-orange">传奇故事</span>
            </h2>
            <p
              id="about-desc"
              className="text-gray-300 font-body text-base leading-relaxed mb-6"
            >
              雷霆队成立于1998年，是本市最具影响力的职业篮球队。二十余年来，我们始终秉承"拼搏、团结、荣耀"的精神，
              为球迷带来无数精彩瞬间。
            </p>
            <p className="text-gray-400 font-body text-base leading-relaxed mb-8">
              三次总冠军、无数个人荣誉，雷霆队已成为这座城市的骄傲。我们不仅是一支球队，
              更是一种精神的象征——永不放弃，永远向前。
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🏆', label: '冠军精神' },
                { icon: '🤝', label: '团队合作' },
                { icon: '🔥', label: '永不放弃' },
              ].map((item) => (
                <div key={item.label} className="bg-court-card rounded-xl p-4 text-center border border-court-border">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <p className="text-white font-body text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
