const ExampleFilePage = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        // Blue/indigo base with concentric-squares repeating pattern
        backgroundColor: '#5a5fc8',
        backgroundImage: `
          repeating-linear-gradient(#5a5fc8 0px, #5a5fc8 1px, transparent 1px, transparent 100%),
          repeating-linear-gradient(90deg, #5a5fc8 0px, #5a5fc8 1px, transparent 1px, transparent 100%)
        `,
      }}
    >
      {/* Concentric-squares SVG pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.35 }}
      >
        <defs>
          <pattern id="squares" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            {/* Concentric squares */}
            <rect x="1" y="1" width="46" height="46" fill="none" stroke="#7a7fe8" strokeWidth="1" rx="3" />
            <rect x="6" y="6" width="36" height="36" fill="none" stroke="#7a7fe8" strokeWidth="1" rx="2" />
            <rect x="11" y="11" width="26" height="26" fill="none" stroke="#7a7fe8" strokeWidth="1" rx="1.5" />
            <rect x="16" y="16" width="16" height="16" fill="none" stroke="#7a7fe8" strokeWidth="1" rx="1" />
            <rect x="21" y="21" width="6" height="6" fill="none" stroke="#7a7fe8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#squares)" />
      </svg>

      {/* Purple triangle — top-left */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          width: '42%',
          height: '62%',
          background: '#6600ff',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* Cyan large shape — left side */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          width: '58%',
          height: '100%',
          background: '#00d4f0',
          clipPath: 'polygon(0 38%, 38% 26%, 62% 52%, 48% 100%, 0 100%)',
        }}
      />

      {/* Orange stripe — far right */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{
          width: '18%',
          background: '#f05a00',
        }}
      />

      {/* Center logo banner */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center gap-5 px-10 py-6"
          style={{
            background: 'rgba(220, 225, 255, 0.55)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            borderRadius: 6,
            minWidth: 520,
            maxWidth: '65%',
          }}
        >
          {/* Logo icon — overlapping triangles */}
          <div className="relative flex-shrink-0" style={{ width: 110, height: 90 }}>
            {/* White chevron stripes (top layer) */}
            <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Green large triangle */}
              <polygon points="20,10 100,10 60,80" fill="#22c55e" />
              {/* Purple/blue triangle (offset) */}
              <polygon points="5,30 75,30 40,85" fill="#6366f1" opacity="0.85" />
              {/* White chevron lines */}
              <polyline points="15,22 38,55 60,22" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="28,22 51,55 73,22" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="41,22 64,55 86,22" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 800,
                color: '#111111',
                letterSpacing: '-1px',
                lineHeight: 1,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              ExampleFile
            </span>
            <span
              style={{
                fontSize: 'clamp(28px, 3.8vw, 58px)',
                fontWeight: 700,
                color: '#111111',
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
                fontFamily: 'Inter, sans-serif',
                paddingLeft: '2px',
              }}
            >
              .com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleFilePage;
