import { Award, Globe, Users, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Award, value: '25+', label: 'Years of Excellence', description: 'Delivering precision machinery since 1999' },
  { icon: Globe, value: '40+', label: 'Countries Served', description: 'Global distribution network' },
  { icon: Users, value: '2,000+', label: 'Satisfied Clients', description: 'Trusted by manufacturers worldwide' },
  { icon: TrendingUp, value: '5,000+', label: 'Machines Installed', description: 'Proven track record of reliability' },
]

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                data-strk-img-id="about-factory-img-k8m2p5"
                data-strk-img="[about-title] manufacturing facility metal machinery factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Manufacturing Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-900 text-white rounded-2xl px-8 py-6 shadow-2xl hidden lg:block">
              <p className="text-4xl font-bold text-accent-400">25+</p>
              <p className="text-sm text-brand-200 font-medium mt-1">Years of<br/>Excellence</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-500/30 rounded-xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-accent-600 font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mt-3 leading-tight">
              Precision Engineering<br/>
              <span className="text-accent-500">Since 1999</span>
            </h2>

            <div className="mt-8 space-y-5 text-brand-600 leading-relaxed">
              <p>
                ARTITECT MACHINERY has been at the forefront of sheet metal folding technology 
                for over two decades. Our double folding machines are designed and manufactured 
                in our state-of-the-art facility, combining traditional craftsmanship with 
                modern engineering excellence.
              </p>
              <p>
                We specialize in producing high-performance metal folding machines that serve 
                industries from HVAC and roofing to aerospace and automotive manufacturing. 
                Every machine that leaves our facility undergoes rigorous quality testing to 
                ensure it meets our exacting standards.
              </p>
            </div>

            {/* Mission values */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-brand-50 rounded-xl p-5">
                <h4 className="font-bold text-brand-900 text-sm">Our Mission</h4>
                <p className="text-brand-500 text-sm mt-2">
                  To empower fabricators worldwide with machines that deliver uncompromising precision.
                </p>
              </div>
              <div className="bg-brand-50 rounded-xl p-5">
                <h4 className="font-bold text-brand-900 text-sm">Our Promise</h4>
                <p className="text-brand-500 text-sm mt-2">
                  Every machine backed by comprehensive support and industry-leading warranty.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-b from-brand-50 to-white rounded-xl border border-brand-100"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent-600" />
                </div>
                <p className="text-3xl font-bold text-brand-900">{stat.value}</p>
                <p className="text-sm font-semibold text-brand-700 mt-1">{stat.label}</p>
                <p className="text-xs text-brand-400 mt-1">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
