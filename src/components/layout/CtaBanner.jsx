import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaBanner({ title, subtitle }) {
  return (
    <section className="bg-[#0f2a4a]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title || "Ready to source from China with confidence?"}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              {subtitle ||
                "Tell us about your product and we will come back with a short plan and next steps, usually within one business day."}
            </p>
          </div>
          <Button as={Link} to="/contact" variant="accent" size="lg" className="shrink-0">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
