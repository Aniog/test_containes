import { Mail, Phone, MapPin, Clock, MessagesSquare } from "lucide-react";
import { useStrkImages } from "@/components/layout/useStrkImages";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import { COMPANY } from "@/data/content";

export default function Contact() {
  const ref = useStrkImages();
  return (
    <div ref={ref} className="bg-white">
      <section className="bg-navy text-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 id="contact-title" className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
              Send us your brief — we reply within 24 hours
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              The fastest way to get a useful answer is to fill in the form below with product, quantity, and destination. The more context you can give, the more useful our first reply will be.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Reach us directly"
                title="Or contact our sourcing team the way that suits you"
                subtitle="Our team works China time, but we monitor email and messaging apps during US and EU business hours for urgent requests."
              />
              <div className="mt-6 space-y-4">
                <ContactItem icon={Mail} label="Email" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
                <ContactItem icon={Phone} label="Phone / WhatsApp" value={COMPANY.phone} />
                <ContactItem icon={MapPin} label="Headquarters" value={COMPANY.headquarters} />
                <ContactItem icon={Clock} label="Working hours" value={COMPANY.hours} />
              </div>
              <div className="mt-8 card p-5 bg-muted border-border">
                <div className="flex items-start gap-3">
                  <div className="icon-tile-navy shrink-0">
                    <MessagesSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Prefer to talk first?</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      Book a 20-minute intro call and we will walk you through how we would approach your specific brief.
                    </p>
                    <a
                      href={`mailto:${COMPANY.email}?subject=Intro call request`}
                      className="btn-outline mt-3"
                    >
                      Request an intro call
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-x py-16 md:py-20">
          <div className="grid lg:grid-cols-3 gap-5">
            <FaqCard
              title="What happens after I submit?"
              body="Your brief is routed to a sourcing manager based on the product category. You will receive an acknowledgement email within one business day, and a substantive reply (shortlist plan, clarifying questions, or pricing) within 24 hours."
            />
            <FaqCard
              title="Is there a cost for the first reply?"
              body="No. We do not charge for the shortlist, the first round of quotations, or the introductory call. You only pay when you decide to engage us on a specific project."
            />
            <FaqCard
              title="Can I share files securely?"
              body="After you submit the form we will send a confirmation email with a link to upload sketches, spec sheets, or reference images."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <span className="flex items-start gap-3">
      <span className="icon-tile-navy shrink-0">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="flex-1">
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</span>
        <span className="block mt-0.5 text-sm font-semibold text-ink">{value}</span>
      </span>
    </span>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function FaqCard({ title, body }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-soft">{body}</p>
    </div>
  );
}
