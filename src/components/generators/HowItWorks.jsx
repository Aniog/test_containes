export default function HowItWorks({ t }) {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading m-0 mb-[30px] text-center">
          {t.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-[40px] h-[40px] rounded-full bg-brand-purple text-white font-heading text-[16px] flex items-center justify-center mx-auto mb-[15px]">
                {i + 1}
              </div>
              <h3 className="font-heading text-[14px] text-heading-dark m-0 mb-[10px]">
                {step.title}
              </h3>
              <p className="text-body-text text-[14px] m-0 max-w-[280px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
