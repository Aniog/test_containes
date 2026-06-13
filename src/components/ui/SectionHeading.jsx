import { cn } from '@/lib/utils';

export function SectionHeading({ badge, title, description, center = true, light = false, className }) {
  return (
    <div className={cn(
      'mb-8 lg:mb-12',
      center && 'text-center',
      className
    )}>
      {badge && (
        <span className={cn(
          'inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-3',
          light ? 'bg-white/10 text-white/90' : 'bg-navy-50 text-navy-500'
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        'text-2xl lg:text-3xl font-bold mb-3',
        light ? 'text-white' : 'text-navy-500'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-base lg:text-lg max-w-3xl leading-relaxed',
          center && 'mx-auto',
          light ? 'text-white/70' : 'text-gray-500'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700">
      <div className="container-max text-center">
        <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
          Ready to Start?
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Let Us Handle Your China Sourcing
        </h2>
        <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us what you need. We will research suppliers, verify factories, and provide a detailed quote within 48 hours — completely free.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white text-base font-semibold rounded-lg transition-colors shadow-lg shadow-accent-500/30"
        >
          Get a Free Sourcing Quote
        </a>
      </div>
    </section>
  );
}
