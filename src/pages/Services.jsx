import { ClipboardCheck, Factory, PackageSearch, SearchCheck, Ship, Truck } from 'lucide-react'
import CTASection from '../components/site/CTASection'
import PageHero from '../components/site/PageHero'
import SectionHeader from '../components/site/SectionHeader'
import { services } from '../data/siteContent'

const icons = [PackageSearch, Factory, ClipboardCheck, SearchCheck, Truck, Ship]

const Services = () => (
  <main className="bg-white text-slate-900">
    <PageHero
      eyebrow="Services"
      title="China sourcing services for overseas buyers"
      description="From supplier search and verification to quality inspection, production follow-up, and shipping coordination, SSourcing China supports practical buying decisions at each stage."
    />
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-900 shadow-sm" key={service.title}>
                <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700"><Icon className="h-7 w-7" /></span>
                <h2 className="mt-5 text-2xl font-semibold text-slate-950">{service.title}</h2>
                <p className="mt-4 leading-7 text-slate-700">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Requirement review and supplier communication</li>
                  <li>• Practical risk notes and buyer-friendly reporting</li>
                  <li>• Clear next steps before you commit budget</li>
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
    <section className="bg-slate-50 py-16 text-slate-900 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Local execution"
            title="Why use a sourcing agent in China?"
            description="A local sourcing team can speak with suppliers directly, check details faster, and coordinate factory, QC, and logistics communication that is difficult to manage from overseas."
          />
          <div className="mt-8 grid gap-4">
            {['Reduce uncertainty before paying deposits', 'Improve visibility during production', 'Keep suppliers accountable to agreed requirements'].map((item) => (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-800 shadow-sm" key={item}>{item}</div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
          <img
            alt="Factory inspection and supplier review"
            className="h-[480px] w-full object-cover"
            data-strk-img-id="services-factory-inspection-3ac912"
            data-strk-img="[services-visual-desc] [services-visual-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <h3 id="services-visual-title" className="sr-only">Factory inspection and supplier review</h3>
          <p id="services-visual-desc" className="sr-only">Professional quality control staff reviewing products and factory production in China</p>
        </div>
      </div>
    </section>
    <CTASection />
  </main>
)

export default Services
