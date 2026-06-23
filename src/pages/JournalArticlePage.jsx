import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { journalArticles } from '@/data/products';
import { format, parseISO } from 'date-fns';

const articleContent = {
  'on-wearing-jewelry-alone': `There is a particular kind of pleasure in putting on a ring when no one is watching.

Not the pleasure of being seen — the opposite of that. The pleasure of a ritual that belongs entirely to you. The cool weight of metal against your finger. The small decision of which hand, which finger, which piece today.

Jewelry has always had a public dimension. We wear it to signal things — status, affiliation, love. But there is another dimension that gets less attention: the private one. The jewelry we wear not to be seen, but to feel something.

The ring you put on every morning before you leave the house. The necklace you touch when you are nervous. The bracelet that has been through everything with you.

These pieces are not fashion. They are not statements. They are companions.

We started Small Hours because we believe that the most meaningful jewelry is the kind that means something to the person wearing it — not the person looking at it. The kind that you would still wear if no one could see it.

The kind you wear in the small hours.`,

  'the-making-of-the-crescent-ring': `The Crescent Ring takes three weeks to make. Here is what happens in between.

Week one begins with a sketch — not a technical drawing, but something closer to a feeling. A curve. A weight. A sense of how it should sit on the finger. The sketch is refined until it feels right, then translated into a wax model.

The wax model is carved by hand. This is where the form is decided — where the weight, the curve, the proportion are all worked out before a single gram of gold is used. It takes two days.

In week two, the wax model is encased in plaster and heated until the wax burns away, leaving a perfect mold. Molten recycled gold is poured in. The result is a raw casting that carries the exact form of the original model.

The casting is rough. It needs to be filed, sanded, and polished — a process that takes most of week three. This is the most time-consuming part, and the most important. It is where the piece becomes itself.

The final step is quality control. Every ring is checked against the original sketch, weighed, measured, and worn by a member of our team before it leaves the studio.

Three weeks. One ring. Made slowly.`,

  'how-to-build-a-jewelry-wardrobe': `Not a collection. A wardrobe. The difference is in how you wear it — and what it means when you do.

A collection is accumulated. A wardrobe is built. The distinction matters because it changes how you think about each piece you add.

A wardrobe starts with foundations. For jewelry, that means the pieces you reach for every day without thinking — the ring that never comes off, the necklace that goes with everything, the earrings you put on when you want to feel like yourself.

These pieces should be simple. Not boring — simple. They should work with everything you own and feel like a second skin. They should be made well enough to last.

Once you have your foundations, you can start to add character. A piece that is a little more unusual. A piece that you wear on specific occasions. A piece that tells a story.

The mistake most people make is starting with character before they have foundations. The result is a collection of interesting pieces that never quite work together.

Start with the pieces you will wear every day. Build from there.`,

  'recycled-gold-what-it-means': `The word "recycled" gets used a lot. Here is what it actually means for us, and why it matters more than you might think.

Gold is one of the most recyclable materials on earth. It can be melted down and reused indefinitely without any loss of quality. Recycled gold is chemically identical to newly mined gold — the same purity, the same color, the same properties.

The difference is in what it took to get there.

Mining gold is one of the most environmentally destructive processes in the world. It requires enormous amounts of water, produces toxic waste, and displaces communities. A single gold ring requires the removal of approximately 20 tons of earth.

Recycled gold requires none of that. It comes from existing jewelry, electronics, and industrial materials — things that already exist in the world.

We use 100% recycled gold across our entire collection. Not because it is a marketing point, but because it is the only choice that makes sense to us.

The pieces we make are designed to last. They should not come at the cost of the world they exist in.`,

  'the-small-hours': `The phrase "the small hours" refers to the time between midnight and dawn.

It comes from the way we count time — the hours after midnight are the smallest numbers on the clock. One, two, three. The hours when the world is quiet and you are most yourself.

It is the time when you take off your jewelry before bed. When you put it on before anyone else is awake. When you sit with a cup of tea and think about nothing in particular.

These are the hours that belong only to you. Not to your work, your relationships, your obligations. Just to you.

We named our brand after these hours because we believe that the most meaningful things happen in them. The quiet rituals. The private moments. The small decisions that add up to a life.

Jewelry is part of that. The pieces you choose to wear, and when, and why — these are private things. They belong to the small hours.

We make jewelry for those hours.`,

  'on-gifting-jewelry': `A piece of jewelry is not just an object. It is a memory, a feeling, a moment preserved in metal.

This is what makes it such a powerful gift — and such a difficult one. The wrong piece of jewelry is not just a bad gift. It is a statement about how well you know someone.

The right piece is something else entirely. It is evidence of attention. Of the fact that you noticed something about this person — the way they dress, the things they value, the kind of beauty they are drawn to.

Here is what we have learned about giving jewelry well.

Give something that will be worn, not displayed. The most meaningful jewelry is the kind that becomes part of someone's daily life — not the kind that sits in a box.

Give something that fits their existing style. The best jewelry gifts are the ones that feel like they were always there.

Give something with a story. Not a marketing story — a real one. Why did you choose this piece? What does it mean to you? Write it down.

And give it in a way that matches the gift. Jewelry deserves a moment. Not a bag thrown across a table, but a quiet exchange. A small ceremony.

The piece will carry that moment with it.`,
};

