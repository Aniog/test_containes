import { TRUST_BADGES } from "@/data/products";

export default function TrustBar() {
  return (
    <div className="bg-cream-deep border-y border-espresso/10">
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 gap-x-8 text-center">
          {TRUST_BADGES.map((b, i) => (
            <li
              key={b.id}
              className="flex items-center text-[11px] md:text-xs uppercase tracking-eyebrow text-espresso-soft"
            >
              <span>{b.label}</span>
              {i < TRUST_BADGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:inline-block ml-8 h-3 w-px bg-espresso/20"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
