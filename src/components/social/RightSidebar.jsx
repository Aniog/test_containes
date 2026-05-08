import { useState } from 'react';
import { TrendingUp, UserPlus } from 'lucide-react';

const TRENDING = [
  { rank: 1, tag: '城市摄影', count: '12.4K' },
  { rank: 2, tag: '旅行日记', count: '8.7K'  },
  { rank: 3, tag: '美食探店', count: '6.2K'  },
  { rank: 4, tag: '生活方式', count: '19.1K' },
  { rank: 5, tag: '创意设计', count: '4.5K'  },
];

const SUGGESTIONS = [
  { name: '林思远', handle: '@linsiyuan', followers: '8.2K'  },
  { name: '王晓晓', handle: '@wangxx',    followers: '15.6K' },
  { name: '张大伟', handle: '@zhangdw',   followers: '3.1K'  },
  { name: '李欣欣', handle: '@lixx',      followers: '22.8K' },
];

const MESSAGES = [
  { name: '晓雨', text: '今天的照片太棒了！', time: '2m', unread: 2 },
  { name: '阿明', text: '周末一起去爬山吗？', time: '1h' },
  { name: '小林', text: '已发送图片',         time: '3h', unread: 1 },
];

export default function RightSidebar() {
  const [followed, setFollowed] = useState({});

  return (
    <aside className="space-y-3">

      {/* Trending */}
      <div className="lg-card rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.35)' }} />
          <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.60)' }}>热门话题</span>
        </div>
        <div className="space-y-2.5">
          {TRENDING.map(({ rank, tag, count }) => (
            <div key={tag} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] w-4 text-right" style={{ color: 'rgba(255,255,255,0.20)' }}>{rank}</span>
                <div>
                  <div className="text-xs font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.72)' }}>#{tag}</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.28)' }}>{count} 帖子</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="lg-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <UserPlus className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.35)' }} />
            <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.60)' }}>推荐关注</span>
          </div>
          <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>更多</span>
        </div>
        <div className="space-y-3">
          {SUGGESTIONS.map(({ name, handle, followers }) => (
            <div key={name} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}
                >
                  {name[0]}
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.78)' }}>{name}</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.28)' }}>{followers} 粉丝</div>
                </div>
              </div>
              <button
                onClick={() => setFollowed(v => ({ ...v, [name]: !v[name] }))}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all duration-150"
                style={followed[name] ? {
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.40)',
                } : {
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.75)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
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
        <span className="text-xs font-medium block mb-3" style={{ color: 'rgba(255,255,255,0.60)' }}>最近消息</span>
        <div className="space-y-3">
          {MESSAGES.map(({ name, text, time, unread }) => (
            <div key={name} className="flex items-center gap-2.5 cursor-pointer">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}
              >
                {name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{name}</span>
                  <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{time}</span>
                </div>
                <p className="text-[11px] truncate" style={{ color: 'rgba(255,255,255,0.35)' }}>{text}</p>
              </div>
              {unread && (
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-semibold flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.70)' }}
                >
                  {unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-center" style={{ color: 'rgba(255,255,255,0.18)' }}>© 2026 Lumina · 隐私 · 条款</p>
    </aside>
  );
}
