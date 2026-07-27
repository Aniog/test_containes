import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from "lucide-react"
import Container from "@/components/ui/Container"
import PageHero from "@/components/shared/PageHero"
import InquiryForm from "@/components/shared/InquiryForm"
import { COMPANY } from "@/data/site"

const Contact = () => {
  return (
    <>
      <PageHero
        id="contact"
        eyebrow="Contact us"
        title="Tell us about your project, and we'll respond within 1 business day"
        subtitle="Use the form, email us directly, or schedule a 20-minute intro call. All three routes reach the same team."
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight mb-2">
                Request a free sourcing quote
              </h2>
              <p className="text-ink-subtle mb-6">
                The more context you share, the more concrete our first reply
                can be.
              </p>
              <InquiryForm />
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-line bg-[#F4F6F9] p-6 md:p-7 h-full">
                <h3 className="text-lg font-bold text-ink mb-1">
                  Other ways to reach us
                </h3>
                <p className="text-sm text-ink-subtle mb-6">
                  Pick whichever channel is easiest for you.
                </p>

                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-white border border-line flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#0B2545]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold">
                        Email
                      </div>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-sm font-semibold text-ink hover:text-[#0B2545] break-all"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-white border border-line flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#0B2545]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold">
                        WhatsApp (fastest)
                      </div>
                      <a
                        href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-ink hover:text-[#0B2545]"
                      >
                        {COMPANY.whatsapp}
                      </a>
                      <div className="text-xs text-ink-muted mt-0.5">
                        Replies usually within 2 hours during business hours
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-white border border-line flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#0B2545]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold">
                        Office
                      </div>
                      <div className="text-sm font-semibold text-ink">
                        {COMPANY.phone}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-white border border-line flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#0B2545]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold">
                        Headquarters
                      </div>
                      <div className="text-sm font-semibold text-ink leading-relaxed">
                        {COMPANY.address}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-white border border-line flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#0B2545]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold">
                        Business hours
                      </div>
                      <div className="text-sm font-semibold text-ink">
                        {COMPANY.hours}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-white border border-line flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-[#0B2545]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold">
                        Languages
                      </div>
                      <div className="text-sm font-semibold text-ink">
                        English, Mandarin, Spanish, French
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-7 pt-6 border-t border-line/80">
                  <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold mb-2">
                    Already a client?
                  </div>
                  <p className="text-sm text-ink-subtle leading-relaxed">
                    Email your dedicated account manager directly. For urgent
                    inspection changes, WhatsApp is fastest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-[#F4F6F9] border-t border-line">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight">
              What happens after you submit a brief?
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                n: "01",
                t: "Triage",
                d: "A sourcing specialist reads your brief and prepares 2-3 questions if anything is unclear.",
              },
              {
                n: "02",
                t: "Response",
                d: "Within 1 business day we reply with realistic timelines, ballpark costs, and next steps.",
              },
              {
                n: "03",
                t: "Shortlist",
                d: "If you want to proceed, we put together a shortlist of 3-5 suppliers within 5-7 days.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl bg-white border border-line p-6"
              >
                <div className="text-xs font-bold text-[#D62828] mb-2">{s.n}</div>
                <div className="text-lg font-bold text-ink mb-1.5">{s.t}</div>
                <p className="text-sm text-ink-subtle leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
