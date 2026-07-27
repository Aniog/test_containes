import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FAQ from "@/components/sections/FAQ";
import InquiryForm from "@/components/sections/InquiryForm";
import { SITE } from "@/data/site";

export default function Contact() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project — we reply within one business day"
        description="Use the form below or contact us directly by email, phone, or WeChat. A real sourcing manager — not a chatbot — will follow up."
        breadcrumb={[{ label: "Contact" }]}
      />

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <ContactCard
              icon={Mail}
              title="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
              note="Best for project briefs, drawings, and quote requests."
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              value={SITE.phone}
              href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
              note="Available during China business hours."
            />
            <ContactCard
              icon={MessageCircle}
              title="WeChat"
              value={SITE.wechat}
              note="Add us on WeChat for quick questions and project updates."
            />
            <ContactCard
              icon={MapPin}
              title="Office"
              value={SITE.address}
              note="Field inspectors across Guangdong, Zhejiang, Jiangsu, and Shandong."
            />
            <ContactCard
              icon={Clock}
              title="Hours"
              value={SITE.hours}
              note={`${SITE.englishSupport} Typical response: ${SITE.responseTime.toLowerCase()}.`}
            />
          </div>

          <div className="lg:col-span-7">
            <h2
              id="contact-form-title"
              className="text-xl font-bold text-ink-900"
            >
              Send a sourcing inquiry
            </h2>
            <p
              id="contact-form-sub"
              className="mt-1.5 text-sm text-ink-600"
            >
              Required fields are marked with an asterisk.
            </p>
            <div className="mt-4">
              <InquiryForm />
            </div>
          </div>
        </div>
      </Section>

      <Section bg="ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2
              id="contact-office-title"
              className="text-2xl md:text-3xl font-bold text-white leading-tight balance"
            >
              Based in Shanghai, working in your timezone
            </h2>
            <p
              id="contact-office-sub"
              className="mt-3 text-ink-300"
            >
              We schedule calls across US, EU, and AU business hours — so you
              can speak to a real person without losing a working day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-ink-700">
              <img
                alt="Shanghai city skyline at dusk, our sourcing headquarters"
                data-strk-img-id="contact-office-img-9c3a2e"
                data-strk-img="[contact-office-sub] [contact-office-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <FAQ />
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, href, note }) {
  const body = (
    <div className="rounded-lg border border-ink-200 bg-white p-5 hover:border-brand-300 transition-colors h-full">
      <div className="flex items-start gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-700 shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            {title}
          </div>
          <div className="mt-1 text-[15px] font-semibold text-ink-900 break-words">
            {value}
          </div>
          {note && <div className="mt-1 text-xs text-ink-500">{note}</div>}
        </div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block">
        {body}
      </a>
    );
  }
  return body;
}
