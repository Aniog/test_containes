import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StockImage } from "@/components/ui/StockImage";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { journalPosts } from "@/data/site";

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28 pb-20">
      <Container>
        <div className="pb-12 border-b border-hairline">
          <p className="eyebrow">The Journal</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl font-light text-ink leading-[1.05]">
            Notes from the atelier.
          </h1>
          <p className="mt-3 text-[15px] text-taupe max-w-md">
            Quiet essays on how we make, wear, and care for demi-fine jewelry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-12">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to="#" className="block">
                <div className="relative aspect-[3/2] bg-cocoa overflow-hidden">
                  <StockImage
                    id={post.imgId}
                    query={post.query}
                    ratio="3x2"
                    width={900}
                    alt={post.title}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6">
                  <p className="text-[11px] uppercase tracking-ui text-taupe">
                    {post.category} · {post.readTime}
                  </p>
                  <h2
                    id={`${post.id}-title`}
                    className="mt-2 font-serif text-2xl md:text-3xl font-light text-ink leading-snug text-balance group-hover:text-gold-deep transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-taupe max-w-prose-luxe">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-ui text-ink group-hover:text-gold-deep transition-colors">
                    Read More
                    <ArrowRight size={12} strokeWidth={1.4} />
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
