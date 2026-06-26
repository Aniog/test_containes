import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const trustBadges = [
  "Supplier verification",
  "Factory audits",
  "Quality inspections",
  "Shipping coordination",
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-9f2a1c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="container-page relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="secondary" className="mb-5 bg-brand-900/50 text-brand-100 border-brand-700">
              China Sourcing Agent Since 2012
            </Badge>
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-300 md:text-xl max-w-xl">
              Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all through one trusted partner in China.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-white">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-500 text-white hover:bg-white/10 hover:text-white bg-transparent">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {trustBadges.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-3 shadow-2xl backdrop-blur">
              <img
                data-strk-img-id="hero-feature-img-3b7e9d"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing and quality control"
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Verified suppliers</p>
              <p className="mt-1 text-3xl font-bold text-white">2,400+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
