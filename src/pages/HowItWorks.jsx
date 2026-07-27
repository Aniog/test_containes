import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import {
  FileText,
  Search,
  FlaskConical,
  Handshake,
  Factory,
  ClipboardCheck,
  Ship,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { processSteps } from "@/data/content"

const iconMap = [
  FileText,
  Search,
  FlaskConical,
  Handshake,
  Factory,
  ClipboardCheck,
  Ship,
]

export default function HowItWorks() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <Section background="light" className="pt-12 md:pt-20" id="top">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            How It Works
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-navy-600 tracking-tight">
            Seven steps from brief to delivered goods
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            A predictable process with clear deliverables at every stage, so
            you always know where your project stands and what happens next.
          </p>
        </div>
      </Section>

      <Section background="white" className="pt-0">
        <div ref={ref} className="relative">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[idx] || CheckCircle2
              const reverse = idx % 2 === 1
              return (
                <li
                  key={step.step}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  <div
                    className={
                      "hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2 md:z-10 h-12 w-12 items-center justify-center rounded-full bg-navy-600 text-white font-bold text-sm shadow-navyGlow"
                    }
                  >
                    {step.step}
                  </div>

                  <div
                    className={
                      reverse
                        ? "md:col-start-2 md:row-start-1"
                        : "md:col-start-1 md:row-start-1"
                    }
                  >
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-card">
                      <div className="flex items-center gap-3">
                        <span className="md:hidden grid h-9 w-9 place-items-center rounded-md bg-navy-600 text-white font-bold text-xs">
                          {step.step}
                        </span>
                        <div className="grid h-10 w-10 place-items-center rounded-md bg-navy-50 text-navy-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-lg md:text-xl font-semibold text-navy-600">
                          {step.title}
                        </h2>
                      </div>
                      <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Section>

      <Section background="light">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
              What you can expect from us
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
              We treat every project as a working partnership, not a
              transaction. Here is what is included with every engagement.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "A dedicated account manager in your time zone",
                "All communication in English (or your language)",
                "Photo and video evidence at every checkpoint",
                "Written reports — not verbal promises",
                "Transparent fee structure, quoted up-front",
                "NDAs and IP protection on request",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-500 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
                Get started
              </p>
              <h3 className="mt-2 text-2xl font-bold text-navy-600">
                Send us your sourcing brief
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We will reply within 24 hours with a sourcing plan and a
                written quote for the services you need.
              </p>
              <div className="mt-5">
                <Button to="/contact" variant="primary" size="md">
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
