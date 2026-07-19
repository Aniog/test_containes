import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "post-care",
    eyebrow: "Care Guide",
    title: "How to care for gold-plated jewelry (so it lasts).",
    excerpt: "Five small habits that keep your pieces shining for years.",
    imgId: "post-care-img",
    titleId: "post-care-title",
  },
  {
    id: "post-stack",
    eyebrow: "Styling",
    title: "The art of the ear stack.",
    excerpt: "Our founder on building a personal ear story, one piece at a time.",
    imgId: "post-stack-img",
    titleId: "post-stack-title",
  },
  {
    id: "post-gift",
    eyebrow: "Gifting",
    title: "A gift that lasts: how to choose a piece they'll keep.",
    excerpt: "What we look for when picking jewelry for someone you love.",
    imgId: "post-gift-img",
    titleId: "post-gift-title",
  },
  {
    id: "post-behind",
    eyebrow: "Behind the Brand",
    title: "Inside the Velmora atelier.",
    excerpt: "A morning in our studio — from sketch to finished piece.",
    imgId: "post-behind-img",
    titleId: "post-behind-title",
  },
];

function PostCard({ post }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <article ref={ref} className="group">
      <div className="aspect-[3/4] overflow-hidden bg-cream">
        <img
          alt={post.title}
          data-strk-img-id={post.imgId}
          data-strk-img={`[${post.titleId}] [journal-section-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out-soft group-hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <span className="eyebrow mb-2 block">{post.eyebrow}</span>
        <h3
          id={post.titleId}
          className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-gold-deep transition-colors"
        >
          {post.title}
        </h3>
        <p className="text-mocha text-sm mt-3">{post.excerpt}</p>
      </div>
    </article>
  );
}

export default function JournalPage() {
  return (
    <div className="bg-ivory pt-24 md:pt-32 pb-24">
      <div className="container-x">
        <div className="text-center pb-12 md:pb-16">
          <span className="eyebrow mb-3 block">The Journal</span>
          <h1 id="journal-section-title" className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Stories, styling, <em className="italic">slow thoughts</em>.
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-x-7 gap-y-14">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/shop" className="btn-outline">Shop the Collection</Link>
        </div>
      </div>
    </div>
  );
}
