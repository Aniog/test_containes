import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"

export default function CTABanner({ title, description, buttonText = "Get a Free Sourcing Quote", buttonHref = "/contact" }) {
  return (
    <section className="bg-navy-900 py-16 md:py-20">
      <div className="container-site text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Button as={Link} to={buttonHref} variant="cta" size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
