const FeaturedGenerators = ({ t, generators }) => {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
          {t.featured.heading}
        </h2>
        <p className="text-body-text text-center mb-[30px]">
          {t.featured.sub}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {generators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded-[3px] p-[20px] card-hover-shadow focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              <h3 className="font-heading text-[15px] text-heading-section uppercase mb-[5px]">
                {gen.name}
              </h3>
              <p className="text-body-text text-[14px] mb-[10px] leading-[1.4]">
                {gen.description}
              </p>
              <span className="inline-block font-heading text-[11px] uppercase text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px]">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
