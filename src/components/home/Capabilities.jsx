import * as React from "react"
import {
  Cpu,
  Gauge,
  Shield,
  Wrench,
  Boxes,
  Workflow,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

const capabilities = [
  {
    icon: Cpu,
    title: "Adaptive CNC control",
    body:
      "Our ARTITECT OS learns material spring-back and adjusts press force in real time. No more test bends, no more scrap.",
    tag: "Control",
  },
  {
    icon: Gauge,
    title: "Repeatability to 0.01 mm",
    body:
      "Closed-loop linear encoders on every axis. Spec the angle once, get the angle every time — across 100,000 cycles.",
    tag: "Precision",
  },
  {
    icon: Shield,
    title: "Frames that outlast trends",
    body:
      "Welded, stress-relieved steel frames weighing 4–9 tonnes. Built for three shifts, seven days, no excuses.",
    tag: "Structure",
  },
  {
    icon: Wrench,
    title: "60-second tool change",
    body:
      "Quick-clamp top and bottom tools with RFID profiles. Operators can re-tool a job in under a minute.",
    tag: "Tooling",
  },
  {
    icon: Boxes,
    title: "End-to-end automation",
    body:
      "Pair any machine with our robotic loaders, stackers and conveyor lines for lights-out fabrication.",
    tag: "Automation",
  },
  {
    icon: Workflow,
    title: "Industry 4.0 ready",
    body:
      "OPC-UA, MTConnect, REST and Modbus — your ARTITECT will speak the language of your factory floor.",
    tag: "Connectivity",
  },
]

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-slate-950 py-24 md:py-32 border-t border-line"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="What you get"
          title="Engineered for the floor, not the brochure."
          subtitle="Six capabilities that we refuse to compromise on. Every machine we ship is built around them."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
          {capabilities.map(({ icon: Icon, title, body, tag }) => (
            <article
              key={title}
              className="bg-slate-950 p-8 lg:p-10 group hover:bg-slate-850 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-slate-850 text-copper-400 group-hover:border-copper-500/60 transition-colors">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] tracking-eyebrow uppercase text-text-dim">
                  {tag}
                </span>
              </div>
              <h3 className="mt-7 text-lg font-semibold text-text">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
