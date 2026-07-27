import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import InquiryForm from "@/components/shared/InquiryForm";

const OFFICES = [
  {
    city: "Shanghai HQ",
    title: "Head office & sourcing team",
    desc: "Our main team, agent network and QC inspectors operate from here.",
    address: "Room 1808, Tower B, Caohejing Hi-Tech Park, 388 Tianlin Road, Shanghai 200233",
  },
  {
    city: "Shenzhen office",
    title: "Electronics & hardware sourcing",
    desc: "Local presence in the Pearl River Delta electronics and hardware cluster.",
    address: "Block C, Bao'an Hi-Tech Industrial Park, Shenzhen 518101",
  },
  {
    city: "Yiwu office",
    title: "Consumer goods & packaging",
    desc: "Daily access to Yiwu International Trade City for small goods, packaging and decor.",
    address: "Building 4, Yiwu International Trade City, Zhejiang 322000",
  },
];

const CHANNELS = [
  {
    icon: Mail,
    title: "Email",
    primary: "hello@ssourcing-china.com",
    secondary: "Replies within 1 business day",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    primary: "+86 21 5555 0188",
    secondary: "Mon – Sat, 09:00 – 19:00 CST",
  },
  {
    icon: MessageSquare,
    title: "WeChat",
    primary: "SSourcing-China",
    secondary: "Add us — we accept voice notes",
  },
  {
    icon: Globe2,
    title: "Zoom / Google Meet",
    primary: "20-minute intro call",
    secondary: "Booked after your first inquiry",
  },
];

const REASONS = [
  "Direct line to a senior Shanghai-based agent — not a CRM form",
  "Itemized pricing with no hidden fees",
  "NDA available before you share product details",
  "1 business day response on every RFQ",
];

export function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to a sourcing agent in Shanghai"
        titleId="contact-page-title"
        description="The fastest way to start is the inquiry form below. If you prefer, reach us on email, WhatsApp or WeChat. We respond within 1 business day."
        descriptionId="contact-page-desc"
        imageId="contact-page-hero-1a2b3c"
        imageQuery="[contact-page-desc] [contact-page-title] [contact-page-eyebrow]"
        imageAlt="Sourcing team meeting in a Shanghai office with notebooks and laptops"
        breadcrumb={[{ label: "Contact" }]}
        primaryCta={null}
        secondaryCta={null}
      />

      <section ref={containerRef} className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Reach us"
              title="Four ways to contact the SSourcing team"
              titleId="contact-channels-title"
              description="Pick whichever channel is easiest. We respond in English, Mandarin, Spanish, German or French."
              descriptionId="contact-channels-desc"
            />
            <ul className="mt-6 grid gap-3">
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                return (
                  <li
                    key={c.title}
                    className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-card"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {c.title}
                      </p>
                      <p className="mt-1 text-base font-semibold text-primary">
                        {c.primary}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {c.secondary}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-xl border border-border bg-muted p-6">
              <h3
                id="contact-why-title"
                className="text-base font-semibold text-primary"
              >
                What you get when you contact us
              </h3>
              <ul className="mt-4 space-y-2.5">
                {REASONS.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2.5 text-sm text-ink"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm
              variant="light"
              eyebrow="Request a quote"
              title="Get a free sourcing quote"
              description="Tell us about your project. A senior agent will reply within 1 business day with a shortlist, pricing and a sample plan."
            />
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our offices"
            title="Three locations in the main manufacturing regions of China"
            titleId="contact-offices-title"
            description="Local presence in Shanghai, Shenzhen and Yiwu means shorter factory drive times, faster samples and inspectors who know the region."
            descriptionId="contact-offices-desc"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {OFFICES.map((o) => (
              <article
                key={o.city}
                className="rounded-xl border border-border bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-primary">
                  {o.city}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink">
                  {o.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {o.address}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Hours"
              title="When our agents are online"
              titleId="contact-hours-title"
              description="We staff our Shanghai office 12 hours a day, 6 days a week. Outside hours we respond first thing the next morning CST."
              descriptionId="contact-hours-desc"
            />
            <ul className="mt-6 space-y-3 text-sm text-ink">
              <li className="flex items-center justify-between border-b border-border pb-3">
                <span>Mon – Fri</span>
                <span className="font-semibold text-primary">
                  09:00 – 19:00 CST
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-3">
                <span>Saturday</span>
                <span className="font-semibold text-primary">
                  10:00 – 16:00 CST
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-muted-foreground">
                  Closed — emails answered Monday
                </span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-muted p-4 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                Shanghai is UTC+8. We overlap with most of the US, all of
                Europe and the start of the AU business day.
              </span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                alt="Map of China with Shanghai, Shenzhen and Yiwu highlighted"
                data-strk-img-id="contact-map-2b3c4d"
                data-strk-img="[contact-hours-desc] [contact-hours-title] [contact-offices-desc] [contact-offices-title] [contact-page-desc] [contact-page-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
