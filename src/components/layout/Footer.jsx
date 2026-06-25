import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  Services: [
    { to: "/services", label: "All services" },
    { to: "/services#supplier-sourcing", label: "Supplier Sourcing" },
    { to: "/services#factory-verification", label: "Factory Verification" },
    { to: "/services#quality-inspection", label: "Quality Inspection" },
    { to: "/services#production-followup", label: "Production Follow-up" },
    { to: "/services#shipping-coordination", label: "Shipping Coordination" },
  ],
  Company: [
    { to: "/how-it-works", label: "How It Works" },
    { to: "/products", label: "Products We Source" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ],
  Resources: [
    { to: "/blog#aql-101-what-buyers-need-to-know", label: "AQL 101 guide" },
    { to: "/blog#fob-vs-exw-vs-ddp-incoterms-explained", label: "Incoterms explained" },
    { to: "/blog#red-flags-when-sourcing-from-china", label: "Red flags when sourcing" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2 font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-brand-navy text-sm font-bold tracking-tight">
                SS
              </span>
              <span className="text-base md:text-lg font-bold tracking-tight">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75 max-w-sm">
              An independent China-based sourcing partner for overseas buyers.
              Supplier verification, quality inspection, production follow-up
              and shipping coordination — handled by a team on the ground in
              China.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="primary" size="md">
                Get a Free Sourcing Quote
              </Button>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-amber">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-amber">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-amber" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-amber" />
                <a
                  href="mailto:hello@ssourcing.example"
                  className="hover:text-white"
                >
                  hello@ssourcing.example
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-amber" />
                <a href="tel:+8675500000000" className="hover:text-white">
                  +86 755 0000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p>
            Independent sourcing partner — we do not sell products and we do not
            take commissions from suppliers.
          </p>
        </div>
      </div>
    </footer>
  );
}
