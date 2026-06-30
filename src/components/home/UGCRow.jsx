import React from "react";

const ugcItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&auto=format&fit=crop",
    caption: "My everyday gold",
    handle: "@emma_r",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format&fit=crop",
    caption: "Floral nectar IRL",
    handle: "@sophie.k",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&auto=format&fit=crop",
    caption: "Huggies never coming off",
    handle: "@olivia_m",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&auto=format&fit=crop",
    caption: "Gift set = winning",
    handle: "@jordan_l",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1629224316810-9d8800a5f9b4?w=400&auto=format&fit=crop",
    caption: "Amber dreams",
    handle: "@lily.c",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&auto=format&fit=crop",
    caption: "My new ear stack",
    handle: "@ava_r",
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20">
      <div className="mb-10 px-6 text-center md:px-12 lg:px-16">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
          As Seen On You
        </p>
        <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
          Worn by Our Community
        </h2>
        <div className="mx-auto mt-4 h-[1px] w-12 bg-primary/50" />
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4 md:px-12 lg:px-16">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[9/16] h-[400px] flex-shrink-0 overflow-hidden group md:h-[480px]"
            >
              <img
                src={item.image}
                alt={`Styled by ${item.handle}`}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif text-lg font-light italic leading-tight text-white">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="mt-1.5 font-sans text-xs text-white/60">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}