import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const historicalTyphoons = [
  {
    id: 'ty-saomai-2006',
    imgId: 'history-img-saomai-v4w5x6',
    titleId: 'ty-saomai-2006-title',
    descId: 'ty-saomai-2006-desc',
    name: '桑美 (Saomai)',
    year: 2006,
    maxWind: '60 m/s',
    minPressure: '915 hPa',
    landfall: '浙江苍南',
    deaths: '483人',
    damage: '196亿元',
    level: '超强台风',
    levelColor: '#e63946',
    desc: '2006年第8号超强台风，登陆时中心附近最大风速达60米/秒，是1949年以来登陆中国大陆最强台风。',
    tag: '历史最强',
  },
  {
    id: 'ty-mangkhut-2018',
    imgId: 'history-img-mangkhut-y7z8a9',
    titleId: 'ty-mangkhut-2018-title',
    descId: 'ty-mangkhut-2018-desc',
    name: '山竹 (Mangkhut)',
    year: 2018,
    maxWind: '65 m/s',
    minPressure: '900 hPa',
    landfall: '广东台山',
    deaths: '134人',
    damage: '160亿元',
    level: '超强台风',
    levelColor: '#e63946',
    desc: '2018年第22号超强台风，登陆时中心附近最大风速达45米/秒，是2018年全球最强热带气旋之一。',
    tag: '近年最强',
  },
  {
    id: 'ty-fitow-2013',
    imgId: 'history-img-fitow-b1c2d3',
    titleId: 'ty-fitow-2013-title',
    descId: 'ty-fitow-2013-desc',
    name: '菲特 (Fitow)',
    year: 2013,
    maxWind: '42 m/s',
    minPressure: '955 hPa',
    landfall: '福建福鼎',
    deaths: '11人',
    damage: '631亿元',
    level: '强台风',
    levelColor: '#e76f51',
    desc: '2013年第23号强台风，登陆后带来极端降雨，余姚等地遭受严重洪涝，经济损失巨大。',
    tag: '经济损失最大',
  },
  {
    id: 'ty-lekima-2019',
    imgId: 'history-img-lekima-e4f5g6',
    titleId: 'ty-lekima-2019-title',
    descId: 'ty-lekima-2019-desc',
    name: '利奇马 (Lekima)',
    year: 2019,
    maxWind: '52 m/s',
    minPressure: '925 hPa',
    landfall: '浙江温岭',
    deaths: '89人',
    damage: '537亿元',
    level: '超强台风',
    levelColor: '#e63946',
    desc: '2019年第9号超强台风，登陆时中心附近最大风速达52米/秒，是2019年登陆中国最强台风。',
    tag: '2019年最强',
  },
  {
    id: 'ty-doksuri-2023',
    imgId: 'history-img-doksuri-h7i8j9',
    titleId: 'ty-doksuri-2023-title',
    descId: 'ty-doksuri-2023-desc',
    name: '杜苏芮 (Doksuri)',
    year: 2023,
    maxWind: '52 m/s',
    minPressure: '930 hPa',
    landfall: '福建晋江',
    deaths: '20人',
    damage: '300亿元',
    level: '超强台风',
    levelColor: '#e63946',
    desc: '2023年第5号超强台风，登陆后北上引发华北地区极端降雨，北京、河北等地遭受严重洪涝灾害。',
    tag: '2023年最强',
  },
  {
    id: 'ty-haikui-2023',
    imgId: 'history-img-haikui-k1l2m3',
    titleId: 'ty-haikui-2023-title',
    descId: 'ty-haikui-2023-desc',
    name: '海葵 (Haikui)',
    year: 2023,
    maxWind: '38 m/s',
    minPressure: '960 hPa',
    landfall: '福建东山',
    deaths: '6人',
    damage: '50亿元',
    level: '台风',
    levelColor: '#f4a261',
    desc: '2023年第11号台风，登陆台湾后再次登陆福建，是2023年登陆中国的第二个台风。',
    tag: '2023年',
  },
];

