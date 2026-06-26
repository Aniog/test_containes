import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We replaced two older folders with a single Artitect D-Series. The bends are sharper, the cycle is faster, and the operators actually enjoy the machine.',
    author: 'Marco V.',
    role: 'Production Manager, Architectural Cladding',
  },
  {
    quote:
      'Setup took an afternoon. By the next morning we were running production parts at tolerances we previously sent out to be laser-welded.',
    author: 'Lina S.',
    role: 'Workshop Owner, HVAC Fabrication',
  },
  {
    quote:
      'It is rare to see this level of finish on a sheet metal folder. Artitect machines look as precise as they fold.',
    author: 'D. Okafor',
    role: 'Lead Engineer, Custom Enclosures',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">In Their Words</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-slate-900 leading-snug">
            Trusted by fabricators in 40+ countries.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-slate-200 bg-stone-50 p-7 flex flex-col"
            >
              <Quote className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
              <blockquote className="mt-5 text-slate-700 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-slate-200">
                <p className="font-medium text-slate-900">{t.author}</p>
                <p className="text-sm text-slate-500 mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
