import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Wind, Compass, Trophy, Users } from 'lucide-react';

const stats = [
  { icon: Wind, value: '150+', label: '年历史' },
  { icon: Compass, value: '200+', label: '国家参与' },
  { icon: Trophy, value: '12', label: '奥运项目' },
  { icon: Users, value: '100万+', label: '全球爱好者' },
];

const features = [
  {
    id: 'feat-1',
    titleId: 'feat-title-1',
    descId: 'feat-desc-1',
    imgId: 'about-feat-img-1-9b2e4f',
    title: '竞技帆船',
    desc: '从奥运会到美洲杯，帆船竞技赛事汇聚全球顶尖水手，展现速度与策略的完美结合。',
  },
  {
    id: 'feat-2',
    titleId: 'feat-title-2',
    descId: 'feat-desc-2',
    imgId: 'about-feat-img-2-3c7a1d',
    title: '休闲航海',
    desc: '无论是沿海巡航还是远洋探险，帆船为你打开通往自由的大门，感受海洋的壮阔。',
  },
  {
    id: 'feat-3',
    titleId: 'feat-title-3',
    descId: 'feat-desc-3',
    imgId: 'about-feat-img-3-5e8b2a',
    title: '青少年培训',
    desc: '专业的青少年帆船培训课程，从基础操帆到安全知识，培养下一代海上运动员。',
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-white">
      {/* Intro Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-seafoam font-medium tracking-widest text-sm uppercase mb-4">
              关于帆船运动
            </p>
            <h2
              id="about-title"
              className="font-serif font-bold text-navy text-3xl md:text-5xl leading-tight mb-6"
            >
              乘风破浪，
              <br />
              驾驭自然之力
            </h2>
            <p
              id="about-desc"
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
            >
              帆船运动是一项融合技术、体能与自然感知的综合性水上运动。
              水手们借助风力驱动帆船，在波涛之上展现人与自然的和谐共处。
              无论是竞技赛场还是休闲航行，帆船都能带给你无与伦比的自由感受。
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              帆船运动起源于17世纪的荷兰，如今已成为全球最受欢迎的水上运动之一，
              并在奥运会中设有多个竞技项目，吸引着来自世界各地的运动员参与其中。
            </p>
          </div>
          <div className="relative">
            <img
              alt="帆船运动"
              data-strk-img-id="about-main-img-4f9c3e"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="font-serif font-bold text-3xl text-seafoam">1900</p>
              <p className="text-sm text-white/80 mt-1">首次进入奥运会</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-navy hover:text-white group transition-colors duration-300"
            >
              <Icon className="w-8 h-8 text-seafoam mx-auto mb-3 group-hover:text-seafoam" />
              <p className="font-serif font-bold text-3xl text-navy group-hover:text-white mb-1">
                {value}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-14">
            <p className="text-seafoam font-medium tracking-widest text-sm uppercase mb-3">
              运动类型
            </p>
            <h2
              id="about-features-title"
              className="font-serif font-bold text-navy text-3xl md:text-4xl"
            >
              探索帆船的多元世界
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <div
                key={feat.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="overflow-hidden aspect-[3/2]">
                  <img
                    alt={feat.title}
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [about-features-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={feat.titleId}
                    className="font-serif font-bold text-navy text-xl mb-3"
                  >
                    {feat.title}
                  </h3>
                  <p id={feat.descId} className="text-gray-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
