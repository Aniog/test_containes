import SectionHeader from '@/components/SectionHeader'
import { problemsWeSolve } from '@/data/siteData'

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="section-container">
        <SectionHeader
          label="Problems We Solve"
          title="Reduce risk at every stage of China sourcing"
          subtitle="Common sourcing challenges and how SSourcing China helps you avoid them."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problemsWeSolve.map((item) => (
            <div key={item.title} className="p-6 md:p-8 bg-slate-800/60 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
