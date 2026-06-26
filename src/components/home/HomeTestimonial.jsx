import { Quote } from "lucide-react"

const HomeTestimonial = () => {
  return (
    <section className="bg-steel text-bone">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <Quote className="w-10 h-10 text-accent mx-auto" />
        <blockquote className="mt-8 font-serif font-light text-2xl md:text-4xl leading-snug text-bone">
          “We replaced two press brakes with a single Artitect DF-4000. Our
          panel quality went up, scrap went down, and the workshop is calmer.
          It just <span className="italic text-accent">folds</span>.”
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-accent" />
          <div className="text-left">
            <p className="font-serif text-lg">Henrik Vasseur</p>
            <p className="text-xs uppercase tracking-[0.25em] text-bone/60">
              Production Director · Vasseur Metalwerk
            </p>
          </div>
          <span className="h-px w-10 bg-accent" />
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial
