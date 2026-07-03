import { StockImage } from "@/components/StockImage"

export default function About() {
  return (
    <div className="min-h-screen bg-paper pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-wide text-champagne">
            About Velmora
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-ink md:text-6xl">
            Crafted with Intention
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-taupe">
            Velmora is a demi-fine jewelry studio creating timeless pieces for modern women.
            We believe in quiet luxury — jewelry that feels special without shouting, designed
            to be lived in and loved for years.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Small Batch",
              body: "Every collection is produced in limited quantities, ensuring quality and reducing waste.",
            },
            {
              title: "Premium Materials",
              body: "We use thick 18K gold plating, sterling silver, and surgical steel posts for pieces that last.",
            },
            {
              title: "Thoughtfully Packaged",
              body: "Each order arrives in a velvet-lined box made for gifting — or keeping for yourself.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-divider bg-white p-8 text-center">
              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 aspect-[16/7] overflow-hidden bg-sand">
          <StockImage
            id="about-editorial"
            query="[about-headline]"
            ratio="16x9"
            width={1400}
            alt="Velmora studio"
            asBackground
            className="absolute inset-0 h-full w-full"
          >
            <div className="absolute inset-0 bg-ink/30" />
            <div className="relative flex h-full items-center justify-center">
              <h2 id="about-headline" className="font-serif text-3xl text-white md:text-5xl">
                Designed to be Treasured
              </h2>
            </div>
          </StockImage>
        </div>
      </div>
    </div>
  )
}
