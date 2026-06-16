import { Settings, Shield, Zap, Award, Clock, Headphones } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Every machine is built with micron-level accuracy for consistent, high-quality results.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction ensures decades of reliable operation in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Advanced technology delivers faster cycle times and increased productivity.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO certified manufacturing with rigorous quality control at every stage.',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Intuitive controls and pre-configured settings minimize downtime and training.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team available to assist with installation and maintenance.',
  },
]

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-section text-4xl md:text-5xl text-brand-primary mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-body">
            Our commitment to quality and innovation sets us apart in the metal folding industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-gray-100 hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                <feature.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-brand-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
