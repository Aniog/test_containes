export default function FeaturedGenerators({ t, data }) {
  return (
    <section className="py-[40px] bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading m-0 mb-[5px]">
          {t.featured.heading}
        </h2>
        <p className="text-body-text m-0 mb-[30px]">
          {t.featured.subheading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {data.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="block bg-white border border-card-border rounded-[3px] p-[20px] card-hover h-full"
              >
                <h3 className="font-heading text-[15px] text-heading-dark m-0 mb-[5px]">
                  {gen.name}
                </h3>
                <p className="text-body-text text-[13px] m-0 mb-[10px]">
                  {gen.description}
                </p>
                <span className="inline-block font-heading text-[11px] text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px]">
                  {gen.category}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
