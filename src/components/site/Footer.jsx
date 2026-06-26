import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { brand, navLinks, contactDetails } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-foreground border-t border-ink-foreground/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-md text-sm md:text-[15px] text-ink-foreground/70 leading-relaxed">
              {brand.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition"
              >
                Talk to sales
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-5 py-2.5 text-sm font-medium text-ink-foreground hover:bg-ink-foreground/5 transition"
              >
                {contactDetails.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-foreground/50">
              Navigate
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-sm text-ink-foreground/80 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-foreground/50">
              Workshop
            </p>
            <address className="mt-5 not-italic text-sm text-ink-foreground/80 leading-relaxed">
              {contactDetails.address}
              <br />
              <br />
              <a
                href={`tel:${contactDetails.phone.replace(/\s|\(|\)|-/g, "")}`}
                className="hover:text-accent transition-colors"
              >
                {contactDetails.phone}
              </a>
              <br />
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-accent transition-colors"
              >
                {contactDetails.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-foreground/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-foreground/50">
            © {year} {brand.name}. Engineered, welded and assembled in-house.
          </p>
          <div className="flex items-center gap-6 text-xs text-ink-foreground/50">
            <a href="#" className="hover:text-ink-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-ink-foreground transition-colors">
              Terms
            </a>
            <span className="font-mono">ISO 9001 · CE · UL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}