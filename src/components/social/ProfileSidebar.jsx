import { useState } from 'react';
import { MapPin, Link, Calendar, Settings } from 'lucide-react';

const PHOTOS = [
  { emoji: '🌸', bg: 'rgba(240,190,210,0.30)' },
  { emoji: '🌊', bg: 'rgba(180,210,240,0.30)' },
  { emoji: '🌅', bg: 'rgba(250,220,180,0.30)' },
  { emoji: '🌿', bg: 'rgba(168,220,200,0.30)' },
  { emoji: '🌺', bg: 'rgba(240,190,210,0.30)' },
  { emoji: '✨', bg: 'rgba(200,185,240,0.30)' },
];

const ACTIVITY = [
  { label: '帖子浏览', pct: 82, color: 'rgba(134,210,185,0.70)' },
  { label: '互动次数', pct: 65, color: 'rgba(160,190,230,0.70)' },
  { label: '新增粉丝', pct: 44, color: 'rgba(240,190,210,0.80)' },
];

export default function ProfileSidebar() {
  return (
    <aside className="space-y-3">

      {/* Profile card */}
      <div className="lg-card rounded-2xl overflow-hidden">
        {/* Cover */}
        <div className="h-16 relative" style={{
          background: 'linear-gradient(135deg, rgba(168,220,200,0.40) 0%, rgba(180,210,240,0.35) 50%, rgba(240,190,210,0.35) 100%)',
        }}>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.20) 100%)',
          }} />
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-end justify-between -mt-6 mb-3">
            <div className="story-ring">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold"
                style={{ background: 'rgba(200,185,240,0.50)', color: '#4a3880' }}
              >
                我
              </div>
            </div>
            <button className="lg-btn-ghost p-1.5 rounded-lg">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>

          <h2 className="text-sm font-semibold mb-0.5" style={{ color: '#2a2640', letterSpacing: '-0.01em' }}>陈晓明</h2>
          <p className="text-xs mb-1" style={{ color: '#a09ac0' }}>@chenxiaoming</p>
          <p className="text-xs leading-relaxed mb-3" style={{ color: '#6a6490' }}>热爱生活 ✨ 摄影师 📷 旅行者 🌍</p>

          <div className="space-y-1 mb-3">
            {[
              { icon: MapPin,    text: '上海，中国' },
              { icon: Link,      text: 'portfolio.design' },
              { icon: Calendar,  text: '2022年3月加入' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-[11px]" style={{ color: '#a09ac0' }}>
                <Icon className="w-3 h-3 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-3 py-2" style={{ borderTop: '1px solid rgba(160,140,220,0.10)', borderBottom: '1px solid rgba(160,140,220,0.10)' }}>
            {[['248','帖子'],['12.4K','粉丝'],['386','关注']].map(([n, l]) => (
              <div key={l} className="text-center flex-1">
                <div className="text-sm font-semibold" style={{ color: '#2a2640' }}>{n}</div>
                <div className="text-[10px]" style={{ color: '#a09ac0' }}>{l}</div>
              </div>
            ))}
          </div>

          <button className="w-full py-1.5 rounded-xl text-xs lg-btn-primary">
            编辑资料
          </button>
        </div>
      </div>

      {/* Photo grid */}
      <div className="lg-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold" style={{ color: '#4a4468' }}>我的相册</span>
          <span className="text-[11px]" style={{ color: '#a09ac0' }}>全部</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl flex items-center justify-center text-xl cursor-pointer transition-opacity hover:opacity-75"
              style={{ background: p.bg, border: '1px solid rgba(255,255,255,0.70)' }}
            >
              {p.emoji}
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="lg-card rounded-2xl p-4">
        <span className="text-xs font-semibold block mb-3" style={{ color: '#4a4468' }}>本周活跃度</span>
        <div className="space-y-2.5">
          {ACTIVITY.map(({ label, pct, color }) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] mb-1" style={{ color: '#8a84a8' }}>
                <span>{label}</span>
                <span>{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(160,140,220,0.12)' }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
