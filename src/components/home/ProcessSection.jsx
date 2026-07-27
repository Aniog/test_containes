import SectionHeader from '@/components/SectionHeader'
import { processSteps } from '@/data/siteData'

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="section-container">
        <SectionHeader
          label="How It Works"
          title="A clear sourcing process from start to finish"
          subtitle="We keep every step transparent so you always know where your order stands."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="relative p-6 md:p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-slate-100 select-none">{step.step}</span>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
