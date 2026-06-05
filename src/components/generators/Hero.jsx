import strings from '../../data/strings.en.js';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ padding: '60px 20px 60px' }}>
      {/* Subtle gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(118, 113, 255, 0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 30% 60%, rgba(203, 12, 159, 0.03) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="content-container relative">
        <div className="flex flex-col md:flex-row items-center gap-[40px]">
          {/* Left column */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-[32px] md:text-[44px] leading-[1.15] m-0">
              <span className="block text-hero-dark">{strings.heroH1Line1}</span>
              <span className="block ai-gradient-text">{strings.heroH1Line2}</span>
            </h1>
            <p className="text-body-gray text-[15px] md:text-[16px] mt-[15px] mb-[25px] max-w-[480px] leading-[1.5] mx-auto md:mx-0">
              {strings.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
              <a href="/s/ai_site_builder" className="btn-primary-lg text-[15px] px-[24px]">
                {strings.heroPrimaryCTA}
              </a>
              <a href="#all-generators" className="btn-ghost text-[15px] px-[24px]">
                {strings.heroSecondaryCTA}
              </a>
            </div>
          </div>

          {/* Right column - illustration */}
          <div className="flex-1 flex justify-center md:justify-end">
            <svg
              width="420"
              height="320"
              viewBox="0 0 420 320"
              fill="none"
              aria-hidden="true"
              className="w-full max-w-[420px] h-auto"
            >
              {/* Browser window */}
              <rect x="20" y="20" width="380" height="280" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1" />
              {/* Browser top bar */}
              <rect x="20" y="20" width="380" height="36" rx="8" fill="#F4F6F8" />
              <rect x="20" y="48" width="380" height="8" fill="#F4F6F8" />
              {/* Dots */}
              <circle cx="36" cy="38" r="5" fill="#C6C9CD" />
              <circle cx="54" cy="38" r="5" fill="#C6C9CD" />
              <circle cx="72" cy="38" r="5" fill="#C6C9CD" />
              {/* Website mockup lines */}
              <rect x="40" y="72" width="100" height="14" rx="4" fill="#8159BB" fillOpacity="0.18" />
              <rect x="40" y="96" width="240" height="6" rx="3" fill="#636972" fillOpacity="0.08" />
              <rect x="40" y="110" width="200" height="6" rx="3" fill="#636972" fillOpacity="0.08" />
              <rect x="40" y="124" width="160" height="6" rx="3" fill="#636972" fillOpacity="0.08" />
              {/* Image placeholder */}
              <rect x="40" y="148" width="150" height="90" rx="4" fill="#8159BB" fillOpacity="0.06" stroke="#C6C9CD" strokeWidth="0.5" />
              <rect x="200" y="148" width="170" height="18" rx="4" fill="#636972" fillOpacity="0.06" />
              <rect x="200" y="176" width="170" height="6" rx="3" fill="#636972" fillOpacity="0.05" />
              <rect x="200" y="188" width="140" height="6" rx="3" fill="#636972" fillOpacity="0.05" />
              <rect x="200" y="200" width="100" height="6" rx="3" fill="#636972" fillOpacity="0.05" />
              {/* CTA button */}
              <rect x="40" y="256" width="140" height="28" rx="4" fill="url(#hero-cta-grad)" />
              <defs>
                <linearGradient id="hero-cta-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}