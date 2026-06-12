import strings from '../../data/strings';
import HeroIllustration from './HeroIllustration';

const s = strings.en.hero;

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 90% 10%, rgba(118,113,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(203,12,159,0.04) 0%, transparent 70%), #ffffff',
        paddingBlock: '70px 60px',
      }}
    >
      <div className="content-wrap">
        <div
          className="flex flex-col-reverse md:flex-row items-center gap-10"
          style={{ gap: 40 }}
        >
          {/* Left column */}
          <div className="flex-1 min-w-0">
            <h1
              className="font-heading m-0 p-0"
              style={{ marginBottom: 16 }}
            >
              <span
                className="block"
                style={{
                  color: '#2E2E2F',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  lineHeight: 1.15,
                }}
              >
                {s.h1Line1}
              </span>
              <span
                className="gradient-text block font-heading"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  lineHeight: 1.15,
                }}
              >
                {s.h1Line2}
              </span>
            </h1>

            <p
              style={{
                color: '#636972',
                fontSize: 16,
                lineHeight: 1.6,
                marginBottom: 30,
                maxWidth: 480,
              }}
            >
              {s.subheadline}
            </p>

            <div className="flex flex-wrap items-center" style={{ gap: 10 }}>
              <a
                href="/s/ai_site_builder"
                className="btn-gradient"
                style={{ height: 44, padding: '0 24px', fontSize: 14 }}
              >
                {s.primaryCta}
              </a>
              <a
                href="#all-generators"
                className="btn-ghost"
                style={{ height: 44, padding: '0 24px', fontSize: 14 }}
              >
                {s.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right column — illustration */}
          <div
            className="flex-shrink-0 w-full md:w-auto"
            style={{ maxWidth: 480 }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
