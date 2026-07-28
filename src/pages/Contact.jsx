import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Globe,
  Linkedin,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/ui/Section";
import InquiryForm from "@/components/shared/InquiryForm";
import Seo from "@/components/ui/Seo";
import strkImgConfig from "@/strk-img-config.json";

const CHANNELS = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@ssourcing.cn",
    href: "mailto:hello@ssourcing.cn",
    note: "Best for detailed briefs and attachments.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp & WeChat",
    value: "+86 138 0000 0000",
    href: "#",
    note: "Best for quick questions. We reply in English or Chinese.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+86 138 0000 0000",
    href: "tel:+8613800000000",
    note: "Available during China business hours, 09:00–18:00 CST.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/company/ssourcing-china",
    href: "#",
    note: "Follow for new case studies and market updates.",
  },
];

const OFFICES = [
  {
    name: "Shenzhen — Headquarters",
    address:
      "Room 1801, Tower B, Shenzhen International Innovation Center, Nanshan District",
    hours: "Mon–Fri, 09:00–18:00 CST",
  },
  {
    name: "Yiwu — Sourcing Office",
    address: "Block C, Yiwu International Trade City, Chouzhou North Road",
    hours: "Mon–Sat, 09:00–18:00 CST",
  },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <>
      <Seo
        title="Contact SSourcing China | Get a Free Sourcing Quote"
        description="Reach SSourcing China by email, WhatsApp, WeChat, or phone. Offices in Shenzhen and Yiwu. Sourcing inquiries answered within one business day."
      />

      <PageHero
        eyebrow="Contact"
        title="Tell us about your project"
        description="A senior sourcing specialist will reply within one business day. We sign NDAs before sharing your details with any factory."
        imageId="contact-hero-img-2a3b4c"
        backgroundId="contact-hero-bg-5d6e7f"
      />

      <Section ref={ref} tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Direct channels
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Reach us directly
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Use whichever channel works best for you. Most clients start
              with a short email and move to WhatsApp once a project is in
              motion.
            </p>

            <ul className="mt-8 space-y-4">
              {CHANNELS.map((c) => (
                <li
                  key={c.title}
                  className="flex items-start gap-3 rounded-lg border border-line bg-surface p-5 shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-100 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-primary">
                      {c.title}
                    </div>
                    <a
                      href={c.href}
                      className="mt-0.5 block text-base font-medium text-ink hover:text-accent"
                    >
                      {c.value}
                    </a>
                    <div className="mt-1 text-sm text-muted">{c.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm
              title="Send a sourcing inquiry"
              subtitle="Share your product, target specs, and timeline. The more detail, the more useful our first reply."
            />
          </div>
        </div>
      </Section>

      <Section tone="default">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Offices
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Two offices in mainland China
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Shenzhen covers electronics, packaging, and OEM. Yiwu covers
              consumer goods, gifts, and small-batch production.
            </p>

            <div className="mt-8 grid gap-4">
              {OFFICES.map((o) => (
                <div
                  key={o.name}
                  className="rounded-lg border border-line bg-surface p-5 shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-100 text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-primary">
                        {o.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{o.address}</p>
                      <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink">
                        <Clock className="h-4 w-4 text-muted" />
                        {o.hours}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <FactCard
                icon={Clock}
                value="<24h"
                label="Reply time on working days"
              />
              <FactCard
                icon={Globe}
                value="3 languages"
                label="English · 中文 · Español"
              />
              <FactCard
                icon={MessageSquare}
                value="1 specialist"
                label="Owns your project end-to-end"
              />
              <FactCard
                icon={MapPin}
                value="2 offices"
                label="Shenzhen · Yiwu"
              />
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-line bg-surface shadow-card">
              <div className="aspect-[16/9] w-full bg-primary-100">
                <img
                  alt="Map of China with Shenzhen and Yiwu office locations highlighted"
                  className="h-full w-full object-cover"
                  data-strk-img-id="contact-map-img-9a8b7c"
                  data-strk-img="[contact-map-subtitle] [contact-map-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                />
              </div>
              <div className="p-5">
                <h3
                  id="contact-map-title"
                  className="text-base font-semibold text-primary"
                >
                  Active across China
                </h3>
                <p
                  id="contact-map-subtitle"
                  className="mt-1 text-sm text-muted"
                >
                  Shenzhen and Yiwu offices, with regular visits to Ningbo,
                  Guangzhou, Dongguan, and Yongkang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function FactCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-5 shadow-card">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div className="mt-4 text-xl font-bold text-primary">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
