import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import SectionHeader from "@/components/sections/SectionHeader"
import { services } from "@/data/content"

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Sourcing services that cover the whole journey"
          description="From finding the right factory to delivering finished goods, we manage every step so you can buy from China with confidence."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Card key={s.id} className="flex flex-col p-6 transition-shadow hover:shadow-md md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59e0b]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f2a4a] hover:underline"
          >
            See all services in detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
