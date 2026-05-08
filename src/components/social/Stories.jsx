import { useState } from 'react';
import { Plus } from 'lucide-react';

const STORIES = [
  { name: '我的',  initial: '我', seen: false, isMe: true },
  { name: '晓雨',  initial: '晓', seen: false },
  { name: '阿明',  initial: '阿', seen: false },
  { name: '小林',  initial: '小', seen: true  },
  { name: '思思',  initial: '思', seen: false },
  { name: '大伟',  initial: '大', seen: true  },
  { name: '欣欣',  initial: '欣', seen: false },
  { name: '子轩',  initial: '子', seen: true  },
];

export default function Stories() {
  const [seen, setSeen] = useState({});

  return (
    <div className="lg-card rounded-2xl px-4 py-3">
      <div className="flex gap-4 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {STORIES.map((s, i) => {
          const isSeen = s.seen || seen[s.name];
          return (
            <button
              key={s.name}
              onClick={() => setSeen(v => ({ ...v, [s.name]: true }))}
              className="flex flex-col items-center gap-1.5 flex-shrink-0 transition-opacity duration-150 hover:opacity-75"
            >
              <div className={isSeen ? 'story-ring-seen' : 'story-ring'}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold relative"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.70)' }}
                >
                  {s.initial}
                  {s.isMe && (
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: '1.5px solid #0a0a0f',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20)',
                      }}
                    >
                      <Plus className="w-2.5 h-2.5" style={{ color: 'rgba(255,255,255,0.75)' }} />
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.40)' }}>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
