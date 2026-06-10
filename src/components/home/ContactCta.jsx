import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function ContactCta() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Contact Artitect"
      className="relative isolate overflow-hidden bg-ink text-bone"
    >
      <div
        aria-hidden="true"
        data-strk-bg-id="cta-bg"
        data-strk-bg="[cta-eyebrow] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 opacity-25"
      />
      <div className="container-content section-pad-lg relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span id="cta-eyebrow" className="eyebrow-light">
              Start a conversation
            </span>
            <h2
              id="cta-title"
              className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-bone md:text-5xl lg:text-6xl text-balance"
            >
              Tell us what you fold.
              <br />
              <span className="text-brass">We will spec the machine.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
              Send a sample drawing, a material spec, and a rough production
              volume. We will respond with a series, a configuration, and a
              fixed-price quote within two business days.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact?topic=quote" className="btn-accent">
                Request a quote
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link to="/contact?topic=demo" className="btn-outline-light">
                Book a factory visit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-ink-soft/40 p-8 md:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-brass">
                Direct line
              </h3>
              <ul className="mt-6 space-y-5 text-bone">
                <li className="flex items-start gap-3">
                  <Phone
                    className="mt-1 h-4 w-4 text-brass"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-xs uppercase tracking-eyebrow text-bone/60">
                      Sales & engineering
                    </p>
                    <a
                      href="tel:+4971140008800"
                      className="font-serif text-2xl text-bone hover:text-brass-light"
                    >
                      +49 711 4000 8800
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-brass" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-eyebrow text-bone/60">
                      Email
                    </p>
                    <a
                      href="mailto:sales@artitect-machinery.com"
                      className="font-serif text-2xl text-bone hover:text-brass-light break-all"
                    >
                      sales@artitect-machinery.com
                    </a>
                  </div>
                </li>
              </ul>

              <div className="hairline-dark mt-10" />
              <p className="mt-6 text-sm text-bone/60">
                Stuttgart HQ — open Monday to Friday, 07:30 – 17:30 CET.
                On-site service available in 48 countries via regional
                partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
