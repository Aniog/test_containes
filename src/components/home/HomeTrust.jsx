import { MapPin, Languages, FileText, Scale, Eye, Handshake } from 'lucide-react'

const TRUST_POINTS = [
  {
    icon: MapPin,
    title: 'On the ground in China',
    desc: 'Based in Shenzhen with inspectors covering the main manufacturing provinces. We visit factories in person — you get photos, videos, and facts.',
  },
  {
    icon: Languages,
    title: 'Bilingual project managers',
    desc: 'You communicate in English, the factory communicates in Chinese, and nothing technical gets lost in translation. All reports are written in clear English.',
  },
  {
    icon: FileText,
    title: 'Transparent, fixed pricing',
    desc: 'Written quotes before any engagement. No hidden margins added to factory prices, and supplier quotations are shared with you directly.',
  },
  {
    icon: Scale,
    title: 'Your interests only',
    desc: 'We work for the buyer, not the factory. Our fee structure does not depend on which supplier you choose, so our recommendations stay objective.',
  },
  {
    icon: Eye,
    title: 'Inspections to AQL standards',
    desc: 'Every inspection follows agreed AQL sampling levels with photo-documented defect reports. Nothing ships without your written approval.',
  },
  {
    icon: Handshake,
    title: 'Long-term partnership',
    desc: 'Most of our clients have worked with us for over three years, across dozens of reorders and new product launches.',
  },
]

const stats = [
  { value: '350+', label: 'factories audited on-site' },
  { value: '20+', label: 'countries served' },
  { value: '48h', label: 'audit report turnaround' },
  { value: '9 yrs', label: 'average team experience' },
]

const HomeTrust = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">Why SSourcing China</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            A sourcing partner you can actually verify
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Trust in sourcing comes from process, not promises. Here is what working
            with us looks like in practice.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {TRUST_POINTS.map((point) => (
              <div key={point.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <point.icon className="h-5 w-5 text-blue-800" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <img
              alt="Quality inspector checking goods on a production line"
              className="aspect-[4/3] w-full object-cover"
              data-strk-img-id="home-trust-img-7d2b44"
              data-strk-img="[trust-img-caption]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <p id="trust-img-caption" className="mt-3 text-xs text-slate-500">
            Pre-shipment inspection at a partner factory in Dongguan, Guangdong — quality control check with measuring tools and inspection checklist.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-6 text-center">
                <dt className="order-2 mt-1 block text-xs font-medium leading-snug text-slate-500">{stat.label}</dt>
                <dd className="order-1 text-2xl font-bold text-blue-800">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
)

export default HomeTrust
