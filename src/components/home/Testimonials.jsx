import * as React from "react"
import { Quote } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

const testimonials = [
  {
    quote:
      "We replaced two ageing Italian folders with a pair of DF-2400s. Setup dropped from 18 minutes to under 4. Our first-pass yield is now 99.7%.",
    name: "Marta Riedel",
    role: "Plant Manager",
    company: "Nordform Stahlbau",
    location: "Hamburg, DE",
  },
  {
    quote:
      "The MFL-3200 is the only long-bed folder we trust with architectural cladding. The angle consistency is genuinely unbelievable — 0.05° across a 3 m bend.",
    name: "David Okonkwo",
    role: "Director of Fabrication",
    company: "Meridian Cladding Ltd.",
    location: "Manchester, UK",
  },
  {
    quote:
      "ARTITECT's service team logged in from Pittsburgh and diagnosed a backgauge issue from 4,000 miles away. Replacement parts on a plane the next morning.",
    name: "Yuki Tanaka",
    role: "Operations Lead",
    company: "Sakura Precision",
    location: "Osaka, JP",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 py-24 md:py-32 border-t border-line"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="From the floor"
          title="Trusted by fabricators who measure success in microns."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-md border border-line bg-slate-850 p-7 lg:p-8"
            >
              <Quote className="w-6 h-6 text-copper-500" strokeWidth={1.5} />
              <blockquote className="mt-5 text-base text-text leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-line">
                <p className="text-sm font-semibold text-text">{t.name}</p>
                <p className="text-sm text-text-muted">
                  {t.role} · {t.company}
                </p>
                <p className="text-xs text-text-dim mt-1 tracking-eyebrow uppercase">
                  {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
