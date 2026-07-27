import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Search, BadgeCheck, ClipboardCheck, LineChart, Ship, PencilRuler } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import Card from "@/components/ui/Card"
import IconBox from "@/components/ui/IconBox"
import { services } from "@/data/site"

const iconMap = {
  Search,
  BadgeCheck,
  ClipboardCheck,
  LineChart,
  Ship,
  PencilRuler,
}

const ServicesOverview = () => {
  return (
    <section className="bg-warm-100">
      <div className="container-content py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="What we do"
            title="End-to-end sourcing, on the ground in China"
            description="Six core services, one team. From finding the right factory to making sure the container lands on time."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal hover:text-teal-hover"
          >
            See all services
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search
            return (
              <Card key={service.id} className="flex flex-col gap-4 hover:shadow-cardHover transition-shadow">
                <IconBox icon={Icon} size="md" />
                <h3 className="h-card">{service.title}</h3>
                <p className="body-text">{service.short}</p>
                <Link
                  to="/services"
                  className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal hover:text-teal-hover"
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
