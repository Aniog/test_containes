import { MapPin, Link, Calendar, Settings } from 'lucide-react';

const PHOTOS = [
  { emoji: '🌸', bg: 'rgba(238,96,165,0.20)'  },
  { emoji: '🌊', bg: 'rgba(80,165,240,0.20)'  },
  { emoji: '🌅', bg: 'rgba(245,185,60,0.22)'  },
  { emoji: '🌿', bg: 'rgba(62,200,160,0.20)'  },
  { emoji: '🌺', bg: 'rgba(238,96,165,0.20)'  },
  { emoji: '✨', bg: 'rgba(155,110,240,0.20)' },
];

const ACTIVITY = [
  { label: '帖子浏览', pct: 82, color: '#3ec8a0' },
  { label: '互动次数', pct: 65, color: '#50aae0' },
  { label: '新增粉丝', pct: 44, color: '#ee60b0' },
];

export default function ProfileSidebar() {
  return (
    <aside className="space-y-6 pt-2">

      {/* Profile */}
      <div>
        {/* Cover strip */}
        <div className="h-14 rounded-2xl mb-3" style={{
          background: 'linear-gradient(135deg, rgba(62,200,160,0.38) 0%, rgba(80,165,240,0.32) 50%, rgba(238,96,165,0.32) 100%)',
        }} />

        <div className="flex items-end justify-between -mt-8 mb-3 px-1">
          <div className="story-ring">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold"
              style={{ background: 'rgba(155,110,240,0.40)', color: '#2a0868' }}>我</div>
          </div>
          <button className="p-1.5 rounded-lg hover:bg-white/40 transition-colors" style={{ color: '#a898c8', background: 'none', border: 'none', cursor: 'pointer' }}>
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="px-1">
          <h2 className="text-sm font-bold mb-0.5" style={{ color: '#1e1a38', letterSpacing: '-0.02em' }}>陈晓明</h2>
          <p className="text-xs mb-1" style={{ color: '#a898c8' }}>@chenxiaoming</p>
          <p className="text-xs leading-relaxed mb-3" style={{ color: '#5a5080' }}>热爱生活 ✨ 摄影师 📷 旅行者 🌍</p>

          <div className="space-y-1 mb-3">
            {[
              { icon: MapPin,   text: '上海，中国' },
              { icon: Link,     text: 'portfolio.design' },
              { icon: Calendar, text: '2022年3月加入' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-[11px]" style={{ color: '#a898c8' }}>
                <Icon className="w-3 h-3 flex-shrink-0" /><span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mb-3 py-2" style={{ borderTop: '1px solid rgba(140,110,220,0.10)', borderBottom: '1px solid rgba(140,110,220,0.10)' }}>
            {[['248','帖子'],['12.4K','粉丝'],['386','关注']].map(([n, l]) => (
              <div key={l} className="text-center flex-1">
                <div className="text-sm font-bold" style={{ color: '#1e1a38' }}>{n}</div>
                <div className="text-[10px]" style={{ color: '#a898c8' }}>{l}</div>
              </div>
            ))}
          </div>

          <button className="pill-btn pill-btn-primary w-full">编辑资料</button>
        </div>
      </div>

      {/* Divider */}
      <hr className="feed-divider" />

      {/* Photos */}
      <div className="px-1">
        <div className="flex items-center justify-between mb-2">
          <span className="section-label">相册</span>
          <span className="text-[11px] cursor-pointer" style={{ color: '#3878d0' }}>全部</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {PHOTOS.map((p, i) => (
            <div key={i} className="aspect-square rounded-xl flex items-center justify-center text-xl cursor-pointer hover:opacity-75 transition-opacity"
              style={{ background: p.bg }}>
              {p.emoji}
            </div>
          ))}
        </div>
      </div>

      <hr className="feed-divider" />

      {/* Activity */}
      <div className="px-1">
        <span className="section-label block">本周活跃度</span>
        <div className="space-y-3">
          {ACTIVITY.map(({ label, pct, color }) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] mb-1" style={{ color: '#8878b8' }}>
                <span>{label}</span><span style={{ color }}>{pct}%</span>
              </div>
              <div className="h-1 rounded-full" style={{ background: 'rgba(140,110,220,0.10)' }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
