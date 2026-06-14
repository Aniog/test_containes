import React from 'react'

const QUOTES = [
  {
    quote:
      'Our AM-D12 replaced two press brakes and a manual folder. The angle library alone paid for the machine in eighteen months.',
    name: 'Lena Whitfield',
    role: 'Operations Lead, Northgate Metals',
  },
  {
    quote:
      'I have run a lot of folders. The ARTITECT bed feels different — heavier, calmer. The angles stay true across a 12-hour shift.',
    name: 'Marc Halverson',
    role: 'Senior Fabricator, Strata Industries',
  },
  {
    quote:
      'Their field engineer flew out, set up the cell, and trained our team in three days. The follow-up has been just as good.',
    name: 'Priya Sundaram',
    role: 'Plant Manager, Meridian HVAC',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-surface border-y border-line py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">Customer stories</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink leading-[1.1] tracking-tight text-balance">
            Trusted by fabricators who bend for a living.
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-line bg-bg p-7 md:p-8"
            >
              <blockquote className="font-display text-lg md:text-xl text-ink leading-relaxed text-balance">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line/80">
                <p className="text-sm font-medium text-ink">{q.name}</p>
                <p className="text-xs text-muted mt-0.5">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
