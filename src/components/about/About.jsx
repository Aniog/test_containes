import { Cog, Zap, Wrench, Users, Globe, Clock } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Every machine undergoes rigorous quality testing to ensure 0.01mm bending accuracy across all operations.',
  },
  {
    icon: Zap,
    title: 'Fast Production',
    description: 'Servo-driven systems and optimized tool paths reduce cycle times by up to 40% compared to conventional machines.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design and self-diagnostic systems minimize downtime. Most routine maintenance takes under 30 minutes.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team of engineers provides on-site training, commissioning, and 24/7 technical support worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Over 2,500 machines installed across 45 countries, supported by an extensive dealer and service network.',
  },
  {
    icon: Clock,
    title: 'Built to Last',
    description: 'Heavy-duty welded frames and premium components deliver 15+ years of reliable, trouble-free operation.',
  },
]

const aboutImgId = 'about-factory-img-6d4e2b'
const aboutTitleId = 'about-section-title'
const aboutDescId = 'about-section-desc'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2
              id={aboutTitleId}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-6"
            >
              Trusted by Fabricators{' '}
              <span className="text-primary">Worldwide</span>
            </h2>
            <p
              id={aboutDescId}
              className="text-muted text-lg leading-relaxed mb-6"
            >
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal
              fabrication technology. Our double folding machines and metal folders are designed
              in-house by a team of mechanical and software engineers who understand the demands
              of modern production environments.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              From small workshops to large-scale industrial plants, we deliver machines that
              combine exceptional build quality with intuitive operation, helping our customers
              achieve consistent results and maximize their productivity.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary-light">
              <img
                data-strk-img-id={aboutImgId}
                data-strk-img={`[${aboutDescId}] [${aboutTitleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl shadow-2xl p-6 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-extrabold text-accent">25+</div>
                  <div className="text-xs text-steel mt-0.5">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-accent">45</div>
                  <div className="text-xs text-steel mt-0.5">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-surface rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
