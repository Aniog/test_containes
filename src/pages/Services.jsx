import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Search, BadgeCheck, ClipboardCheck, LineChart, Ship, PencilRuler, Check } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/layout/PageHero"
import SectionHeader from "@/components/ui/SectionHeader"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import StrkImage from "@/components/sections/StrkImage"
import InquiryCTA from "@/components/sections/InquiryCTA"
import { services } from "@/data/site"

const iconMap = {
  Search,
  BadgeCheck,
  ClipboardCheck,
  LineChart,
  Ship,
  PencilRuler,
}

const Services = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Services"
        title="Sourcing, QC, and shipping — handled by one team"
        description="We work as an extension of your procurement function. Pick the service you need today; scale up to full end-to-end sourcing as your China business grows."
      />

      <section className="bg-warm-100">
        <div className="container-content py-16 md:py-20 flex flex-col gap-16 md:gap-20">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Search
            const reverse = idx % 2 === 1
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={reverse ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                  <StrkImage
                    imgId={`services-${idx}-a2c4f1`}
                    query={service.imgQuery}
                    ratio="4x3"
                    width={900}
                    alt={service.title}
                    ratioClass="aspect-[4/3]"
                    containerClassName="rounded-[6px] border border-warm-300 shadow-card"
                  />
                </div>
                <div className={reverse ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-[4px] bg-teal-light text-teal mb-5">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">
                    {service.long}
                  </p>
                  <h3 className="mt-6 text-[13px] font-semibold uppercase tracking-eyebrow text-teal">
                    What you receive
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-[15px] text-ink-secondary"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0">
                          <Check size={13} strokeWidth={2.5} />
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-warm-200 border-y border-warm-300">
        <div className="container-content py-16 md:py-20">
          <SectionHeader
            eyebrow="Not sure what you need?"
            title="Tell us your product and we will suggest the right service mix"
            description="Most buyers start with sourcing and pre-shipment inspection, then add factory audits and full shipping as their volume grows. We will recommend what actually fits your situation."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button as={Link} to="/contact#inquiry" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight size={18} />
            </Button>
            <Button as={Link} to="/how-it-works" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  )
}

export default Services
