import { Target, Shield, Headphones, Cpu, Gauge, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Precision Engineering',
    titleId: 'feature-precision-title',
    desc: 'Advanced CNC-controlled systems ensure millimeter-accurate bends with consistent repeatability across thousands of cycles.',
    descId: 'feature-precision-desc',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    titleId: 'feature-durability-title',
    desc: 'Heavy-duty steel construction and premium components guarantee years of reliable service in demanding industrial environments.',
    descId: 'feature-durability-desc',
  },
  {
    icon: Gauge,
    title: 'Maximize Productivity',
    titleId: 'feature-efficiency-title',
    desc: 'Fast cycle times and intuitive controls reduce setup time and increase throughput for high-volume production runs.',
    descId: 'feature-efficiency-desc',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    titleId: 'feature-innovation-title',
    desc: 'Latest automation features and smart controls keep your operation competitive with cutting-edge capabilities.',
    descId: 'feature-innovation-desc',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    titleId: 'feature-support-title',
    desc: 'Comprehensive technical support, training, and spare parts availability ensure minimal downtime for your operation.',
    descId: 'feature-support-desc',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    titleId: 'feature-warranty-title',
    desc: 'Extended warranties and rigorous quality testing back every machine we deliver to give you complete peace of mind.',
    descId: 'feature-warranty-desc',
  },
]

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 id="features-title" className="section-title">Engineered for Excellence</h2>
          <p id="features-subtitle" className="section-subtitle">
            Every ARTITECT machine is built with one goal: to be the most reliable, 
            precise, and efficient solution in your workshop.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3 id={feature.titleId} className="feature-title">{feature.title}</h3>
              <p id={feature.descId} className="feature-description">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
