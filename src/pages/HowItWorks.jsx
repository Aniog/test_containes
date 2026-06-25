import SectionShell from '../components/SectionShell.jsx'
import { ProcessTimeline, ProblemsSolved } from '../components/DataSections.jsx'

export default function HowItWorks() {
  return (
    <>
      <SectionShell className="bg-slate-950 text-white" eyebrow="How it works" title="From product requirement to shipment coordination" intro="A practical step-by-step process that helps overseas buyers work with China suppliers more clearly.">
        <ProcessTimeline />
      </SectionShell>
      <SectionShell eyebrow="Communication" title="We keep key sourcing details visible">
        <div className="grid gap-5 md:grid-cols-2">
          {['Specifications and supplier questions', 'Quotation comparisons and sample status', 'Production timeline and inspection points', 'Packaging, carton data, and shipping readiness'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 text-xl font-black text-slate-950 shadow-sm">{item}</div>
          ))}
        </div>
      </SectionShell>
      <SectionShell className="bg-slate-50" eyebrow="Risk reduction" title="Problems our process is designed to reduce"><ProblemsSolved /></SectionShell>
    </>
  )
}
