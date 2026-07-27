import SectionHeader from '@/components/SectionHeader'
import CtaBanner from '@/components/CtaBanner'
import { processSteps } from '@/data/siteData'

export default function HowItWorks() {
  return (
    <>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">How It Works</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A simple, transparent process that keeps you informed from request to delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            title="Your sourcing journey with SSourcing China"
            subtitle="Each step is designed to reduce risk and give you confidence in your supplier."
          />
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0
                return (
                  <div key={step.step} className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 w-full ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold text-sm mb-3 lg:hidden`}>
                        {step.step}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                    <div className="hidden lg:flex w-14 h-14 rounded-full bg-brand text-white items-center justify-center font-extrabold text-lg border-4 border-white shadow-md z-10">
                      {step.step}
                    </div>
                    <div className="flex-1 w-full" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-4">Typical timelines</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Every project is different, but here is a general guide for common sourcing projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              {[
                { label: 'Supplier shortlist', time: '3–5 days' },
                { label: 'Sampling', time: '1–3 weeks' },
                { label: 'Production', time: '2–8 weeks' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-brand">{item.time}</div>
                  <div className="mt-1 text-slate-700 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start your sourcing project today"
        subtitle="Send us your product requirements and receive a free quote."
      />
    </>
  )
}
