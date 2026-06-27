export default function FeaturedGenerators({ t, generators, slugify }) {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section mb-[5px]">
          {t.featured.heading}
        </h2>
        <p className="text-body-text mb-[30px]">{t.featured.sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {generators.map((gen) => (
            <a
              key={gen.name}
              href={`/generators/${slugify(gen.name)}`}
              className="block bg-white border border-card-border rounded-[3px] p-[20px] card-hover-lift"
            >
              <span className="block font-heading text-[15px] text-heading-dark mb-[5px]">
                {gen.name}
              </span>
              <span className="block text-body-text text-[13px] mb-[10px]">
                {gen.desc}
              </span>
              <span className="inline-block font-heading text-[11px] text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px] uppercase">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
