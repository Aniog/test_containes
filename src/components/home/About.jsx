import { Factory, Award, Users, Wrench } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Factory, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Countries Served' },
    { icon: Wrench, value: '24/7', label: 'Support Available' },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
              <Factory className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            </div>

            <h2 id="about-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Engineering Excellence Since 1998
            </h2>

            <p id="about-description" className="text-lg text-text-secondary leading-relaxed">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades. We specialize in designing and manufacturing high-precision double folding machines that meet the demanding requirements of modern industrial fabrication.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for businesses worldwide. Every machine we produce reflects our dedication to engineering excellence and our understanding of the metalworking industry.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-surface rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Factory className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Precision Engineering</h3>
            <p className="text-text-secondary leading-relaxed">
              Every component is meticulously crafted to ensure unparalleled accuracy and repeatability in every fold.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Quality Assurance</h3>
            <p className="text-text-secondary leading-relaxed">
              Rigorous testing and quality control processes ensure our machines meet the highest industry standards.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Customer Support</h3>
            <p className="text-text-secondary leading-relaxed">
              Dedicated technical support and comprehensive training to maximize your investment and productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
