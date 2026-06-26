import { Hammer } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Hammer className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">ARTITECT MACHINERY</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Precision engineering for superior sheet metal folding. Elegant solutions for modern machinery needs.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Double Folding Machines</li>
              <li>Sheet Metal Folders</li>
              <li>Industrial Equipment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
