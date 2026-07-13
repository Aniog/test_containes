import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'

export default function CTASection({
  title = 'Ready to source with confidence?',
  description = 'Tell us what you need to source. We will send a free, no-obligation quote within one business day.',
  buttonText = 'Get a Free Sourcing Quote',
  to = '/contact',
}) {
  return (
    <Section className="bg-brand-900">
      <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-14 text-center md:px-12 md:py-20">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div
            data-strk-bg-id="cta-bg-7f3a9c"
            data-strk-bg="[cta-title] [cta-desc]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="h-full w-full"
          />
        </div>
        <div className="relative">
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {title}
          </h2>
          <p
            id="cta-desc"
            className="mx-auto mt-4 max-w-2xl text-lg text-brand-100"
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={to} className="btn-accent">
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
