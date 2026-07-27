import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Icon from "@/components/ui/Icon"
import { SERVICES } from "@/data/site"

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <SectionHeader
            eyebrow="What we do"
            title="End-to-end sourcing support, from search to shipment"
            subtitle="Six core services that cover the full buying journey. Mix and match based on what your project actually needs."
          />
          <Link
            to="/services"
            className="text-sm font-semibold text-[#0B2545] hover:text-[#133B6F] inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-xl border border-line bg-white p-6 md:p-7 transition-all duration-200 hover:border-[#0B2545]/30 hover:shadow-card-hover"
            >
              <div className="w-11 h-11 rounded-lg bg-[#EDF1F7] text-[#0B2545] flex items-center justify-center mb-5 group-hover:bg-[#0B2545] group-hover:text-white transition-colors">
                <Icon name={service.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{service.title}</h3>
              <p className="text-sm text-ink-subtle leading-relaxed">
                {service.short}
              </p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2545] hover:text-[#133B6F]"
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
