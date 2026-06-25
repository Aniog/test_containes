import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const timeline = [
  { year: '1995', title: 'Founded', desc: 'Six engineers in a small workshop in Tianjin set out to build a better folding machine.' },
  { year: '2003', title: 'First export', desc: 'The DF-2000 ships to a fabricator in Germany — the start of three decades of international work.' },
  { year: '2012', title: 'Servo-electric', desc: 'We retire hydraulics across our flagship line, becoming one of the first Chinese OEMs to do so.' },
  { year: '2019', title: 'CNC platform', desc: 'A new in-house CNC platform launches across the DF series — five-axis as standard.' },
  { year: '2025', title: 'Architectural Series', desc: 'The DF-4000 enters production, serving façade and architectural panel manufacturers worldwide.' },
]

const values = [
  {
    title: 'Engineering first',
    body: 'Our team is two-thirds mechanical and controls engineers. The other third are the people who make sure those engineers are heard.',
  },
  {
    title: 'Quiet over loud',
    body: 'We don\'t chase trade-show theatrics. We design honest machines, ship them on time, and answer the phone after the sale.',
  },
  {
    title: 'Long-term, by default',
    body: 'A folding machine should outlast the loan that bought it. We design for fifteen years of service — and we stand behind that promise.',
  },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const config = await import('@/strk-img-config.json')
        if (cancelled || !containerRef.current) return
        sdk.ImageHelper?.loadImages?.(config.default || config, containerRef.current)
      } catch {
        // ignore
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-paper py-20 md:py-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                About ARTITECT
              </span>
            </div>
            <h1 id="about-page-title" className="font-serif font-light text-5xl md:text-7xl tracking-tight text-ink">
              Thirty years of
              <br />
              <span className="italic text-accent">folding metal.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p id="about-page-sub" className="text-graphite leading-relaxed">
              We are a small, privately held machinery manufacturer based in
              Tianjin, China. We design and build sheet metal folding machines
              for fabricators who, like us, believe a tool should disappear into
              the work.
            </p>
          </div>
        </div>
      </section>

      {/* Story image + body */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-14 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[3/2] w-full overflow-hidden border border-mist">
              <img
                alt="ARTITECT engineers at work"
                className="w-full h-full object-cover"
                data-strk-img-id="about-story-a51e7c"
                data-strk-img="[about-story-body] [about-page-title] precision engineers in workshop"
                data-strk-img-ratio="3x2"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3Crect width='3' height='2' fill='%23E5E7EB'/%3E%3C/svg%3E"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink">
              A workshop, not a factory.
            </h2>
            <p id="about-story-body" className="mt-6 text-graphite leading-relaxed">
              ARTITECT has never been about volume. We build roughly a hundred and twenty
              machines a year. Each one is configured, assembled, and tested by a small
              team that knows every customer by name. When something needs fixing — and
              eventually, in machinery, something always does — you call the people who
              built your machine, not a call center.
            </p>
            <p className="mt-5 text-graphite leading-relaxed">
              Our customers stay with us for decades. Some are now operating their second
              or third ARTITECT folder. That kind of trust is what we work for, every day.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-fog py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Our timeline
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink max-w-3xl">
              A quiet, steady evolution.
            </h2>
          </div>

          <ol className="relative border-l border-mist pl-8 md:pl-12 space-y-12">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[37px] md:-left-[49px] top-2 w-3 h-3 bg-accent rounded-full" />
                <p className="font-mono text-sm text-accent tracking-[0.18em]">{t.year}</p>
                <h3 className="font-serif text-2xl text-ink mt-2">{t.title}</h3>
                <p className="mt-2 text-graphite leading-relaxed max-w-2xl">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-12 mb-14">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-12 bg-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent">
                  What we believe
                </span>
              </div>
              <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink">
                Principles, not slogans.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-graphite leading-relaxed">
                We don't have a wall of mission statements. We have a few principles,
                shared between engineers and customers, that have guided us since 1995.
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-mist md:grid-cols-3 border border-mist">
            {values.map((v, i) => (
              <div key={v.title} className="bg-paper p-8 md:p-10">
                <p className="font-mono text-xs text-accent tracking-[0.2em]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-2xl text-ink mt-4 mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed text-graphite">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight">
            Come work with us
            <span className="italic text-accent"> — once.</span>
          </h2>
          <p className="mt-6 text-mist leading-relaxed max-w-2xl mx-auto">
            We'd rather earn a customer for thirty years than win a sale today.
            Tell us what you'd like to fold, and we'll take it from there.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 border border-paper text-paper px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-paper hover:text-ink transition-colors"
          >
            Contact our team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
