import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F6F3EF] px-4 pt-24 text-center text-[#1A1512]">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">404</p>
        <h1 className="font-serif text-4xl md:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-[#6B6259]">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-[#C49A6C] px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#A67C52]"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
