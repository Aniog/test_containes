import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SERVICES } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"
import InquiryForm from "@/components/shared/InquiryForm"
import { Section, SectionHeader } from "@/components/shared/Section"

export default function Services() {
  const heroRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <>
      <section ref={heroRef} className="bg-gradient-to-b from-white to-page">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:py-20">
          <div>
            <p className="eyebrow">Our services</p>
            <h1
              id="services-h1"
              className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl"
            >
              End-to-end China sourcing — from factory to your warehouse
            </h1>
            <p
              id="services-sub"
              className="mt-4 max-w-xl text-base text-ink-700 md:text-lg"
            >
              Six core services that cover everything between "I have an idea"
              and "the container is on the ship." Use what you need, skip what
              you do not.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                See the Process
              </Link>
            </div>
          </div>
          <div
            className="aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft bg-slate-100"
            data-strk-bg-id="services-hero-bg"
            data-strk-bg="[services-sub] [services-h1]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="800"
          >
            <img
              alt="Sourcing services overview — supplier verification, quality inspection and shipping coordination"
              className="h-full w-full object-cover"
              data-strk-img-id="services-hero-img"
              data-strk-img="[services-sub] [services-h1]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>

      {SERVICES.map((s, idx) => (
        <Section
          key={s.id}
          className={idx % 2 === 0 ? "bg-white" : "bg-page"}
          id={s.id}
        >
          <div className="container-x">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="eyebrow">Service {String(idx + 1).padStart(2, "0")}</p>
                <h2
                  id={`svc-${s.id}-h`}
                  className="mt-3 text-3xl font-semibold text-ink-900"
                >
                  {s.title}
                </h2>
                <p
                  id={`svc-${s.id}-p`}
                  className="mt-4 text-base text-ink-700 md:text-lg"
                >
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-ink-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/contact" className="btn-ghost">
                    Discuss this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft bg-slate-100"
                data-strk-bg-id={`svc-${s.id}-bg`}
                data-strk-bg={`[svc-${s.id}-p] [svc-${s.id}-h]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="700"
              >
                <img
                  alt={s.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`svc-${s.id}-img`}
                  data-strk-img={`[svc-${s.id}-p] [svc-${s.id}-h]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="Ready when you are"
            title="Tell us where you are in the process"
            subtitle="We will come back with the next practical step, not a generic sales email."
          />
          <div className="mt-10">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Next step"
        title="Not sure which service you need?"
        subtitle="Send a short description of your project. We will suggest the most cost-effective way to start."
        primaryLabel="Talk to a Project Manager"
        primaryTo="/contact"
        secondaryLabel="See How It Works"
        secondaryTo="/how-it-works"
      />
    </>
  )
}
