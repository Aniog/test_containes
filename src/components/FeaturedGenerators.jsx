import strings from '../strings.en.js';
import { featuredGenerators } from '../data.js';

export default function FeaturedGenerators() {
  return (
    <section className="py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[5px]">
          {strings.featuredHeading}
        </h2>
        <p className="text-[14px] text-body-gray m-0 mb-[20px]">
          {strings.featuredSub}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card flex flex-col gap-[10px] no-underline text-inherit group"
            >
              <span className="tag self-start">{gen.category}</span>
              <span className="font-heading font-bold text-[16px] uppercase text-heading-dark leading-tight">
                {gen.name}
              </span>
              <p className="text-[14px] text-body-gray m-0 leading-relaxed">
                {gen.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}