const levelColors = {
  '超强台风': '#e63946',
  '强台风': '#e76f51',
  '台风': '#f4a261',
  '强热带风暴': '#00b4d8',
};

export default function History() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all'
    ? historicalTyphoons
    : historicalTyphoons.filter((t) => t.level === filter);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filter, selected]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0f1e] pt-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#112240] to-[#0a0f1e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 border border-[#00b4d8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#48cae4] text-sm font-medium">📜 历史档案</span>
          </div>
          <h1 id="history-page-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            历史台风记录
          </h1>
          <p id="history-page-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            回顾影响中国的重大历史台风事件，铭记自然灾害的深刻教训
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['all', '超强台风', '强台风', '台风', '强热带风暴'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-[#00b4d8] text-white'
                  : 'bg-[#0d1b2a] border border-slate-700 text-slate-400 hover:text-white hover:border-[#00b4d8]/50'
              }`}
            >
              {f === 'all' ? '全部' : f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((typhoon) => (
            <div
              key={typhoon.id}
              className="bg-[#0d1b2a] border border-[#00b4d8]/20 rounded-2xl overflow-hidden hover:border-[#00b4d8]/60 hover:shadow-lg hover:shadow-[#00b4d8]/10 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelected(typhoon)}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  alt={typhoon.name}
                  data-strk-img-id={typhoon.imgId}
                  data-strk-img={`[${typhoon.descId}] [${typhoon.titleId}] [history-page-subtitle] [history-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${typhoon.levelColor}20`, color: typhoon.levelColor, border: `1px solid ${typhoon.levelColor}50` }}
                  >
                    {typhoon.level}
                  </span>
                </div>
                {typhoon.tag && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#00b4d8]/20 text-[#48cae4] border border-[#00b4d8]/40">
                      {typhoon.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 id={typhoon.titleId} className="text-white font-bold text-lg leading-tight">
                    {typhoon.name}
                  </h3>
                  <span className="text-[#48cae4] font-mono text-sm shrink-0 ml-2">{typhoon.year}</span>
                </div>
                <p id={typhoon.descId} className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {typhoon.desc}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0a0f1e]/60 rounded-lg p-2">
                    <div className="text-slate-500 text-xs">最大风速</div>
                    <div className="text-[#48cae4] font-mono font-bold text-sm">{typhoon.maxWind}</div>
                  </div>
                  <div className="bg-[#0a0f1e]/60 rounded-lg p-2">
                    <div className="text-slate-500 text-xs">登陆地点</div>
                    <div className="text-white font-semibold text-sm">{typhoon.landfall}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-[#0d1b2a] border border-[#00b4d8]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  alt={selected.name}
                  data-strk-img-id={`modal-${selected.imgId}`}
                  data-strk-img={`[modal-desc-${selected.id}] [modal-title-${selected.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6">
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${selected.levelColor}30`, color: selected.levelColor, border: `1px solid ${selected.levelColor}60` }}
                  >
                    {selected.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 id={`modal-title-${selected.id}`} className="text-white font-black text-2xl">
                    {selected.name}
                  </h2>
                  <span className="text-[#48cae4] font-mono text-xl font-bold">{selected.year}</span>
                </div>
                <p id={`modal-desc-${selected.id}`} className="text-slate-300 text-sm leading-relaxed mb-6">
                  {selected.desc}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: '最大风速', value: selected.maxWind },
                    { label: '最低气压', value: selected.minPressure },
                    { label: '登陆地点', value: selected.landfall },
                    { label: '死亡人数', value: selected.deaths },
                    { label: '经济损失', value: selected.damage },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0a0f1e]/60 border border-slate-700/50 rounded-xl p-3">
                      <div className="text-slate-500 text-xs mb-1">{item.label}</div>
                      <div className="text-white font-bold text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
