const NewsletterForm = () => {
  return (
    <form className="grid gap-3 md:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className="h-12 rounded-full border border-stone-300 bg-stone-50 px-5 text-sm text-stone-900 outline-none transition focus:border-amber-700"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="h-12 rounded-full bg-stone-900 px-6 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
      >
        Subscribe
      </button>
    </form>
  )
}

export default NewsletterForm
