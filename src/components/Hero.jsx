import strings from '../strings.en.js';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-[60px] md:py-[80px]">
      {/* Subtle background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(118,113,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 70% 50%, rgba(203,12,159,0.04) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-5 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left column */}
        <div className="flex-1 text-center md:text-start">
          <h1 className="m-0 mb-[10px]">
            <span className="block text-[28px] md:text-[44px] text-heading-dark">
              {strings.heroLine1}
            </span>
            <span className="block text-[28px] md:text-[44px] ai-gradient-text">
              {strings.heroLine2}
            </span>
          </h1>
          <p className="text-[14px] md:text-[16px] text-body-gray max-w-[480px] mb-[20px] leading-relaxed">
            {strings.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a href="/s/ai_site_builder" className="btn-primary btn-primary-lg px-[20px]">
              {strings.heroPrimaryCTA}
            </a>
            <a href="#all-generators" className="btn-ghost btn-ghost-lg px-[20px]">
              {strings.heroSecondaryCTA}
            </a>
          </div>
        </div>

        {/* Right column - illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <svg
            width="420"
            height="300"
            viewBox="0 0 420 300"
            fill="none"
            aria-hidden="true"
            className="w-full max-w-[420px] h-auto"
          >
            {/* Browser window frame */}
            <rect x="20" y="10" width="380" height="280" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1.5" />
            <rect x="20" y="10" width="380" height="32" rx="8" fill="#F4F6F8" />
            <rect x="20" y="34" width="380" height="8" fill="#F4F6F8" />
            <circle cx="36" cy="26" r="5" fill="#E2E4E7" />
            <circle cx="52" cy="26" r="5" fill="#E2E4E7" />
            <circle cx="68" cy="26" r="5" fill="#E2E4E7" />
            {/* Content lines */}
            <rect x="40" y="60" width="200" height="12" rx="3" fill="#E2E4E7" />
            <rect x="40" y="80" width="340" height="8" rx="3" fill="#F4F6F8" />
            <rect x="40" y="94" width="300" height="8" rx="3" fill="#F4F6F8" />
            {/* Image placeholder */}
            <rect x="40" y="118" width="340" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
            <rect x="160" y="155" width="100" height="26" rx="4" fill="url(#hero-illus-grad)" />
            <defs>
              <linearGradient id="hero-illus-grad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
            {/* Bottom content */}
            <rect x="40" y="234" width="160" height="8" rx="3" fill="#E2E4E7" />
            <rect x="40" y="250" width="120" height="8" rx="3" fill="#F4F6F8" />
            <rect x="40" y="266" width="200" height="8" rx="3" fill="#F4F6F8" />
          </svg>
        </div>
      </div>
    </section>
  );
}