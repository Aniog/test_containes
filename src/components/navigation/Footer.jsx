import { Microscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-cosmos-deeper border-t border-cosmos-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Microscope className="w-5 h-5 text-cosmos-cyan" />
            <span className="text-lg font-bold text-cosmos-text">MicroCosmos</span>
          </div>
          <p className="text-cosmos-muted text-sm text-center">
            Revealing the hidden beauty of the microscopic world through advanced imaging.
          </p>
          <p className="text-cosmos-muted text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
