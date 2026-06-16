import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/data/products";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-ink text-cream-soft">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          tone="cream"
          title={
            <>
              Four steps from a sketch to a <em className="not-italic text-brass">shipped</em> machine.
            </>
          }
          description="We have been refining this process for twenty-eight years. It is part engineering, part listening, and part patience — and it ends with a machine installed in your shop, ready to run."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div
              key={p.step}
              className="relative p-8 border border-cream-soft/15 bg-ink-soft"
            >
              <p className="font-serif text-5xl text-brass/80 leading-none">
                {p.step}
              </p>
              <h3 className="mt-6 font-serif text-2xl text-cream-soft">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-cream-soft/70 leading-relaxed">
                {p.body}
              </p>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-brass/40" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
