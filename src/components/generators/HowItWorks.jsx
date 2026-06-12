import { strings } from '../../data/strings'

const t = strings.en.howItWorks

export default function HowItWorks() {
  return (
    <section className="py-10">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl text-center">
          {t.heading}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-brand-purple text-white font-heading font-bold text-base flex items-center justify-center">
                {idx + 1}
              </div>
              <h3 className="mt-4 font-heading font-bold uppercase text-heading-dark text-sm">
                {step.title}
              </h3>
              <p className="mt-2 text-body-text font-body text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
