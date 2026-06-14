import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <section className="bg-ink border-t border-line">
      <div className="container-x py-24 md:py-28">
        <div className="rounded-md border border-line bg-gradient-to-br from-slate-850 via-slate-850 to-ink p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-copper-500/10 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Ready when you are</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-text leading-tight text-balance">
                Spec a machine today. <br className="hidden md:block" />
                <span className="text-copper-400">Ship it within twelve weeks.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
                We hold stock on five of our most popular configurations. Walk
                into a quote, walk out with a delivery date.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild={false} size="lg" className="group">
                <Link to="/contact" className="flex items-center gap-2">
                  Request a quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link to="/products" className="flex items-center gap-2">
                  Compare machines
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
