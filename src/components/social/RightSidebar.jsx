import { useState } from 'react';

const TRENDING = [
  { tag: '城市摄影', count: '12.4K', color: '#6c5ce7' },
  { tag: '旅行日记', count: '8.7K',  color: '#3ec8a0' },
  { tag: '美食探店', count: '6.2K',  color: '#f5b940' },
  { tag: '生活方式', count: '19.1K', color: '#ee60b0' },
  { tag: '创意设计', count: '4.5K',  color: '#50aae0' },
];

const SUGGESTIONS = [
  { name: '林思远', followers: '8.2K',  tint: { bg: 'rgba(62,200,160,0.14)',  color: '#0a5040' } },
  { name: '王晓晓', followers: '15.6K', tint: { bg: 'rgba(238,96,165,0.14)',  color: '#a02060' } },
  { name: '张大伟', followers: '3.1K',  tint: { bg: 'rgba(80,170,240,0.14)',  color: '#0a3870' } },
];

export default function RightSidebar() {
  const [followed, setFollowed] = useState({});

  return (
    <aside style={{ paddingTop: 8 }}>

      {/* Trending */}
      <div style={{ marginBottom: 20 }}>
        <div className="s-head">热门话题</div>
        {TRENDING.map(({ tag, count, color }) => (
          <div key={tag} className="s-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#2a2448' }}>#{tag}</span>
            <span style={{ fontSize: 11, color, fontWeight: 600 }}>{count}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(100,80,200,0.07)', marginBottom: 20 }} />

      {/* Suggestions */}
      <div>
        <div className="s-head">推荐关注</div>
        {SUGGESTIONS.map(({ name, followers, tint }) => (
          <div key={name} className="s-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9999, background: tint.bg, color: tint.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                {name[0]}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#2a2448', lineHeight: 1.2 }}>{name}</div>
                <div style={{ fontSize: 11, color: '#b0a8c8' }}>{followers} 粉丝</div>
              </div>
            </div>
            <button
              className={`btn-outline${followed[name] ? ' active' : ''}`}
              onClick={() => setFollowed(v => ({ ...v, [name]: !v[name] }))}
            >
              {followed[name] ? '已关注' : '关注'}
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, fontSize: 11, color: '#d0c8e0', textAlign: 'center' }}>© 2026 Lumina</div>
    </aside>
  );
}
