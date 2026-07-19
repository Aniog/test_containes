import { TRUST_ITEMS } from "@/data/site";

export default function TrustBar({ tone = "dark" }) {
  const isDark = tone === "dark";
  return (
    <div
      className={`w-full border-y ${
        isDark
          ? "border-line-dark bg-espresso text-ivory"
          : "border-line bg-bone text-espresso"
      }`}
    >
      <div className="mx-auto max-w-7.5xl px-6 sm:px-10">
        <ul className="flex flex-col items-center divide-y divide-line-dark/60 sm:flex-row sm:divide-x sm:divide-y-0">
          {TRUST_ITEMS.map((t) => (
            <li
              key={t}
              className={`flex-1 py-3 text-center font-sans text-[10px] sm:text-[11px] uppercase tracking-wider-2 ${
                isDark ? "text-ivory/85" : "text-stone-dark"
              }`}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