export default function JournalArticlePage() {
  const { slug } = useParams();
  const article = journalArticles.find(a => a.slug === slug);
  const containerRef = useRef(null);
  const content = articleContent[slug] || '';

  const related = journalArticles
    .filter(a => a.slug !== slug && a.category === article?.category)
    .slice(0, 2);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <p className="font-serif text-2xl text-ink/40" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Article not found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {/* Hero image */}
      <div className="overflow-hidden bg-cream-dark" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          data-strk-img-id={article.imgId}
          data-strk-img={`[article-desc-${article.id}] [article-title-${article.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article */}
      <div className="max-w-2xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="label-caps text-gold" style={{ fontSize: '9px' }}>{article.category}</span>
          <span className="label-caps text-muted" style={{ fontSize: '9px' }}>
            {format(parseISO(article.date), 'MMMM d, yyyy')}
          </span>
          <span className="label-caps text-muted" style={{ fontSize: '9px' }}>{article.readTime}</span>
        </div>

        <h1
          id={`article-title-${article.id}`}
          className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          {article.title}
        </h1>

        <p
          id={`article-desc-${article.id}`}
          className="font-serif text-xl text-muted font-light italic mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {article.excerpt}
        </p>

        <div className="w-8 h-px bg-gold mb-10" />

        {/* Article body */}
        <div className="space-y-6">
          {content.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="text-ink text-base font-light leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.9' }}
            >
              {para}
            </p>
          ))}
        </div>

        <div className="w-8 h-px bg-gold mt-12" />
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 border-t border-cream-dark">
          <h2
            className="font-serif text-3xl text-ink font-light mb-10 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            More from the Journal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map(rel => (
              <Link key={rel.id} to={`/journal/${rel.slug}`} className="group block">
                <div className="overflow-hidden bg-cream-dark aspect-[4/3] mb-4">
                  <img
                    data-strk-img-id={`related-${rel.imgId}`}
                    data-strk-img={`[related-${rel.id}-desc] [related-${rel.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rel.title}
                    className="w-full h-full object-cover img-hover"
                  />
                </div>
                <p className="label-caps text-gold mb-2" style={{ fontSize: '9px' }}>{rel.category}</p>
                <h3
                  id={`related-${rel.id}-title`}
                  className="font-serif text-2xl text-ink font-light group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {rel.title}
                </h3>
                <p id={`related-${rel.id}-desc`} className="sr-only">{rel.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
