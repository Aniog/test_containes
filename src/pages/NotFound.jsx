import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Seo from "@/components/shared/Seo.jsx"

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | SSourcing China" description="The page you are looking for does not exist." />
      <section className="bg-white">
        <div className="container-x py-24 md:py-32 text-center">
          <p className="eyebrow mb-3">404</p>
          <h1 className="h-display">Page not found</h1>
          <p className="body-base mt-4 max-w-md mx-auto">
            The page you are looking for has moved or no longer exists. From
            here you can return to the homepage or get in touch with a sourcing
            specialist.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to home
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
