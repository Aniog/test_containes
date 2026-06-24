import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ITEMS = [
  { Icon: Mail, label: "Sales", value: "sales@artitectmachinery.com" },
  { Icon: Mail, label: "Service & spares", value: "service@artitectmachinery.com" },
  { Icon: Phone, label: "Phone", value: "+90 224 000 00 00" },
  { Icon: MapPin, label: "Workshop", value: "Industrial Park 14, Bursa, Türkiye" },
  { Icon: Clock, label: "Hours", value: "Mon – Fri · 08:00 – 17:30 (UTC+3)" },
];

export default function ContactInfo() {
  return (
    <aside className="space-y-8">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
          Get in touch
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight">
          Tell us about the sheets{" "}
          <span className="italic text-brass">you fold</span>.
        </h1>
        <p className="mt-6 text-base text-steel leading-relaxed">
          Share material, sheet sizes, target volumes and the tolerance you
          need to hit. Our application engineers will reply with a machine
          recommendation, indicative pricing and a delivery window.
        </p>
      </div>

      <ul className="space-y-5 border-t border-mist pt-8">
        {ITEMS.map(({ Icon, label, value }) => (
          <li key={label} className="flex items-start gap-4">
            <Icon className="w-5 h-5 text-brass mt-1 shrink-0" strokeWidth={1.5} />
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-steel">
                {label}
              </div>
              <div className="mt-1 text-base text-ink">{value}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
