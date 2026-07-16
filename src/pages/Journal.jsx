import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces Without Tangling",
    excerpt: "A simple guide to creating dimension with mixed lengths and textures.",
    date: "JUNE 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
  },
  {
    id: 2,
    title: "The Jewelry That Travels With Me",
    excerpt: "Our founder shares the three pieces she never packs without.",
    date: "MAY 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
  },
  {
    id: 3,
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces looking new for years.",
    date: "APRIL 2026",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
  }
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />
      
      <div className="pt-20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[3px] text-[#B89778]">FROM THE ATELIER</span>
            <h1 className="font-serif text-4xl tracking-[1px] mt-2">Journal</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="aspect-[16/10] bg-[#E5DFD6] overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <p className="text-xs tracking-[2px] text-[#B89778] mb-2">{post.date}</p>
                <h3 className="font-serif text-xl tracking-[0.5px] mb-2 leading-tight">{post.title}</h3>
                <p className="text-sm text-[#6B6259]">{post.excerpt}</p>
                <span className="inline-block mt-3 text-xs tracking-[1.5px] text-[#B89778] group-hover:underline">READ MORE →</span>
              </article>
            ))}
          </div>

          <div className="text-center mt-16 text-sm text-[#9A8F82]">
            More stories coming soon.
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
