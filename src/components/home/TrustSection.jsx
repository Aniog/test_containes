import React from 'react'
import {
  Award,
  Globe,
  Users,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle2,
  Star,
} from 'lucide-react'

const stats = [
  { number: '10+', label: 'Years Experience', icon: Clock },
  { number: '500+', label: 'Verified Suppliers', icon: Users },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '98%', label: 'Client Satisfaction', icon: Star },
]

const trustPoints = [
  {
    icon: Shield,
    title: 'Registered & Licensed',
    description: 'Officially registered business with all required licenses for import/export operations in China.',
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Holding relevant certifications for quality management and international trade compliance.',
  },
  {
    icon: Users,
    title: 'Local Team in China',
    description: 'Our team of 20+ professionals is based in Guangzhou, ready to visit factories and inspect goods.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Successfully managed over 2,000 sourcing projects with a 98% client satisfaction rate.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Process',
    description: 'Regular updates, detailed reports, and full visibility at every stage of your sourcing journey.',
  },
  {
    icon: Globe,
    title: 'International Standards',
    description: 'We follow international quality standards and best practices for global trade compliance.',
  },
]

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Trusted Partner for China Sourcing
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not just a sourcing company — we're your on-the-ground team in China,
            committed to protecting your interests and delivering results.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
