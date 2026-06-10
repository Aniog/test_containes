import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/content';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2230] leading-tight">
              Questions buyers ask before working with us
            </h2>
            <p className="mt-4 text-base text-[#3D4A5C] leading-relaxed">
              Don't see your question? Send it with your inquiry — a project manager will reply within 1 business day.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[#EEF1F6] border-y border-[#EEF1F6]">
              {faqs.slice(0, 8).map((item, i) => {
                const open = openIdx === i;
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    >
                      <span className="text-[15.5px] md:text-base font-semibold text-[#1A2230] leading-snug pr-4 group-hover:text-[#0B2545]">
                        {item.q}
                      </span>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${open ? 'bg-[#0B2545] text-white' : 'bg-[#F8F9FB] text-[#0B2545]'}`}>
                        {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {open && (
                      <div className="pb-5 pr-12 text-sm md:text-[15px] text-[#3D4A5C] leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
