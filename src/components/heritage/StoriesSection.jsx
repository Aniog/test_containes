import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stories = [
  {
    id: 'story-liu',
    titleId: 'story-liu-title',
    descId: 'story-liu-desc',
    imgId: 'story-img-liu-a1b2c3',
    name: '刘三姐',
    craft: '皮影戏传承人',
    age: '第五代传人',
    quote: '每一个皮影人物都有自己的灵魂，我的使命就是让它们继续活下去。',
    desc: '从小跟随祖父学习皮影制作，四十年如一日，将这门古老艺术传授给下一代，让皮影戏在现代焕发新生。',
  },
  {
    id: 'story-wang',
    titleId: 'story-wang-title',
    descId: 'story-wang-desc',
    imgId: 'story-img-wang-d4e5f6',
    name: '王大师',
    craft: '景德镇陶瓷大师',
    age: '国家级工艺美术师',
    quote: '泥土在手中成形，是与千年文明的对话，每一件作品都是历史的延续。',
    desc: '专注景德镇传统青花瓷制作技艺三十余年，将传统工艺与现代审美融合，作品被多家博物馆收藏。',
  },
  {
    id: 'story-chen',
    titleId: 'story-chen-title',
    descId: 'story-chen-desc',
    imgId: 'story-img-chen-g7h8i9',
    name: '陈绣娘',
    craft: '苏绣非遗传承人',
    age: '省级代表性传承人',
    quote: '一针一线，绣的不只是图案，更是对生活的热爱和对传统的敬畏。',
    desc: '自幼习绣，将苏绣技艺发扬光大，创立工作室培养年轻绣娘，让苏绣走进现代生活。',
  },
];

export default function StoriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="stories" className="py-20 md:py-28 bg-[#F8F3EA] pattern-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#8B1A1A] text-sm tracking-[0.3em] mb-3 font-medium">INHERITORS</p>
          <h2 className="font-serif-cn text-[#1C1C1E] text-3xl md:text-4xl font-bold">传承人的故事</h2>
          <div className="section-divider" />
          <p className="text-[#5C4A32] mt-6 max-w-xl mx-auto text-base">
            他们是非遗文化的守护者，用一生的坚守，让古老技艺在现代世界继续闪光
          </p>
        </div>

        {/* Stories */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-[#FDF8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Portrait Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={story.name}
                  data-strk-img-id={story.imgId}
                  data-strk-img={`[${story.descId}] [${story.titleId}] Chinese traditional craftsman artisan`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    id={story.titleId}
                    className="font-serif-cn text-[#F8F3EA] text-xl font-bold"
                  >
                    {story.name}
                  </h3>
                  <p className="text-[#C9A84C] text-sm">{story.craft}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-[#8B1A1A]/10 text-[#8B1A1A] text-xs px-3 py-1 rounded-full mb-4 font-medium">
                  {story.age}
                </span>

                {/* Quote */}
                <blockquote className="font-calligraphy text-[#8B1A1A] text-base leading-relaxed mb-4 border-l-2 border-[#C9A84C] pl-3">
                  "{story.quote}"
                </blockquote>

                <p
                  id={story.descId}
                  className="text-[#5C4A32] text-sm leading-relaxed"
                >
                  {story.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
