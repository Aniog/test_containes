import { useState } from 'react';
import { MapPin, Link, Calendar, Settings } from 'lucide-react';

const PHOTOS = ['🌸','🌊','🌅','🌿','🌺','✨'];

const ACTIVITY = [
  { label: '帖子浏览', pct: 82 },
  { label: '互动次数', pct: 65 },
  { label: '新增粉丝', pct: 44 },
];

export default function ProfileSidebar() {
  const [following, setFollowing] = useState(false);

  return (
    <aside className="space-y-3">

      {/* Profile card */}
      <div className="lg-card rounded-2xl overflow-hidden">
        {/* Cover */}
        <div className="h-16 relative" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.10) 100%)',
          }} />
        </div>

        <div className="px-4 pb-4">
          {/* Avatar */}
          <div className="flex items-end justify-between -mt-6 mb-3">
            <div className="story-ring">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold"
                style={{ background: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.75)' }}
              >
                我
              </div>
            </div>
            <button className="lg-btn-ghost p-1.5 rounded-lg">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>

          <h2 className="text-sm font-semibold mb-0.5" style={{ color: 'rgba(255,255,255,0.88)', letterSpacing: '-0.01em' }}>陈晓明</h2>
          <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>@chenxiaoming</p>
          <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>热爱生活 ✨ 摄影师 📷 旅行者 🌍</p>

          <div className="space-y-1 mb-3">
            {[
              { icon: MapPin, text: '上海，中国' },
              { icon: Link,   text: 'portfolio.design' },
              { icon: Calendar, text: '2022年3月加入' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-[11px]" style={{ color: 'rgba(255,255,255,0.32)' }}>
                <Icon className="w-3 h-3 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-3 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {[['248','帖子'],['12.4K','粉丝'],['386','关注']].map(([n, l]) => (
              <div key={l} className="text-center flex-1">
                <div className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>{n}</div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.30)' }}>{l}</div>
              </div>
            ))}
          </div>

          <button className="w-full py-1.5 rounded-xl text-xs font-medium lg-btn-primary">
            编辑资料
          </button>
        </div>
      </div>

      {/* Photo grid */}
      <div className="lg-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.60)' }}>我的相册</span>
          <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>全部</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg flex items-center justify-center text-xl cursor-pointer transition-opacity hover:opacity-70"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="lg-card rounded-2xl p-4">
        <span className="text-xs font-medium block mb-3" style={{ color: 'rgba(255,255,255,0.60)' }}>本周活跃度</span>
        <div className="space-y-2.5">
          {ACTIVITY.map(({ label, pct }) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <span>{label}</span>
                <span>{pct}%</span>
              </div>
              <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: 'rgba(255,255,255,0.22)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
