import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"

export default function ClosingCTA() {
  return (
    <section
      className="py-16 text-center"
      style={{ backgroundColor: '#fff', borderTop: '1px solid #E2E4E7' }}
    >
      <div className="max-w-content mx-auto px-5">
        <h2
          className="m-0 mb-3 uppercase"
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 700,
            fontSize: 'clamp(26px, 3vw, 40px)',
            color: '#2E2E2F',
            lineHeight: 1.2,
          }}
        >
          {t.closingHeadline}
        </h2>

        <p
          className="m-0 mb-8 mx-auto"
          style={{
            color: '#636972',
            fontSize: '15px',
            lineHeight: 1.6,
            maxWidth: '480px',
          }}
        >
          {t.closingSub}
        </p>

        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center bg-ai-gradient text-white no-underline uppercase tracking-wide"
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.08em',
            height: '44px',
            padding: '0 24px',
            borderRadius: '4px',
            color: '#ffffff',
            textDecoration: 'none',
          }}
        >
          {t.closingCta}
        </a>
      </div>
    </section>
  )
}
