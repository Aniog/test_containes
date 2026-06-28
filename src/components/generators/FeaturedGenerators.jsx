import { featuredGenerators, strings } from "../../data/generatorsData.js";

const s = strings.en;

export default function FeaturedGenerators() {
  return (
    <section
      style={{
        background: "#F4F6F8",
        paddingBlock: "60px",
      }}
      aria-labelledby="featured-heading"
    >
      <div className="content-wrap">
        <h2
          id="featured-heading"
          className="font-heading"
          style={{
            color: "#4B5056",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            margin: "0 0 8px",
          }}
        >
          {s.featuredHeading}
        </h2>
        <p
          style={{
            color: "#636972",
            fontSize: "15px",
            margin: "0 0 30px",
          }}
        >
          {s.featuredSubheading}
        </p>

        <div className="grid-3">
          {featuredGenerators.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="gen-card"
                aria-label={gen.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  height: "100%",
                }}
              >
                <span className="cat-tag" style={{ alignSelf: "flex-start" }}>
                  {gen.category}
                </span>
                <strong
                  className="font-heading"
                  style={{
                    color: "#2E2E2F",
                    fontSize: "15px",
                    lineHeight: 1.3,
                    display: "block",
                  }}
                >
                  {gen.name}
                </strong>
                <span
                  style={{
                    color: "#636972",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                >
                  {gen.description}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
