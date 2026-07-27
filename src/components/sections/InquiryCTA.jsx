import React from "react"
import InquiryForm from "./InquiryForm"

const InquiryCTA = ({ id = "inquiry" }) => {
  return (
    <section id={id} className="bg-navy text-ink-onDark">
      <div className="container-content py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow text-teal-light">Get a Free Quote</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-[1.15] tracking-[-0.015em] text-ink-onDark">
              Tell us what you need. We reply within one business day.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-onDarkMuted max-w-xl">
              Share your product, target specs, quantity, and destination port.
              We will send back a sourcing plan, an indicative cost, and the
              names of the factories we would shortlist for your project.
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-[14px] text-ink-onDarkMuted">
              <li className="inline-flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-light shrink-0" />
                No commitment, no upfront fee for an initial sourcing plan.
              </li>
              <li className="inline-flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-light shrink-0" />
                Reply from a real sourcing manager, not a bot.
              </li>
              <li className="inline-flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-light shrink-0" />
                Your information is used only to respond to your inquiry.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm sourcePage="Home" variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquiryCTA
