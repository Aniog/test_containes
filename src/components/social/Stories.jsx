import { useState } from 'react';
import { Plus } from 'lucide-react';

const STORIES = [
  { name: '我的', initial: '我', seen: false, isMe: true, tint: { bg: 'rgba(155,110,240,0.38)', color: '#2a0868' } },
  { name: '晓雨', initial: '晓', seen: false, tint: { bg: 'rgba(238,100,165,0.35)', color: '#5a0830' } },
  { name: '阿明', initial: '阿', seen: false, tint: { bg: 'rgba(60,200,160,0.38)',  color: '#0a3828' } },
  { name: '小林', initial: '小', seen: true,  tint: { bg: 'rgba(80,165,240,0.38)',  color: '#0a2858' } },
  { name: '思思', initial: '思', seen: false, tint: { bg: 'rgba(245,185,60,0.38)',  color: '#5a2800' } },
  { name: '大伟', initial: '大', seen: true,  tint: { bg: 'rgba(80,210,120,0.38)',  color: '#0a3818' } },
  { name: '欣欣', initial: '欣', seen: false, tint: { bg: 'rgba(238,100,165,0.35)', color: '#5a0830' } },
  { name: '子轩', initial: '子', seen: true,  tint: { bg: 'rgba(60,200,160,0.38)',  color: '#0a3828' } },
];

export default function Stories() {
  const [seen, setSeen] = useState({});

  return (
    <div className="lg-card rounded-2xl px-4 py-3">
      <div className="flex gap-4 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {STORIES.map((s) => {
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
                  style={{ background: s.tint.bg, color: s.tint.color }}
                >
                  {s.initial}
                  {s.isMe && (
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(60,200,160,0.95), rgba(80,170,230,0.95))',
                        border: '1.5px solid #ebe5ff',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.60), 0 1px 4px rgba(60,200,160,0.40)',
                      }}
                    >
                      <Plus className="w-2.5 h-2.5" style={{ color: '#0a3828' }} />
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[11px] font-medium" style={{ color: '#7868a8' }}>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
