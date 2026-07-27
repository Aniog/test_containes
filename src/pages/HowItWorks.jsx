import PageHero from '../components/site/PageHero'
import { processSteps } from '../content'

function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A sourcing process built around clear buyer decisions"
        description="From the first product brief to production follow-up and shipment handover, the process is designed to reduce confusion and keep information visible."
      />
      <section className="bg-brand-bg py-16 text-brand-ink lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {processSteps.map((item) => (
              <article key={item.step} className="grid gap-5 rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm md:grid-cols-[80px_1fr]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white">
                  {item.step}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-brand-navy">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-brand-ink/70">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowItWorks
