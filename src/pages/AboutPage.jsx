import StockBackground from '@/components/layout/StockBackground.jsx'

export default function AboutPage() {
  return (
    <section className="bg-stone-50 pb-16 pt-28 md:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-950 px-6 py-16 text-stone-50 shadow-[0_24px_80px_rgba(28,25,23,0.18)] sm:px-10">
          <StockBackground
            slotId="about-hero"
            imageId="about-hero-k4"
            title="Velmora studio"
            description="Editorial still life of gold jewelry, silk, and warm stone textures in a luxury studio setting"
            ratio="16x9"
            width="1600"
            className="absolute inset-0 bg-cover bg-center opacity-25"
          />
          <div className="relative max-w-3xl space-y-5">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-amber-200">
              About Velmora
            </p>
            <h1 className="font-serif text-5xl text-stone-50 sm:text-6xl">
              Quiet luxury, designed to live with you
            </h1>
            <p className="text-base leading-8 text-stone-200">
              Velmora Fine Jewelry creates elevated demi-fine essentials for women who
              want polish without excess. Our pieces are intentionally giftable,
              premium-looking, and easy enough to wear every day.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            [
              'Design',
              'We focus on warm finishes, elegant silhouettes, and thoughtful proportions that layer beautifully.',
            ],
            [
              'Craft',
              'Our materials are selected to feel refined and accessible, balancing comfort with a polished, lasting look.',
            ],
            [
              'Gifting',
              'Every piece is made to feel special from the first glance to the final unboxing moment.',
            ],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">{title}</p>
              <p className="mt-4 font-serif text-3xl text-stone-950">{title}</p>
              <p className="mt-4 text-sm leading-7 text-stone-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
