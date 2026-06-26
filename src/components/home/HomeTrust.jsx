import { MapPin, Globe2, FileText, Languages } from 'lucide-react'

const points = [
  {
    icon: MapPin,
    title: 'On the ground in China',
    desc: 'Our team is based in mainland China and visits factories in person across Zhejiang, Guangdong, Fujian and Jiangsu.',
  },
  {
    icon: Globe2,
    title: 'Built for overseas buyers',
    desc: 'We work in English with buyers in the US, EU, UK, Australia, Middle East and Latin America. Time zones are coordinated.',
  },
  {
    icon: FileText,
    title: 'Transparent reporting',
    desc: 'Written quotes, supplier shortlists, QC reports and shipping documents. You always have a paper trail.',
  },
  {
    icon: Languages,
    title: 'Chinese-language negotiation',
    desc: 'We negotiate price, MOQ and terms in Chinese with factory owners directly — not through layers of middlemen.',
  },
]

export default function HomeTrust() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Why buyers choose us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Trust points that matter when you import from China
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
