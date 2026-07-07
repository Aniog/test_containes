import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-5xl font-light uppercase tracking-[0.1em] text-[#1A1614]">
        404
      </h1>
      <p className="mt-4 text-[#6B625B]">
        This page could not be found.
      </p>
      <Link
        to="/"
        className="mt-8 bg-[#B9975B] px-8 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white hover:bg-[#A8864D]"
      >
        Return Home
      </Link>
    </div>
  )
}
