import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Linkedin, Globe } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { COMPANY } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import InquiryForm from "@/components/ui/InquiryForm";

const REGIONS = [
  "United States & Canada",
  "United Kingdom & EU",
  "Australia & New Zealand",
  "Middle East",
  "Latin America",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you are looking for"
        description="The more detail you can share — spec, target price, destination port, timeline — the more useful our first reply will be."
      >
        <div className="flex flex-wrap gap-3 text-sm text-brand-slate">
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-navy"
          >
            <Mail className="w-4 h-4" /> {COMPANY.email}
          </a>
          <span className="text-brand-border">·</span>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-navy"
          >
            <Phone className="w-4 h-4" /> {COMPANY.phone}
          </a>
          <span className="text-brand-border">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {COMPANY.hours}
          </span>
        </div>
      </PageHeader>

      <section className="section">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <InquiryForm
                title="Send us a brief"
                subtitle="We acknowledge within one business day. There is no fee for the initial conversation."
              />
            </div>
            <aside className="lg:col-span-5 space-y-5">
              <div className="card overflow-hidden">
                <div className="aspect-[16/9] bg-brand-surface">
                  <img
                    alt="SSourcing China Shanghai office"
                    data-strk-img-id="contact-office-img-1f2a8d"
                    data-strk-img="[contact-eyebrow] [contact-title]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-brand-ink">
                    Visit our office
                  </h3>
                  <p className="mt-2 text-sm text-brand-slate leading-relaxed flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-brand-navy shrink-0" />
                    <span>{COMPANY.address}</span>
                  </p>
                  <p className="mt-1.5 text-xs text-brand-slate">
                    {COMPANY.hours}. Visitors by appointment.
                  </p>
                </div>
              </div>

              <div className="card p-5">
                <h3 className="text-base font-semibold text-brand-ink">
                  Buyer's regions we serve
                </h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                  We have shipped to over 40 countries. Account managers
                  overlap with most major time zones.
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-brand-ink">
                  {REGIONS.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-5">
                <h3 className="text-base font-semibold text-brand-ink">
                  Follow & connect
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-brand-border text-brand-navy hover:bg-brand-surface"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Website"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-brand-border text-brand-navy hover:bg-brand-surface"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <span id="contact-eyebrow" className="sr-only">Contact</span>
          <span id="contact-title" className="sr-only">SSourcing China office</span>
        </div>
      </section>
    </div>
  );
}
