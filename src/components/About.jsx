import { Target, Users, ThumbsUp, Clock } from 'lucide-react'

const stats = [
  { icon: Clock, value: '25+', label: 'Years Experience' },
  { icon: Target, value: '5000+', label: 'Machines Installed' },
  { icon: Users, value: '60+', label: 'Countries Served' },
  { icon: ThumbsUp, value: '99.7%', label: 'Customer Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — narrative */}
          <div>
            <span className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-accent-gold" />
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-family-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Crafting the Future of{' '}
              <span className="text-accent-gold">Metal Fabrication</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-base">
              <p>
                ARTITECT MACHINERY was founded on a simple belief: that sheet
                metal fabricators deserve machines that work as hard as they do.
                For over two decades, we have designed and built double folding
                machines, sheet metal folders, and metal folding machines that
                set the industry standard.
              </p>
              <p>
                Our engineering team combines decades of hands-on fabrication
                experience with cutting-edge design and manufacturing
                techniques. Every machine that leaves our facility undergoes
                rigorous testing to ensure it delivers the precision,
                durability, and reliability our customers depend on.
              </p>
              <p>
                From small job shops to multinational manufacturers, ARTITECT
                MACHINERY is the trusted partner for folding solutions that
                drive productivity and profitability.
              </p>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-card border border-border-subtle rounded-2xl p-6 md:p-8 text-center hover:border-accent-gold/20 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-accent-gold mx-auto mb-4" />
                <div className="font-[family-name:var(--font-family-heading)] text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
