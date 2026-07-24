import PageIntro from '../components/common/PageIntro'
import useStrkImages from '../lib/useStrkImages'

const values = [
  {
    title: 'Quiet luxury, always wearable',
    body: 'Velmora creates jewelry that feels elevated in the everyday — polished enough to gift, light enough to live in.',
  },
  {
    title: 'Premium without the ceremony',
    body: 'We believe demi-fine pieces should look beautifully expensive while staying within reach for self-purchase and thoughtful gifting.',
  },
  {
    title: 'Warm finishes, modern silhouettes',
    body: 'Each design is shaped to flatter the skin, layer effortlessly, and hold onto that softly editorial mood.',
  },
]

const About = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-stone-950 text-stone-50">
      <PageIntro
        eyebrow="About Velmora"
        title="Designed for the moments in between occasions."
        description="Velmora Fine Jewelry was imagined for women who want the warmth of gold and the ease of pieces they can reach for daily. We blend premium-looking finishes, gift-ready presentation, and understated styling into jewelry that feels quietly indulgent."
      />

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-900/60">
            <span id="about-title" className="sr-only">Velmora atelier story</span>
            <span id="about-desc" className="sr-only">warm editorial still life of gold jewelry, ribbon, suede box, and soft studio styling</span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier still life"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="about-story-visual-4a71"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="tracking-kicker text-xs uppercase text-amber-200">Our point of view</p>
              <h2 className="font-display text-5xl font-semibold leading-none text-stone-50 md:text-6xl">
                Gold that feels intimate, not overdone.
              </h2>
              <p className="max-w-xl text-base leading-8 text-stone-300">
                We are drawn to sculptural forms, subtle shine, and details that feel personal. From morning meetings to evening dinners, Velmora is made to move naturally with your wardrobe instead of waiting for a special event.
              </p>
            </div>
            <div className="grid gap-4">
              {values.map((value) => (
                <article key={value.title} className="rounded-[1.75rem] border border-stone-200/10 bg-stone-900/60 p-6">
                  <h3 className="font-display text-3xl text-stone-50">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
