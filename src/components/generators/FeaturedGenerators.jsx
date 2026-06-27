export default function FeaturedGenerators({ t, items }) {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-2">{t.heading}</h2>
        <p className="text-body-text text-center mb-8">{t.sub}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <a
              key={item.slug}
              href={`/generators/${item.slug}`}
              className="group block bg-white border border-card-border rounded-[3px] p-5 transition-shadow hover:shadow-md hover:border-brand-purple focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              <h3 className="font-heading font-bold text-[15px] text-heading-section uppercase mb-1">
                {item.name}
              </h3>
              <p className="text-body-text text-[14px] mb-3">{item.desc}</p>
              <span className="inline-block text-[11px] font-heading font-bold uppercase text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px]">
                {item.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
