import SectionHeading from '@/components/ui/SectionHeading.jsx'

const values = [
  {
    title: 'Quiet luxury, every day',
    description: 'Velmora pieces are designed to elevate daily rituals with softly sculptural forms and warm gold finishes.',
  },
  {
    title: 'Premium without pretense',
    description: 'Our demi-fine approach keeps quality, comfort, and accessibility in balance so gifting feels easy and self-purchase feels special.',
  },
  {
    title: 'Made to layer and keep',
    description: 'From huggies to necklaces, each silhouette is created to sit effortlessly within a personal jewelry wardrobe.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-stone-950 pt-32 text-stone-100">
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="About Velmora"
          title="Jewelry created to feel collected, not overdone."
          description="Velmora Fine Jewelry was shaped around the idea that everyday adornment should feel intimate, polished, and effortless. The result is a tight edit of demi-fine gold pieces for gifting, celebrating, and repeating often."
        />
      </section>
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="surface-card p-8">
            <h2 className="font-display text-4xl text-stone-100">{value.title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">{value.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
