import { Factory, Target, Users, Award, Globe } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Engineering Excellence Since 1998
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 font-semibold text-xs uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
              Built on a Foundation of Precision
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              ARTITECT MACHINERY was founded with a singular vision: to build the most precise and reliable sheet metal folding machines in the world. What started as a small engineering workshop has grown into a globally recognized manufacturer serving industries across automotive, aerospace, HVAC, and construction.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our team of engineers combines decades of experience in mechanical design, control systems, and manufacturing processes. Every machine that leaves our factory is the result of rigorous testing and an uncompromising commitment to quality.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, ARTITECT machines are operating in over 40 countries, trusted by leading manufacturers who demand the highest standards of precision and reliability.
            </p>
          </div>
          <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center border border-slate-200">
            <Factory className="w-24 h-24 text-slate-300" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precision',
                desc: 'We hold ourselves to the tightest tolerances in the industry. Every component is machined and assembled to exacting standards.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                desc: 'Your success is our success. We work closely with every customer to understand their unique requirements and deliver tailored solutions.',
              },
              {
                icon: Award,
                title: 'Quality',
                desc: 'From raw materials to final assembly, quality is built into every step of our manufacturing process. ISO 9001 certified.',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                desc: 'With distribution partners worldwide and multilingual support, we serve customers wherever they operate.',
              },
              {
                icon: Factory,
                title: 'Innovation',
                desc: 'We continuously invest in R&D to push the boundaries of what sheet metal folding machines can achieve.',
              },
              {
                icon: Award,
                title: 'Reliability',
                desc: 'Our machines are built to run 24/7 in demanding production environments. Downtime is not an option.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '40+', label: 'Countries Served' },
            { value: '5,000+', label: 'Machines Installed' },
            { value: '98%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}