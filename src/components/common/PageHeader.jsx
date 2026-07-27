import SectionHeading from '@/components/ui/SectionHeading'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          light
        />
      </div>
    </section>
  )
}
