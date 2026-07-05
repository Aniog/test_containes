import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page pt-40 pb-32 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
        We couldn't find{' '}
        <span className="italic font-light text-espresso-soft">that page</span>
      </h1>
      <p className="mt-4 text-sm md:text-base text-taupe max-w-md mx-auto">
        It may have been moved, or perhaps the link is mistyped.
      </p>
      <Link to="/" className="btn-outline mt-8 inline-flex">
        Return home
      </Link>
    </div>
  )
}
