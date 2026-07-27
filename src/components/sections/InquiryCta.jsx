import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import InquiryForm from "@/components/shared/InquiryForm"
import { Section } from "@/components/shared/Section"

export default function InquiryCta() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <Section id="contact" className="bg-white">
      <div className="container-x" ref={ref}>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Get a Free Sourcing Quote</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
              Tell us what you need. We will reply within one business day.
            </h2>
            <p className="mt-4 text-base text-ink-700 md:text-lg">
              Fill in the form on the right. The more detail you can share —
              product, specs, target quantity, deadline — the faster we can
              give you a useful answer.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                First shortlist of qualified factories within 3–7 working days
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                Transparent costing — factory price, our service fee and shipping
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                No commitment, no fees for the first conversation
              </li>
            </ul>

            <div
              className="mt-8 hidden aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft bg-slate-100 lg:block"
              data-strk-bg-id="inquiry-image-bg-2c8e1a"
              data-strk-bg="[inquiry-section-title] [inquiry-section-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="500"
            >
              <img
                alt="A project manager reviewing product samples and shipping documents at a desk"
                className="h-full w-full object-cover"
                data-strk-img-id="inquiry-image-2c8e1a-img"
                data-strk-img="[inquiry-section-title] [inquiry-section-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <p id="inquiry-section-title" className="sr-only">Get a Free Sourcing Quote</p>
            <p id="inquiry-section-subtitle" className="sr-only">Tell us what you need</p>
          </div>

          <InquiryForm />
        </div>
      </div>
    </Section>
  )
}
