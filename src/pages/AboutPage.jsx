import { aboutValues } from "@/data/store"
import StockImage from "@/components/shared/StockImage"

const AboutPage = () => {
  return (
    <section className="bg-ivory pb-20 pt-8 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-champagne px-6 py-14 text-velvet shadow-soft sm:px-10 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">About Velmora</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-velvet sm:text-5xl lg:text-6xl">
              Jewelry designed to feel quietly special from the first moment you put it on
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-velvet/76">
              We created Velmora for women who want gold jewelry that feels refined, thoughtful, and easy to wear every day. The brand sits between fashion and fine jewelry, offering elevated finishes without the intimidating price point.
            </p>
            <div className="mt-10 space-y-5">
              {aboutValues.map((value) => (
                <div
                  key={value}
                  className="rounded-full border border-velvet/10 bg-porcelain px-5 py-4 text-sm text-velvet shadow-soft"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-truffle shadow-card lg:mt-0">
            <StockImage
              imageId="about-page-editorial-34f0a"
              query="[about-page-detail] [about-page-title]"
              ratio="3x4"
              width="1200"
              alt="Editorial Velmora jewelry styling"
              className="aspect-[4/5] w-full object-cover"
            />
            <p id="about-page-title" className="sr-only">
              Jewelry designed to feel quietly special
            </p>
            <p id="about-page-detail" className="sr-only">
              warm editorial gold jewelry styling on model
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
