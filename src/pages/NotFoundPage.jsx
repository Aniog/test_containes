import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="section-shell flex min-h-[60vh] items-center py-16 sm:py-20">
      <div className="max-w-2xl rounded-[2rem] border border-line bg-pearl p-8 shadow-float sm:p-12">
        <p className="section-kicker">Not found</p>
        <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">This piece has slipped away.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          The page you’re looking for is no longer here, but the full Velmora collection is ready to browse.
        </p>
        <Link to="/shop" className="button-primary mt-8">
          Return to shop
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
