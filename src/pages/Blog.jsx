import SectionShell from '../components/SectionShell.jsx'

const posts = [
  ['How to screen China suppliers before placing a deposit', 'Practical checks that help buyers understand business credentials, production fit, and communication quality.'],
  ['What to include in a sourcing inquiry', 'Product specifications, packaging needs, target quantity, destination market, and timeline details that improve supplier responses.'],
  ['When to arrange quality inspection', 'How pre-production, during-production, and final inspections can support different sourcing situations.'],
]

export default function Blog() {
  return (
    <SectionShell className="bg-slate-50" eyebrow="Blog" title="Practical China sourcing insights" intro="Clear guidance for overseas buyers planning supplier searches, factory checks, inspections, and shipment coordination.">
      <div className="grid gap-6 lg:grid-cols-3">
        {posts.map(([title, desc]) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Sourcing guide</p>
            <h2 className="mt-4 text-xl font-black text-slate-950">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">{desc}</p>
            <a href="/contact#inquiry" className="mt-6 inline-flex text-sm font-black text-blue-700 hover:text-blue-900">Ask about your project</a>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
