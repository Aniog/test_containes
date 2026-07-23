import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageScope, StrkImg } from '@/components/StrkImage.jsx';

const POSTS = [
  {
    title: 'How to Build the Perfect Ear Stack',
    date: 'July 2026',
    tag: 'Styling',
    excerpt:
      'Start with a dome huggie, add a cuff where the ear curves, finish with something that sparkles. Our three-step formula.',
    query: 'editorial photo of woman ear with curated gold ear stack, huggies and ear cuff, warm light',
  },
  {
    title: 'Demi-Fine vs. Fine: What You Are Actually Paying For',
    date: 'June 2026',
    tag: 'Education',
    excerpt:
      'Microns matter. A transparent look at plating thickness, base metals, and why 2.5 microns of 18K gold lasts years.',
    query: 'macro photography of gold jewelry surface texture and chain links, warm dark background',
  },
  {
    title: 'The Art of Gifting Jewelry (Without Guessing)',
    date: 'May 2026',
    tag: 'Gifting',
    excerpt:
      'Her jewelry box already tells you everything. How to read her style and choose a piece she will never take off.',
    query: 'hands tying ribbon on an elegant jewelry gift box, warm linen backdrop, editorial',
  },
  {
    title: 'Caring for Gold-Plated Pieces, Properly',
    date: 'April 2026',
    tag: 'Care',
    excerpt:
      'Five small rituals — last on, first off, and the pouch rule — that keep the warm glow for years.',
    query: 'gold jewelry pieces arranged in a soft pouch on warm neutral fabric, soft morning light',
  },
];

export default function Journal() {
  return (
    <div className="pt-16 md:pt-[72px]">
      <div className="border-b border-linen bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-10 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">
            Notes from the Atelier
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-espresso md:text-5xl">The Journal</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-mink">
            Styling notes, honest education, and the occasional behind-the-bench story.
          </p>
        </div>
      </div>

      <ImageScope className="mx-auto grid max-w-7xl gap-x-6 gap-y-12 px-5 py-14 md:grid-cols-2 md:px-10 md:py-20">
        {POSTS.map((post, i) => (
          <article key={post.title} className="group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="overflow-hidden bg-cream">
              <StrkImg
                imgId={`journal-${i}`}
                query={post.query}
                ratio="3x2"
                width={900}
                alt={post.title}
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-5">
              <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em]">
                <span className="text-bronze">{post.tag}</span>
                <span className="h-px w-6 bg-linen" />
                <span className="text-ash">{post.date}</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl leading-snug text-espresso transition-colors duration-300 group-hover:text-bronze">
                {post.title}
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-umber">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-all duration-300 group-hover:gap-3 group-hover:text-bronze">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        ))}
      </ImageScope>

      <div className="mx-auto max-w-7xl px-5 pb-20 text-center md:px-10">
        <Link
          to="/shop"
          className="inline-block border border-espresso px-10 py-3.5 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-all duration-300 hover:bg-espresso hover:text-ivory"
        >
          Shop the Pieces
        </Link>
      </div>
    </div>
  );
}
