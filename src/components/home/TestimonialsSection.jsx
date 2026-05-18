import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const testimonials = [
  {
    id: 'review-1',
    name: '李女士',
    location: '上海',
    avatar: 'review-avatar-a1b2',
    text: '用了金利的铸铁锅做红烧肉，香气四溢，全家人都说比以前好吃多了！锅的质量真的没话说，用了两年还是新的一样。',
    stars: 5,
  },
  {
    id: 'review-2',
    name: '王先生',
    location: '北京',
    avatar: 'review-avatar-c3d4',
    text: '刀具套装非常锋利，切菜特别顺手。包装也很精美，送给岳母当礼物，老人家特别喜欢，说是她用过最好的刀。',
    stars: 5,
  },
  {
    id: 'review-3',
    name: '张女士',
    location: '成都',
    avatar: 'review-avatar-e5f6',
    text: '陶瓷餐具颜值超高，摆在桌上特别有仪式感。材质安全，孩子用也放心。客服服务也很好，有问题秒回。',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-20 md:py-28 bg-brand-brown">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            用户心声
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            百万家庭的共同选择
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            每一条好评背后，都是一个温暖的家庭故事
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-brand-orange text-lg">★</span>
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-6">"{t.text}"</p>
              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                  <img
                    alt={t.name}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                    data-strk-img-id={t.avatar}
                    data-strk-img={`portrait of happy chinese ${t.location} family person`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="80"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/60 text-xs">{t.location}用户</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
