import { FAQS } from "@/data/content"
import SectionHeading from "@/components/common/SectionHeading"
import FaqList from "@/components/common/FaqList"

export default function HomeFaq() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Practical answers to the questions buyers ask before working with a sourcing agent."
            />
          </div>
          <div className="lg:col-span-7">
            <FaqList items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  )
}
