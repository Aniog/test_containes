import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'The DF-2500 cut our cycle time on architectural panels by nearly 40%. The bends are still square three years in.',
    author: 'Marko Lindqvist',
    role: 'Production Lead, Helsinki',
  },
  {
    quote:
      'After years of fighting our old folder, the SM-3200 just works. Operators trained themselves in an afternoon.',
    author: 'Aïcha Benali',
    role: 'Workshop Owner, Lyon',
  },
  {
    quote:
      'ARTITECT does not just sell a machine. They send an engineer, set it true, and stay on the phone when you need them.',
    author: 'Daniel Reyes',
    role: 'HVAC Manufacturer, Monterrey',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">
            Trusted by fabricators <br />
            who measure twice.
          </h2>
          <div className="w-12 h-px bg-accent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="bg-paper border border-mist p-8 md:p-10 flex flex-col"
            >
              <Quote className="w-7 h-7 text-accent" strokeWidth={1.5} />
              <blockquote className="mt-5 font-display text-xl md:text-2xl leading-snug text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-8 border-t border-mist">
                <div className="font-medium text-ink">{t.author}</div>
                <div className="text-sm text-steel">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
