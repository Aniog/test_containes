import { useState } from 'react';
import { Plus } from 'lucide-react';

const STORIES = [
  { id: 0, name: '我的',  grad: 'from-violet-500 to-pink-500',  me: true },
  { id: 1, name: '晓雨',  grad: 'from-sky-400 to-blue-500' },
  { id: 2, name: '阿明',  grad: 'from-orange-400 to-rose-500' },
  { id: 3, name: '小林',  grad: 'from-emerald-400 to-teal-500', seen: true },
  { id: 4, name: '思思',  grad: 'from-purple-400 to-indigo-500' },
  { id: 5, name: '大伟',  grad: 'from-amber-400 to-orange-500', seen: true },
  { id: 6, name: '欣欣',  grad: 'from-pink-400 to-rose-500' },
  { id: 7, name: '子轩',  grad: 'from-cyan-400 to-sky-500' },
];

export default function Stories() {
  const [seen, setSeen] = useState(new Set([3, 5]));

  return (
    <div className="lg-card rounded-2xl p-3">
      <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {STORIES.map((s) => (
          <button
            key={s.id}
            onClick={() => setSeen(p => new Set([...p, s.id]))}
            className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
          >
            {s.me ? (
              <div className="relative">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${s.grad} flex items-center justify-center text-white font-bold text-lg`}>
                  我
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 lg-btn-primary rounded-full flex items-center justify-center border border-white/20">
                  <Plus className="w-3 h-3" />
                </span>
              </div>
            ) : (
              <div className={seen.has(s.id) ? 'story-ring-seen' : 'story-ring'}>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.grad} flex items-center justify-center text-white font-semibold text-sm`}>
                  {s.name[0]}
                </div>
              </div>
            )}
            <span className="text-white/55 text-[11px] w-14 text-center truncate group-hover:text-white/80 transition-colors">
              {s.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}