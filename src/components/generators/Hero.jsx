import strings from '../../data/strings';

const WebsiteMockupSVG = () => (
  <svg
    aria-hidden="true"
    width="520"
    height="380"
    viewBox="0 0 520 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[520px]"
  >
    {/* Browser frame */}
    <rect x="10" y="10" width="500" height="360" rx="8" stroke="#C6C9CD" strokeWidth="2" fill="#F4F6F8" />
    {/* Title bar */}
    <rect x="10" y="10" width="500" height="36" rx="8" fill="#E2E4E7" />
    <rect x="10" y="38" width="500" height="1" fill="#C6C9CD" />
    {/* Dots */}
    <circle cx="32" cy="28" r="5" fill="#FF6B6B" opacity="0.8" />
    <circle cx="50" cy="28" r="5" fill="#FFC145" opacity="0.8" />
    <circle cx="68" cy="28" r="5" fill="#4CD964" opacity="0.8" />
    {/* Nav bar placeholder */}
    <rect x="200" y="20" width="60" height="4" rx="2" fill="#C6C9CD" />
    <rect x="270" y="20" width="60" height="4" rx="2" fill="#C6C9CD" />
    <rect x="340" y="20" width="60" height="4" rx="2" fill="#C6C9CD" />
    {/* Hero area */}
    <rect x="30" y="60" width="460" height="80" rx="4" fill="#E8E0F0" />
    <rect x="140" y="80" width="240" height="8" rx="4" fill="#8159BB" opacity="0.4" />
    <rect x="170" y="96" width="180" height="6" rx="3" fill="#8159BB" opacity="0.25" />
    <rect x="200" y="116" width="120" height="22" rx="4" fill="url(#heroGrad)" />
    {/* Grid of blocks */}
    <rect x="30" y="155" width="145" height="100" rx="4" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="40" y="165" width="125" height="6" rx="3" fill="#E2E4E7" />
    <rect x="40" y="178" width="100" height="4" rx="2" fill="#F4F6F8" />
    <rect x="40" y="188" width="110" height="4" rx="2" fill="#F4F6F8" />
    <rect x="40" y="210" width="60" height="16" rx="4" fill="#8159BB" opacity="0.15" />

    <rect x="188" y="155" width="145" height="100" rx="4" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="198" y="165" width="125" height="6" rx="3" fill="#E2E4E7" />
    <rect x="198" y="178" width="100" height="4" rx="2" fill="#F4F6F8" />
    <rect x="198" y="188" width="110" height="4" rx="2" fill="#F4F6F8" />
    <rect x="198" y="210" width="60" height="16" rx="4" fill="#8159BB" opacity="0.15" />

    <rect x="345" y="155" width="145" height="100" rx="4" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="355" y="165" width="125" height="6" rx="3" fill="#E2E4E7" />
    <rect x="355" y="178" width="100" height="4" rx="2" fill="#F4F6F8" />
    <rect x="355" y="188" width="110" height="4" rx="2" fill="#F4F6F8" />
    <rect x="355" y="210" width="60" height="16" rx="4" fill="#8159BB" opacity="0.15" />

    {/* Bottom block */}
    <rect x="30" y="270" width="460" height="80" rx="4" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="50" y="285" width="200" height="6" rx="3" fill="#E2E4E7" />
    <rect x="50" y="300" width="160" height="4" rx="2" fill="#F4F6F8" />
    <rect x="50" y="310" width="180" height="4" rx="2" fill="#F4F6F8" />
    <rect x="50" y="325" width="80" height="18" rx="4" fill="url(#heroGrad)" />

    {/* Sparkle decorations */}
    <circle cx="80" cy="75" r="4" fill="#7671FF" opacity="0.3" />
    <circle cx="440" cy="85" r="3" fill="#CB0C9F" opacity="0.3" />
    <circle cx="460" cy="270" r="5" fill="#7671FF" opacity="0.2" />
    <circle cx="30" cy="280" r="3" fill="#CB0C9F" opacity="0.25" />

    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => {
  const { hero } = strings.en;

  return (
    <section
      className="relative overflow-hidden py-[60px] md:py-[80px]"
      style={{
        background: 'radial-gradient(ellipse at 70% 30%, rgba(118, 113, 255, 0.06) 0%, rgba(203, 12, 159, 0.04) 40%, transparent 70%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-15">
        {/* Left column */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading uppercase m-0 mb-5">
            <span className="block text-h1-mobile md:text-h1-desktop text-hero-heading leading-tight">
              {hero.h1Line1}
            </span>
            <span className="block text-h1-mobile md:text-h1-desktop ai-gradient-text leading-tight">
              {hero.h1Line2}
            </span>
          </h1>
          <p className="text-body text-body-color max-w-[520px] mb-8 mx-auto md:mx-0 text-base leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
            <a
              href={hero.ctaPrimaryUrl}
              className="ai-gradient-bg text-white font-heading font-bold uppercase text-sm px-[15px] py-[9px] rounded-[4px] no-underline h-[44px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={hero.ctaSecondaryUrl}
              className="border border-brand-purple text-brand-purple bg-transparent font-heading font-bold uppercase text-sm px-[15px] py-[9px] rounded-[4px] no-underline h-[44px] inline-flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right column illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <WebsiteMockupSVG />
        </div>
      </div>
    </section>
  );
};

export default Hero;
