const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const reels = [
  { id: "reel-1", caption: "Sunset stacks", user: "@lena.m", imgId: "ugc-reel-1" },
  { id: "reel-2", caption: "Office to dinner", user: "@sophie.r", imgId: "ugc-reel-2" },
  { id: "reel-3", caption: "Gifted myself", user: "@amina.k", imgId: "ugc-reel-3" },
  { id: "reel-4", caption: "Wedding guest ready", user: "@taylor.j", imgId: "ugc-reel-4" },
  { id: "reel-5", caption: "Minimal but make it luxe", user: "@maria.v", imgId: "ugc-reel-5" },
  { id: "reel-6", caption: "New everyday hoops", user: "@nina.b", imgId: "ugc-reel-6" },
];

const UGCReel = () => (
  <section className="bg-[#fbfaf9] py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-700">
        @velmorajewelry
      </p>
      <h2 className="mt-2 font-serif text-3xl font-light text-stone-900 md:text-4xl">
        Styled by You
      </h2>
    </div>

    <div className="mt-10 flex gap-4 overflow-x-auto px-5 pb-4 md:px-8 scrollbar-hide">
      {reels.map((reel) => (
        <div
          key={reel.id}
          className="relative w-[260px] flex-shrink-0 overflow-hidden bg-stone-200 md:w-[300px]"
          style={{ aspectRatio: "9/16" }}
        >
          <img
            alt={reel.caption}
            src={PLACEHOLDER}
            data-strk-img-id={reel.imgId}
            data-strk-img={`[${reel.id}-caption] [${reel.id}-user] velmora fine jewelry worn ear neck`}
            data-strk-img-ratio="9x16"
            data-strk-img-width="500"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <p
              id={`${reel.id}-caption`}
              className="font-serif text-xl font-light leading-tight"
            >
              {reel.caption}
            </p>
            <p id={`${reel.id}-user`} className="mt-1 text-xs opacity-80">
              {reel.user}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UGCReel;
