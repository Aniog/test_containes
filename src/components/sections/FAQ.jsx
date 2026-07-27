import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import { faqs } from "@/data/site"
import { cn } from "@/lib/utils"

const FAQ = ({ limit, title = "Frequently asked questions", eyebrow = "FAQ", description = "Straight answers to the questions we get most from new buyers." }) => {
  const items = limit ? faqs.slice(0, limit) : faqs
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-warm-100">
      <div className="container-content py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            <p className="mt-6 text-[15px] text-ink-secondary">
              Don't see your question?{" "}
              <a
                href="/contact"
                className="text-teal hover:text-teal-hover font-semibold"
              >
                Send us a message
              </a>{" "}
              and we'll get back within one business day.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="flex flex-col">
              {items.map((item, i) => {
                const open = openIndex === i
                return (
                  <li
                    key={item.q}
                    className={cn(
                      "border-b border-warm-300",
                      i === 0 && "border-t"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-[16px] md:text-[17px] font-semibold text-ink leading-snug">
                        {item.q}
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full bg-warm-200 text-navy flex items-center justify-center">
                        {open ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    {open && (
                      <div className="pb-6 pr-10 text-[15px] leading-relaxed text-ink-secondary">
                        {item.a}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
