import { Settings } from 'lucide-react';

export default function ProfileSidebar() {
  return (
    <aside style={{ paddingTop: 8 }}>

      {/* Cover + avatar */}
      <div style={{ height: 52, borderRadius: 14, background: 'linear-gradient(135deg, rgba(108,92,231,0.18), rgba(62,200,160,0.14))', marginBottom: 8 }} />

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: -28, marginBottom: 10, padding: '0 2px' }}>
        <div className="s-ring">
          <div style={{ width: 44, height: 44, borderRadius: 9999, background: 'rgba(108,92,231,0.14)', color: '#4a3ab0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>我</div>
        </div>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c0b8d8', padding: 4 }}>
          <Settings size={15} />
        </button>
      </div>

      <div style={{ padding: '0 2px', marginBottom: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#111118', letterSpacing: '-0.02em', marginBottom: 2 }}>陈晓明</div>
        <div style={{ fontSize: 12, color: '#b0a8c8', marginBottom: 6 }}>@chenxiaoming</div>
        <div style={{ fontSize: 12, color: '#6a6090', lineHeight: 1.5 }}>热爱生活 ✨ 摄影师 📷 旅行者 🌍</div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 14, padding: '10px 0', borderTop: '1px solid rgba(100,80,200,0.07)', borderBottom: '1px solid rgba(100,80,200,0.07)' }}>
        {[['248','帖子'],['12.4K','粉丝'],['386','关注']].map(([n, l]) => (
          <div key={l} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#111118', letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ fontSize: 11, color: '#b0a8c8' }}>{l}</div>
          </div>
        ))}
      </div>

      <button className="btn-accent" style={{ width: '100%', padding: '7px 0', fontSize: 12 }}>编辑资料</button>
    </aside>
  );
}
