import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1726] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-[#1B3A6B]">
                <span className="font-bold text-lg tracking-tight">A</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-[0.18em] uppercase">
                  Artitect
                </span>
                <span className="text-[10px] font-medium tracking-[0.3em] text-[#9CA3AF] uppercase">
                  Machinery
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#9CA3AF] max-w-sm">
              Engineering precision sheet metal folding machines for fabricators
              who refuse to compromise on quality, repeatability, or uptime.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9CA3AF]">
              Products
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[#E5E7EB]">
              <li><a href="#double-folding-machine" className="hover:text-[#C77B3F]">Double Folding Machine</a></li>
              <li><a href="#double-folder" className="hover:text-[#C77B3F]">Double Folder</a></li>
              <li><a href="#sheet-metal-folder" className="hover:text-[#C77B3F]">Sheet Metal Folder</a></li>
              <li><a href="#sheet-metal-folding-machine" className="hover:text-[#C77B3F]">Sheet Metal Folding Machine</a></li>
              <li><a href="#metal-folder" className="hover:text-[#C77B3F]">Metal Folder</a></li>
              <li><a href="#metal-folder-machine" className="hover:text-[#C77B3F]">Metal Folder Machine</a></li>
              <li><a href="#metal-folding-machine" className="hover:text-[#C77B3F]">Metal Folding Machine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9CA3AF]">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[#E5E7EB]">
              <li><a href="#about" className="hover:text-[#C77B3F]">About us</a></li>
              <li><a href="#capabilities" className="hover:text-[#C77B3F]">Capabilities</a></li>
              <li><a href="#industries" className="hover:text-[#C77B3F]">Industries</a></li>
              <li><a href="#process" className="hover:text-[#C77B3F]">Process</a></li>
              <li><a href="#contact" className="hover:text-[#C77B3F]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9CA3AF]">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-[#E5E7EB]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#C77B3F]" strokeWidth={1.5} />
                <span>No. 88 Industrial Park Road,<br />Suzhou, Jiangsu, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C77B3F]" strokeWidth={1.5} />
                <a href="tel:+8651280000000" className="hover:text-[#C77B3F]">+86 512 8000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C77B3F]" strokeWidth={1.5} />
                <a href="mailto:sales@artitect-machinery.com" className="hover:text-[#C77B3F]">sales@artitect-machinery.com</a>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C77B3F] hover:text-white"
            >
              Request a custom quote <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-[#9CA3AF]">
            Engineered with precision. Built for production.
          </p>
        </div>
      </div>
    </footer>
  );
}