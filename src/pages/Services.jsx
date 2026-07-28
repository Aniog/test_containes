import { services } from '@/lib/siteData'
import PageHero from '@/components/shared/PageHero'
import InquirySection from '@/components/home/InquirySection'
import { ClipboardCheck, Factory, PackageCheck, Search, ShieldCheck, Ship } from 'lucide-react'

const icons = [Search, Factory, ClipboardCheck, ShieldCheck, PackageCheck, Ship]

const Services = () => (
  <main>
    <PageHero
      eyebrow="Services"
      title="China sourcing services for overseas buyers"
      description="Choose support for a single step or a coordinated sourcing project from supplier search through production and shipment."
    >
      <p className="text-lg font-semibold text-white">Service focus</p>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        We support buyers who need practical supplier screening, quality visibility, and clear communication with Chinese suppliers.
      </p>
    </PageHero>
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <Icon className="h-8 w-8 text-blue-700" />
              <h2 className="mt-5 text-2xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                <li>Clear requirement review</li>
                <li>Supplier communication support</li>
                <li>Practical written updates</li>
              </ul>
            </article>
          )
        })}
      </div>
    </section>
    <InquirySection />
  </main>
)

export default Services
