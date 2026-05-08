import { useState } from 'react';
import { Plus } from 'lucide-react';

const STORIES = [
  { name: '我的',  initial: '我', seen: false, isMe: true,  tint: { bg: 'rgba(200,185,240,0.45)', color: '#4a3880' } },
  { name: '晓雨',  initial: '晓', seen: false, tint: { bg: 'rgba(240,190,210,0.45)', color: '#6a2040' } },
  { name: '阿明',  initial: '阿', seen: false, tint: { bg: 'rgba(168,220,200,0.45)', color: '#1a5a48' } },
  { name: '小林',  initial: '小', seen: true,  tint: { bg: 'rgba(180,210,240,0.45)', color: '#1a3a6a' } },
  { name: '思思',  initial: '思', seen: false, tint: { bg: 'rgba(250,220,180,0.45)', color: '#6a3a10' } },
  { name: '大伟',  initial: '大', seen: true,  tint: { bg: 'rgba(200,230,180,0.45)', color: '#2a4a18' } },
  { name: '欣欣',  initial: '欣', seen: false, tint: { bg: 'rgba(240,190,210,0.45)', color: '#6a2040' } },
  { name: '子轩',  initial: '子', seen: true,  tint: { bg: 'rgba(168,220,200,0.45)', color: '#1a5a48' } },
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
                        background: 'linear-gradient(135deg, rgba(134,210,185,0.90), rgba(160,190,230,0.90))',
                        border: '1.5px solid #f0eeff',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.60)',
                      }}
                    >
                      <Plus className="w-2.5 h-2.5" style={{ color: '#1a4a42' }} />
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[11px] font-medium" style={{ color: '#8a84a8' }}>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
