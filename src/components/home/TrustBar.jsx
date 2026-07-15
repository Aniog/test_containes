import { TRUST_ITEMS } from "@/data/content";

export default function TrustBar() {
  return (
    <section
      className="bg-ivory border-y border-tan/40"
      aria-label="Trust and shipping"
    >
      <div className="container-editorial">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-tan/60">
          {TRUST_ITEMS.map((item, i) => (
            <li
              key={item}
              className={`px-4 py-4 md:py-5 text-center ${
                i % 2 === 0 ? "md:text-left" : "md:text-center"
              }`}
            >
              <p className="text-[10px] md:text-[11px] uppercase tracking-eyebrow text-ink font-medium">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
