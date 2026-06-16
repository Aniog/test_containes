import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Calendar, Users, Globe } from 'lucide-react';

const venues = [
  { city: '纽约/新泽西', country: '美国', stadium: '大都会球场', capacity: '82500' },
  { city: '洛杉矶', country: '美国', stadium: '玫瑰碗球场', capacity: '92542' },
  { city: '达拉斯', country: '美国', stadium: 'AT&T球场', capacity: '80000' },
  { city: '墨西哥城', country: '墨西哥', stadium: '阿兹特克球场', capacity: '87523' },
  { city: '多伦多', country: '加拿大', stadium: 'BMO球场', capacity: '30000' },
  { city: '温哥华', country: '加拿大', stadium: 'BC广场', capacity: '54500' },
];

const groups = [
  { group: 'A', teams: ['美国', '巴拿马', '玻利维亚', '待定'] },
  { group: 'B', teams: ['阿根廷', '智利', '秘鲁', '待定'] },
  { group: 'C', teams: ['墨西哥', '厄瓜多尔', '委内瑞拉', '待定'] },
  { group: 'D', teams: ['巴西', '巴拉圭', '哥斯达黎加', '待定'] },
];

export default function WorldCup2026() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="2026" className="bg-gray-900 py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-400 text-gray-950 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            即将到来
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            2026 FIFA 世界杯
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            2026年世界杯将由美国、加拿大、墨西哥三国联合举办，首次扩军至48支球队参赛，创造历史。
          </p>
        </div>

        {/* Key info cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { icon: Calendar, label: '开幕时间', value: '2026年6月11日' },
            { icon: Globe, label: '举办国', value: '美国·加拿大·墨西哥' },
            { icon: Users, label: '参赛球队', value: '48支' },
            { icon: MapPin, label: '比赛城市', value: '16座城市' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-gray-800 rounded-2xl p-5 border border-gray-700 text-center">
              <Icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-sm text-gray-400 mb-1">{label}</div>
              <div className="text-sm font-bold text-white">{value}</div>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden mb-14 h-64 md:h-80">
          <div
            data-strk-bg-id="wc2026-banner-bg-n4o5p6"
            data-strk-bg="[wc2026-banner-desc] [wc2026-banner-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            className="absolute inset-0"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12">
            <h3 id="wc2026-banner-title" className="text-2xl md:text-3xl font-black text-white mb-2">
              史上最大规模世界杯
            </h3>
            <p id="wc2026-banner-desc" className="text-gray-300 max-w-md text-sm md:text-base">
              首次由三个国家联合举办，48支球队争夺最高荣誉，104场比赛，创造足球新纪元。
            </p>
          </div>
        </div>

        {/* Venues */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-yellow-400" /> 主要比赛场馆
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {venues.map((v) => (
              <div
                key={v.city}
                className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-yellow-400 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-white">{v.city}</div>
                    <div className="text-sm text-gray-400">{v.country}</div>
                    <div className="text-xs text-gray-500 mt-1">{v.stadium}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-yellow-400">{parseInt(v.capacity).toLocaleString()}</div>
                    <div className="text-xs text-gray-400">座位</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Groups preview */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-yellow-400" /> 小组赛预览（部分）
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {groups.map((g) => (
              <div key={g.group} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="text-yellow-400 font-black text-lg mb-3">小组 {g.group}</div>
                <ul className="space-y-2">
                  {g.teams.map((team) => (
                    <li key={team} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {team}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
