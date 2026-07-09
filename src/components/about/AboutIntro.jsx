const AboutIntro = () => (
  <section className="bg-velmora-noir pb-16 pt-28 text-velmora-ivory sm:pb-20 sm:pt-32 lg:pb-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">
          About Velmora
        </p>
        <h1 id="about-title" className="mt-4 font-display text-5xl sm:text-6xl">
          Warm, modern jewelry meant to be worn often and treasured for longer.
        </h1>
        <p id="about-copy" className="mt-6 max-w-xl text-sm leading-8 text-velmora-ivory/78 sm:text-base">
          We design premium-but-accessible demi-fine pieces with the softness of heirlooms and the practicality of everyday staples. Each collection is edited for effortless wear, beautiful gifting, and timeless shine.
        </p>
        <p id="about-note" className="sr-only" aria-hidden="true">
          warm studio portrait of a woman wearing elegant gold jewelry with soft editorial lighting
        </p>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
        <div className="aspect-[4/5]" />
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-intro-bg"
          data-strk-bg="[about-note] [about-copy] [about-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1200"
        />
      </div>
    </div>
  </section>
)

export default AboutIntro
