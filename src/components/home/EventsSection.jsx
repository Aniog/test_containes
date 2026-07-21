import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 'evt-1',
    titleId: 'evt-title-1',
    descId: 'evt-desc-1',
    imgId: 'event-img-1-2d5f8a',
    title: '2026 中国帆船联赛',
    desc: '汇聚全国顶尖帆船队伍，角逐年度总冠军。赛程覆盖青岛、三亚、厦门三大赛区。',
    date: '2026年8月15日',
    location: '青岛奥帆中心',
    participants: '32支队伍',
    tag: '竞技赛事',
    tagColor: 'bg-seafoam text-navy',
  },
  {
    id: 'evt-2',
    titleId: 'evt-title-2',
    descId: 'evt-desc-2',
    imgId: 'event-img-2-7e1c3b',
    title: '三亚国际帆船周',
    desc: '亚洲最具影响力的帆船盛会，集竞技、展览、文化交流于一体，吸引全球帆船爱好者。',
    date: '2026年9月20日',
    location: '三亚亚龙湾',
    participants: '500+参与者',
    tag: '国际赛事',
    tagColor: 'bg-ocean text-white',
  },
  {
    id: 'evt-3',
    titleId: 'evt-title-3',
    descId: 'evt-desc-3',
    imgId: 'event-img-3-4a9d6c',
    title: '青少年帆船夏令营',
    desc: '专为8-18岁青少年设计的帆船体验营，专业教练指导，安全有趣，开启海上冒险之旅。',
    date: '2026年7月1日',
    location: '厦门五缘湾',
    participants: '限额60人',
    tag: '青少年活动',
    tagColor: 'bg-sand text-navy',
  },
  {
    id: 'evt-4',
    titleId: 'evt-title-4',
    descId: 'evt-desc-4',
    imgId: 'event-img-4-8b3e2f',
    title: '环海南岛帆船赛',
    desc: '挑战极限的环岛航行赛事，全程约600海里，考验水手的耐力、技术与团队协作能力。',
    date: '2026年10月5日',
    location: '海口秀英港',
    participants: '20支队伍',
    tag: '远洋赛事',
    tagColor: 'bg-sky text-white',
  },
];

const EventsSection = () => {
  const containerRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeEvent]);

  return (
    <section id="events" ref={containerRef} className="bg-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-seafoam font-medium tracking-widest text-sm uppercase mb-3">
            赛事活动
          </p>
          <h2
            id="events-title"
            className="font-serif font-bold text-white text-3xl md:text-4xl mb-4"
          >
            即将举行的赛事
          </h2>
          <p
            id="events-subtitle"
            className="text-white/60 text-base max-w-xl mx-auto"
          >
            从地方联赛到国际顶级赛事，帆船运动的精彩从未停歇
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-seafoam/40 transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveEvent(activeEvent?.id === evt.id ? null : evt)}
            >
              <div className="overflow-hidden aspect-[16/9]">
                <img
                  alt={evt.title}
                  data-strk-img-id={evt.imgId}
                  data-strk-img={`[${evt.descId}] [${evt.titleId}] [events-subtitle] [events-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    id={evt.titleId}
                    className="font-serif font-bold text-white text-lg leading-snug"
                  >
                    {evt.title}
                  </h3>
                  <span className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${evt.tagColor}`}>
                    {evt.tag}
                  </span>
                </div>
                <p id={evt.descId} className="text-white/60 text-sm leading-relaxed mb-4">
                  {evt.desc}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-seafoam" />
                    {evt.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-seafoam" />
                    {evt.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-seafoam" />
                    {evt.participants}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-seafoam text-seafoam font-semibold px-8 py-3 rounded-full hover:bg-seafoam hover:text-navy transition-colors duration-300">
            查看全部赛事
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
