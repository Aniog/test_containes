import SectionShell from '../components/SectionShell.jsx'
import { CaseStudyCards } from '../components/DataSections.jsx'

export default function CaseStudies() {
  return (
    <>
      <SectionShell className="bg-slate-950 text-white" eyebrow="Case studies" title="Practical examples of China sourcing support" intro="These examples show the types of sourcing situations where structured supplier communication, verification, QC, and production follow-up can help buyers reduce uncertainty.">
        <CaseStudyCards />
      </SectionShell>
      <SectionShell eyebrow="How we report progress" title="Clear updates buyers can act on">
        <div className="grid gap-5 md:grid-cols-3">
          {['Supplier comparison notes', 'Sample and production status', 'Inspection and shipment readiness'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 text-lg font-black text-slate-950 shadow-sm">{item}</div>
          ))}
        </div>
      </SectionShell>
    </>
  )
}
