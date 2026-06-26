import SectionHeader from "@/components/shared/SectionHeader";
import { PROBLEMS } from "@/data/site";

export default function Problems() {
  return (
    <section className="bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems we solve"
          title="Sourcing from China without a partner is risky. We remove the risk."
          description="The same issues come up again and again when overseas buyers source without local support. Here is how we address them."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, idx) => (
            <article
              key={p.title}
              className="rounded-2xl border border-ink-200 bg-white p-7"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-900 text-sm font-semibold text-white">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-base font-semibold text-brand-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}