import { useStrkImages } from '@/lib/useStrkImages'

export default function AboutPage() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-stone-50">
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
              About Velmora
            </p>
            <h1 className="font-serif text-5xl leading-none text-stone-950 md:text-6xl">
              Quiet luxury, designed for daily wear
            </h1>
            <p className="max-w-xl text-base leading-7 text-stone-600">
              Velmora Fine Jewelry was imagined for women who want jewelry that
              feels elevated, wearable, and gift-worthy without crossing into
              unreachable luxury. Each piece is selected to flatter, layer, and
              last beautifully in rotation.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Premium Feel', 'Warm gold finishes and softly sculpted forms.'],
                ['Accessible Luxury', 'Demi-fine prices ranging from $30 to $120.'],
                ['Gift-Ready', 'Elegant packaging for every order.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-stone-200 bg-stone-100 p-5">
                  <h2 className="font-serif text-2xl text-stone-950">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-stone-100">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora behind the scenes"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="about-page-image"
              data-strk-img="[about-page-body] [about-page-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
            />
          </div>
        </div>
        <div className="sr-only">
          <h2 id="about-page-title">Velmora story</h2>
          <p id="about-page-body">
            Women wearing refined gold jewelry in a warm editorial studio setting.
          </p>
        </div>
      </section>
    </div>
  )
}
