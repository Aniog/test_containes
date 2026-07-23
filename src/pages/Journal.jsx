import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: "stack-the-heirloom",
    title: "How to stack the heirloom set three ways",
    excerpt: "A short guide to wearing our most-loved pieces together — for a wedding, a weekday, or a quiet dinner.",
    date: "March 12, 2026",
    imgId: "journal-stack-1a2b",
    read: "4 min",
  },
  {
    id: "care-of-gold",
    title: "The real way to care for gold-plated jewelry",
    excerpt: "Six small habits that keep demi-fine pieces looking new for years — without the marketing-speak.",
    date: "February 24, 2026",
    imgId: "journal-care-3c4d",
    read: "3 min",
  },
  {
    id: "gifting-by-zodiac",
    title: "Gifting by mood, not occasion",
    excerpt: "A short guide for when you don't know what to get — and you're not sure they do either.",
    date: "January 30, 2026",
    imgId: "journal-gifting-5e6f",
    read: "5 min",
  },
];

export default function Journal() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-bone-100 pt-24 sm:pt-28 pb-24 min-h-screen">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55">
            The Velmora Journal
          </p>
          <h1 className="display-serif mt-3 text-4xl sm:text-5xl">
            Stories, guides, and quiet inspiration.
          </h1>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {POSTS.map((p, i) => (
            <li
              key={p.id}
              className="group reveal"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Link to="#" className="block">
                <div className="relative overflow-hidden image-placeholder aspect-[4/5]">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.id}-excerpt] [${p.id}-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    loading="lazy"
                    className="relative z-10 w-full h-full object-cover transition-transform duration-1000 ease-out-soft group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-[11px] uppercase tracking-widest2 text-espresso/55">
                    {p.date} · {p.read} read
                  </p>
                  <h2
                    id={`${p.id}-title`}
                    className="display-serif mt-2 text-2xl group-hover:text-gold-400 transition-colors"
                  >
                    {p.title}
                  </h2>
                  <p
                    id={`${p.id}-excerpt`}
                    className="mt-2 text-sm text-espresso/65"
                  >
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 link-underline">
                    Read more
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
