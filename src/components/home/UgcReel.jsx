import { mockUgcPosts } from '@/data/products';

export default function UgcReel() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">Worn by You</h2>
          <div className="w-10 h-px bg-gold mx-auto mb-4" />
          <p className="text-taupe text-sm md:text-base max-w-md mx-auto">
            See how our community styles Velmora. Tag <span className="text-gold font-medium">@velmorajewelry</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-4 md:gap-5 overflow-x-auto hide-scrollbar px-6 md:px-12 pb-4">
        {mockUgcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[160px] md:w-[220px] aspect-[9/16] relative group overflow-hidden"
          >
            <img
              alt=""
              data-strk-img-id={post.imgId}
              data-strk-img={`[${post.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="440"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-espresso/70 to-transparent">
              <p className="text-warmwhite text-xs md:text-sm font-serif italic leading-snug">
                {post.caption}
              </p>
            </div>
            <span className="sr-only" id={post.titleId}>gold jewelry {post.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
