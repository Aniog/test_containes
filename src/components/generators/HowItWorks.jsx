import { strings } from '@/data/strings'

const t = strings.en.howItWorks

const HowItWorks = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-heading-section text-2xl md:text-3xl text-center mb-8">
          {t.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-[44px] h-[44px] rounded-full bg-brand-purple text-white font-heading text-lg flex items-center justify-center mx-auto mb-4">
                {idx + 1}
              </div>
              <h3 className="font-heading text-heading-dark text-sm mb-2">{step.title}</h3>
              <p className="text-body-text text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
