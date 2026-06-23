import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, Globe2, PackageSearch, SearchCheck, ShieldCheck, Ship, Truck } from 'lucide-react'
import InquiryForm from '../components/forms/InquiryForm'
import CTASection from '../components/site/CTASection'
import FAQSection from '../components/site/FAQSection'
import SectionHeader from '../components/site/SectionHeader'
import VisualCard from '../components/site/VisualCard'
import { caseStudies, problems, processSteps, productCategories, services, trustPoints } from '../data/siteContent'

const iconMap = [PackageSearch, Factory, ClipboardCheck, SearchCheck, Truck, Globe2]

const Home = () => (
  <main className="bg-white text-slate-900">
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-32 bg-white" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm ring-1 ring-slate-200">
            China-based sourcing support for overseas buyers
          </p>
          <h1 id="home-hero-title" className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect product quality, follow production, and coordinate export shipping with clear English communication.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950" to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-blue-700 hover:text-blue-700" to="/services">
              View sourcing services
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
            {['Supplier screening', 'Factory checks', 'QC and shipping support'].map((item) => (
              <div className="flex items-center gap-2" key={item}>
                <CheckCircle2 className="h-5 w-5 text-teal-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl">
            <img
              alt="Factory production and quality control inspection in China"
              className="h-[520px] w-full object-cover"
              data-strk-img-id="home-hero-factory-qc-8f2a9c"
              data-strk-img="[home-hero-image-desc] [home-hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <p id="home-hero-image-desc" className="sr-only">Professional factory production line, quality control inspection, workers checking products, export sourcing in China</p>
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 text-slate-900 shadow-xl ring-1 ring-slate-200 sm:left-auto sm:w-80">
            <p className="text-sm font-semibold text-slate-950">Practical sourcing control</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Supplier comparison, production updates, inspection photos, and shipping coordination in one workflow.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Services"
          title="Sourcing services that reduce supplier risk"
          description="Choose support for one stage of your buying process or ask us to coordinate the full sourcing project from supplier search to shipment."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[index] || ShieldCheck
            return (
              <article className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" key={service.title}>
                <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sourcing process"
          title="A clear workflow from requirement to shipment"
          description="Each project is organized around practical checkpoints, supplier communication, and buyer decision-making."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm" key={step.step}>
              <span className="text-sm font-bold text-teal-700">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-slate-900 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Products we source"
            title="Support for a wide range of export-ready product categories"
            description="We work best when product requirements, quantity expectations, quality standards, and target markets are clearly defined."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {productCategories.map((category) => (
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800" key={category}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                <span className="text-sm font-medium leading-6">{category}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <VisualCard
            imageId="home-products-factory-packaging-54d2c1"
            query="[products-visual-one-desc] [products-visual-one-title]"
            title="Factory and packaging review"
            description="Check production capability, packaging options, labeling details, and export readiness before shipment."
          />
          <div className="pt-10">
            <VisualCard
              imageId="home-products-shipping-79b4ef"
              query="[products-visual-two-desc] [products-visual-two-title]"
              title="Shipping coordination"
              description="Align supplier delivery, cargo handover, documents, consolidation, and freight partner communication."
            />
          </div>
          <h3 id="products-visual-one-title" className="sr-only">Factory and packaging review</h3>
          <p id="products-visual-one-desc" className="sr-only">Quality control team checking packaging and product details in a China factory</p>
          <h3 id="products-visual-two-title" className="sr-only">Shipping coordination</h3>
          <p id="products-visual-two-desc" className="sr-only">Shipping containers and export logistics coordination for overseas buyers</p>
        </div>
      </div>
    </section>

    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Problems we solve</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Common sourcing issues need local follow-up, not guesswork</h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">SSourcing China helps buyers make better decisions before deposits are paid and before quality issues become expensive.</p>
        </div>
        <div className="grid gap-3">
          {problems.map((problem) => (
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-slate-100" key={problem}>{problem}</div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Trust points"
          title="Built for practical overseas procurement"
          description="Our role is to improve visibility, reduce avoidable supplier risk, and keep your China sourcing project organized."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" key={point}>
              <ShieldCheck className="h-6 w-6 flex-none text-teal-700" />
              <p className="text-sm font-medium leading-6 text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Case studies"
          title="Examples of practical sourcing support"
          description="Representative scenarios showing how structured sourcing, verification, and follow-up can improve buyer confidence."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm" key={item.title}>
              <p className="text-sm font-semibold text-teal-700">{item.industry}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-700"><strong className="text-slate-950">Challenge:</strong> {item.challenge}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700"><strong className="text-slate-950">Approach:</strong> {item.approach}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700"><strong className="text-slate-950">Result:</strong> {item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <FAQSection />

    <section className="bg-slate-50 py-16 text-slate-900 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Inquiry form"
            title="Tell us what you need to source"
            description="A clear sourcing brief helps us understand supplier fit, QC needs, shipping requirements, and possible risks."
          />
          <div className="mt-8 rounded-2xl bg-white p-6 text-slate-900 shadow-sm ring-1 ring-slate-200">
            <Ship className="h-8 w-8 text-blue-700" />
            <h3 className="mt-4 text-lg font-semibold text-slate-950">Useful details to include</h3>
            <p className="mt-2 leading-7 text-slate-700">Product specifications, photos, target quantity, destination country, quality standard, packaging, and timeline.</p>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>

    <CTASection />
  </main>
)

export default Home
