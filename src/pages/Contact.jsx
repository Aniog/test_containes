import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react"
import InquiryForm from "@/components/shared/InquiryForm"
import StrkImageLoader from "@/components/shared/StrkImageLoader"

export default function Contact() {
  return (
    <StrkImageLoader>
      <div className="bg-white">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                Contact SSourcing China
              </h1>
              <p className="mt-4 text-lg text-muted">
                Have a sourcing question or ready to start a project? Reach out and we will respond within 24 hours.
              </p>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-1">
                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="text-lg font-semibold text-foreground">Office</h3>
                  <div className="mt-4 space-y-4 text-sm">
                    <a
                      href="mailto:hello@ssourcingchina.com"
                      className="flex items-start gap-3 text-muted hover:text-primary"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>hello@ssourcingchina.com</span>
                    </a>
                    <a
                      href="tel:+8613812345678"
                      className="flex items-start gap-3 text-muted hover:text-primary"
                    >
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>+86 138 1234 5678</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        Room 1206, Fortune Plaza
                        <br />
                        Futian District, Shenzhen, China
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-muted">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        Mon – Fri: 9:00 – 18:00 CST
                        <br />
                        We reply within 24 hours
                      </span>
                    </div>
                    <a
                      href="#"
                      className="flex items-start gap-3 text-muted hover:text-primary"
                    >
                      <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>SSourcing China on LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="text-lg font-semibold text-foreground">Why contact us?</h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      Free initial sourcing consultation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      Transparent fee structure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      English-speaking team in China
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      No obligation until you approve the plan
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2">
                <InquiryForm showTitle={false} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </StrkImageLoader>
  )
}
