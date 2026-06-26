import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

export default function CtaBanner({
  title = 'Ready to source from China with confidence?',
  description = 'Tell us what you need. We will reply within one business day with a free, no-obligation sourcing quote.',
  buttonText = 'Get a Free Sourcing Quote',
  to = '/contact',
}) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-12 sm:px-12 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            data-strk-bg-id="cta-bg-7f3a9c"
            data-strk-bg="[cta-banner-title] [cta-banner-desc]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/70" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2
                id="cta-banner-title"
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                {title}
              </h2>
              <p
                id="cta-banner-desc"
                className="mt-3 text-base leading-relaxed text-slate-300"
              >
                {description}
              </p>
            </div>
            <div className="shrink-0">
              <Button as={Link} to={to} variant="amber" size="lg">
                {buttonText}
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
