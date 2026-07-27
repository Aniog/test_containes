import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function InquiryCTASection() {
  const navigate = useNavigate()

  return (
    <section className="bg-brand py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Ready to find the right supplier in China?
        </h2>
        <p className="mt-4 text-lg text-slate-100">
          Tell us what you need and we will reply within one business day with a clear next step.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-brand hover:bg-slate-100"
            onClick={() => navigate("/contact")}
          >
            Get a Free Sourcing Quote
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand"
            onClick={() => navigate("/how-it-works")}
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
