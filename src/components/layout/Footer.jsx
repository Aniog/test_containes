import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#131A24] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#D4AF37] font-extrabold text-xl tracking-tight">ARTITECT</span>
              <span className="text-[#F1F5F9] font-medium text-xl tracking-tight">MACHINERY</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Precision folding machines for sheet-metal fabrication. Engineered for accuracy, built for production.
            </p>
          </div>

          <div>
            <h4 className="text-[#F1F5F9] font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folder Machine',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F1F5F9] font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                sales@artitectmachinery.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                Industrial Park, Detroit, MI
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1E293B] text-center text-xs text-[#64748B]">
          &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
