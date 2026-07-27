import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Youtube } from "lucide-react"
import Container from "@/components/ui/Container"
import { COMPANY, NAV_LINKS } from "@/data/site"

const Footer = () => {
  return (
    <footer className="bg-[#0B2545] text-white">
      <Container>
        <div className="py-14 md:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
                <span className="text-[#0B2545] font-extrabold text-sm">SS</span>
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold">{COMPANY.name}</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wide">
                  China Sourcing Agent
                </div>
              </div>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              A professional China-based sourcing partner for overseas buyers.
              We help importers find reliable suppliers, verify factories,
              inspect quality, follow production and coordinate shipping.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={COMPANY.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-sm text-white/75 hover:text-white transition-colors">
                  Supplier Sourcing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/75 hover:text-white transition-colors">
                  Factory Verification
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/75 hover:text-white transition-colors">
                  Quality Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/75 hover:text-white transition-colors">
                  Production Follow-up
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/75 hover:text-white transition-colors">
                  Shipping & Logistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/60" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/60" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/60" />
                <span>{COMPANY.phone}</span>
              </li>
              <li className="flex gap-2.5">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/60" />
                <span>WhatsApp: {COMPANY.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
            <p>
              Shanghai-based sourcing agent serving importers in 47 countries.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
