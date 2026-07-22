import { useRef } from "react";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import { Link } from "react-router-dom";

const POSTS = [
  {
    id: "j-1",
    title: "How to layer necklaces without tangling",
    excerpt: "A short, photographic guide to stacking three pieces — and a trick for getting them off in one motion.",
    date: "Mar 14, 2026",
    readTime: "4 min",
    category: "Styling",
    imgId: "journal-img-1",
    titleId: "j-1-title",
    descId: "j-1-desc",
    query:
      "woman wearing layered delicate gold necklaces editorial portrait soft warm light close up",
  },
  {
    id: "j-2",
    title: "Inside the Istanbul atelier",
    excerpt: "Meet the four craftspeople who plate, polish, and pack every Velmora piece before it ships.",
    date: "Feb 22, 2026",
    readTime: "7 min",
    category: "The Studio",
    imgId: "journal-img-2",
    titleId: "j-2-title",
    descId: "j-2-desc",
    query:
      "atelier craftsman hands working with fine gold jewelry editorial warm light portrait",
  },
  {
    id: "j-3",
    title: "Why 18K gold plate is the new standard",
    excerpt: "A material primer on plating thickness, hypoallergenic bases, and what to ask before you buy.",
    date: "Jan 30, 2026",
    readTime: "5 min",
    category: "Materials",
    imgId: "journal-img-3",
    titleId: "j-3-title",
    descId: "j-3-desc",
    query:
      "close up macro of 18K gold plated jewelry on warm neutral background editorial",
  },
  {
    id: "j-4",
    title: "The five-piece ear curation",
    excerpt: "An edit of the studs, cuffs, and huggies that look intentional together — even when you grabbed them blindly.",
    date: "Jan 12, 2026",
    readTime: "3 min",
    category: "Styling",
    imgId: "journal-img-4",
    titleId: "j-4-title",
    descId: "j-4-desc",
    query:
      "close up of a woman's ear with multiple gold earrings layered editorial portrait soft light",
  },
];

export default function Journal() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Styling", "The Studio", "Materials"];

  useEffect(() => {
    // re-scan images when filter changes (new images mount)
    const frame = window.requestAnimationFrame(() => {
      const ev = new Event("journal:filter-changed");
      window.dispatchEvent(ev);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filter]);

  const filtered = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-ivory">
        <div className="container-x text-center max-w-2xl">
          <p className="eyebrow mb-5">The Journal</p>
          <h1 className="font-serif text-h1 md:text-[64px] leading-[1.05]">
            Notes from the{" "}
            <em className="italic font-normal text-champagne-deep">studio</em>.
          </h1>
          <p className="mt-5 text-body text-espresso">
            Quiet essays on jewelry, craft, and the small daily acts of getting dressed.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-24 md:pb-32" ref={containerRef}>
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-hairline mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`text-eyebrow uppercase px-3.5 py-1.5 border transition-colors ${
                    filter === c
                      ? "bg-ink text-bone border-ink"
                      : "border-hairline text-ink hover:border-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="search"
                placeholder="Search the journal"
                className="bg-transparent border border-hairline text-small pl-9 pr-3 py-2 focus:outline-none focus:border-ink"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {filtered.map((post, idx) => (
              <article
                key={post.id}
                className={idx % 3 === 0 ? "md:col-span-2" : ""}
              >
                <Link to="#" className="group block">
                  <div
                    className={`relative overflow-hidden bg-blush ${
                      idx % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <StrkImage
                      imgId={post.imgId}
                      query={`[${post.descId}] [${post.titleId}] ${post.query}`}
                      ratio={idx % 3 === 0 ? "16x9" : "4x3"}
                      width={idx % 3 === 0 ? 1600 : 800}
                      alt={post.title}

                      className="h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pt-5 flex items-center gap-3 text-eyebrow uppercase text-muted">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    <span>{post.readTime} read</span>
                  </div>
                  <h2
                    id={post.titleId}
                    className="font-serif text-2xl md:text-3xl mt-2 leading-snug text-ink group-hover:text-champagne-deep transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p
                    id={post.descId}
                    className="mt-2 text-body text-espresso"
                  >
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-eyebrow uppercase text-muted">{post.date}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
