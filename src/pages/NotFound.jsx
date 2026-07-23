import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="bg-ink text-bone min-h-[80vh] flex items-center pt-24">
      <div className="mx-auto max-w-editorial px-6 md:px-10 w-full py-20 text-center">
        <p className="text-[11px] tracking-widest3 uppercase text-bone/60">
          404
        </p>
        <h1 className="mt-4 font-serif text-[56px] md:text-[88px] leading-[1.05] text-bone">
          Not here.
        </h1>
        <p className="mt-4 text-[15px] text-bone/70 max-w-md mx-auto">
          The piece you're looking for has moved — or perhaps never existed
          in quite this way.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center h-12 px-7 bg-bone text-ink text-[12px] tracking-widest2 uppercase hover:bg-gold transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
