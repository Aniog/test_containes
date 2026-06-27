import strings from '@/strings/strings.en.js'
import { CheckIcon } from './Icons.jsx'

export default function WhyStrikingly() {
  return (
    <section className="gen-section gen-section-muted" aria-labelledby="why-heading">
      <div className="gen-container">
        <div className="gen-section-header">
          <h2 id="why-heading" className="gen-h2">{strings.why.heading}</h2>
        </div>
        <div className="gen-why-grid">
          {strings.why.items.map((item) => (
            <div key={item.title} className="gen-why-cell">
              <span className="gen-why-icon">
                <CheckIcon />
              </span>
              <h3 className="gen-why-title">{item.title}</h3>
              <p className="gen-why-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
