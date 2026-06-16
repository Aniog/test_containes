const partners = [
  "NORDEN STEEL",
  "ROSSI METAL",
  "APEX FAB",
  "MERIDIAN HVAC",
  "KAWA ENCLOSURES",
  "OBERLAND AG",
];

const certs = [
  { code: "ISO 9001", note: "Quality management" },
  { code: "CE", note: "European conformity" },
  { code: "UL", note: "North American safety" },
  { code: "DIN 8580", note: "Manufacturing standard" },
];

export default function TrustStrip() {
  return (
    <section className="bg-cream-soft border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-wider2 text-brass font-medium">
              Trusted in fabrication shops worldwide
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
              {partners.map((p) => (
                <li
                  key={p}
                  className="font-serif text-xl md:text-2xl text-ink/60 hover:text-ink transition-colors"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div key={c.code} className="flex items-baseline gap-3">
              <span className="font-serif text-2xl text-ink">{c.code}</span>
              <span className="text-xs text-ink-muted">{c.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
