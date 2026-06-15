import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Trophy, Users, Star, Shield } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '12', label: '冠军头衔' },
  { icon: Users, value: '45+', label: '注册球员' },
  { icon: Star, value: '20', label: '年历史' },
  { icon: Shield, value: '98%', label: '球迷满意度' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-rugby-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-block bg-rugby-green/10 text-rugby-green text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              关于我们
            </div>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-extrabold text-rugby-dark mb-6 leading-tight"
            >
              不只是一支球队，<br />
              <span className="text-rugby-green">更是一个大家庭</span>
            </h2>
            <p
              id="about-desc"
              className="text-gray-600 leading-relaxed mb-4 text-base"
            >
              AB橄榄球CD成立于2004年，是国内最具影响力的橄榄球俱乐部之一。我们致力于推广橄榄球运动，培养优秀球员，并在各级联赛中取得卓越成绩。
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              我们的球队由来自全国各地的精英球员组成，在专业教练团队的带领下，不断突破自我，追求卓越。无论是在赛场上还是赛场外，我们始终秉承团队精神，共同成长。
            </p>
            <a
              href="#team"
              className="inline-block bg-rugby-green text-white font-bold px-7 py-3 rounded-full hover:bg-rugby-green-light transition-colors"
            >
              认识球员
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rugby-gold/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rugby-green/10 rounded-2xl" />
            <img
              alt="橄榄球队合影"
              data-strk-img-id="about-team-img-d4e5f6"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rugby-green/10 rounded-xl mb-3">
                <Icon className="w-6 h-6 text-rugby-green" />
              </div>
              <div className="text-3xl font-extrabold text-rugby-dark mb-1">{value}</div>
              <div className="text-sm text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
