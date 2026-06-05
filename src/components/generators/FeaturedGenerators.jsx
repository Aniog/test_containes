import strings from '../../data/strings.en.js';
import { featuredGenerators } from '../../data/generators.js';

export default function FeaturedGenerators() {
  return (
    <section className="section-padding bg-light-bg">
      <div className="content-container">
        <h2 className="text-heading-gray text-[22px] md:text-[28px] mb-[5px] mt-0">
          {strings.featuredHeading}
        </h2>
        <p className="text-body-gray text-[14px] mb-[30px] mt-0">
          {strings.featuredSub}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card flex flex-col gap-[10px] group"
            >
              <span className="tag self-start">{gen.category}</span>
              <span className="block text-hero-dark text-[16px] leading-[1.2] font-heading font-bold uppercase">
                {gen.name}
              </span>
              <p className="text-body-gray text-[14px] m-0 leading-[1.5]">
                {gen.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}