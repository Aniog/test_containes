import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, Globe2, HelpCircle, PackageCheck, Ship, ShieldCheck, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import InquiryForm from '../components/common/InquiryForm.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import { caseStudies, faqs, problemsSolved, processSteps, productCategories, services, trustPoints } from '../data/siteContent.js'
import strkImgConfig from '../strk-img-config.json'

const serviceIcons = [Factory, ShieldCheck, ClipboardCheck, TrendingUp, Ship, Globe2]

const Home = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(pageRef.current)
    }
  }, [])

  return (
  <main ref={pageRef}>
    <HeroSection />

    <section className="bg-white py-10 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {trustPoints.map((point) => (
          <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{point}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-slate-50 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Practical sourcing support from supplier search to shipment"
          description="Use SSourcing China as your local coordination partner for the parts of China sourcing that are difficult to manage remotely."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>

    <section className="bg-white py-20 text-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <img
            alt="Factory production line with sourcing manager checking progress"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            data-strk-img-id="process-production-followup-3f6a88"
            data-strk-img="[process-description] [process-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1800/unsplashcom/photo-1606077089119-92075161bb60"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Sourcing process"
            title="A clear process for reducing sourcing uncertainty"
            description="We keep the process structured so your team can compare suppliers, understand risks, and make decisions with better information."
          />
          <p id="process-title" className="hidden">China supplier sourcing and production follow-up process</p>
          <p id="process-description" className="hidden">Factory checks quality inspection production tracking and export shipping coordination for overseas buyers</p>
          <div className="mt-8 grid gap-5">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">Products we source</p>
            <h2 id="products-title" className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Product categories for overseas importers and B2B buyers
            </h2>
            <p id="products-description" className="mt-4 text-lg leading-8 text-slate-300">
              We help buyers source finished goods, components, packaging, and custom products from suitable China suppliers.
            </p>
            <Link to="/products" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">
              Explore product categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {productCategories.map((category) => (
              <div key={category} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
                <PackageCheck className="h-5 w-5 text-blue-300" />
                <p className="mt-3 font-medium text-white">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Common China sourcing risks handled with local follow-up"
          description="The right sourcing support helps buyers avoid unclear suppliers, late issue discovery, and quality surprises after goods have shipped."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4">
            {problemsSolved.map((problem) => (
              <div key={problem} className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-5 text-amber-950">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-sm font-medium leading-6">{problem}</p>
              </div>
            ))}
          </div>
          <img
            alt="Quality control inspection with product checklist in warehouse"
            className="h-full min-h-[360px] w-full rounded-3xl object-cover shadow-xl"
            data-strk-img-id="problems-quality-checklist-d2c4b0"
            data-strk-img="[problems-description] [problems-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1800/unsplashcom/photo-1663059268631-6d16c10bee80"
          />
          <p id="problems-title" className="hidden">China sourcing risks supplier verification quality inspection</p>
          <p id="problems-description" className="hidden">Quality inspector checking products packaging labels cartons and factory production details</p>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Examples of practical sourcing support"
          description="These examples show how structured supplier checks, QC, and shipping coordination can support better purchasing decisions."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{study.industry}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{study.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600"><strong className="text-slate-800">Challenge:</strong> {study.challenge}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600"><strong className="text-slate-800">Support:</strong> {study.solution}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600"><strong className="text-slate-800">Result:</strong> {study.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-20 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions buyers ask before working with a sourcing agent"
            description="Straight answers about China sourcing, supplier verification, quality inspection, and shipping coordination."
          />
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-950">
              <summary className="cursor-pointer text-base font-bold text-slate-950">{faq.question}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-100 py-20 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="pt-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Start with a sourcing brief</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Need a reliable China supplier or better control over an order?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Send your requirements and we will review whether SSourcing China can support supplier search, verification, QC, production follow-up, or shipment coordination.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="font-bold text-slate-950">Helpful details to include</p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Product specifications or reference photos</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Estimated quantity and destination country</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Target timeline, certifications, and quality concerns</li>
            </ul>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  </main>
  )
}

export default Home
