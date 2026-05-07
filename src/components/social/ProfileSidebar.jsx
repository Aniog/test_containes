import { useState } from 'react';
import { MapPin, Link2, CalendarDays, Edit3, Grid3X3 } from 'lucide-react';

const PHOTOS = [
  { bg: 'from-violet-700 to-purple-800', emoji: '🌸' },
  { bg: 'from-sky-600 to-blue-800',      emoji: '🌊' },
  { bg: 'from-orange-500 to-rose-700',   emoji: '🌅' },
  { bg: 'from-emerald-600 to-teal-800',  emoji: '🌿' },
  { bg: 'from-pink-500 to-fuchsia-700',  emoji: '🌺' },
  { bg: 'from-indigo-600 to-violet-800', emoji: '✨' },
];

export default function ProfileSidebar() {
  return (
    <div className="space-y-3">

      {/* Profile card */}
      <div className="lg-card rounded-2xl overflow-hidden">
        <div className="h-[68px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 relative overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-pink-300/20 blur-3xl" />
        </div>

        <div className="px-4 pb-4">
          <div className="relative -mt-7 mb-2 inline-block">
            <div className="story-ring">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold border-2 border-white/10">
                我
              </div>
            </div>
            <button className="absolute -bottom-0.5 -right-0.5 w-5 h-5 lg-btn-primary rounded-full flex items-center justify-center">
              <Edit3 className="w-2.5 h-2.5" />
            </button>
          </div>

          <h2 className="text-white font-bold text-sm leading-tight">陈晓明</h2>
          <p className="text-white/40 text-xs mb-2">@chenxiaoming</p>
          <p className="text-white/65 text-xs leading-relaxed mb-3">热爱生活 ✨ 摄影师 📷 旅行者 🌍</p>

          <div className="space-y-1 mb-3">
            {[
              { icon: MapPin,       text: '上海，中国',       color: 'text-violet-400' },
              { icon: Link2,        text: 'portfolio.design', color: 'text-sky-400' },
              { icon: CalendarDays, text: '2022年3月加入',    color: 'text-pink-400' },
            ].map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex items-center gap-1.5 text-white/45 text-xs">
                <Icon className={`w-3 h-3 ${color}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {[['248','帖子'],['12.4K','粉丝'],['386','关注']].map(([v,l]) => (
              <div key={l} className="lg-pill rounded-xl py-2 text-center">
                <div className="text-white font-bold text-sm leading-none">{v}</div>
                <div className="text-white/38 text-[10px] mt-0.5">{l}</div>
              </div>
            ))}
          </div>

          <button className="w-full lg-btn-primary rounded-xl py-2 text-xs font-semibold">
            编辑资料
          </button>
        </div>
      </div>

      {/* Photo grid */}
      <div className="lg-card rounded-2xl p-3">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <Grid3X3 className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-white/75 text-xs font-semibold">我的相册</span>
          </div>
          <span className="text-violet-300 text-[11px] cursor-pointer hover:text-pink-300 transition-colors">全部</span>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {PHOTOS.map((p, i) => (
            <div key={i} className={`aspect-square rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity text-xl`}>
              {p.emoji}
            </div>
          ))}
        </div>
      </div>

      {/* Activity bars */}
      <div className="lg-card rounded-2xl p-3">
        <span className="text-white/75 text-xs font-semibold block mb-2.5">本周活跃度</span>
        <div className="space-y-2">
          {[
            { label: '帖子浏览', pct: 82, color: 'from-violet-500 to-purple-400' },
            { label: '互动次数', pct: 65, color: 'from-pink-500 to-rose-400' },
            { label: '新增粉丝', pct: 44, color: 'from-sky-500 to-blue-400' },
          ].map(({ label, pct, color }) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-white/45">{label}</span>
                <span className="text-white/65 font-medium">{pct}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/8 overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}