import LogoMark from './LogoMark';

const SquarePattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="squarePattern" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <rect x="2" y="2" width="32" height="32" rx="3" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <rect x="8" y="8" width="20" height="20" rx="2" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="13" y="13" width="10" height="10" rx="1" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#squarePattern)" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#5B5EA6]">
      {/* Square texture pattern */}
      <SquarePattern />

      {/* Purple triangle — top-left */}
      <div
        className="absolute top-0 left-0 w-0 h-0"
        style={{
          borderStyle: 'solid',
          borderWidth: '45vw 38vw 0 0',
          borderColor: '#7B2FBE transparent transparent transparent',
        }}
        aria-hidden="true"
      />

      {/* Cyan pentagon shape — left side */}
      <svg
        className="absolute bottom-0 left-0"
        style={{ width: '48vw', height: '75vh' }}
        viewBox="0 0 480 600"
        preserveAspectRatio="xMinYMax meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="0,0 320,0 480,200 380,600 0,600"
          fill="#00D4E8"
        />
        {/* Subtle square texture on cyan */}
        <defs>
          <pattern id="cyanPattern" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <rect x="4" y="4" width="28" height="28" rx="3" fill="none" stroke="rgba(0,180,200,0.3)" strokeWidth="1.2" />
          </pattern>
        </defs>
        <polygon
          points="0,0 320,0 480,200 380,600 0,600"
          fill="url(#cyanPattern)"
        />
      </svg>

      {/* Orange vertical stripe — right side */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{ width: '18vw', background: '#F05A1A' }}
        aria-hidden="true"
      >
        {/* Subtle square texture on orange */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="orangePattern" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <rect x="4" y="4" width="28" height="28" rx="3" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#orangePattern)" />
        </svg>
      </div>

      {/* Centered brand panel */}
      <div className="relative z-10 flex items-center gap-5 px-10 py-7 rounded-2xl shadow-2xl border border-white/30 bg-white/20 backdrop-blur-md">
        <LogoMark size={90} />
        <div className="flex flex-col leading-none">
          <span
            id="brand-name"
            className="text-5xl md:text-6xl font-black tracking-tight text-gray-900"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ExampleFile
          </span>
          <span
            className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 text-right"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            .com
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
