import { Eyebrow } from "@/components/shared/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    body: "We listen first. Tell us about your materials, your production volume, your operators and your floorspace.",
  },
  {
    n: "02",
    title: "Configuration",
    body: "We specify the right machine — beam length, tonnage, drive type and CNC level — tailored to your work.",
  },
  {
    n: "03",
    title: "Manufacture",
    body: "Your folder is built and tested in our Udine workshop. Each unit ships with a signed precision certificate.",
  },
  {
    n: "04",
    title: "Install & Train",
    body: "Our engineers install the machine on-site and train your operators. You fold confidently from day one.",
  },
];

const Process = () => {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-5 font-serif font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl text-ink">
            From conversation to first fold.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-mist border border-mist">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="bg-bone p-8 md:p-10 hover:bg-paper transition-colors duration-300"
            >
              <p className="font-serif text-gold text-3xl md:text-4xl">
                {step.n}
              </p>
              <h3 className="mt-5 font-serif text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
