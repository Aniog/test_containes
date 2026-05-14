import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"

export default function HowItWorks() {
  return (
    <section className="py-10" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-content mx-auto px-5">
        <h2
          className="m-0 mb-8 uppercase text-center"
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 700,
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            lineHeight: 1.2,
          }}
        >
          {t.howItWorksHeading}
        </h2>

        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
        >
          {t.steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Numbered circle */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(to bottom right, #7671FF, #CB0C9F)',
                  color: '#fff',
                  fontFamily: HEADING_FONT,
                  fontWeight: 700,
                  fontSize: '20px',
                }}
                aria-hidden="true"
              >
                {step.number}
              </div>

              <div>
                <p
                  className="m-0 mb-2 uppercase"
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#2E2E2F',
                    letterSpacing: '0.06em',
                  }}
                >
                  {step.title}
                </p>
                <p
                  className="m-0"
                  style={{ color: '#636972', fontSize: '14px', lineHeight: 1.6 }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
