import { useState } from 'react';
import { TrendingUp, UserPlus } from 'lucide-react';

const TRENDING = [
  { rank: 1, tag: '城市摄影', count: '12.4K', color: '#3ec8a0' },
  { rank: 2, tag: '旅行日记', count: '8.7K',  color: '#50aae0' },
  { rank: 3, tag: '美食探店', count: '6.2K',  color: '#f5b940' },
  { rank: 4, tag: '生活方式', count: '19.1K', color: '#ee60b0' },
  { rank: 5, tag: '创意设计', count: '4.5K',  color: '#9b6ef0' },
];

const SUGGESTIONS = [
  { name: '林思远', followers: '8.2K',  tint: { bg: 'rgba(62,200,160,0.32)',  color: '#0a3828' } },
  { name: '王晓晓', followers: '15.6K', tint: { bg: 'rgba(238,96,165,0.30)',  color: '#5a0830' } },
  { name: '张大伟', followers: '3.1K',  tint: { bg: 'rgba(80,165,240,0.32)',  color: '#0a2858' } },
  { name: '李欣欣', followers: '22.8K', tint: { bg: 'rgba(155,110,240,0.32)', color: '#2a0868' } },
];

const MESSAGES = [
  { name: '晓雨', text: '今天的照片太棒了！', time: '2m', unread: 2, tint: { bg: 'rgba(238,96,165,0.30)',  color: '#5a0830' } },
  { name: '阿明', text: '周末一起去爬山吗？', time: '1h',            tint: { bg: 'rgba(62,200,160,0.32)',  color: '#0a3828' } },
  { name: '小林', text: '已发送图片',         time: '3h', unread: 1, tint: { bg: 'rgba(80,165,240,0.32)',  color: '#0a2858' } },
];

export default function RightSidebar() {
  const [followed, setFollowed] = useState({});

  return (
    <aside className="space-y-6 pt-2">

      {/* Trending */}
      <div>
        <div className="flex items-center gap-1.5 mb-3">
          <TrendingUp className="w-3.5 h-3.5" style={{ color: '#a898c8' }} />
          <span className="section-label" style={{ paddingBottom: 0 }}>热门话题</span>
        </div>
        <div className="space-y-1">
          {TRENDING.map(({ rank, tag, count, color }) => (
            <div key={tag} className="sidebar-row flex items-center gap-2.5">
              <div className="rank-dot" style={{ background: color + '28', color }}>
                {rank}
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold" style={{ color: '#2a2060' }}>#{tag}</div>
                <div className="text-[10px]" style={{ color: '#a898c8' }}>{count} 帖子</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="feed-divider" />

      {/* Suggestions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <UserPlus className="w-3.5 h-3.5" style={{ color: '#a898c8' }} />
            <span className="section-label" style={{ paddingBottom: 0 }}>推荐关注</span>
          </div>
          <span className="text-[11px] cursor-pointer" style={{ color: '#3878d0' }}>更多</span>
        </div>
        <div className="space-y-1">
          {SUGGESTIONS.map(({ name, followers, tint }) => (
            <div key={name} className="sidebar-row flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: tint.bg, color: tint.color }}>
                  {name[0]}
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#2a2060' }}>{name}</div>
                  <div className="text-[10px]" style={{ color: '#a898c8' }}>{followers} 粉丝</div>
                </div>
              </div>
              <button
                onClick={() => setFollowed(v => ({ ...v, [name]: !v[name] }))}
                className={`pill-btn pill-btn-outline ${followed[name] ? 'following' : ''}`}
                style={{ padding: '3px 12px', fontSize: 11 }}
              >
                {followed[name] ? '已关注' : '关注'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <hr className="feed-divider" />

      {/* Messages */}
      <div>
        <span className="section-label block mb-2">最近消息</span>
        <div className="space-y-1">
          {MESSAGES.map(({ name, text, time, unread, tint }) => (
            <div key={name} className="sidebar-row flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: tint.bg, color: tint.color }}>
                {name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: '#2a2060' }}>{name}</span>
                  <span className="text-[10px]" style={{ color: '#c0b8d8' }}>{time}</span>
                </div>
                <p className="text-[11px] truncate" style={{ color: '#8878b8' }}>{text}</p>
              </div>
              {unread && (
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#f060a0,#a060e0)', color: '#fff' }}>
                  {unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-center px-1" style={{ color: '#c0b8d8' }}>© 2026 Lumina · 隐私 · 条款</p>
    </aside>
  );
}
