export default function HowItWorks({ t }) {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-10">{t.heading}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[48px] h-[48px] rounded-full bg-brand-purple flex items-center justify-center text-white font-heading font-bold text-[18px] mb-4">
                {i + 1}
              </div>
              <h3 className="font-heading font-bold text-[15px] text-heading-section uppercase mb-2">{step.title}</h3>
              <p className="text-body-text text-[14px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
