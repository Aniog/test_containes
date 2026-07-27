import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function CTASection() {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="container-main text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to source from China?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Get a free quote and see how we can help you find the right supplier, control quality, and ship on time.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-accent hover:bg-slate-100">
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
