import Container from "@/components/ui/Container"
import { STATS } from "@/data/site"

const StatsBar = () => {
  return (
    <section className="bg-[#F4F6F9] border-y border-line">
      <Container>
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-ink-muted mt-1.5 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default StatsBar
