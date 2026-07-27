import { useEffect } from "react"
import SectionHeader from "@/components/shared/SectionHeader"
import { ClipboardList, Search, FileCheck, Handshake, Truck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import ImageContainer from "@/components/shared/ImageContainer"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Share Your Requirements",
    description: "Fill out our inquiry form or book a call. Tell us about your product, target price, quantity, certifications, and destination country.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Find & Shortlist Suppliers",
    description: "Our team searches our network and the market to identify 3–5 qualified factories. We send you a comparison with pricing, lead time, and factory notes.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Verify & Sample",
    description: "We audit the best candidates, arrange samples, and report back with photos, videos, and a clear recommendation. You decide whether to move forward.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Place Order & Monitor Production",
    description: "We help finalize terms, then track every production milestone. Our bilingual staff communicates directly with the factory on your behalf.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Quality Check & Shipping",
    description: "We perform pre-shipment inspection, coordinate loading, prepare export documents, and follow the shipment until it reaches your port or warehouse.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Ongoing Support",
    description: "After delivery, we remain available for reorders, supplier reviews, and continuous improvement on quality and lead time.",
  },
]

export default function HowItWorks() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "How It Works | SSourcing China"
  }, [])

  return (
    <ImageContainer>
      <div className="bg-white">
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              How It Works
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              A transparent process designed to reduce risk and keep you in control.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Six steps from inquiry to delivery"
              description="We keep communication clear, reports regular, and decisions documented."
              centered
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-bold">
                      {step.number}
                    </div>
                    <step.icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  What you can expect from us
                </h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand shrink-0" />
                    A dedicated bilingual project manager
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand shrink-0" />
                    Written reports with photos and data
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand shrink-0" />
                    No obligation until you approve a quotation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand shrink-0" />
                    Transparent fees with no hidden commissions
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  data-strk-img-id="how-it-works-img-001"
                  data-strk-img="[hiw-expect-title] [hiw-expect-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Sourcing team coordinating factory visits and quality control"
                  className="h-full w-full object-cover"
                />
              </div>
              <span id="hiw-expect-title" className="hidden">Sourcing team coordinating factory visits and quality control</span>
              <span id="hiw-expect-subtitle" className="hidden">China sourcing agent project management</span>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" onClick={() => navigate("/contact")}>
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ImageContainer>
  )
}
