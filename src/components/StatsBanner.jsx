import { Factory, Globe, Users, Wrench } from 'lucide-react'

const stats = [
  { icon: Factory, value: '2,500+', label: 'Machines Installed' },
  { icon: Globe, value: '45+', label: 'Countries Served' },
  { icon: Users, value: '98%', label: 'Client Retention' },
  { icon: Wrench, value: '25+', label: 'Years in Industry' },
]

export default function StatsBanner() {
  return (
    <section className="py-14 bg-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-white/80">
                    {stat.label}
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
