import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Shield, BarChart3, Users, Headphones, Globe } from 'lucide-react'

const features = [
  {
    id: 'feat-speed',
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We move quickly without cutting corners. Your project ships on time, every time.',
    titleId: 'feat-speed-title',
    descId: 'feat-speed-desc',
  },
  {
    id: 'feat-security',
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices from day one. Your data and your users are protected.',
    titleId: 'feat-security-title',
    descId: 'feat-security-desc',
  },
  {
    id: 'feat-analytics',
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Every decision backed by real insights. We measure what matters and optimize accordingly.',
    titleId: 'feat-analytics-title',
    descId: 'feat-analytics-desc',
  },
  {
    id: 'feat-team',
    icon: Users,
    title: 'Expert Team',
    description: 'A dedicated team of specialists who care deeply about the quality of their work.',
    titleId: 'feat-team-title',
    descId: 'feat-team-desc',
  },
  {
    id: 'feat-support',
    icon: Headphones,
    title: '24/7 Support',
    description: 'We\'re here when you need us. Real humans, real answers, no bots.',
    titleId: 'feat-support-title',
    descId: 'feat-support-desc',
  },
  {
    id: 'feat-global',
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across the globe with localized expertise and a worldwide network.',
    titleId: 'feat-global-title',
    descId: 'feat-global-desc',
  },
]

const Features = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="features" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why work with us?
          </h2>
          <p id="features-subtitle" className="text-lg text-slate-500 max-w-2xl mx-auto">
            We bring together the skills, tools, and mindset to help your business thrive in a competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 id={feature.titleId} className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p id={feature.descId} className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
