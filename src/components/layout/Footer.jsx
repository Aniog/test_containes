import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-graphite text-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-8 border border-paper/70 grid place-items-center">
              <span className="block w-3 h-3 bg-accent" />
            </span>
            <span className="font-display text-2xl tracking-wide">
              ARTITECT
              <span className="ml-2 text-[0.65rem] tracking-[0.3em] uppercase text-paper/60 align-middle">
                Machinery
              </span>
            </span>
          </div>
          <p className="mt-5 text-paper/70 max-w-md leading-relaxed">
            Precision-engineered double folding machines and sheet metal folders for
            workshops, fabricators, and manufacturers who demand consistent results.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Explore</h4>
          <ul className="space-y-3 text-paper/80">
            <li><a href="#machines" className="hover:text-accent">Machines</a></li>
            <li><a href="#capabilities" className="hover:text-accent">Capabilities</a></li>
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Get in touch</h4>
          <ul className="space-y-3 text-paper/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
              <span>Industrial Park 12, Bursa, Türkiye</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:+900000000000" className="hover:text-accent">+90 000 000 00 00</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:hello@artitect.machinery" className="hover:text-accent">
                hello@artitect.machinery
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-paper/60">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p className="text-paper/50">Engineered in Türkiye · Trusted worldwide</p>
        </div>
      </div>
    </footer>
  )
}
