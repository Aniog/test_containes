import strings from '@/lib/strings'

const STEPS = [
  {
    num: "1",
    title: "PICK A GENERATOR",
    desc: "Browse by category or search to find one that fits your goal."
  },
  {
    num: "2",
    title: "DESCRIBE YOUR SITE",
    desc: "Tell our AI builder about your business in a sentence or two."
  },
  {
    num: "3",
    title: "GENERATE AND PUBLISH",
    desc: "Get a fully built site in seconds. Customize anything, then go live."
  }
]

export default function HowItWorks() {
  const { howItWorks } = strings

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[60px] bg-[color:var(--color-bg-light)] mt-10 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="heading text-[26px] md:text-[32px] text-[color:var(--color-text-heading)]">
          {howItWorks.heading}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-[900px] mx-auto">
        {STEPS.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative">
            <div className="w-10 h-10 rounded-full bg-[color:var(--color-brand-purple)] text-white flex items-center justify-center font-bold text-[18px] mb-4 z-10">
              {step.num}
            </div>
            
            {/* Visual connector line for desktop */}
            {index < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-[20px] left-[40px] w-full h-[1px] bg-[color:var(--color-brand-purple)] opacity-30 -z-0"></div>
            )}
            
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[16px] text-[color:var(--color-text-heading-dark)] mb-2 uppercase tracking-wide">
              {step.title}
            </h3>
            <p className="text-[14px] text-[color:var(--color-text-body)] max-w-[250px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
