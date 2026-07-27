import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import InquiryForm from '@/components/sections/InquiryForm'
import { COMPANY } from '@/data/content'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your product and requirements. We will review your request and reply within one business day — no obligation to proceed."
        bgId="contact-hero-bg-7f6a"
        queryIds="[contact-hero-desc] [contact-hero-title]"
      />
      <span id="contact-hero-title" className="hidden">Contact SSourcing China</span>
      <span id="contact-hero-desc" className="hidden">
        Request a free sourcing quote for supplier sourcing, factory verification, quality inspection, and shipping.
      </span>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">Talk to our sourcing team</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Whether you are starting a new product or improving an existing supply
                chain, share your details and we will get back to you with next steps.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">{COMPANY.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">{COMPANY.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">{COMPANY.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Working hours</p>
                    <p className="text-sm font-medium text-foreground">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm text-foreground/80">
                    For the fastest response, use the form on the right. Include your
                    product details, target price, and order quantity.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
