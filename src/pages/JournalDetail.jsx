import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const journalPosts = [
  {
    id: 1,
    title: 'How to Style Gold Jewelry for Every Season',
    excerpt: 'From summer linen to winter wool, discover how to layer and style your favorite pieces year-round.',
    date: 'June 12, 2026',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    readTime: '6 min',
    content: [
      'Gold jewelry is one of the most versatile accessories in any wardrobe. Its warm tones complement nearly every color palette, making it a year-round essential.',
      'In summer, pair delicate gold chains with linen dresses and lightweight fabrics. The contrast between the cool texture of linen and the warmth of gold creates an effortlessly chic look.',
      'As temperatures drop, layer multiple pieces — a statement necklace over a turtleneck, or stack huggies with longer drops. Gold adds richness to heavier winter textures like wool and cashmere.',
      'The key is balance. Let one piece shine while others support. A bold floral necklace deserves simple studs; a pair of textured earrings can carry an entire look.',
    ],
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'A guide to choosing meaningful pieces for the women in your life — and for yourself.',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80',
    readTime: '8 min',
    content: [
      'Jewelry is one of the most personal gifts you can give. It becomes part of someone\'s daily ritual — a quiet reminder of love, celebration, or self.',
      'When choosing a gift, consider the recipient\'s style. Do they prefer bold statements or subtle everyday pieces? Are they drawn to warm gold or cooler tones?',
      'Sets make beautiful gifts because they feel complete. The Royal Heirloom Set, for example, offers both earrings and a necklace in one elegant box.',
      'Don\'t forget the presentation. Our complimentary gift wrapping and handwritten notes turn a beautiful piece into a truly memorable moment.',
    ],
  },
  {
    id: 3,
    title: 'Behind the Design: The Amber Lace Earrings',
    excerpt: 'The story of how antique lace and modern minimalism came together in one of our signature pieces.',
    date: 'May 3, 2026',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
    readTime: '5 min',
    content: [
      'The Amber Lace Earrings began with a piece of vintage lace discovered in a Paris flea market. The intricate pattern, delicate yet structured, became the blueprint for our signature filigree design.',
      'We spent months refining the texture — not too ornate, not too plain. The final piece captures the romance of antique lace while remaining wearable every day.',
      'Each pair is plated in 18K gold over solid brass, with a matte finish that catches light softly rather than reflecting it harshly.',
      'These earrings are for the woman who appreciates detail without needing to announce it.',
    ],
  },
  {
    id: 4,
    title: 'Caring for Your Gold Jewelry',
    excerpt: 'Simple rituals to keep your pieces looking as beautiful as the day you received them.',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
    readTime: '4 min',
    content: [
      'With proper care, your Velmora pieces will remain beautiful for years. Here are our recommended practices:',
      'Store each piece separately in a soft pouch or jewelry box to prevent scratching. Avoid exposure to perfumes, lotions, and harsh chemicals.',
      'Clean gently with a soft cloth after wearing. For deeper cleaning, use mild soap and warm water — never harsh cleaners or ultrasonic machines.',
      'Remove jewelry before swimming, showering, or exercising. Even though our pieces are hypoallergenic and durable, they last longest when treated with care.',
    ],
  },
];

const JournalDetail = () => {
  const { id } = useParams();
  const post = journalPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F8F5F1]">
        <Navbar />
        <div className="container pt-32 pb-20 text-center">
          <h1 className="mb-4">Story Not Found</h1>
          <p className="text-[#6B635C] mb-8">The story you're looking for doesn't exist.</p>
          <Link to="/journal" className="btn btn-primary">Back to Journal</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      <article className="pt-20">
        <div className="container max-w-3xl">
          <div className="pt-8 pb-12">
            <Link to="/journal" className="text-sm tracking-[0.1em] uppercase text-[#B8976A] hover:underline">
              ← Back to Journal
            </Link>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[#9A9085] mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl tracking-[0.02em] mb-6">{post.title}</h1>
            <p className="text-xl text-[#6B635C]">{post.excerpt}</p>
          </div>
        </div>

        <div className="aspect-[16/9] w-full overflow-hidden bg-[#1A1816]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container max-w-3xl py-12">
          <div className="prose prose-lg max-w-none text-[#3F3A35]">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5DFD6]">
            <p className="text-sm text-[#6B635C]">
              Thank you for reading. Explore more stories in our <Link to="/journal" className="text-[#B8976A]">Journal</Link>.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default JournalDetail;