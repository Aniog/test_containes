import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, FileText, MessageSquare, PackageCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBand from '@/components/shared/CtaBand'
import { PROCESS_STEPS } from '@/data/site'

const STEP_ICONS = [MessageSquare, FileText, PackageCheck, Clock3, ArrowRight]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden bg-primary-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          data-strk-bg-id="process-hero-bg-m4n5o6"
          data-strk-bg="[process-hero-subtitle] [process-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-200">How It Works</p>
          <h1 id="process-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            From Product Brief to Delivery, Step by Step
          </h1>
          <p id="process-hero-subtitle" className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            A typical project runs 8–12 weeks from first contact to goods arriving. Here is exactly what happens at each stage — and what you receive from us.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-12 before:absolute before:left-6 before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-slate-200">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.step} className="relative pl-16">
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-lg font-bold text-white shadow-sm">
                  {step.step}
                </span>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{step.title}</h2>
                    <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-medium text-slate-700">{step.short}</p>
                  <p className="mt-2 leading-relaxed text-slate-600">{step.detail}</p>
                  <div className="mt-5 overflow-hidden rounded-lg">
                    <img
                      alt={step.title}
                      className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
                      data-strk-img-id={`process-step-${step.step}`}
                      data-strk-img={`[process-step-title-${step.step}] [process-hero-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1000"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <p id={`process-step-title-${step.step}`} className="sr-only">{step.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What You Receive"
            title="Every stage ends with something in writing"
            description="Verbal updates are not enough when your money is on the line. These are the documents you receive throughout a project."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Quotation comparison', text: 'Side-by-side factory quotes with MOQ, lead time, payment terms, and our recommendation.' },
              { title: 'Factory audit report', text: 'On-site photos, video, equipment list, license verification, and capacity assessment.' },
              { title: 'Inspection reports', text: 'AQL results, defect photos, measurements, and pass/fail verdicts within 24 hours.' },
              { title: 'Weekly production updates', text: 'Progress against schedule with factory-floor photos, every week until shipment.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <FileText className="h-6 w-6 text-primary-600" />
                <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-7 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
            >
              Start Your Sourcing Project <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a product in mind already?"
        text="Send us the details and we'll map out the sourcing plan, timeline, and fees — free, within one business day."
      />
    </div>
  )
}
