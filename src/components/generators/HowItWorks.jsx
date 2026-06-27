import strings from '@/strings/strings.en.js'

export default function HowItWorks() {
  return (
    <section className="gen-section" aria-labelledby="how-heading">
      <div className="gen-container">
        <div className="gen-section-header">
          <h2 id="how-heading" className="gen-h2">{strings.howItWorks.heading}</h2>
        </div>
        <div className="gen-steps">
          {strings.howItWorks.steps.map((step, index) => (
            <div key={step.title} className="gen-step">
              <span className="gen-step-number">{index + 1}</span>
              <h3 className="gen-step-title">{step.title}</h3>
              <p className="gen-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
