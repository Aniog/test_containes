const ExampleFilePage = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundColor: '#5558c8' }}
    >
      {/* Concentric-squares SVG tile pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
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

      {/* Purple triangle — top-left */}
      <div
        className="absolute"
        style={{
          top: 0, left: 0,
          width: '44%', height: '65%',
          background: '#6600ff',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* Cyan shape — left, with curved bottom-right edge */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path d="M0,38 L28,22 L44,38 Q58,62 52,100 L0,100 Z" fill="#00d4f0" />
      </svg>

      {/* Orange stripe — far right */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{ width: '18.5%', background: '#f05500' }}
      />

      {/* Wide frosted banner */}
      <div
        className="absolute"
        style={{
          top: '50%',
          left: '18%',
          right: '20%',
          transform: 'translateY(-50%)',
          background: 'rgba(210, 215, 245, 0.52)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '16px 36px 16px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        {/* Logo icon — overlapping DOWNWARD-pointing triangles with white diagonal stripes */}
        <div className="flex-shrink-0" style={{ width: 140, height: 120 }}>
          <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Clip to the combined downward-triangle area */}
              <clipPath id="logoClip">
                <polygon points="0,5 140,5 140,115 70,115 0,115" />
              </clipPath>
            </defs>

            {/* Back purple/indigo downward triangle (left-offset) */}
            <polygon points="5,8 75,8 40,108" fill="#5558c8" opacity="0.85" />

            {/* Front green downward triangle (right-offset) */}
            <polygon points="35,8 105,8 70,108" fill="#22c55e" />

            {/* White diagonal stripes — clipped to the logo area */}
            <g clipPath="url(#logoClip)">
              <line x1="-5"  y1="0"   x2="55"  y2="125" stroke="white" strokeWidth="13" strokeLinecap="round" />
              <line x1="15"  y1="-5"  x2="75"  y2="120" stroke="white" strokeWidth="13" strokeLinecap="round" />
              <line x1="35"  y1="-10" x2="95"  y2="115" stroke="white" strokeWidth="13" strokeLinecap="round" />
              <line x1="55"  y1="-15" x2="115" y2="110" stroke="white" strokeWidth="13" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* Text block — "ExampleFile" then ".com" right-aligned */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span
            style={{
              fontSize: 'clamp(40px, 5.4vw, 86px)',
              fontWeight: 800,
              color: '#111111',
              letterSpacing: '-1.5px',
              fontFamily: 'Inter, Arial, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            ExampleFile
          </span>
          <span
            style={{
              fontSize: 'clamp(32px, 4.3vw, 70px)',
              fontWeight: 700,
              color: '#111111',
              letterSpacing: '-0.5px',
              fontFamily: 'Inter, Arial, sans-serif',
              textAlign: 'right',
              marginTop: 2,
            }}
          >
            .com
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExampleFilePage;
