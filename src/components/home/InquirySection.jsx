import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function InquirySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Start Sourcing?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Tell us about your product requirements and we will get back to you within 24 hours with a tailored sourcing plan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto font-semibold px-8 py-6 text-base">
              Get a Free Sourcing Quote
            </Button>
          </Link>
          <a href="mailto:info@ssourcingchina.com">
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold px-8 py-6 text-base">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+86 123 4567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>WhatsApp / WeChat available</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>info@ssourcingchina.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}