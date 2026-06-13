import SectionHeading from '../common/SectionHeading'

export default function CaseStudiesSection() {
  return (
    <section className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Case studies" title="Examples of sourcing support for overseas buyers" text="Representative examples showing how structured supplier comparison, verification, production follow-up, and inspection support can improve buying decisions." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-brand-ink shadow-sm">
            <div className="h-52 bg-brand-muted"><img alt="Kitchen storage quality check" className="h-full w-full object-cover" data-strk-img-id="case-homeware-qc-7a42fd" data-strk-img="[case-homeware-desc] [case-homeware-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
            <div className="p-6"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Homeware importer</p><h3 id="case-homeware-title" className="mt-3 text-xl font-bold text-brand-navy">Comparing three factories for a kitchen storage line</h3><p id="case-homeware-desc" className="mt-3 text-sm leading-6 text-brand-subtle">SSourcing China clarified material thickness, packaging requirements, and carton dimensions before sample approval.</p><div className="mt-5 rounded-2xl bg-brand-surface p-4 text-sm leading-6 text-brand-navy"><span className="font-bold">Result: </span>The buyer received comparable quotations, sample feedback, and a recommended supplier based on finish quality and export experience.</div></div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-brand-ink shadow-sm">
            <div className="h-52 bg-brand-muted"><img alt="Accessory production follow-up" className="h-full w-full object-cover" data-strk-img-id="case-accessory-production-2bd901" data-strk-img="[case-accessory-desc] [case-accessory-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
            <div className="p-6"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Ecommerce brand</p><h3 id="case-accessory-title" className="mt-3 text-xl font-bold text-brand-navy">Production follow-up for a custom accessory order</h3><p id="case-accessory-desc" className="mt-3 text-sm leading-6 text-brand-subtle">Weekly progress updates, label checks, and photo documentation helped the buyer avoid delayed rework after shipment.</p><div className="mt-5 rounded-2xl bg-brand-surface p-4 text-sm leading-6 text-brand-navy"><span className="font-bold">Result: </span>The team identified a packaging mismatch during production and coordinated a correction before final inspection.</div></div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-brand-ink shadow-sm">
            <div className="h-52 bg-brand-muted"><img alt="Industrial factory audit" className="h-full w-full object-cover" data-strk-img-id="case-industrial-audit-4d81ce" data-strk-img="[case-industrial-desc] [case-industrial-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
            <div className="p-6"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Industrial distributor</p><h3 id="case-industrial-title" className="mt-3 text-xl font-bold text-brand-navy">Supplier verification before first tooling payment</h3><p id="case-industrial-desc" className="mt-3 text-sm leading-6 text-brand-subtle">The buyer received structured notes on business registration, production area, product references, and tooling timeline.</p><div className="mt-5 rounded-2xl bg-brand-surface p-4 text-sm leading-6 text-brand-navy"><span className="font-bold">Result: </span>Verification reduced uncertainty around factory scope, equipment, and communication reliability before payment planning.</div></div>
          </article>
        </div>
      </div>
    </section>
  )
}
