const FooterSection = () => {
  return (
    <footer className="py-16 px-4 md:px-8 border-t border-cosmos-border">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-cosmos-text mb-4">
          MicroCosmos
        </h2>
        <p className="text-cosmos-muted text-sm md:text-base max-w-lg mx-auto mb-8">
          Dedicated to revealing the extraordinary beauty of the microscopic world. Every drop of water holds a universe waiting to be discovered.
        </p>
        <div className="flex items-center justify-center gap-8 text-cosmos-muted text-sm">
          <a href="#about" className="hover:text-cosmos-cyan transition-colors">About</a>
          <a href="#gallery" className="hover:text-cosmos-cyan transition-colors">Gallery</a>
          <a href="#organisms" className="hover:text-cosmos-cyan transition-colors">Organisms</a>
        </div>
        <p className="mt-8 text-cosmos-muted/60 text-xs">
          © 2026 MicroCosmos. All imagery for educational purposes.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
