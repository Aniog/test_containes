import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JournalArticle = () => {
  const { id } = useParams();

  const articles = {
    'how-to-layer': {
      title: 'How to Layer Necklaces Like a Stylist',
      date: 'July 2026',
      readTime: '6 min',
      category: 'Styling',
      content: [
        "Layering necklaces is an art form that transforms simple pieces into a personal signature. The key is balance — mixing lengths, textures, and weights so that each piece has room to breathe.",
        "Start with your longest chain as the foundation. This creates visual structure. Then add a shorter pendant or choker that sits at a different level. The space between chains matters as much as the chains themselves.",
        "When mixing metals, choose one dominant tone and let the other act as an accent. A warm gold chain with a single silver pendant creates quiet contrast without competing.",
        "Our recommendation: begin with three pieces. A delicate chain, a statement pendant, and one with texture or movement. Adjust until it feels like you.",
      ],
    },
    'gold-care': {
      title: 'Caring for Your Gold Jewelry',
      date: 'June 2026',
      readTime: '4 min',
      category: 'Care',
      content: [
        "Your Velmora pieces are designed to be worn often, but a few simple habits will keep them looking new for years.",
        "Remove jewelry before applying perfume, lotion, or hair products. These can dull the finish over time. Similarly, take pieces off before swimming or showering.",
        "Store each piece in its velvet pouch or a soft-lined compartment. This prevents scratching and tangling.",
        "Clean gently with a soft, dry cloth. For deeper cleaning, use warm water and mild soap, then dry thoroughly. Avoid harsh chemicals and ultrasonic cleaners.",
      ],
    },
    'gifting-guide': {
      title: 'The Thoughtful Gifting Guide',
      date: 'May 2026',
      readTime: '7 min',
      category: 'Gifting',
      content: [
        "Choosing jewelry as a gift is deeply personal. The right piece says: I see you, I thought of you, this is for you.",
        "Consider her everyday style. Does she wear delicate pieces or bold statements? Does she layer or prefer single pieces? The best gifts feel like an extension of who she already is.",
        "The Royal Heirloom Set makes an unforgettable gift — two pieces that can be worn together or separately. It's generous without being overwhelming.",
        "Include a handwritten note. Jewelry is often kept for decades; the story of why it was given becomes part of its value.",
      ],
    },
    'behind-the-studio': {
      title: 'A Day in the Studio',
      date: 'April 2026',
      readTime: '5 min',
      category: 'Behind the Scenes',
      content: [
        "Our days begin with sketches and coffee. Ideas are pinned to the wall, discussed, refined. Nothing moves forward until it feels inevitable.",
        "Prototypes are made by hand. We try them on, walk around, see how they catch light at different angles. If it doesn't feel right on the body, we start again.",
        "Once a design is approved, small batches are produced. Each piece is hand-finished — edges smoothed, plating inspected, stones set.",
        "Before anything ships, it passes through three sets of hands. We want every customer to open their package and feel the care that went into it.",
      ],
    },
  };

  const article = articles[id] || {
    title: 'Coming Soon',
    date: '2026',
    readTime: '—',
    category: 'Journal',
    content: ['This story is being written. Check back soon.'],
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <Link to="/journal" className="text-xs uppercase tracking-[0.1em] hover:text-velmora-gold mb-8 inline-block">
          ← Back to Journal
        </Link>

        <div className="mb-8">
          <div className="uppercase tracking-[0.15em] text-xs text-velmora-gold mb-2">{article.category}</div>
          <h1 className="text-3xl md:text-4xl mb-3">{article.title}</h1>
          <div className="text-sm text-velmora-text-muted">
            {article.date} · {article.readTime} read
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-velmora-text-muted">
          {article.content.map((para, i) => (
            <p key={i} className="mb-6 leading-relaxed">{para}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-velmora-border">
          <Link to="/shop" className="btn btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JournalArticle;
