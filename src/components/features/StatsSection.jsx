import { Microscope, Bug, Droplets, Dna } from 'lucide-react'

const stats = [
  { icon: Microscope, value: '10M+', label: 'Species Discovered', color: 'text-primary' },
  { icon: Bug, value: '1 Trillion', label: 'Bacteria in Your Body', color: 'text-secondary' },
  { icon: Droplets, value: '1 Million', label: 'Organisms per mL of Water', color: 'text-accent' },
  { icon: Dna, value: '3.2 Billion', label: 'Base Pairs in Human DNA', color: 'text-glow' },
]

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-surface-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm tracking-widest uppercase mb-3 block">By The Numbers</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            The Scale of the Unseen
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Numbers that reveal just how vast the microscopic world truly is
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 bg-surface border border-surface-light rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-midnight flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                </div>
                <div className={`font-heading text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">
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

export default StatsSection
