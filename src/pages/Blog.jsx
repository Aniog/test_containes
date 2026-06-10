import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import CtaBanner from '@/components/shared/CtaBanner';
import { blogPosts } from '@/data/content';

const categoryColor = {
  'Sourcing strategy': 'bg-[#EEF1F6] text-[#0B2545]',
  'Quality & QC': 'bg-[#FBE9DE] text-[#9C4724]',
  'Logistics & shipping': 'bg-[#E1ECF6] text-[#1E3A5F]',
  'Supplier management': 'bg-[#E2F0E6] text-[#1E5A30]',
  'Cost & negotiation': 'bg-[#F2EBF8] text-[#4B2A75]',
  'Compliance & risk': 'bg-[#FCE7E2] text-[#8A2B1B]',
};

export default function Blog() {
  const imgRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imgRef.current);
  }, []);

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical notes from the sourcing floor"
        subtitle="Short, specific articles on the parts of China sourcing that most guides skip over — factory verification, QC, negotiation, shipping, and the things that go wrong."
        bgId="blog-bg-6a2f1d"
        bgQuery="[blog-hero-subtitle] [blog-hero-title]"
      >
        <span id="blog-hero-title" className="sr-only">China sourcing blog</span>
        <span id="blog-hero-subtitle" className="sr-only">Practical notes</span>
      </PageHero>

      <section ref={imgRef} className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Featured"
            title="Start with the most-read piece this month"
          />

          <article className="mt-10 grid lg:grid-cols-12 gap-8 items-center card overflow-hidden p-0">
            <div className="lg:col-span-6">
              <img
                alt={featured.title}
                className="w-full h-72 lg:h-full object-cover"
                data-strk-img-id={featured.imageId}
                data-strk-img={featured.image}
                data-strk-img-ratio="3x2"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="lg:col-span-6 p-7 md:p-10">
              <div className="flex items-center gap-3 mb-3 text-xs text-[#6B7A90]">
                <span className={`pill ${categoryColor[featured.category] || 'bg-[#EEF1F6] text-[#0B2545]'}`}>{featured.category}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2230] leading-snug">{featured.title}</h2>
              <p className="mt-3 text-base text-[#3D4A5C] leading-relaxed">{featured.excerpt}</p>
              <a href="#post-1" className="mt-5 inline-flex items-center gap-2 text-[#0B2545] font-semibold text-sm hover:text-[#E8743B]">
                Read article <Icon.ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x">
          <SectionHeader
            eyebrow="All articles"
            title="More from the blog"
            subtitle="Hand-picked pieces on the topics buyers ask us about most."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <article key={post.id} className="card overflow-hidden flex flex-col">
                <div className="relative">
                  <img
                    alt={post.title}
                    className="w-full h-44 object-cover"
                    data-strk-img-id={post.imageId}
                    data-strk-img={post.image}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`pill ${categoryColor[post.category] || 'bg-[#EEF1F6] text-[#0B2545]'}`}>{post.category}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs text-[#6B7A90] mb-2">{post.readTime}</div>
                  <h3 className="text-[16px] font-bold text-[#1A2230] leading-snug">{post.title}</h3>
                  <p className="mt-2 text-sm text-[#3D4A5C] leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                  <a href={`#post-${i + 2}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2545] hover:text-[#E8743B]">
                    Read article <Icon.ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want updates on new articles?"
        subtitle="Send us an inquiry to get on the list. We send one short note per month, no marketing fluff."
      />
    </>
  );
}
