import SectionShell from '../components/SectionShell.jsx'
import { ServicesGrid, TrustPoints } from '../components/DataSections.jsx'
import InquiryForm from '../components/InquiryForm.jsx'

export default function Services() {
  return (
    <>
      <SectionShell className="bg-slate-950 text-white" eyebrow="Services" title="China sourcing services for professional buyers" intro="Support for supplier discovery, verification, quality checks, production tracking, and shipment coordination.">
        <ServicesGrid />
      </SectionShell>
      <SectionShell className="bg-slate-50" eyebrow="When to use us" title="Use SSourcing China when you need clear China-side execution">
        <div className="grid gap-5 lg:grid-cols-3">
          {['You are comparing new suppliers and need structured supplier information.', 'You want factory verification before paying a deposit or expanding orders.', 'You need production and inspection follow-up without relying only on supplier updates.'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 text-lg font-bold leading-8 text-slate-900 shadow-sm">{item}</div>
          ))}
        </div>
      </SectionShell>
      <SectionShell eyebrow="Trust points" title="What buyers can expect from our workflow"><TrustPoints /></SectionShell>
      <section className="bg-blue-950 py-16 text-white"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><InquiryForm /></div></section>
    </>
  )
}
