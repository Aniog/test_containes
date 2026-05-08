import { useState } from 'react';
import { Plus } from 'lucide-react';

const STORIES = [
  { name: '我的', initial: '我', seen: false, isMe: true, tint: { bg: 'rgba(155,110,240,0.38)', color: '#2a0868' } },
  { name: '晓雨', initial: '晓', seen: false, tint: { bg: 'rgba(238,96,165,0.35)',  color: '#5a0830' } },
  { name: '阿明', initial: '阿', seen: false, tint: { bg: 'rgba(62,200,160,0.38)',  color: '#0a3828' } },
  { name: '小林', initial: '小', seen: true,  tint: { bg: 'rgba(80,165,240,0.38)',  color: '#0a2858' } },
  { name: '思思', initial: '思', seen: false, tint: { bg: 'rgba(245,185,60,0.40)',  color: '#5a2800' } },
  { name: '大伟', initial: '大', seen: true,  tint: { bg: 'rgba(80,210,120,0.38)',  color: '#0a3818' } },
  { name: '欣欣', initial: '欣', seen: false, tint: { bg: 'rgba(238,96,165,0.35)',  color: '#5a0830' } },
  { name: '子轩', initial: '子', seen: true,  tint: { bg: 'rgba(62,200,160,0.38)',  color: '#0a3828' } },
];

export default function Stories() {
  const [seen, setSeen] = useState({});

  return (
    <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(140,110,220,0.10)' }}>
      <div className="flex gap-5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {STORIES.map((s) => {
          const isSeen = s.seen || seen[s.name];
          return (
            <button
              key={s.name}
              onClick={() => setSeen(v => ({ ...v, [s.name]: true }))}
              className="flex flex-col items-center gap-1.5 flex-shrink-0 hover:opacity-75 transition-opacity"
            >
              <div className={isSeen ? 'story-ring-seen' : 'story-ring'}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold relative"
                  style={{ background: s.tint.bg, color: s.tint.color }}>
                  {s.initial}
                  {s.isMe && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,#3ec8a0,#50aae0)', border: '1.5px solid #f5f0ff' }}>
                      <Plus className="w-2.5 h-2.5" style={{ color: '#fff' }} />
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[11px] font-medium" style={{ color: isSeen ? '#b0a8d0' : '#6858a0' }}>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
