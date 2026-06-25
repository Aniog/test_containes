import strings from '@/data/strings';

const s = strings.en.closingCta;

export default function ClosingCta() {
  return (
    <section className="bg-white py-10 md:py-[50px]">
      <div className="max-w-content mx-auto px-5 text-center">
        <h2 className="font-heading font-bold uppercase text-[24px] md:text-[30px] text-text-heading leading-[1.2] m-0 mb-3">
          {s.heading}
        </h2>
        <p className="text-text-body text-[15px] m-0 mb-6">{s.sub}</p>
        <a
          href={s.buttonLink}
          className="inline-flex items-center justify-center h-[44px] px-[28px] rounded-[4px] font-heading font-bold text-[14px] uppercase text-white ai-gradient-bg hover:opacity-90 transition-opacity"
        >
          {s.button}
        </a>
      </div>
    </section>
  );
}
