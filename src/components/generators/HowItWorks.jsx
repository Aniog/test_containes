import { strings } from '@/data/generators';

const t = strings.en;

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-[60px]">
        <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-[1.2] uppercase text-[#4B5056] mb-8 md:mb-10">
          {t.howItWorks.heading}
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {t.howItWorks.steps.map((step, index) => (
            <li key={index} className="flex flex-col gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8159BB] text-white font-heading text-[14px] font-bold">
                {index + 1}
              </div>
              <h3 className="font-heading text-[15px] font-bold uppercase text-[#4B5056]">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#636972] leading-[1.5]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
