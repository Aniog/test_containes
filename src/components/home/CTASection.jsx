import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-brand-600 py-16 md:py-20">
      <div className="container-page text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Ready to source from China with confidence?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
          Tell us what you need. We will respond within 24 hours with a clear next step and a free sourcing quote.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-brand-50">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
