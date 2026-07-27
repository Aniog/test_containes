import { Users, Globe, Award, Clock } from "lucide-react"

const stats = [
  { icon: Globe, value: "30+", label: "Countries served" },
  { icon: Users, value: "500+", label: "Buyer projects managed" },
  { icon: Award, value: "12+", label: "Years in China sourcing" },
  { icon: Clock, value: "24h", label: "Initial quote response" },
]

export default function Trust() {
  return (
    <section className="bg-primary py-16 md:py-20" id="trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="trust-title" className="text-3xl font-bold text-white md:text-4xl">
              Why Buyers Trust SSourcing China
            </h2>
            <p id="trust-subtitle" className="mt-4 text-lg text-white/80">
              We are based in Shenzhen, speak the language, know the factories, and act as your eyes and ears on the ground.
            </p>
            <ul className="mt-8 space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>Local team with manufacturing and export experience</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>Transparent reporting and clear communication</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>No hidden commissions from factories</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>Flexible service packages for startups to enterprise buyers</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <stat.icon className="h-8 w-8 text-accent" />
                <span className="mt-3 text-4xl font-extrabold text-white">{stat.value}</span>
                <span className="mt-1 text-sm text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
