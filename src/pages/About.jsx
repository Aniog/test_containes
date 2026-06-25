import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Target, Lightbulb, Heart, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'Every machine is calibrated to deliver folds within ±0.1° accuracy, ensuring your products meet the tightest tolerances.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'We continuously invest in R&D to bring the latest automation and control technologies to our machines.',
  },
  {
    icon: Heart,
    title: 'Customer Focused',
    description: 'From initial consultation to after-sales support, we build lasting partnerships with every client.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Feedback from thousands of operators worldwide drives our ongoing product development.',
  },
]

const timeline = [
  { year: '1994', event: 'Founded in Germany with a focus on manual sheet metal folders.' },
  { year: '2002', event: 'Launched our first digitally-controlled double folding machine.' },
  { year: '2010', event: 'Expanded to serve 25+ countries with dedicated support teams.' },
  { year: '2018', event: 'Introduced CNC-automated folding systems for high-volume production.' },
  { year: '2024', event: 'Reached 2,500+ installations worldwide with 99.8% uptime.' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-text-light tracking-tight mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-text-light/70 max-w-2xl leading-relaxed">
            Three decades of engineering excellence, delivering precision sheet metal folding solutions to manufacturers worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <img
                data-strk-img-id="about-factory-s9t0u1"
                data-strk-img="[about-story-desc] [about-story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY factory"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 id="about-story-title" className="text-3xl lg:text-4xl font-bold text-text tracking-tight mb-6">
                Crafting Precision Since 1994
              </h2>
              <p id="about-story-desc" className="text-text-muted leading-relaxed mb-6">
                ARTITECT MACHINERY was founded with a simple mission: to build the most reliable and precise sheet metal folding machines in the industry. What started as a small workshop in Germany has grown into a global operation serving manufacturers across 45 countries.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Our team of engineers, designers, and metalworking experts work together to push the boundaries of what folding machines can achieve. Every machine that leaves our facility is built to perform flawlessly for decades.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight mb-4">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface p-8 rounded-xl border border-border flex gap-5"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">{value.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight">
              Milestones Along the Way
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-12 bg-border" />
                  )}
                </div>
                <div className="pb-10">
                  <p className="text-accent font-semibold text-sm mb-1">{item.year}</p>
                  <p className="text-text-muted leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
