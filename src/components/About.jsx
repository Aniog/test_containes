import { useScrollAnimation } from '../lib/useScrollAnimation'
import { Target, Users, Factory, TrendingUp } from 'lucide-react'

const milestones = [
  { year: '1998', event: 'Founded in Germany with a focus on precision metal forming' },
  { year: '2005', event: 'Launched the first double folder series, setting new industry standards' },
  { year: '2012', event: 'Expanded to 30+ countries with dedicated service centers' },
  { year: '2018', event: 'Introduced CNC-integrated folding machines with AI-assisted bending' },
  { year: '2024', event: 'Surpassed 12,000 machines delivered worldwide' },
]

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 ${
            headerVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <p className="text-brand-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Decades of{' '}
            <span className="text-brand-accent">Metal Forming</span>
            {' '}Expertise
          </h2>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 ${
            contentVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          {/* Left: Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-brand-dark to-brand-navy overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Factory size={80} className="text-brand-accent/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 to-transparent p-6">
                <p className="text-brand-surface/80 text-sm">Our manufacturing facility in Stuttgart, Germany</p>
              </div>
            </div>
            {/* Accent corner decoration */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-brand-accent/20 rounded-xl -z-10" />
          </div>

          {/* Right: Text */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-brand-dark mb-6">
              Precision is not just our standard — it's our obsession.
            </h3>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                ARTITECT MACHINERY was born from a simple belief: that every metalworker
                deserves access to machines that deliver factory-grade precision without
                compromise. For over 25 years, we've been engineering double folding machines,
                sheet metal folders, and metal folding solutions that push the boundaries of
                what's possible.
              </p>
              <p>
                Our team of over 200 engineers and technicians combines deep metallurgical
                knowledge with cutting-edge automation technology. Every machine that leaves
                our facility undergoes rigorous quality testing — because when your reputation
                is built on precision, there's no room for error.
              </p>
              <p>
                Today, ARTITECT machines operate in over 45 countries, powering everything
                from small fabrication shops to large-scale industrial operations. Whatever
                your bending challenge, we have the solution.
              </p>
            </div>

            {/* Key values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Target, label: 'Precision First' },
                { icon: Users, label: '200+ Engineers' },
                { icon: Factory, label: 'Own Manufacturing' },
                { icon: TrendingUp, label: 'Continuous Innovation' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-brand-surface-warm">
                  <Icon size={18} className="text-brand-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-brand-dark">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className={`${timelineVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h3 className="font-heading text-xl font-bold text-brand-dark text-center mb-10">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-brand-border -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent text-brand-dark font-heading font-bold text-sm mb-4 relative z-10">
                    {milestone.year.slice(2)}
                  </div>
                  <p className="font-heading text-lg font-bold text-brand-dark mb-1">{milestone.year}</p>
                  <p className="text-brand-muted text-xs leading-relaxed">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
