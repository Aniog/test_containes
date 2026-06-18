export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Apple Watch Series 9', 'Apple Watch Ultra 2', 'Apple Watch SE', 'Accessories'].map((item) => (
                <li key={item}><a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Features</h4>
            <ul className="space-y-2">
              {['Health', 'Fitness', 'Safety', 'Connectivity'].map((item) => (
                <li key={item}><a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2">
              {['Get Help', 'Apple Care+', 'Repair', 'Contact Us'].map((item) => (
                <li key={item}><a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">About</h4>
            <ul className="space-y-2">
              {['Newsroom', 'Investors', 'Privacy', 'Legal'].map((item) => (
                <li key={item}><a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © 2024 Apple Inc. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs text-center md:text-right max-w-md">
            Apple Watch is not a medical device. Consult a physician for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
