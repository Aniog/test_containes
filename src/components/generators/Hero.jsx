import strings from '@/strings.en.js';

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px]"
      width="480"
      height="340"
      aria-hidden="true"
    >
      <rect x="40" y="20" width="400" height="300" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      <rect x="40" y="20" width="400" height="36" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1.5" />
      <circle cx="60" cy="38" r="5" fill="#E2E4E7" />
      <circle cx="76" cy="38" r="5" fill="#E2E4E7" />
      <circle cx="92" cy="38" r="5" fill="#E2E4E7" />
      <rect x="140" y="28" width="200" height="20" rx="4" fill="#E2E4E7" />
      <rect x="60" y="76" width="360" height="16" rx="4" fill="#E2E4E7" />
      <rect x="60" y="100" width="280" height="16" rx="4" fill="#E2E4E7" />
      <rect x="60" y="136" width="170" height="120" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="250" y="136" width="170" height="120" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="60" y="276" width="360" height="24" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <circle cx="120" cy="196" r="20" fill="none" stroke="#8159BB" strokeWidth="2" opacity="0.4" />
      <circle cx="335" cy="196" r="20" fill="none" stroke="#7671FF" strokeWidth="2" opacity="0.4" />
      <path d="M120 176 L120 216 M100 196 L140 196" stroke="#8159BB" strokeWidth="2" opacity="0.4" />
      <path d="M335 176 L335 216 M315 196 L355 196" stroke="#7671FF" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(203,12,159,0.04) 0%, rgba(118,113,255,0.03) 50%, transparent 100%)' }}>
      <div className="section-container flex flex-col md:flex-row items-center gap-[40px] py-[60px] md:py-[80px]">
        <div className="flex-1 text-center md:text-start">
          <h1 className="font-heading font-bold uppercase leading-[1.2] text-[32px] md:text-[44px] mb-[10px]">
            <span className="block text-heading-dark">{strings.heroLine1}</span>
            <span className="block ai-gradient-text">{strings.heroLine2}</span>
          </h1>
          <p className="text-body text-[14px] leading-[1.6] max-w-[480px] mb-[20px] mx-auto md:mx-0">
            {strings.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a href="/s/ai_site_builder" className="btn-primary btn-primary-large">
              {strings.heroPrimaryCTA}
            </a>
            <a href="#all-generators" className="btn-ghost">
              {strings.heroSecondaryCTA}
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}