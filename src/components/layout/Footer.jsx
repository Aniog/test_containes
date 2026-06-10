import { Link } from "react-router-dom"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { BrandMark } from "@/components/shared/BrandMark"
import { companyInfo } from "@/data/company"

const footerLinks = {
  Machines: [
    { to: "/products", label: "All machines" },
    { to: "/products?category=double", label: "Double folding" },
    { to: "/products?category=sheet", label: "Sheet metal folder" },
    { to: "/products?category=metal", label: "Metal folder" },
    { to: "/products?category=heavy", label: "Heavy duty" },
  ],
  Company: [
    { to: "/about", label: "About Artitect" },
    { to: "/about#story", label: "Our story" },
    { to: "/about#service", label: "Service & support" },
    { to: "/contact", label: "Contact" },
  ],
  Resources: [
    { to: "/contact?topic=quote", label: "Request a quote" },
    { to: "/contact?topic=demo", label: "Book a demo" },
    { to: "/contact?topic=spare", label: "Spare parts" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-content py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <BrandMark tone="light" />
            <p className="mt-6 max-w-readable text-sm leading-relaxed text-bone/70">
              Artitect Machinery builds precision double folding machines and
              sheet metal folder systems for fabrication shops that measure
              success in tenths of a degree.
            </p>
            <dl className="mt-8 space-y-3 text-sm text-bone/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brass" strokeWidth={1.5} />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brass" strokeWidth={1.5} />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="hover:text-brass-light">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brass" strokeWidth={1.5} />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-brass-light">
                  {companyInfo.email}
                </a>
              </div>
            </dl>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="md:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-brass">
                {heading}
              </h3>
              <ul className="mt-6 space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      className="inline-flex items-center gap-1.5 text-bone/80 transition-colors duration-200 hover:text-brass-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-brass">
              Newsletter
            </h3>
            <p className="mt-6 text-sm text-bone/70">
              New models, application notes, and factory stories — twice a year.
            </p>
            <Link
              to="/contact?topic=newsletter"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brass hover:text-brass-light"
            >
              Subscribe
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="hairline-dark mt-16" />
        <div className="mt-8 flex flex-col gap-3 text-xs text-bone/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {companyInfo.brand}. Engineered in
            Stuttgart, built for fabricators worldwide.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-bone">
              Press
            </Link>
            <Link to="/contact?topic=legal" className="hover:text-bone">
              Privacy
            </Link>
            <Link to="/contact?topic=legal" className="hover:text-bone">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
