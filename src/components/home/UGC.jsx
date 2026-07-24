import { Instagram } from "lucide-react";

export function UGC() {
  const posts = [
    {
      id: "ugc-1",
      caption: "Layered to perfection with the Amber Lace.",
      imgId: "ugc-img-1"
    },
    {
      id: "ugc-2",
      caption: "Everyday gold essentials.",
      imgId: "ugc-img-2"
    },
    {
      id: "ugc-3",
      caption: "The Heirloom set catching the afternoon light.",
      imgId: "ugc-img-3"
    },
    {
      id: "ugc-4",
      caption: "Sunday coffee run details.",
      imgId: "ugc-img-4"
    },
    {
      id: "ugc-5",
      caption: "Mixing textures for a bold look.",
      imgId: "ugc-img-5"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl mb-3 text-foreground">As Seen On You</h2>
        <a href="#" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:text-primary transition-colors text-muted-foreground">
          <Instagram size={16} />
          @velmorajewelry
        </a>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto pb-8 gap-4 px-4 snap-x snap-mandatory hide-scrollbar sm:justify-center">
        {posts.map((post) => (
          <div key={post.id} className="relative flex-none w-[280px] sm:w-[320px] aspect-[9/16] snap-center group overflow-hidden bg-secondary">
            <img
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={`[ugc-caption-${post.id}] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="User generated content"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 text-[10px]"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <Instagram className="text-white mb-3" size={20} />
              <p id={`ugc-caption-${post.id}`} className="text-white font-serif text-lg leading-snug drop-shadow-sm">
                "{post.caption}"
              </p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <span className="text-white text-xs tracking-widest uppercase font-sans">Shop The Look</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
