import SectionHeader from '@/components/ui/SectionHeader';
import { processSteps } from '@/data/content';

export default function ProcessSection() {
  return (
    <section id="process" className="section section-alt">
      <div className="container-x">
        <SectionHeader
          eyebrow="How it works"
          title="A 7-step sourcing process, run by your dedicated project manager"
          subtitle="From the first email to cargo at your destination port, every step is tracked, documented, and reported to you in writing."
        />

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#DDE2EC] -translate-x-1/2" aria-hidden />
          <ol className="space-y-8 md:space-y-10">
            {processSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li key={step.n} className="relative md:grid md:grid-cols-2 md:gap-12 items-start">
                  <div className={`hidden md:block ${isLeft ? 'md:order-1 md:text-right' : 'md:order-2'}`}>
                    {isLeft && <StepCard step={step} alignRight />}
                  </div>
                  <div className={`hidden md:flex ${isLeft ? 'md:order-2 md:justify-start' : 'md:order-1 md:justify-end'} items-start`}>
                    {!isLeft && <StepCard step={step} alignLeft />}
                  </div>
                  {/* Mobile: simple card */}
                  <div className="md:hidden">
                    <StepCard step={step} />
                  </div>
                  {/* Center number circle (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B2545] text-white items-center justify-center font-bold text-sm shadow-md">
                    {String(step.n).padStart(2, '0')}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, alignRight, alignLeft }) {
  return (
    <div className={`bg-white border border-[#DDE2EC] rounded-xl p-6 shadow-sm max-w-md ${alignRight ? 'ml-auto' : ''} ${alignLeft ? 'mr-auto' : ''}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className="md:hidden w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
          {String(step.n).padStart(2, '0')}
        </span>
        <h3 className="text-lg font-bold text-[#1A2230]">{step.title}</h3>
      </div>
      <p className="text-sm text-[#3D4A5C] leading-relaxed">{step.body}</p>
    </div>
  );
}
