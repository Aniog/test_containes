import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"
import { Container } from "@/components/ui"
import { navLinks } from "@/data/content"

export function Footer() {
  return (
    <footer className="bg-steel text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="text-lg font-extrabold tracking-tight">
              ARTITECT<span className="text-accent"> MACHINERY</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Precision-engineered sheet metal folding machines for fabricators
              who refuse to compromise on accuracy or productivity.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href="#" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="#" label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Double Folding Machine</li>
              <li>Double Folder</li>
              <li>Sheet Metal Folder</li>
              <li>Metal Folding Machine</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>+1 (800) 555-0142</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>sales@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  1200 Industrial Parkway,
                  <br />
                  Suite 400, Cleveland, OH
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
    >
      {children}
    </a>
  )
}

export default Footer
