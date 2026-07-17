const Footer = () => {
  return (
    <footer className="py-12 bg-surface border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-2">MicroCosmos</h3>
        <p className="text-text-secondary text-sm mb-6">
          Exploring the invisible universe that surrounds us all.
        </p>
        <div className="flex justify-center gap-8 text-text-secondary text-sm">
          <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
          <a href="#" className="hover:text-accent transition-colors">About</a>
          <a href="#" className="hover:text-accent transition-colors">Research</a>
          <a href="#" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <p className="text-text-secondary/50 text-xs mt-8">
          © 2026 MicroCosmos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
