import { Home, Compass, MessageCircle, Bell, User, Plus } from 'lucide-react';

const tabs = [
  { id: 'feed', icon: Home, label: '首页' },
  { id: 'explore', icon: Compass, label: '探索' },
  { id: 'messages', icon: MessageCircle, label: '消息' },
  { id: 'notifications', icon: Bell, label: '通知' },
  { id: 'profile', icon: User, label: '我的' },
];

export default function BottomNav({ active, onChange, unreadMessages, unreadNotifs }) {
  return (
    <nav className="glass-nav fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2">
      {tabs.map((tab, i) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        const badge = tab.id === 'messages' ? unreadMessages : tab.id === 'notifications' ? unreadNotifs : 0;

        if (i === 2) {
          return (
            <div key="fab" className="flex flex-col items-center gap-1">
              <button
                onClick={() => onChange('compose')}
                className="btn-flat btn-primary w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
              >
                <Plus size={22} strokeWidth={2.5} />
              </button>
            </div>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="flex flex-col items-center gap-1 relative px-3 py-1 rounded-xl transition-all duration-200"
            style={{ minWidth: 48 }}
          >
            <div className="relative">
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 1.8}
                style={{
                  color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.5)',
                  filter: isActive ? 'drop-shadow(0 0 6px rgba(167,139,250,0.6))' : 'none',
                  transition: 'all 0.2s ease',
                }}
              />
              {badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center" style={{ fontSize: 9 }}>
                  {badge > 9 ? '9+' : badge}
                </span>
              )}
            </div>
            <span style={{
              fontSize: 10,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.2s ease',
            }}>
              {tab.label}
            </span>
            {isActive && (
              <div style={{
                position: 'absolute',
                bottom: -4,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: '#a78bfa',
                boxShadow: '0 0 6px #a78bfa',
              }} />
            )}
          </button>
        );
      })}
    </nav>
  );
}
