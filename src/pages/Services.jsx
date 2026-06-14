import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Search, ShieldCheck, BadgeCheck, ClipboardCheck, FlaskConical, Truck, Cog, FileText, Check, ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Section, { SectionHeader } from '@/components/shared/Section'
import InquiryForm from '@/components/shared/InquiryForm'
import FAQ from '@/components/shared/FAQ'
import { SERVICES, FAQS } from '@/content/site'

const ICONS = {
  sourcing: Search,
  verification: ShieldCheck,
  qc: BadgeCheck,
  production: ClipboardCheck,
  sampling: FlaskConical,
  shipping: Truck,
  oem: Cog,
  documentation: FileText,
}

const SERVICE_IMAGES = {
  sourcing: 'industrial warehouse supplier sourcing China',
  verification: 'factory audit inspector walking through production line',
  qc: 'QC inspector checking product with calipers in factory',
  production: 'production line workers inspecting products during run',
  sampling: 'product samples laid out on a table for review',
  shipping: 'shipping containers at a Chinese port terminal',
  oem: 'private label packaging printing and labeling machine',
  documentation: 'shipping paperwork and customs documents on a desk',
}

const Hero = () => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  return (
    <section ref={ref} className="bg-white border-b border-slate-200">
      <div className="container-content py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="kicker">Our services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
              Eight services. One local team in China.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-primary-600 max-w-2xl leading-relaxed">
              You can use any of our services a la carte, or combine them into a full sourcing package. Most clients start with one or two and add the rest as the relationship grows.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">See the process</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                data-strk-img-id="services-hero-img-3a2c8e"
                data-strk-img="[services-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing manager walking a factory floor with clipboard"
                className="w-full h-full object-cover"
              />
            </div>
            <p id="services-hero-title" className="sr-only">Sourcing manager on the factory floor</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Services = () => (
  <>
    <Hero />

    <Section>
      <SectionHeader
        kicker="Detailed breakdown"
        title="The services, in detail"
        description="Each service is delivered by a dedicated specialist on our team, with written reports and photo evidence. You can see the format of a typical report before you commit."
      />
      <div className="space-y-6">
        {SERVICES.map((s, idx) => {
          const Icon = ICONS[s.id] || ShieldCheck
          const reverse = idx % 2 === 1
          return (
            <ServiceRow
              key={s.id}
              service={s}
              Icon={Icon}
              reverse={reverse}
              imageQuery={SERVICE_IMAGES[s.id]}
              imageId={`svc-${s.id}-img-9c${idx}`}
            />
          )
        })}
      </div>
    </Section>

    <Section id="engagement" soft>
      <SectionHeader
        kicker="Engagement models"
        title="Three ways to work with us"
        description="Most clients start with a one-time project and add ongoing support as they place repeat orders."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            title: 'One-time project',
            desc: 'You need help with a single PO: source, sample, audit, ship. We scope the work, give a fixed fee, and execute.',
            best: 'Best for: first-time importers and small product launches.',
          },
          {
            title: 'Ongoing QC & production',
            desc: 'You already have a supplier but want an independent agent on the ground for production follow-up and pre-shipment inspections.',
            best: 'Best for: established buyers scaling their SKUs.',
          },
          {
            title: 'Full sourcing partner',
            desc: 'We manage your category end-to-end, including new SKU development, multi-supplier consolidation, and quarterly cost reviews.',
            best: 'Best for: retailers and brands with 3+ SKUs.',
          },
        ].map((m) => (
          <div key={m.title} className="card h-full">
            <h3 className="text-lg font-semibold text-primary mb-2">{m.title}</h3>
            <p className="text-sm text-primary-600 leading-relaxed mb-3">{m.desc}</p>
            <p className="text-xs text-primary-500 border-t border-slate-100 pt-3 mt-auto">{m.best}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section id="faq">
      <SectionHeader
        kicker="FAQ"
        title="Common questions about our services"
        description="Quick answers to the questions we hear most often during the first conversation."
      />
      <FAQ items={FAQS} />
    </Section>

    <InquirySection />
  </>
)

const InquirySection = () => (
  <Section soft>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <div className="lg:col-span-5">
        <p className="kicker">Free, no obligation</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
          Ready to scope your project?
        </h2>
        <p className="mt-4 md:mt-5 text-base md:text-lg text-primary-600 leading-relaxed">
          Send a brief description of the product and your target quantity. We will reply within one business day with a list of candidate factories and a transparent fee structure.
        </p>
      </div>
      <div className="lg:col-span-7">
        <InquiryForm sourcePage="services" />
      </div>
    </div>
  </Section>
)

const ServiceRow = ({ service, Icon, reverse, imageQuery, imageId }) => {
  const rowRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, rowRef.current)
  }, [])

  return (
    <div
      id={service.id}
      ref={rowRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white border border-slate-200 rounded-xl overflow-hidden ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            data-strk-img-id={imageId}
            data-strk-img={`[${service.id}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={imageQuery}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`lg:col-span-7 p-6 md:p-8 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary-50 text-primary">
            <Icon className="w-5 h-5" />
          </span>
          <h3 id={`${service.id}-title`} className="text-xl md:text-2xl font-semibold text-primary">
            {service.title}
          </h3>
        </div>
        <p className="text-base md:text-lg text-primary-600 leading-relaxed mb-4">
          {service.summary}
        </p>
        <ul className="space-y-2.5">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm md:text-base text-primary-700">
              <span className="mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">
                <Check className="w-2.5 h-2.5" strokeWidth={3} />
              </span>
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
