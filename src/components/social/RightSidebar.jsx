import { useState } from 'react';
import { TrendingUp, UserPlus } from 'lucide-react';

const TRENDING = [
  { rank: 1, tag: '城市摄影', count: '12.4K', color: 'rgba(134,210,185,0.60)' },
  { rank: 2, tag: '旅行日记', count: '8.7K',  color: 'rgba(160,190,230,0.60)' },
  { rank: 3, tag: '美食探店', count: '6.2K',  color: 'rgba(250,220,180,0.70)' },
  { rank: 4, tag: '生活方式', count: '19.1K', color: 'rgba(240,190,210,0.70)' },
  { rank: 5, tag: '创意设计', count: '4.5K',  color: 'rgba(200,185,240,0.70)' },
];

const SUGGESTIONS = [
  { name: '林思远', handle: '@linsiyuan', followers: '8.2K',  tint: { bg: 'rgba(168,220,200,0.40)', color: '#1a5a48' } },
  { name: '王晓晓', handle: '@wangxx',    followers: '15.6K', tint: { bg: 'rgba(240,190,210,0.40)', color: '#6a2040' } },
  { name: '张大伟', handle: '@zhangdw',   followers: '3.1K',  tint: { bg: 'rgba(180,210,240,0.40)', color: '#1a3a6a' } },
  { name: '李欣欣', handle: '@lixx',      followers: '22.8K', tint: { bg: 'rgba(200,185,240,0.40)', color: '#3a2070' } },
];

const MESSAGES = [
  { name: '晓雨', text: '今天的照片太棒了！', time: '2m', unread: 2, tint: { bg: 'rgba(240,190,210,0.40)', color: '#6a2040' } },
  { name: '阿明', text: '周末一起去爬山吗？', time: '1h',            tint: { bg: 'rgba(168,220,200,0.40)', color: '#1a5a48' } },
  { name: '小林', text: '已发送图片',         time: '3h', unread: 1, tint: { bg: 'rgba(180,210,240,0.40)', color: '#1a3a6a' } },
];

export default function RightSidebar() {
  const [followed, setFollowed] = useState({});

  return (
    <aside className="space-y-3">

      {/* Trending */}
      <div className="lg-card rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-3.5 h-3.5" style={{ color: '#a09ac0' }} />
          <span className="text-xs font-semibold" style={{ color: '#4a4468' }}>热门话题</span>
        </div>
        <div className="space-y-2.5">
          {TRENDING.map(({ rank, tag, count, color }) => (
            <div key={tag} className="flex items-center gap-2.5 cursor-pointer group">
              <div
                className="w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{ background: color, color: '#3a3060' }}
              >
                {rank}
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium" style={{ color: '#3d3660' }}>#{tag}</div>
                <div className="text-[10px]" style={{ color: '#a09ac0' }}>{count} 帖子</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="lg-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <UserPlus className="w-3.5 h-3.5" style={{ color: '#a09ac0' }} />
            <span className="text-xs font-semibold" style={{ color: '#4a4468' }}>推荐关注</span>
          </div>
          <span className="text-[11px] cursor-pointer" style={{ color: '#7090c0' }}>更多</span>
        </div>
        <div className="space-y-3">
          {SUGGESTIONS.map(({ name, followers, tint }) => (
            <div key={name} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{ background: tint.bg, color: tint.color }}
                >
                  {name[0]}
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: '#3d3660' }}>{name}</div>
                  <div className="text-[10px]" style={{ color: '#a09ac0' }}>{followers} 粉丝</div>
                </div>
              </div>
              <button
                onClick={() => setFollowed(v => ({ ...v, [name]: !v[name] }))}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all duration-150"
                style={followed[name] ? {
                  background: 'rgba(160,140,220,0.10)',
                  border: '1px solid rgba(160,140,220,0.15)',
                  color: '#a09ac0',
                } : {
                  background: 'linear-gradient(135deg, rgba(134,210,185,0.75), rgba(160,190,230,0.75))',
                  border: '1px solid rgba(255,255,255,0.60)',
                  color: '#1a4a42',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.50)',
                }}
              >
                {followed[name] ? '已关注' : '关注'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="lg-card rounded-2xl p-4">
        <span className="text-xs font-semibold block mb-3" style={{ color: '#4a4468' }}>最近消息</span>
        <div className="space-y-3">
          {MESSAGES.map(({ name, text, time, unread, tint }) => (
            <div key={name} className="flex items-center gap-2.5 cursor-pointer">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                style={{ background: tint.bg, color: tint.color }}
              >
                {name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: '#3d3660' }}>{name}</span>
                  <span className="text-[10px]" style={{ color: '#b0a8c8' }}>{time}</span>
                </div>
                <p className="text-[11px] truncate" style={{ color: '#8a84a8' }}>{text}</p>
              </div>
              {unread && (
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(240,190,210,0.90), rgba(200,185,240,0.90))',
                    color: '#5a2060',
                    border: '1px solid rgba(255,255,255,0.70)',
                  }}
                >
                  {unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-center" style={{ color: '#c0b8d8' }}>© 2026 Lumina · 隐私 · 条款</p>
    </aside>
  );
}
