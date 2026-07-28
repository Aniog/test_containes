import { processSteps } from "@/data/siteData";

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            A clear path from quote to delivery
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our five-step process keeps your sourcing project organized, transparent, and on schedule.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {processSteps.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 text-lg font-bold text-white">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              {idx < processSteps.length - 1 && (
                <div className="hidden md:absolute md:left-[60%] md:top-7 md:block md:w-[80%] md:border-t-2 md:border-dashed md:border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
