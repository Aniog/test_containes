import { Factory, Award, Users, Globe } from 'lucide-react'

const stats = [
  { icon: Factory, value: '25+', label: 'Years of Engineering' },
  { icon: Award, value: '1,200+', label: 'Machines Installed' },
  { icon: Users, value: '850+', label: 'Satisfied Clients' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
]

export default function TrustBadges() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}