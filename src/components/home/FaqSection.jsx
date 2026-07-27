import SectionHeader from '../site/SectionHeader'
import { faqs } from '../../content'

function FaqSection() {
  return (
    <section className="bg-white py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions overseas buyers often ask"
          description="If your project has special product, certification, or logistics requirements, include those details in your inquiry."
          align="center"
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-brand-line bg-brand-bg p-6 text-brand-ink open:bg-white open:shadow-sm">
              <summary className="cursor-pointer list-none text-base font-semibold text-brand-navy marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-brand-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
