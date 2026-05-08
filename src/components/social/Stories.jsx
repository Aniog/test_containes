import { useState } from 'react';
import { Plus } from 'lucide-react';

const STORIES = [
  { name: '我的', initial: '我', isMe: true, seen: false, tint: { bg: 'rgba(108,92,231,0.14)', color: '#4a3ab0' } },
  { name: '晓雨', initial: '晓', seen: false, tint: { bg: 'rgba(238,96,165,0.14)', color: '#a02060' } },
  { name: '阿明', initial: '阿', seen: false, tint: { bg: 'rgba(62,200,160,0.16)',  color: '#0a5040' } },
  { name: '小林', initial: '小', seen: true,  tint: { bg: 'rgba(80,170,240,0.14)',  color: '#0a3870' } },
  { name: '思思', initial: '思', seen: false, tint: { bg: 'rgba(245,185,60,0.18)',  color: '#6a3800' } },
  { name: '大伟', initial: '大', seen: true,  tint: { bg: 'rgba(80,210,120,0.16)',  color: '#0a4020' } },
  { name: '欣欣', initial: '欣', seen: false, tint: { bg: 'rgba(238,96,165,0.14)', color: '#a02060' } },
];

export default function Stories() {
  const [seen, setSeen] = useState({});

  return (
    <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(100,80,200,0.07)', overflowX: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ display: 'flex', gap: 18, width: 'max-content' }}>
        {STORIES.map(s => {
          const isSeen = s.seen || seen[s.name];
          return (
            <button key={s.name} onClick={() => setSeen(v => ({ ...v, [s.name]: true }))}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 0, opacity: isSeen ? 0.5 : 1, transition: 'opacity 0.15s' }}>
              <div className={isSeen ? 's-ring-seen' : 's-ring'}>
                <div style={{ width: 42, height: 42, borderRadius: 9999, background: s.tint.bg, color: s.tint.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, position: 'relative' }}>
                  {s.initial}
                  {s.isMe && (
                    <span style={{ position: 'absolute', bottom: -1, right: -1, width: 16, height: 16, borderRadius: 9999, background: '#6c5ce7', border: '2px solid #f7f5ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Plus size={9} color="#fff" />
                    </span>
                  )}
                </div>
              </div>
              <span style={{ fontSize: 11, color: '#8878a8', fontWeight: 500 }}>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
