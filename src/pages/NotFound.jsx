import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Button from "@/components/ui/Button"

const NotFound = () => {
  return (
    <section className="bg-warm-100 min-h-[60vh] flex items-center">
      <div className="container-content py-20 text-center max-w-xl mx-auto">
        <span className="eyebrow text-teal">404</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.015em] text-ink">
          That page didn't make it onto the vessel.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">
          The page you were looking for has moved or never existed. Try one of
          the pages below, or send us a sourcing inquiry.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button as={Link} to="/" variant="primary" size="lg">
            <ArrowLeft size={16} />
            Back to home
          </Button>
          <Button as={Link} to="/contact#inquiry" variant="secondary" size="lg">
            Send an inquiry
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NotFound
