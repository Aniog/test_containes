import Button from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/content'

export default function CtaBanner({ title, description }) {
  return (
    <Section className="!py-0">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 md:px-12 md:py-16">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground tracking-tight">
            {title || 'Ready to source with confidence?'}
          </h2>
          <p className="mt-3 text-primary-foreground/80 text-base md:text-lg leading-relaxed">
            {description ||
              'Tell us about your product and requirements. We will send a free sourcing quote within one business day.'}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" size="lg">
              {SITE.cta}
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Explore Services
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-24 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
      </div>
    </Section>
  )
}
