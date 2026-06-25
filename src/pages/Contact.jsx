import { Mail, MapPin, Phone, Clock4, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrkImage } from "@/components/ui/StrkImage";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { Button } from "@/components/ui/Button";

function PageHero() {
  return (
    <Section size="lg" tone="paper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow text-brand-teal">Contact</span>
          <h1
            id="contact-hero-title"
            className="mt-4 font-bold tracking-tight text-brand-navy text-4xl md:text-5xl leading-[1.08]"
          >
            Get a Free Sourcing Quote — typically within one business day
          </h1>
          <p
            id="contact-hero-subtitle"
            className="mt-5 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-2xl"
          >
            Send a short brief about what you need to source, the order
            profile, and your target timeline. A sourcing manager in Shenzhen
            will reply within one business day with a written scope and
            flat-fee quote.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="contact-hero-e5f6g7"
              query="[contact-hero-title] [contact-hero-subtitle] China sourcing team in modern office reviewing client inquiry on screen"
              ratio="4x3"
              width={1200}
              alt="Sourcing team in a modern office reviewing a client inquiry"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactInfo() {
  return (
    <Section size="default" tone="default">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Reach our team"
            title="Three ways to reach a human"
            description="Use the form on the right for sourcing inquiries. For existing orders, your project manager is the fastest route. For media and partnerships, write to the address below."
          />
          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4 rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  Sourcing inquiries
                </p>
                <a
                  href="mailto:hello@ssourcing.example"
                  className="text-sm text-brand-ink-muted hover:text-brand-red transition-colors"
                >
                  hello@ssourcing.example
                </a>
                <p className="mt-1 text-xs text-brand-ink-soft">
                  Replies within one business day
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  Phone / WhatsApp / WeChat
                </p>
                <a
                  href="tel:+8675500000000"
                  className="text-sm text-brand-ink-muted hover:text-brand-red transition-colors"
                >
                  +86 755 0000 0000
                </a>
                <p className="mt-1 text-xs text-brand-ink-soft">
                  Mon–Fri, 09:00–18:00 China Standard Time
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  Main office
                </p>
                <p className="text-sm text-brand-ink-muted">
                  Shenzhen, Guangdong, China
                </p>
                <p className="mt-1 text-xs text-brand-ink-soft">
                  Field teams in Guangdong, Zhejiang, Jiangsu, Shandong and
                  Fujian
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-teal/10 text-brand-teal">
                <Clock4 className="h-5 w-5" />
              </span>
              <p className="mt-4 text-base font-semibold text-brand-navy">
                Reply SLA
              </p>
              <p className="mt-1.5 text-sm text-brand-ink-muted">
                We respond to every inbound inquiry within one business day,
                including weekends that fall on Chinese public holidays.
              </p>
            </div>
            <div className="rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-teal/10 text-brand-teal">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <p className="mt-4 text-base font-semibold text-brand-navy">
                Confidentiality
              </p>
              <p className="mt-1.5 text-sm text-brand-ink-muted">
                NDAs available on request before any technical detail is
                shared with a supplier.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <InquiryForm
            eyebrow="Get a Free Sourcing Quote"
            title="Tell us what you need to source"
            description="Share a few details and we will reply within one business day with a written scope and flat-fee quote."
            submitLabel="Get a Free Sourcing Quote"
          />
        </div>
      </div>
    </Section>
  );
}

function OfficeLocations() {
  return (
    <Section size="default" tone="mist">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Where we operate"
            title="Headquartered in Shenzhen, with field teams in five provinces"
            description="Our head office is in Shenzhen, with sourcing specialists permanently based in the manufacturing hubs where the work happens. Most of our factory visits and inspections happen within driving distance of one of those bases."
          />
          <div className="mt-10 grid grid-cols-2 gap-3">
            {[
              "Guangdong (HQ)",
              "Zhejiang",
              "Jiangsu",
              "Shandong",
              "Fujian",
              "Shanghai (rep)",
            ].map((loc) => (
              <div
                key={loc}
                className="rounded-md border border-brand-line bg-white px-4 py-3 text-sm font-medium text-brand-navy"
              >
                {loc}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="contact-office-h7i8j9"
              query="China manufacturing hub city skyline with shipping port containers and logistics hub"
              ratio="16x10"
              width={1400}
              alt="Chinese manufacturing hub with shipping port and logistics infrastructure"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinalNote() {
  return (
    <Section size="default" tone="navy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-snug">
            Not ready for a formal quote? Send a quick question.
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl">
            We are happy to answer a single specific question by email — for
            example whether a factory you have already spoken to is real, or
            whether an MOQ is reasonable for your product.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
          <Button
            as="a"
            href="mailto:hello@ssourcing.example"
            variant="primary"
            size="lg"
          >
            Email us a question
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactInfo />
      <OfficeLocations />
      <FinalNote />
    </>
  );
}
