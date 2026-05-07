import { useState } from 'react';
import { TrendingUp, Hash, UserPlus } from 'lucide-react';

const TRENDING = [
  { tag: '城市摄影', posts: '12.4K', color: 'text-violet-300' },
  { tag: '旅行日记', posts: '8.7K',  color: 'text-pink-300' },
  { tag: '美食探店', posts: '6.2K',  color: 'text-amber-300' },
  { tag: '生活方式', posts: '19.1K', color: 'text-cyan-300' },
  { tag: '创意设计', posts: '4.5K',  color: 'text-green-300' },
];

const SUGGESTIONS = [
  { name: '林思远', handle: '@linsiyuan', followers: '8.2K',  grad: 'from-purple-400 to-indigo-500' },
  { name: '王晓晓', handle: '@wangxx',    followers: '15.6K', grad: 'from-pink-400 to-rose-500' },
  { name: '张大伟', handle: '@zhangdw',   followers: '3.1K',  grad: 'from-amber-400 to-orange-500' },
  { name: '李欣欣', handle: '@lixinxin',  followers: '22.8K', grad: 'from-teal-400 to-cyan-500' },
];

export default function RightSidebar() {
  const [followed, setFollowed] = useState(new Set());

  const toggle = (name) => setFollowed(p => {
    const n = new Set(p);
    n.has(name) ? n.delete(name) : n.add(name);
    return n;
  });

  return (
    <div className="space-y-3">

      {/* Trending */}
      <div className="lg-card rounded-2xl p-3">
        <div className="flex items-center gap-1.5 mb-2.5">
          <TrendingUp className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-white/75 text-xs font-semibold">热门话题</span>
        </div>
        <div className="space-y-0.5">
          {TRENDING.map((t, i) => (
            <div key={t.tag} className="flex items-center justify-between px-2 py-1.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
              <div className="flex items-center gap-2">
                <span className="text-white/25 text-xs font-bold w-3">{i+1}</span>
                <div>
                  <div className={`text-xs font-semibold ${t.color} group-hover:text-white transition-colors`}>#{t.tag}</div>
                  <div className="text-white/30 text-[10px]">{t.posts} 帖子</div>
                </div>
              </div>
              <Hash className="w-3 h-3 text-white/15 group-hover:text-white/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="lg-card rounded-2xl p-3">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <UserPlus className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-white/75 text-xs font-semibold">推荐关注</span>
          </div>
          <span className="text-violet-300 text-[11px] cursor-pointer hover:text-pink-300 transition-colors">更多</span>
        </div>
        <div className="space-y-2.5">
          {SUGGESTIONS.map((u) => (
            <div key={u.name} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${u.grad} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {u.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/85 text-xs font-semibold truncate">{u.name}</p>
                <p className="text-white/35 text-[10px]">{u.followers} 粉丝</p>
              </div>
              <button
                onClick={() => toggle(u.name)}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-all flex-shrink-0 ${
                  followed.has(u.name) ? 'lg-btn-ghost text-white/50' : 'lg-btn-primary'
                }`}
              >
                {followed.has(u.name) ? '已关注' : '关注'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Messages preview */}
      <div className="lg-card rounded-2xl p-3">
        <span className="text-white/75 text-xs font-semibold block mb-2.5">最近消息</span>
        <div className="space-y-2">
          {[
            { name: '晓雨', msg: '今天的照片太棒了！', time: '2m', grad: 'from-sky-400 to-blue-500', unread: 2 },
            { name: '阿明', msg: '周末一起去爬山吗？', time: '1h', grad: 'from-orange-400 to-rose-500' },
            { name: '小林', msg: '已发送图片', time: '3h', grad: 'from-emerald-400 to-teal-500', unread: 1 },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-2 cursor-pointer group">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${m.grad} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {m.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-xs font-semibold group-hover:text-white transition-colors">{m.name}</span>
                  <span className="text-white/25 text-[10px]">{m.time}</span>
                </div>
                <p className="text-white/38 text-[11px] truncate">{m.msg}</p>
              </div>
              {m.unread && (
                <span className="w-4 h-4 rounded-full bg-violet-500 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                  {m.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-white/15 text-[10px] px-1">© 2026 Lumina · 隐私 · 条款</p>
    </div>
  );
}