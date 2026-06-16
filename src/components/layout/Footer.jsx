import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

const columns = [
  {
    title: "Products",
    items: [
      "Double Folding Machine",
      "Double Folder",
      "Sheet Metal Folder",
      "Sheet Metal Folding Machine",
      "Metal Folder",
      "Metal Folder Machine",
      "Metal Folding Machine",
    ],
  },
  {
    title: "Company",
    items: ["About", "Industries", "Process", "Service", "Careers", "Press"],
  },
  {
    title: "Support",
    items: ["Documentation", "Spare parts", "Remote diagnostics", "Training", "Warranty", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo tone="cream" />
            <p className="mt-6 text-cream-soft/70 max-w-sm leading-relaxed">
              Precision sheet metal folding machines, engineered with care and built to outlast the trends that surround them.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream-soft/75">
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-1 text-brass" />
                <span>14 Werkstrasse, 70565 Stuttgart, Germany</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-brass" />
                <span>+49 711 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-brass" />
                <span>hello@artitect-machinery.com</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs uppercase tracking-wider2 text-brass mb-5 font-medium">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-cream-soft/75 hover:text-cream-soft transition-colors duration-300 inline-flex items-center gap-1.5 group"
                      >
                        {item}
                        <ArrowUpRight
                          size={12}
                          strokeWidth={1.5}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-soft/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream-soft/55">
          <p>© {new Date().getFullYear()} Artitect Machinery GmbH. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream-soft transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream-soft transition-colors">Terms</a>
            <a href="#" className="hover:text-cream-soft transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
