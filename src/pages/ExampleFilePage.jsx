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
        background: 'rgba(190, 200, 235, 0.45)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        /* paddingLeft leaves room for the logo (logo is ~11vw wide, banner starts at 20vw, logo at 19vw → gap ≈ 10vw inside banner) */
        paddingLeft: '16%',
        paddingRight: '2%',
      }}>
        {/* Text block — fit-content width so .com right-aligns to ExampleFile */}
        <div style={{ width: 'fit-content' }}>
          <div style={{
            fontSize: 'clamp(40px, 7.8vw, 124px)',
            fontWeight: 800,
            color: '#111111',
            letterSpacing: '-2px',
            fontFamily: 'Inter, Arial, sans-serif',
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}>
            ExampleFile
          </div>
          <div style={{
            fontSize: 'clamp(32px, 6.2vw, 100px)',
            fontWeight: 700,
            color: '#111111',
            letterSpacing: '-1px',
            fontFamily: 'Inter, Arial, sans-serif',
            lineHeight: 1,
            textAlign: 'right',
            marginTop: 2,
          }}>
            .com
          </div>
        </div>
      </div>

      {/* ── Logo icon — overlapping banner left edge ── */}
      <div className="absolute" style={{
        top: '50%',
        left: 'calc(20% - 1.5%)',
        transform: 'translateY(-54%)',
        width: 'clamp(80px, 11vw, 175px)',
        height: 'clamp(90px, 13vw, 205px)',
        zIndex: 10,
      }}>
        <svg width="100%" height="100%" viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="whiteTriClip">
              <polygon points="0,5 60,5 30,125" />
            </clipPath>
            <clipPath id="greenTriClip">
              <polygon points="40,5 100,5 70,125" />
            </clipPath>
          </defs>
          {/* Purple/blue back triangle */}
          <polygon points="20,5 80,5 50,125" fill="#5a5ec8" opacity="0.85" />
          {/* White left triangle */}
          <polygon points="0,5 60,5 30,125" fill="white" opacity="0.88" />
          {/* Diagonal stripes "/" direction on white triangle */}
          <g clipPath="url(#whiteTriClip)">
            <line x1="60"  y1="0"   x2="-15" y2="130" stroke="#b8bfe8" strokeWidth="8" />
            <line x1="78"  y1="0"   x2="3"   y2="130" stroke="#b8bfe8" strokeWidth="8" />
            <line x1="96"  y1="0"   x2="21"  y2="130" stroke="#b8bfe8" strokeWidth="8" />
            <line x1="114" y1="0"   x2="39"  y2="130" stroke="#b8bfe8" strokeWidth="8" />
          </g>
          {/* Green front triangle */}
          <polygon points="40,5 100,5 70,125" fill="#22c55e" />
          {/* Subtle white stripes on green */}
          <g clipPath="url(#greenTriClip)" opacity="0.18">
            <line x1="100" y1="0"   x2="25"  y2="130" stroke="white" strokeWidth="8" />
            <line x1="118" y1="0"   x2="43"  y2="130" stroke="white" strokeWidth="8" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ExampleFilePage;
