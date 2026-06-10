import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We replaced two single folders with one ATC Double Folder. Our daily output went up by 40%, and our scrap rate fell by half. The machine simply doesn't drift.",
    name: "Markus L.",
    role: "Production Director, Architectural Cladding GmbH",
  },
  {
    quote:
      "ARTITECT's engineers spent two days on our floor before quoting. The machine they delivered fits our process like a tool we'd designed ourselves.",
    name: "Sofia R.",
    role: "Plant Manager, Nordic Façades AB",
  },
];

const HomeTestimonials = () => {
  return (
    <section className="bg-mist py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-bone border border-silver p-10 md:p-12">
              <Quote className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <blockquote className="mt-6 font-serif text-xl md:text-2xl leading-snug text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-silver">
                <p className="font-medium text-ink">{t.name}</p>
                <p className="mt-1 text-sm text-steel">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
