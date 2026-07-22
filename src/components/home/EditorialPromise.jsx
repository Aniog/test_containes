import Reveal from "@/components/ui/Reveal";

const PROMISES = [
  {
    title: "Hand-finished in small batches",
    body: "Each piece is finished and inspected by a small team — never mass produced.",
  },
  {
    title: "Hypoallergenic, always",
    body: "Lead-free, nickel-free, and gentle on sensitive skin. Wear it all day, every day.",
  },
  {
    title: "Made to last",
    body: "A thick 18K gold plate over a solid brass core, with a tarnish-resistant finish.",
  },
];

export default function EditorialPromise() {
  return (
    <section className="border-y border-cream bg-ivory py-16 md:py-20">
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {PROMISES.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} as="li" className="text-center md:text-left">
              <h3 className="font-serif text-xl text-espresso md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-espresso-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
