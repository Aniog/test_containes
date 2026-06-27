import { strings } from '../data/strings'

const steps = [
  {
    number: 1,
    titleKey: 'step1Title',
    descKey: 'step1Desc',
  },
  {
    number: 2,
    titleKey: 'step2Title',
    descKey: 'step2Desc',
  },
  {
    number: 3,
    titleKey: 'step3Title',
    descKey: 'step3Desc',
  },
]

export default function HowItWorks() {
  const t = strings.en

  return (
    <section className="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="container">
        <h2 id="how-it-works-heading" className="section-heading">{t.howItWorksHeading}</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number" aria-hidden="true">
                {step.number}
              </div>
              <h3 className="step-title">{t[step.titleKey]}</h3>
              <p className="step-desc">{t[step.descKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
