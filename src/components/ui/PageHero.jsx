import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="heading-1">{title}</h1>
          {description && <p className="lead mt-5 max-w-2xl">{description}</p>}
          <div className="mt-8">
            <Button to="/contact" variant="accent">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
