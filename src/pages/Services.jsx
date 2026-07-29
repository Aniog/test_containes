import { ClipboardCheck, Factory, Globe2, ShieldCheck, Ship, TrendingUp } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { services } from '../data/siteContent.js'

const icons = [Factory, ShieldCheck, ClipboardCheck, TrendingUp, Ship, Globe2]

const Services = () => (
  <main className="bg-white text-slate-950">
    <PageHero
      eyebrow="Services"
      title="China sourcing services for supplier selection, QC, and shipping"
      description="Choose focused support for a single sourcing challenge or use SSourcing China as your local coordination partner from supplier search to export handover."
    />

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Services designed around real sourcing decisions"
          description="We keep the work practical: identify supplier options, check facts, document quality expectations, and communicate clearly during production."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Icon className="h-8 w-8 text-blue-700" />
                <h2 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Best fit"
          title="When a sourcing agent can help"
          description="Our support is most useful when you need supplier visibility, local communication, order follow-up, or objective QC information before shipping."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            'You found suppliers online but need help comparing factories and verifying details.',
            'You have a supplier but need clearer production updates and inspection support.',
            'You need multiple factories coordinated before one export shipment leaves China.',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-base font-semibold leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
)

export default Services
