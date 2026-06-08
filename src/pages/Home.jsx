import LogoMark from '../components/home/LogoMark';

const SquarePattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="squarePattern" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <rect x="4" y="4" width="28" height="28" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" rx="2" />
        <rect x="10" y="10" width="16" height="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#squarePattern)" />
  </svg>
);

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#5B5EA6] flex items-center justify-center">

      {/* Square texture pattern */}
      <SquarePattern />

      {/* Purple triangle — top-left */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ width: '38vw', height: '55vh' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 380 550" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,0 380,0 0,550" fill="#7B2FBE" />
        </svg>
      </div>

      {/* Cyan shape — left side with circular cutout at bottom-right */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{ width: '44vw', height: '78vh' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 440 780" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,780 L0,210 L190,0 L440,780 A200,200 0 0,1 240,780 Z" fill="#00D4E8" />
        </svg>
      </div>

      {/* Orange vertical stripe — right side */}
      <div
        className="absolute top-0 right-0 h-full pointer-events-none"
        style={{ width: '14vw' }}
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[#F05A1A]" />
      </div>

      {/* Center content column */}
      <div className="relative z-10 flex flex-col items-center gap-6" style={{ maxWidth: '680px', width: '100%' }}>

        {/* Brand panel */}
        <div className="flex items-center gap-5 px-10 py-7 rounded-2xl border border-white/30 shadow-2xl w-full"
          style={{
            background: 'rgba(200, 205, 240, 0.35)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {/* Logo mark */}
          <div className="flex-shrink-0">
            <LogoMark size={90} />
          </div>

          {/* Brand name */}
          <div className="flex flex-col leading-none">
            <span
              className="font-black tracking-tight text-gray-900"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.05 }}
            >
              ExampleFile
            </span>
            <span
              className="font-black tracking-tight text-gray-900 self-end"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}
            >
              .com
            </span>
          </div>
        </div>

        {/* Embedded photo */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/30">
          <img
            src="/beach.jpeg"
            alt="Beach sandcastle scene"
            className="w-full h-auto object-cover block"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
          />
        </div>

      </div>

    </div>
  );
};

export default Home;
