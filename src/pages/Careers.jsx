export default function Careers() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Company</p>
        <h1 className="mb-10 font-serif text-4xl text-foreground sm:text-5xl">
          Careers
        </h1>

        <p className="mb-10 leading-relaxed text-muted-foreground">
          Velmora is a small, passionate team dedicated to making beautiful jewelry accessible. We are
          always looking for thoughtful creatives, makers, and operators to join us.
        </p>

        <div className="space-y-6">
          <div className="rounded-sm border border-border bg-card p-6">
            <h2 className="mb-2 font-serif text-xl text-foreground">No Open Roles Right Now</h2>
            <p className="text-muted-foreground">
              We do not have any open positions at the moment. Check back soon or send your portfolio to
              careers@velmora.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
