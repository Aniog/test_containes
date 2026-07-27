import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import CTAButton from '@/components/layout/CTAButton'
import { PROCESS_STEPS } from '@/data/content'

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From inquiry to delivery, in six steps"
        description="A transparent process with clear milestones, so you always know what is happening with your order."
        bgId="howitworks-hero-bg-3b2c"
        queryIds="[howitworks-hero-desc] [howitworks-hero-title]"
      />
      <span id="howitworks-hero-title" className="hidden">From inquiry to delivery in six steps</span>
      <span id="howitworks-hero-desc" className="hidden">
        Sourcing process steps: requirements, supplier search, factory verification, sampling, production and inspection, shipping.
      </span>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <ol className="relative space-y-8 border-l border-border pl-8">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon
              return (
                <li key={step.id} className="relative">
                  <span className="absolute -left-[2.6rem] flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-accent">{step.step}</span>
                      <h2 className="text-lg font-semibold text-foreground">{step.title}</h2>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">Start with a free quote</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Share your product details and we will shortlist vetted suppliers. You decide whether to move forward after reviewing them.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
