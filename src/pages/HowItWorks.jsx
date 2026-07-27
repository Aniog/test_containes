import { Link } from 'react-router-dom'
import { Clock, ArrowRight, MessageSquare, Search, FlaskConical, ClipboardCheck, Truck } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABand from '@/components/shared/CTABand'
import { PROCESS_STEPS } from '@/data/content'

const stepIcons = [MessageSquare, Search, FlaskConical, ClipboardCheck, Truck]

const whatYouGet = [
  'A dedicated bilingual project manager as your single point of contact',
  'A written project timeline at kickoff, with milestones and responsibilities',
  'Weekly written progress reports with photos from the factory floor',
  'Structured documents at every stage: shortlists, audit reports, inspection reports, shipping documents',
  'Early warning when something goes off plan — with options, not just problems',
]

const HowItWorks = () => (
  <>
    <PageHero eyebrow="How it works" title="A clear, five-step sourcing process">
      <p>
        Sourcing from China is not complicated when each step is done in the right
        order and documented properly. Here is exactly how a project runs with us.
      </p>
    </PageHero>

    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <ol className="relative space-y-12 border-l-2 border-slate-200 pl-8 md:pl-12">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <li key={step.step} className="relative">
                <span className="absolute -left-[52px] flex h-9 w-9 items-center justify-center rounded-full bg-blue-800 text-sm font-bold text-white md:-left-[70px] md:h-11 md:w-11 md:text-base">
                  {step.step}
                </span>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                      <Icon className="h-5 w-5 text-blue-800" />
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{step.title}</h2>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      <Clock className="h-3.5 w-3.5" /> {step.duration}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{step.detail}</p>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What you get throughout the project
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-800" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
          >
            Start step 1 today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <CTABand
      title="The first step takes five minutes"
      text="Send us your product details and we will come back with an initial assessment within one working day."
    />
  </>
)

export default HowItWorks
