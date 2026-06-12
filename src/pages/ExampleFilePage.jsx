const ExampleFilePage = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundColor: '#5558c8' }}
    >
      {/* ── Concentric-squares tile pattern ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sq" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
            <rect x="1"  y="1"  width="42" height="42" fill="none" stroke="#6b6fd8" strokeWidth="1.2" rx="3" />
            <rect x="6"  y="6"  width="32" height="32" fill="none" stroke="#6b6fd8" strokeWidth="1"   rx="2" />
            <rect x="11" y="11" width="22" height="22" fill="none" stroke="#6b6fd8" strokeWidth="0.9" rx="1.5" />
            <rect x="16" y="16" width="12" height="12" fill="none" stroke="#6b6fd8" strokeWidth="0.8" rx="1" />
            <rect x="20" y="20" width="4"  height="4"  fill="none" stroke="#6b6fd8" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sq)" />
      </svg>

      {/* ── Purple triangle — top-left ── */}
      <div className="absolute" style={{
        top: 0, left: 0, width: '44%', height: '65%',
        background: '#6600ff',
        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
      }} />

      {/* ── Cyan shape — left with curved bottom-right ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,38 L28,22 L44,38 Q58,62 52,100 L0,100 Z" fill="#00d4f0" />
      </svg>

      {/* ── Orange stripe — far right ── */}
      <div className="absolute top-0 right-0 h-full" style={{ width: '18.5%', background: '#f05500' }} />

      {/* ── Frosted banner ── */}
      <div className="absolute" style={{
        top: '50%',
        left: '20%',
        right: '20%',
        transform: 'translateY(-50%)',
        background: 'rgba(200, 208, 240, 0.48)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        height: '22%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '13%',
        paddingRight: '3%',
      }}>
        {/* Text — "ExampleFile" + ".com" right-aligned to text width */}
        <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontSize: 'clamp(36px, 5vw, 82px)',
            fontWeight: 800,
            color: '#111111',
            letterSpacing: '-1px',
            fontFamily: 'Inter, Arial, sans-serif',
            whiteSpace: 'nowrap',
            display: 'block',
          }}>
            ExampleFile
          </span>
          <span style={{
            fontSize: 'clamp(28px, 3.9vw, 66px)',
            fontWeight: 700,
            color: '#111111',
            letterSpacing: '-0.5px',
            fontFamily: 'Inter, Arial, sans-serif',
            display: 'block',
            textAlign: 'right', width: '100%',
          }}>
            .com
          </span>
        </div>
      </div>

      {/* ── Logo icon — overlapping banner left edge ── */}
      <div className="absolute" style={{
        top: '50%',
        left: 'calc(20% - 1.5%)',
        transform: 'translateY(-52%)',
        width: 'clamp(90px, 12vw, 190px)',
        height: 'clamp(85px, 11.5vw, 175px)',
        zIndex: 10,
      }}>
        <svg width="100%" height="100%" viewBox="0 0 155 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="whiteTriClip">
              <polygon points="0,8 78,8 39,127" />
            </clipPath>
            <clipPath id="greenTriClip">
              <polygon points="48,8 126,8 87,127" />
            </clipPath>
            <filter id="dropshadow">
              <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* Purple/blue back triangle */}
          <polygon points="22,8 100,8 61,127" fill="#5a5ec8" opacity="0.88" />

          {/* White left triangle */}
          <polygon points="0,8 78,8 39,127" fill="white" opacity="0.9" />

          {/* Diagonal stripes on white triangle — going upper-right to lower-left (/ direction) */}
          <g clipPath="url(#whiteTriClip)">
            <line x1="78"  y1="0"   x2="-10" y2="135" stroke="#b0b8e0" strokeWidth="9" />
            <line x1="96"  y1="0"   x2="8"   y2="135" stroke="#b0b8e0" strokeWidth="9" />
            <line x1="114" y1="0"   x2="26"  y2="135" stroke="#b0b8e0" strokeWidth="9" />
            <line x1="132" y1="0"   x2="44"  y2="135" stroke="#b0b8e0" strokeWidth="9" />
            <line x1="150" y1="0"   x2="62"  y2="135" stroke="#b0b8e0" strokeWidth="9" />
          </g>

          {/* Green front triangle */}
          <polygon points="48,8 126,8 87,127" fill="#22c55e" />

          {/* Subtle white stripes on green triangle (/ direction) */}
          <g clipPath="url(#greenTriClip)" opacity="0.2">
            <line x1="126" y1="0"   x2="38"  y2="135" stroke="white" strokeWidth="9" />
            <line x1="144" y1="0"   x2="56"  y2="135" stroke="white" strokeWidth="9" />
            <line x1="162" y1="0"   x2="74"  y2="135" stroke="white" strokeWidth="9" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ExampleFilePage;
