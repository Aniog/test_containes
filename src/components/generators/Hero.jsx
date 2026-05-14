import { HeroIllustration } from './Illustrations'
import { t } from './strings'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.07) 0%, rgba(203,12,159,0.04) 60%, transparent 100%), #fff',
        paddingTop: '70px',
        paddingBottom: '70px',
      }}
    >
      <div className="max-w-content mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left column — text + CTAs */}
          <div className="flex-1 min-w-0 text-center lg:text-start">
            <h1
              className="m-0 mb-5 leading-tight"
              style={{
                fontFamily: "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              <span
                className="block uppercase"
                style={{
                  color: '#2E2E2F',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                }}
              >
                {t.heroH1Line1}
              </span>
              <span
                className="block uppercase text-ai-gradient"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                }}
              >
                {t.heroH1Line2}
              </span>
            </h1>

            <p
              className="mt-0 mb-8"
              style={{
                color: '#636972',
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '480px',
                margin: '0 auto 32px',
              }}
            >
              {t.heroSubheadline}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start"
              style={{ gap: '10px' }}
            >
              {/* Primary CTA — AI gradient fill */}
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center bg-ai-gradient text-white no-underline uppercase tracking-wide"
                style={{
                  fontFamily: "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  height: '44px',
                  padding: '0 20px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  color: '#ffffff',
                }}
              >
                {t.heroPrimaryCta}
              </a>

              {/* Secondary CTA — ghost */}
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center bg-transparent no-underline uppercase tracking-wide"
                style={{
                  fontFamily: "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  height: '44px',
                  padding: '0 20px',
                  borderRadius: '4px',
                  border: '1px solid #8159BB',
                  color: '#8159BB',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.heroSecondaryCta}
              </a>
            </div>
          </div>

          {/* Right column — illustration */}
          <div
            className="flex-shrink-0 flex justify-center"
            style={{ width: '100%', maxWidth: '480px' }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
