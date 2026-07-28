import { Link } from "react-router-dom"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { Button } from "@/components/ui/Button"
import { CheckCircle } from "lucide-react"
import { sourcingProcess } from "@/data/siteData"

export default function HowItWorks() {
  useDocumentTitle("How It Works | SSourcing China")

  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="container-main text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Process
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            How SSourcing China works
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            A five-step process designed to reduce risk, improve communication,
            and keep your orders on track.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {sourcingProcess.map((item, index) => (
              <div
                key={item.step}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {item.step}
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900 lg:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-lg text-slate-600">{item.description}</p>
                  <ul className="mt-5 space-y-2">
                    {[
                      "Clear deliverables and timelines",
                      "Regular updates from your project manager",
                      "Bilingual support with factories",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`process-step-${item.step}-img`}
                      data-strk-img={`[process-title-${item.step}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <h3 id={`process-title-${item.step}`} className="sr-only">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Ready to start your sourcing project?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Share your product requirements and receive a tailored sourcing plan
            within 24 hours.
          </p>
          <div className="mt-6">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
