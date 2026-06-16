import { Ruler, Cpu, ShieldCheck, Sparkles, Wrench, Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/products";

const iconMap = { Ruler, Cpu, ShieldCheck, Sparkles, Wrench, Leaf };

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-cream-soft">
      <Container>
        <SectionHeading
          eyebrow="Why ARTITECT"
          title={
            <>
              Engineering that respects the <em className="not-italic text-brass">craft</em>.
            </>
          }
          description="Every capability we build into our machines exists for a reason our customers can name: fewer rejects, faster changeovers, longer service life, calmer shop floors."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {capabilities.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <div
                key={c.title}
                className="bg-cream-soft p-10 group hover:bg-surface transition-colors duration-500"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-brass/40 text-brass group-hover:border-brass group-hover:bg-brass group-hover:text-ink transition-all duration-500">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ink leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
