import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Thank You!
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Your inquiry has been received. Our team will review your requirements and 
                get back to you within 24 hours with a personalized sourcing plan.
              </p>
              <Link to="/">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Tell us about your product requirements. We will respond within 24 hours with a 
              tailored sourcing plan and a transparent quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                    Product Description *
                  </label>
                  <textarea
                    id="product"
                    name="product"
                    required
                    rows={3}
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Describe the product you want to source. Include details like materials, dimensions, colors, etc."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g. 1,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Target Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g. $5,000 - $10,000"
                    />
                  </div>
                  <div>
                    <label htmlFor="target-date" className="block text-sm font-medium text-foreground mb-2">
                      Target Timeline
                    </label>
                    <input
                      type="text"
                      id="target-date"
                      name="target-date"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g. 3 months"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Any specific requirements, certifications needed, target markets, or other details..."
                  />
                </div>

                <Button type="submit" size="lg" className="font-semibold px-8 py-6 text-base">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Office Address</p>
                      <p className="text-sm text-muted-foreground">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-primary hover:underline">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:+861234567890" className="text-sm text-primary hover:underline">
                        +86 123 4567 890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Messaging</p>
                      <p className="text-sm text-muted-foreground">WhatsApp / WeChat available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {[
                      'We review your requirements within 24 hours',
                      'We research and identify potential suppliers',
                      'We prepare a customized sourcing plan',
                      'We provide a transparent quote with no hidden fees',
                      'You decide whether to proceed, no pressure',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}