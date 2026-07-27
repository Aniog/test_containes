import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Facebook,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const FOOTER_LINKS = [
  {
    title: "Services",
    items: [
      { label: "Supplier Sourcing", to: "/services" },
      { label: "Factory Verification", to: "/services" },
      { label: "Quality Inspections", to: "/services" },
      { label: "Production Follow-up", to: "/services" },
      { label: "Shipping & Logistics", to: "/services" },
    ],
  },
  {
    title: "Sourcing",
    items: [
      { label: "How It Works", to: "/how-it-works" },
      { label: "Products We Source", to: "/products" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog & Insights", to: "/blog" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About SSourcing", to: "/services" },
      { label: "Contact", to: "/contact" },
      { label: "Get a Quote", to: "/contact" },
      { label: "Privacy Policy", to: "/contact" },
    ],
  },
];

export function Footer() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <footer ref={containerRef} className="bg-primary text-primary-foreground">
      <div
        className="relative overflow-hidden border-b border-white/10"
        data-strk-bg-id="footer-cta-bg-71ac2e"
        data-strk-bg="[footer-cta-eyebrow] [footer-cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="container-x relative grid gap-10 py-14 lg:grid-cols-2 lg:py-16">
          <div>
            <span
              id="footer-cta-eyebrow"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-accent"
            >
              Ready to source from China?
            </span>
            <h3
              id="footer-cta-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Send your product list. Get matched suppliers within 48 hours.
            </h3>
            <p className="mt-3 max-w-xl text-sm text-primary-100/80">
              Tell us what you need, the quantities and your target market. We
              reply with a shortlist of verified factories, sample plans and a
              transparent cost breakdown.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end lg:justify-center">
            <Link
              to="/contact"
              className="btn-accent h-12 px-6 text-sm font-semibold"
            >
              Get a Free Sourcing Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <span className="text-xs text-primary-100/70">
              No commitment. Replies within 1 business day.
            </span>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="SSourcing China home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary">
              <span className="text-base font-bold tracking-tight">S</span>
            </span>
            <span className="text-base font-semibold text-white">
              SSourcing <span className="text-accent">China</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-primary-100/80">
            A Shanghai-based sourcing partner for importers, distributors and
            Amazon sellers. We help overseas buyers find reliable Chinese
            suppliers and ship finished goods on time.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-primary-100/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>
                Room 1808, Tower B, Caohejing Hi-Tech Park
                <br />
                388 Tianlin Road, Shanghai 200233, China
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+862155550188" className="hover:text-white">
                +86 21 5555 0188
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <a
                href="mailto:hello@ssourcing-china.com"
                className="hover:text-white"
              >
                hello@ssourcing-china.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-accent" />
              <span>Mon – Sat, 09:00 – 19:00 CST</span>
            </li>
          </ul>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-100/70">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-primary-100/80 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-100/70">
            Follow
          </h4>
          <div className="mt-4 flex items-center gap-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-primary-100/80 hover:border-accent hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-primary-100/80 hover:border-accent hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-primary-100/80 hover:border-accent hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-xs text-primary-100/60">
            Independent sourcing agent. Not affiliated with Alibaba, Made-in-China
            or Global Sources.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-5 text-xs text-primary-100/60 sm:flex-row sm:items-center">
          <span>© 2026 SSourcing China Co., Ltd. All rights reserved.</span>
          <span>
            Sourcing partner for buyers in the US, EU, UK, AU, CA and LATAM.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
