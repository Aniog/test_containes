export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight">
                ARTITECT
              </span>
              <span className="text-sm font-semibold tracking-widest text-[#c69c3f]">
                MACHINERY
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Precision folding machines for sheet metal and metalworking
              professionals worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folder Machine',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="transition-colors hover:text-[#c69c3f]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="transition-colors hover:text-[#c69c3f]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-[#c69c3f]">
                  Why ARTITECT
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#c69c3f]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#c69c3f]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>sales@artitectmachinery.com</li>
              <li>1200 Industrial Parkway</li>
              <li>Detroit, MI 48207</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {currentYear} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-[#c69c3f]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#c69c3f]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
