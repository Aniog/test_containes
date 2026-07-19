import { trustItems } from "@/data/products";

export default function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="border-y border-hairline bg-cream-50"
    >
      <div className="mx-auto flex max-w-editorial flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4 md:gap-x-12 md:px-10 md:py-5 lg:px-14">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-2.5">
            <span className="eyebrow text-ink-50">{item}</span>
            {index < trustItems.length - 1 && (
              <span
                aria-hidden
                className="ml-3 hidden h-3 w-px bg-hairline md:inline-block"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
