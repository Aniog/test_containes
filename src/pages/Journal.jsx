import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import { JOURNAL_POSTS } from "@/data/content";
import Newsletter from "@/components/layout/Newsletter";

export default function Journal() {
  const containerRef = useRef(null);
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  const [feature, ...rest] = JOURNAL_POSTS;

  return (
    <div className="bg-cream" ref={containerRef}>
      <section className="bg-ivory border-b border-tan/40">
        <div className="container-editorial py-16 md:py-24 text-center">
          <Reveal>
            <p className="eyebrow text-gold-deep">The Velmora Journal</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl text-ink leading-tight">
              Stories, styling, and{" "}
              <em className="italic font-normal text-mauve">slow notes</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-mauve text-[15px] md:text-[16px] max-w-prose mx-auto">
              The conversations happening at the studio. Care guides, styling
              notes, and the things we wish someone had told us sooner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="container-editorial py-16 md:py-20">
        <Reveal>
          <article className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <Link
              to={`/journal/${feature.slug}`}
              className="relative block aspect-[5/6] md:aspect-[4/3] overflow-hidden bg-ink"
            >
              <SmartImage
                alt={feature.title}
                query={feature.query}
                ratio="4x3"
                width={1400}
                imgId={`journal-feature-${feature.slug}`}
                className="w-full h-full"
                imgClassName="transition-transform duration-[800ms] ease-out group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Link>
            <div>
              <p className="eyebrow text-gold-deep">{feature.category}</p>
              <Link to={`/journal/${feature.slug}`}>
                <h2 className="mt-4 font-serif text-3xl md:text-5xl text-ink leading-tight group-hover:text-gold-deep transition-colors">
                  {feature.title}
                </h2>
              </Link>
              <p className="mt-5 text-mauve text-[16px] leading-relaxed max-w-prose">
                {feature.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-[12px] text-mauve">
                <span>{feature.author}</span>
                <span>·</span>
                <span>{feature.date}</span>
                <span>·</span>
                <span>{feature.readTime}</span>
              </div>
              <Link
                to={`/journal/${feature.slug}`}
                className="mt-6 inline-flex items-center gap-2 link-underline"
              >
                Read the story
                <ArrowRight size={14} strokeWidth={1.6} />
              </Link>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Rest as 2-col grid */}
      <section className="container-editorial pb-20 md:pb-24">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <li>
                <article className="group">
                  <Link
                    to={`/journal/${p.slug}`}
                    className="relative block aspect-[4/3] overflow-hidden bg-ink"
                  >
                    <SmartImage
                      alt={p.title}
                      query={p.query}
                      ratio="4x3"
                      width={1000}
                      imgId={`journal-${p.slug}`}
                      className="w-full h-full"
                      imgClassName="transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    />
                  </Link>
                  <p className="mt-5 eyebrow text-gold-deep">{p.category}</p>
                  <Link to={`/journal/${p.slug}`}>
                    <h3 className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-tight group-hover:text-gold-deep transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-mauve text-[15px] leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-[12px] text-mauve">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.4}
                      className="text-gold-deep"
                    />
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <Newsletter variant="ink" />
    </div>
  );
}
