import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Bell, Bookmark, User, PenSquare, X, Image } from 'lucide-react';
import { currentUser } from '../data/mockData';

const navItems = [
  { icon: Home, label: '首页', path: '/' },
  { icon: Compass, label: '探索', path: '/explore' },
  { icon: Bell, label: '通知', path: '/notifications' },
  { icon: Bookmark, label: '收藏', path: '/bookmarks' },
  { icon: User, label: '我的', path: '/profile' },
];

export default function Sidebar() {
  const location = useLocation();
  const [showCompose, setShowCompose] = useState(false);
  const [draft, setDraft] = useState('');

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-60 flex-col py-6 px-4 z-40 glass-strong">
        {/* Logo */}
        <div className="mb-8 px-2">
          <span className="text-2xl font-bold tracking-tight text-white">Nexus</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mt-1 rounded-full" />
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1">
          {navItems.map(({ icon: Icon, label, path }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-white/15 text-white shadow-sm'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Compose */}
        <button
          onClick={() => setShowCompose(true)}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white mb-5 transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
        >
          <PenSquare size={15} />
          发布动态
        </button>

        {/* User */}
        <Link to="/profile" className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/10 transition-colors">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{currentUser.name}</p>
            <p className="text-xs text-white/40 truncate">@{currentUser.username}</p>
          </div>
        </Link>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around px-2 py-2 z-40 glass-strong">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                active ? 'text-white' : 'text-white/40'
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
              <span className="text-[10px]">{label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => setShowCompose(true)}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-white/40 hover:text-white transition-colors"
        >
          <PenSquare size={20} strokeWidth={1.8} />
          <span className="text-[10px]">发布</span>
        </button>
      </nav>

      {/* Compose Modal */}
      {showCompose && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setShowCompose(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl p-6 glass-strong"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-base font-semibold text-white">发布动态</span>
              <button onClick={() => setShowCompose(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="flex gap-3">
              <img src={currentUser.avatar} alt="" className="w-9 h-9 rounded-full bg-white/10 flex-shrink-0" />
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="分享你的想法..."
                className="flex-1 resize-none text-sm text-white placeholder-white/30 outline-none min-h-[100px] bg-transparent"
                autoFocus
              />
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button className="text-white/40 hover:text-purple-400 transition-colors">
                  <Image size={18} />
                </button>
                <span className="text-xs text-white/30">{draft.length} / 280</span>
              </div>
              <button
                onClick={() => { setDraft(''); setShowCompose(false); }}
                disabled={!draft.trim()}
                className="px-5 py-1.5 rounded-lg text-sm font-semibold text-white disabled:opacity-30 transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
              >
                发布
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
